import { GitHubBanner, Refine } from "@pankod/refine-core";
import {
    MantineProvider,
    NotificationsProvider,
    Layout,
    ErrorComponent,
    ReadyPage,
    notificationProvider,
    LightTheme,
    Global,
} from "@pankod/refine-mantine";
import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6";

import { PostCreate, PostEdit, PostList, PostShow } from "./pages";

const App: React.FC = () => {
    return (
        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>
            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />
            <NotificationsProvider position="top-right">
                <GitHubBanner />
                <Refine
                    routerProvider={routerProvider}
                    dataProvider={dataProvider(
                        "https://api.fake-rest.refine.dev",
                    )}
                    notificationProvider={notificationProvider}
                    ReadyPage={ReadyPage}
                    catchAll={<ErrorComponent />}
                    Layout={Layout}
                    resources={[
                        {
                            name: "posts",
                            list: PostList,
                            show: PostShow,
                            edit: PostEdit,
                            create: PostCreate,
                        },
                    ]}
                />
            </NotificationsProvider>
        </MantineProvider>
    );
};

export default App;
