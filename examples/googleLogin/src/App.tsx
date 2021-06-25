import { Refine, Resource, AuthProvider } from "@pankod/refine";
import dataProvider from "@pankod/refine-json-server";
import "@pankod/refine/dist/styles.min.css";
import { useGoogleLogin, useGoogleLogout } from "react-google-login";
import axios from "axios";

import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";
import { Login } from "pages/login";

const API_URL = "https://api.fake-rest.refine.dev";
const clientId =
    "149954872426-ga5qkfj6v6fjr98p4lbakvf8u6mgtnp6.apps.googleusercontent.com";

const App: React.FC = () => {
    const onSuccess = (response: any) => {
        axios.defaults.headers.common = {
            Authorization: `Bearer ${response.tokenId}`,
        };

        localStorage.setItem("user", response.profileObj);
        localStorage.setItem("expiresAt", response.tokenObj.expires_at);
    };

    const { signIn, loaded: signLoaded } = useGoogleLogin({
        onSuccess,
        clientId,
        isSignedIn: true,
        cookiePolicy: "single_host_origin",
    });

    const { signOut, loaded: logoutLoaded } = useGoogleLogout({
        clientId,
        redirectUri: "/",
    });

    if (!signLoaded && !logoutLoaded) {
        return <span>loading...</span>;
    }

    const authProvider: AuthProvider = {
        login: async () => {
            signIn();
            return Promise.resolve();
        },
        logout: () => {
            signOut();
            localStorage.removeItem("user");
            localStorage.removeItem("expiresAt");
            return Promise.resolve("/");
        },
        checkError: () => Promise.resolve(),
        checkAuth: async () => {
            const expiresAt = localStorage.getItem("expiresAt");
            if (expiresAt) {
                return new Date().getTime() / 1000 < +expiresAt
                    ? Promise.resolve()
                    : Promise.reject();
            }
            return Promise.reject();
        },

        getPermissions: () => Promise.resolve(),
        getUserIdentity: async () => {
            const user = localStorage.getItem("user");
            if (user) {
                return Promise.resolve(JSON.parse(user));
            }
        },
    };

    return (
        <Refine
            dataProvider={dataProvider(API_URL, axios)}
            authProvider={authProvider}
            LoginPage={Login}
        >
            <Resource
                name="posts"
                list={PostList}
                create={PostCreate}
                edit={PostEdit}
                show={PostShow}
            />
        </Refine>
    );
};

export default App;
