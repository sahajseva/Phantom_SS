import React from "react";
import { render, TestWrapper } from "@test";
import { ThemedHeaderV2 } from "./index";
import { AuthBindings, LegacyAuthProvider } from "@refinedev/core";

const mockLegacyAuthProvider: LegacyAuthProvider = {
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    checkError: () => Promise.resolve(),
    checkAuth: () => Promise.resolve(),
    getPermissions: () => Promise.resolve(["admin"]),
    getUserIdentity: () =>
        Promise.resolve({ name: "John Doe", avatar: "localhost:3000" }),
};

const mockAuthProvider: AuthBindings = {
    login: () =>
        Promise.resolve({
            success: true,
        }),
    logout: () =>
        Promise.resolve({
            success: true,
        }),
    onError: () => Promise.resolve({}),
    check: () =>
        Promise.resolve({
            authenticated: true,
        }),
    getIdentity: () =>
        Promise.resolve({ name: "John Doe", avatar: "localhost:3000" }),
};

describe("ThemedHeaderV2", () => {
    it("should render successfull user name and avatar fallback in header", async () => {
        const { findByText, getByTitle } = render(<ThemedHeaderV2 />, {
            wrapper: TestWrapper({
                authProvider: mockAuthProvider,
            }),
        });

        await findByText("John Doe");
        getByTitle("John Doe");
    });
});

// NOTE: Will be removed in the refine v5
describe("ThemedHeaderV2 with legacyAuthProvider", () => {
    it("should render successfull user name and avatar fallback in header", async () => {
        const { findByText, getByTitle } = render(<ThemedHeaderV2 />, {
            wrapper: TestWrapper({
                legacyAuthProvider: mockLegacyAuthProvider,
            }),
        });

        await findByText("John Doe");
        getByTitle("John Doe");
    });
});
