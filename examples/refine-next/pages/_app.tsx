import React from "react";
import { AppProps } from "next/app";
import "@styles/global.css";

import { Refine } from "@pankod/refine";
import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-nextjs-router";

import { PostList, PostCreate, PostEdit, PostShow } from "@components";
import { authProvider } from "src/authProvider";

import { API_URL } from "../src/constants";

import { authProvider } from "../src/authProvider";

import "@pankod/refine/dist/styles.min.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Refine
            routerProvider={routerProvider}
            authProvider={authProvider}
            dataProvider={dataProvider(API_URL)}
            authProvider={authProvider}
            resources={[
                { name: "users" },
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
        >
            <Component {...pageProps} />
        </Refine>
    );
}

export default MyApp;
