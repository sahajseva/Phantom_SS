import { renderHook } from "@testing-library/react-hooks";
import ReactRouterDom from "react-router-dom";

import { act, MockJSONServer, TestWrapper } from "@test";

import { useLogout } from "./";

const mHistory = {
    push: jest.fn(),
    replace: jest.fn(),
    goBack: jest.fn(),
};

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") as typeof ReactRouterDom),
    useHistory: jest.fn(() => mHistory),
}));

describe("usePermissions Hook", () => {
    it("logout and redirect to login", async () => {
        const logoutMock = jest.fn();

        const { result } = renderHook(() => useLogout(), {
            wrapper: TestWrapper({
                authProvider: {
                    login: () => Promise.resolve(),
                    checkAuth: () => Promise.resolve(),
                    checkError: () => Promise.resolve(),
                    getPermissions: () => Promise.resolve(),
                    logout: logoutMock,
                    getUserIdentity: () => Promise.resolve(),
                },
            }),
        });

        await act(async () => {
            const logout = await result.current();
            expect(logoutMock).toBeCalledTimes(1);
        });
    });

    it("logout and redirect to custom path", async () => {
        const logoutMock = jest.fn();

        const { result } = renderHook(() => useLogout(), {
            wrapper: TestWrapper({
                authProvider: {
                    login: () => Promise.resolve(),
                    checkAuth: () => Promise.resolve(),
                    checkError: () => Promise.resolve(),
                    getPermissions: () => Promise.resolve(),
                    logout: logoutMock,
                    getUserIdentity: () => Promise.resolve(),
                },
            }),
        });

        await act(async () => {
            await result.current("/test");
            expect(logoutMock).toBeCalledTimes(1);
            expect(mHistory.push).toBeCalledWith("/test");
        });
    });

    it("logout rejected", async () => {
        const { result } = renderHook(() => useLogout(), {
            wrapper: TestWrapper({
                authProvider: {
                    login: () => Promise.resolve(),
                    checkAuth: () => Promise.resolve(),
                    checkError: () => Promise.resolve(),
                    getPermissions: () => Promise.resolve(),
                    logout: () => Promise.reject(new Error("Logout rejected")),
                    getUserIdentity: () => Promise.resolve(),
                },
            }),
        });

        await act(async () => {
            try {
                await result.current();
            } catch (error) {
                expect(error).toEqual(new Error("Logout rejected"));
            }
        });
    });
});
