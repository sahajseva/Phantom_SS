import { AuthProvider } from "@pankod/refine-core";
import nookies from "nookies";

const mockUsers = [
    {
        email: "admin@refine.dev",
        roles: ["admin"],
    },
    {
        email: "editor@refine.dev",
        roles: ["editor"],
    },
];

export const authProvider: AuthProvider = {
    login: ({ email, password, remember }) => {
        // Suppose we actually send a request to the back end here.
        const user = mockUsers.find((item) => item.email === email);

        if (user) {
            nookies.set(null, "auth", JSON.stringify(user), {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            });
            return Promise.resolve();
        }

        return Promise.reject();
    },
    logout: () => {
        nookies.destroy(null, "auth");
        return Promise.resolve();
    },
    checkError: (error) => {
        if (error && error.statusCode === 401) {
            return Promise.reject();
        }

        return Promise.resolve();
    },
    checkAuth: (ctx) => {
        const cookies = nookies.get(ctx);
        return cookies["auth"] ? Promise.resolve() : Promise.reject();
    },
    getPermissions: () => {
        const auth = nookies.get()["auth"];
        if (auth) {
            const parsedUser = JSON.parse(auth);
            return Promise.resolve(parsedUser.roles);
        }
        return Promise.reject();
    },
    getUserIdentity: () => {
        const auth = nookies.get()["auth"];
        if (auth) {
            const parsedUser = JSON.parse(auth);
            return Promise.resolve(parsedUser.username);
        }
        return Promise.reject();
    },
};
