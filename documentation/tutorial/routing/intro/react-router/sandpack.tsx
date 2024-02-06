import React from "react";
import { TutorialSandpack } from "@site/src/refine-theme/tutorial-sandpack";
import { useSandpack } from "@codesandbox/sandpack-react";
import { TutorialUpdateFileButton } from "@site/src/refine-theme/tutorial-update-file-button";

import { dependencies as initialDependencies } from "@site/tutorial/authentication/intro/sandpack";
import { finalFiles as initialFiles } from "@site/tutorial/authentication/data-provider-integration/sandpack";

export const Sandpack = ({ children }: { children: React.ReactNode }) => {
    return (
        <TutorialSandpack
            showNavigator
            dependencies={dependencies}
            files={initialFiles}
            finalFiles={finalFiles}
        >
            {children}
        </TutorialSandpack>
    );
};

// updates

const AppTsxWithRouterProvider = /* tsx */ `
import { Refine, Authenticated } from "@refinedev/core";
import routerProvider from "@refinedev/react-router-v6";

import { BrowserRouter } from "react-router-dom";

import { dataProvider } from "./data-provider";
import { authProvider } from "./auth-provider";

import { ShowProduct } from "./show-product";
import { EditProduct } from "./edit-product";
import { ListProducts } from "./list-products";
import { CreateProduct } from "./create-product";

import { Login } from "./login";
import { Header } from "./header";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Refine
          dataProvider={dataProvider}
          authProvider={authProvider}
          routerProvider={routerProvider}
      >
        <Authenticated
          key="protected"
          fallback={<Login />}
        >
          <Header />
          {/* <ShowProduct /> */}
          {/* <EditProduct /> */}
          <ListProducts />
          {/* <CreateProduct /> */}
        </Authenticated>
      </Refine>
    </BrowserRouter>
  );
}
`.trim();

// actions

export const AddRouterProviderToApp = () => {
    const { sandpack } = useSandpack();

    return (
        <TutorialUpdateFileButton
            onClick={() => {
                sandpack.updateFile("/App.tsx", AppTsxWithRouterProvider);
                sandpack.setActiveFile("/App.tsx");
            }}
        />
    );
};

// files

export const dependencies = {
    ...initialDependencies,
    "@refinedev/react-router-v6": "latest",
    "react-router-dom": "latest",
};

export const finalFiles = {
    ...initialFiles,
    "App.tsx": {
        code: AppTsxWithRouterProvider,
    },
};
