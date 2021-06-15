import { renderHook } from "@testing-library/react-hooks";
import ReactRouterDom from "react-router-dom";

import { act, TestWrapper } from "@test";

import { useCheckError } from "./";

const mHistory = {
    push: jest.fn(),
    replace: jest.fn(),
    goBack: jest.fn(),
};

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") as typeof ReactRouterDom),
    useHistory: jest.fn(() => mHistory),
}));

describe("useCheckError Hook", () => {
    it("logout and redirect to login if check error rejected", async () => {
        const logoutMock = jest.fn();

        const { result } = renderHook(() => useCheckError(), {
            wrapper: TestWrapper({
                authProvider: {
                    isProvided: true,
                    login: () => Promise.resolve(),
                    checkAuth: () => Promise.resolve(),
                    checkError: () => Promise.reject(),
                    getPermissions: () => Promise.resolve(),
                    logout: logoutMock,
                    getUserIdentity: () => Promise.resolve(),
                },
            }),
        });

        await act(async () => {
            await result.current!();
            expect(logoutMock).toBeCalledTimes(1);
            expect(mHistory.push).toBeCalledWith("/login");
        });
    });

    it("logout and redirect to custom path if check error rejected", async () => {
        const logoutMock = jest.fn();

        const { result } = renderHook(() => useCheckError(), {
            wrapper: TestWrapper({
                authProvider: {
                    isProvided: true,
                    login: () => Promise.resolve(),
                    checkAuth: () => Promise.resolve(),
                    checkError: () => Promise.reject("/customPath"),
                    getPermissions: () => Promise.resolve(),
                    logout: logoutMock,
                    getUserIdentity: () => Promise.resolve(),
                },
            }),
        });

        await act(async () => {
            await result.current!();
            expect(logoutMock).toBeCalledTimes(1);
            expect(mHistory.push).toBeCalledWith("/customPath");
        });
    });

    it("should return null if isProvided from AdminContext is false", () => {
        const { result } = renderHook(() => useCheckError(), {
            wrapper: TestWrapper({
                authProvider: {
                    login: () => Promise.resolve(),
                    checkAuth: () => Promise.resolve(),
                    checkError: () => Promise.resolve(),
                    getPermissions: () => Promise.resolve(),
                    logout: () => Promise.resolve(),
                    getUserIdentity: () => Promise.resolve(),
                    isProvided: false,
                },
            }),
        });

        expect(result.current).toBeNull();
    });

    it("shouldn't return null if isProvided from AdminContext is true", () => {
        const { result } = renderHook(() => useCheckError(), {
            wrapper: TestWrapper({
                authProvider: {
                    login: () => Promise.resolve(),
                    checkAuth: () => Promise.resolve(),
                    checkError: () => Promise.resolve(),
                    getPermissions: () => Promise.resolve(),
                    logout: () => Promise.resolve(),
                    getUserIdentity: () => Promise.resolve(),
                    isProvided: true,
                },
            }),
        });

        expect(result.current).not.toBeNull();
    });
});
