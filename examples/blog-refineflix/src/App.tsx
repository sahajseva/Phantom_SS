import { Authenticated, Refine } from "@refinedev/core";
import { notificationProvider, Layout, ErrorComponent } from "@refinedev/antd";
import routerProvider, {
    CatchAllNavigate,
    NavigateToResource,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "@refinedev/antd/dist/reset.css";
import { dataProvider } from "@refinedev/supabase";
import authProvider from "./authProvider";
import { supabaseClient } from "utility";

import {
    AdminMovieList,
    AdminMovieCreate,
    AdminMovieShow,
    AdminMovieEdit,
} from "./pages/admin/movies";
import { MoviesList, MovieShow } from "./pages/movies";
import { Login } from "./pages/login";

function App() {
    return (
        <BrowserRouter>
            <Refine
                dataProvider={dataProvider(supabaseClient)}
                authProvider={authProvider}
                routerProvider={routerProvider}
                resources={[
                    {
                        name: "movies",
                        list: "/admin/movies",
                        create: "/admin/movies/create",
                        show: "/admin/movies/show/:id",
                        edit: "/admin/movies/edit/:id",
                    },
                ]}
                notificationProvider={notificationProvider}
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
                            element={<NavigateToResource resource="movies" />}
                        />

                        <Route path="admin">
                            <Route path="movies">
                                <Route index element={<AdminMovieList />} />
                                <Route
                                    path="create"
                                    element={<AdminMovieCreate />}
                                />
                                <Route
                                    path="show/:id"
                                    element={<AdminMovieShow />}
                                />
                                <Route
                                    path="edit/:id"
                                    element={<AdminMovieEdit />}
                                />
                            </Route>
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
                        <Route path="/login" element={<Login />} />
                    </Route>

                    <Route
                        element={
                            <Authenticated>
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
}

export default App;
