import { GitHubBanner, Refine } from "@refinedev/core";
import { notificationProvider, WelcomePage } from "@refinedev/antd";
import dataProvider from "@refinedev/simple-rest";
import routerProvider from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "@refinedev/antd/dist/reset.css";

const API_URL = "https://api.fake-rest.refine.dev";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <GitHubBanner />
            <Refine
                routerProvider={routerProvider}
                dataProvider={dataProvider(API_URL)}
                notificationProvider={notificationProvider}
            >
                <Routes>
                    <Route path="*" element={<WelcomePage />} />
                </Routes>
            </Refine>
        </BrowserRouter>
    );
};

export default App;
