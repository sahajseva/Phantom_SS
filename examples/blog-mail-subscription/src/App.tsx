import { GitHubBanner, Refine } from "@pankod/refine-core";

import {
    notificationProvider,
    LoginPage,
    ErrorComponent,
} from "@pankod/refine-antd";

import routerProvider from "@pankod/refine-react-router-v6";

import "@pankod/refine-antd/dist/reset.css";
import { DataProvider } from "@pankod/refine-strapi";
import strapiAuthProvider from "authProvider";
import { Header, Layout, OffLayoutArea } from "components";
import { SubscriberList, CreateSubscriber } from "./pages/subscriber";
import { MessageList, MailCreate } from "./pages/mail";

function App() {
    const API_URL = "http://localhost:1337";

    const { authProvider, axiosInstance } = strapiAuthProvider(API_URL);
    const dataProvider = DataProvider(API_URL, axiosInstance);
    return (
        <>
            <GitHubBanner />
            <Refine
                dataProvider={dataProvider}
                authProvider={authProvider}
                Header={Header}
                Layout={Layout}
                OffLayoutArea={OffLayoutArea}
                routerProvider={routerProvider}
                resources={[
                    {
                        name: "subscribers",
                        list: SubscriberList,
                        create: CreateSubscriber,
                    },
                    {
                        name: "messages",
                        list: MessageList,
                        create: MailCreate,
                    },
                ]}
                notificationProvider={notificationProvider}
                LoginPage={LoginPage}
                catchAll={<ErrorComponent />}
            />
        </>
    );
}

export default App;
