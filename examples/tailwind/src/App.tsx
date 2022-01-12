import { Refine } from "@pankod/refine-core";
import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router";
import { ToastContainer } from "react-toastify";

import { Layout, Header, Sider, Title } from "@pankod/refine-antd";

import "@pankod/refine-antd/dist/styles.min.css";
import "react-toastify/dist/ReactToastify.css";

import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";
import { notificationProvider } from "notificationProvider";

const API_URL = "https://api.fake-rest.refine.dev";

const App: React.FC = () => {
    return (
        <>
            <Refine
                routerProvider={routerProvider}
                dataProvider={dataProvider(API_URL)}
                notificationProvider={notificationProvider}
                resources={[
                    {
                        name: "posts",
                        list: PostList,
                        create: PostCreate,
                        edit: PostEdit,
                        show: PostShow,
                        canDelete: true,
                    },
                ]}
                warnWhenUnsavedChanges={true}
                mutationMode="undoable"
                Layout={Layout}
                Header={Header}
                Title={Title}
                Sider={Sider}
            />
            <ToastContainer />
        </>
    );
};

export default App;
