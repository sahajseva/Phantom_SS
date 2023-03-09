import { Authenticated, ErrorComponent, Refine } from "@refinedev/core";
import routerProvider, {
    NavigateToResource,
    CatchAllNavigate,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { dataProvider } from "@refinedev/supabase";
import authProvider from "./authProvider";
import { supabaseClient } from "utility";

import original from "react95/dist/themes/original";
import { ThemeProvider } from "styled-components";

import { PostList, PostEdit, PostCreate } from "pages/posts";
import { CategoryList, CategoryCreate, CategoryEdit } from "pages/category";
import { LoginPage } from "pages/login";
import { Footer } from "./components/footer";

import "./app.css";
import Layout from "components/layout";

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={original}>
                <Refine
                    routerProvider={routerProvider}
                    dataProvider={dataProvider(supabaseClient)}
                    authProvider={authProvider}
                    Layout={({ children }) => {
                        return (
                            <div className="main">
                                <div className="layout">{children}</div>
                                <div>
                                    <Footer />
                                </div>
                            </div>
                        );
                    }}
                    resources={[
                        {
                            name: "posts",
                            list: "/posts",
                            edit: "/posts/edit/:id",
                        },
                        {
                            name: "categories",
                            list: "/categories",
                            edit: "/categories/edit/:id",
                        },
                    ]}
                >
                    <Routes>
                        <Route
                            element={
                                <Authenticated
                                    fallback={<CatchAllNavigate to="/login" />}
                                >
                                    <Layout>
                                        <Outlet />
                                    </Layout>
                                </Authenticated>
                            }
                        >
                            <Route
                                index
                                element={
                                    <NavigateToResource resource="posts" />
                                }
                            />

                            <Route path="posts">
                                <Route index element={<PostList />} />
                                <Route path="create" element={<PostCreate />} />
                                <Route path="edit/:id" element={<PostEdit />} />
                            </Route>

                            <Route path="categories">
                                <Route index element={<CategoryList />} />
                                <Route
                                    path="create"
                                    element={<CategoryCreate />}
                                />
                                <Route
                                    path="edit/:id"
                                    element={<CategoryEdit />}
                                />
                            </Route>

                            <Route path="*" element={<ErrorComponent />} />
                        </Route>

                        <Route
                            element={
                                <Authenticated fallback={<Outlet />}>
                                    <NavigateToResource resource="posts" />
                                </Authenticated>
                            }
                        >
                            <Route path="/login" element={<LoginPage />} />
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
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
