import { Refine, ErrorComponent } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";
import routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostList, PostCreate, PostEdit } from "pages/posts";

import "./App.css";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Refine
                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                routerProvider={routerProvider}
                resources={[
                    {
                        name: "posts",
                        list: "/posts",
                        create: "/posts/create",
                        edit: "/posts/edit/:id",
                    },
                ]}
            >
                <Routes>
                    <Route
                        index
                        element={<NavigateToResource resource="posts" />}
                    />

                    <Route path="/posts">
                        <Route index element={<PostList />} />
                        <Route path="create" element={<PostCreate />} />
                        <Route path="edit/:id" element={<PostEdit />} />
                    </Route>

                    <Route path="*" element={<ErrorComponent />} />
                </Routes>
            </Refine>
        </BrowserRouter>
    );
};

export default App;
