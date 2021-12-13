import { Refine, AuthProvider } from "@pankod/refine";
import { dataProvider } from "@pankod/refine-appwrite";
import routerProvider from "@pankod/refine-react-router";
import "@pankod/refine/dist/styles.min.css";

import { Login } from "pages/login";
import { appwriteClient } from "utility";
import {
    CategoriesEdit,
    CategoriesList,
    CategoriesShow,
} from "pages/categories";

const authProvider: AuthProvider = {
    login: ({ email, password }) => {
        console.log(email, password);
        return appwriteClient.account.createSession(email, password);
    },
    logout: async () => {
        await appwriteClient.account.deleteSession("current");

        return "/";
    },
    checkError: () => Promise.resolve(),
    checkAuth: async () => {
        const session = await appwriteClient.account.getSession("current");

        if (session) {
            return Promise.resolve();
        }

        return Promise.reject();
    },
    getPermissions: () => Promise.resolve(),
    getUserIdentity: async () => {
        const user = await appwriteClient.account.get();

        if (user) {
            return user;
        }
    },
};

const App: React.FC = () => {
    return (
        <Refine
            dataProvider={dataProvider(appwriteClient) as any}
            authProvider={authProvider}
            routerProvider={routerProvider}
            LoginPage={Login}
            resources={[
                {
                    name: "6180e6efb14df",
                    list: CategoriesList,
                    show: CategoriesShow,
                    edit: CategoriesEdit,
                    options: {
                        label: "Categories",
                    },
                },
            ]}
        />
    );
};

export default App;
