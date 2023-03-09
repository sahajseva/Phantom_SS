import { Refine } from "@refinedev/core";
import { notificationProvider, Layout, ErrorComponent } from "@refinedev/antd";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { HTTP as Cerbos } from "@cerbos/http";

import "@refinedev/antd/dist/reset.css";

import { Header } from "components/header";
import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";
import { UserList, UserCreate, UserEdit, UserShow } from "pages/users";
import {
    CategoryList,
    CategoryCreate,
    CategoryEdit,
    CategoryShow,
} from "pages/categories";

const API_URL = "https://api.fake-rest.refine.dev";

// This is making use of the hosted Cerbos Policy Decision Point
// You can view the policies in the Playground https://play.cerbos.dev/p/UWG3inHjwrFhqkv60dec623G9PoYlgJf
// For production we recommend running a PDP container along side your application
// See https://cerbos.dev for more information

// The Cerbos PDP instance
const cerbos = new Cerbos("https://demo-pdp.cerbos.cloud", {
    playgroundInstance: "WS961950bd85QNYlAvTmJYubP0bqF7e3", // The playground instance ID to test
});

const App: React.FC = () => {
    const role = localStorage.getItem("role") ?? "admin";
    return (
        <BrowserRouter>
            <Refine
                routerProvider={routerProvider}
                dataProvider={dataProvider(API_URL)}
                accessControlProvider={{
                    can: async ({ action, params, resource }) => {
                        const result = await cerbos.checkResource({
                            principal: {
                                id: "demoUser", // Fake a user ID
                                roles: [role],
                                policyVersion: "default",
                                // this is where user attributes can be passed
                                attributes: {},
                            },
                            resource: {
                                kind: resource ?? "",
                                policyVersion: "default",
                                id: params?.id + "" || "new",
                                attributes: params,
                            },
                            // the list of actions on the resource to check authorization for
                            actions: [action],
                        });
                        return Promise.resolve({
                            can: result.isAllowed(action) || false,
                        });
                    },
                }}
                resources={[
                    {
                        name: "posts",
                        list: "/posts",
                        show: "/posts/show/:id",
                        create: "/posts/create",
                        edit: "/posts/edit/:id",
                        meta: {
                            canDelete: true,
                        },
                    },
                    {
                        name: "users",
                        list: "/users",
                        show: "/users/show/:id",
                        create: "/users/create",
                        edit: "/users/edit/:id",
                    },
                    {
                        name: "categories",
                        list: "/categories",
                        show: "/categories/show/:id",
                        create: "/categories/create",
                        edit: "/categories/edit/:id",
                    },
                ]}
                notificationProvider={notificationProvider}
            >
                <Routes>
                    <Route
                        element={
                            <Layout Header={() => <Header role={role} />}>
                                <Outlet />
                            </Layout>
                        }
                    >
                        <Route
                            index
                            element={<NavigateToResource resource="posts" />}
                        />

                        <Route path="/posts" element={<PostList />} />
                        <Route path="/posts/show/:id" element={<PostShow />} />
                        <Route path="/posts/create" element={<PostCreate />} />
                        <Route path="/posts/edit/:id" element={<PostEdit />} />

                        <Route path="/users" element={<UserList />} />
                        <Route path="/users/show/:id" element={<UserShow />} />
                        <Route path="/users/create" element={<UserCreate />} />
                        <Route path="/users/edit/:id" element={<UserEdit />} />

                        <Route path="/categories" element={<CategoryList />} />
                        <Route
                            path="/categories/show/:id"
                            element={<CategoryShow />}
                        />
                        <Route
                            path="/categories/create"
                            element={<CategoryCreate />}
                        />
                        <Route
                            path="/categories/edit/:id"
                            element={<CategoryEdit />}
                        />

                        <Route path="*" element={<ErrorComponent />} />
                    </Route>
                </Routes>
            </Refine>
        </BrowserRouter>
    );
};

export default App;
