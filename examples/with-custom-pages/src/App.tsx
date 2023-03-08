import { Refine, Authenticated, AuthBindings } from "@refinedev/core";
import {
    notificationProvider,
    AuthPage,
    Layout,
    ErrorComponent,
    Sider,
} from "@refinedev/antd";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, {
    CatchAllNavigate,
    NavigateToResource,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { CheckOutlined } from "@ant-design/icons";

import "@refinedev/antd/dist/reset.css";

import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";
import { PostReview } from "pages/post-review";
import { Menu } from "antd";

const API_URL = "https://api.fake-rest.refine.dev";

const App: React.FC = () => {
    const authProvider: AuthBindings = {
        login: async ({ email }) => {
            if (email) {
                localStorage.setItem("email", email);
                return {
                    success: true,
                    redirectTo: "/",
                };
            }

            return {
                success: false,
                message: "Invalid email or password",
            };
        },
        logout: async () => {
            localStorage.removeItem("email");
            return { redirectTo: "/login", success: true };
        },
        onError: async () => ({}),
        check: async () =>
            localStorage.getItem("email")
                ? {
                      authenticated: true,
                  }
                : {
                      authenticated: false,
                      redirectTo: "/login",
                  },
        getPermissions: async () => ["admin"],
    };

    return (
        <BrowserRouter>
            <Refine
                dataProvider={dataProvider(API_URL)}
                routerProvider={routerProvider}
                authProvider={authProvider}
                resources={[
                    {
                        name: "posts",
                        list: "/posts",
                        create: "/posts/create",
                        edit: "/posts/edit/:id",
                        show: "/posts/show/:id",
                    },
                ]}
                notificationProvider={notificationProvider}
            >
                <Routes>
                    <Route index element={<PostReview />} />

                    <Route
                        element={
                            <Authenticated
                                fallback={<CatchAllNavigate to="/login" />}
                            >
                                <Layout
                                    Sider={() => (
                                        <Sider
                                            render={({ items, logout }) => {
                                                return (
                                                    <>
                                                        {items}
                                                        <Menu.Item
                                                            icon={
                                                                <CheckOutlined />
                                                            }
                                                        >
                                                            <Link to="/post-review">
                                                                Post Review
                                                            </Link>
                                                        </Menu.Item>
                                                        {logout}
                                                    </>
                                                );
                                            }}
                                        />
                                    )}
                                >
                                    <Outlet />
                                </Layout>
                            </Authenticated>
                        }
                    >
                        <Route path="posts">
                            <Route index element={<PostList />} />
                            <Route path="create" element={<PostCreate />} />
                            <Route path="edit/:id" element={<PostEdit />} />
                            <Route path="show/:id" element={<PostShow />} />
                        </Route>

                        <Route path="post-review" element={<PostReview />} />
                    </Route>
                    <Route
                        element={
                            <Authenticated fallback={<Outlet />}>
                                <NavigateToResource resource="posts" />
                            </Authenticated>
                        }
                    >
                        <Route
                            path="/login"
                            element={
                                <AuthPage
                                    formProps={{
                                        initialValues: {
                                            email: "admin@refine.dev",
                                            password: "password",
                                        },
                                    }}
                                />
                            }
                        />
                    </Route>

                    <Route
                        element={
                            <Authenticated fallback={<Outlet />}>
                                <Layout>
                                    <Outlet />
                                </Layout>
                            </Authenticated>
                        }
                    >
                        <Route path="*" element={<ErrorComponent />} />
                    </Route>
                </Routes>
            </Refine>
        </BrowserRouter>
    );
};

export default App;
