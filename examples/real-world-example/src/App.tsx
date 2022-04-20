import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";
import axios, { AxiosRequestConfig } from "axios";

import { authProvider } from "./authProvider";
import { dataProvider } from "./dataProvider";

import { Layout } from "components";
import { LoginPage, RegisterPage } from "./pages/auth";
import { HomePage } from "pages/home";
import { ProfilePage } from "pages/profile";
import { SettingsPage } from "pages/settings";
import { EditorPage } from "pages/editor";
import { ArticlePage } from "pages/article";

import { TOKEN_KEY } from "./constants";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (request.headers) {
        request.headers["Authorization"] = `Bearer ${token}`;
    } else {
        request.headers = {
            Authorization: `Bearer ${token}`,
        };
    }

    return request;
});

function App() {
    return (
        <Refine
            routerProvider={{
                ...routerProvider,
                routes: [
                    {
                        element: <LoginPage />,
                        path: "/login",
                        layout: true,
                    },
                    {
                        element: <RegisterPage />,
                        path: "/register",
                        layout: true,
                    },
                    {
                        element: <ArticlePage />,
                        path: "/article/:slug",
                        layout: true,
                    },
                ],
            }}
            dataProvider={dataProvider(axiosInstance)}
            authProvider={authProvider(axiosInstance)}
            DashboardPage={HomePage}
            resources={[
                { name: "profile", list: ProfilePage },
                { name: "settings", list: SettingsPage },
                { name: "editor", list: EditorPage },
            ]}
            Layout={Layout}
        />
    );
}

export default App;
