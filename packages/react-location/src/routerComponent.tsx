import React from "react";
import {
    useAuthenticated,
    useIsAuthenticated,
    useRefineContext,
    useResource,
    useRouterContext,
    LoginPage as DefaultLoginPage,
    LayoutWrapper,
    CanAccess,
    ErrorComponent,
    createTreeView,
    ITreeMenu,
} from "@pankod/refine-core";
import { rankRoutes } from "react-location-rank-routes";

import {
    Router,
    ReactLocation,
    Route,
    Navigate,
    useRouter,
    RouterProps,
    Outlet,
} from "react-location";

import { ResourceComponentWrapper } from "./resourceComponent";
import { RefineRouteProps } from "./index";

export const location = new ReactLocation();

export const RouterComponent: React.FC<RouterProps> = ({
    children,
    location: locationFromProps,
    ...rest
}) => {
    const { resources } = useResource();
    const treeMenu: ITreeMenu[] = createTreeView(resources);
    const { DashboardPage, catchAll, LoginPage } = useRefineContext();

    const { routes: customRoutes }: { routes: Route[] } = useRouterContext();

    console.log("resources", resources);

    const isAuthenticated = useIsAuthenticated();
    const { isLoading } = useAuthenticated({ type: "routeProvider" });

    if (isLoading) {
        return null;
    }

    if (!isAuthenticated) {
        const routes: Route[] = [
            ...[...(customRoutes || [])],
            {
                path: "/",
                element: LoginPage ? <LoginPage /> : <DefaultLoginPage />,
            },
            {
                path: "/login",
                element: LoginPage ? <LoginPage /> : <DefaultLoginPage />,
            },
            {
                path: "*",
                element: <LoginNavigateWithToParam />,
            },
        ];

        return (
            <Router
                location={locationFromProps ?? location}
                {...rest}
                filterRoutes={rankRoutes as any}
                routes={routes}
            />
        );
    }

    // subRoutes refer routes that only have list for render
    const subRoutes: string[] = [];
    const optionRoutes: {
        name: string;
        prefix: string;
    }[] = [];

    const getSubRoute = (item: ITreeMenu[]) => {
        item.map((i) => {
            if (i.children.length > 0) {
                return getSubRoute(i.children);
            } else {
                if (i.children) {
                    if (!i.options) {
                        const routeWithoutResource =
                            i.route === i.name
                                ? i.route.replace(i.name, "/")
                                : i.route.replace(i.name, "");
                        subRoutes.push(routeWithoutResource);
                    } else {
                        const splitedRoute = i.route.split("/");
                        const resource = splitedRoute[splitedRoute.length - 1];
                        const prefix =
                            splitedRoute.length > 1
                                ? i.route.replace(resource, "")
                                : i.route.replace(resource, "/");

                        console.log("prefix", prefix);

                        optionRoutes.push({
                            name: i.name,
                            prefix,
                        });
                    }
                } else {
                    console.log("edde");

                    return "asd";
                }
            }
        });
    };

    // recoursive method for creating prefix [prefix]/:resource
    getSubRoute(treeMenu);

    // to prevent duplicate same level resource's prefix
    const uniqeSubRoutes = subRoutes.filter(
        (item: string, idx: number) => subRoutes.indexOf(item) === idx,
    );

    console.log("subRoutes", subRoutes);
    const subRoutesArray = [
        ...[...(customRoutes || [])].filter((p: RefineRouteProps) => p.layout),
        {
            path: "/",
            element: DashboardPage ? (
                <CanAccess
                    resource="dashboard"
                    action="list"
                    fallback={catchAll ?? <ErrorComponent />}
                >
                    <DashboardPage />
                </CanAccess>
            ) : (
                <Navigate to={`/${resources[0].route}`} />
            ),
        },
    ];

    console.log("uniqeSubRoutes", uniqeSubRoutes);

    // generate dynamic paths according to prefixs
    uniqeSubRoutes.map((i: string) => {
        subRoutesArray.push(
            {
                path: `${i}:resource`,
                element: <ResourceComponentWrapper />,
            },
            {
                path: `${i}:resource/:action`,
                element: <ResourceComponentWrapper />,
            },
            {
                path: `${i}:resource/:action/:id`,
                element: <ResourceComponentWrapper />,
            },
        );
    });

    optionRoutes.map((item: { name: string; prefix: string }) => {
        subRoutesArray.push(
            {
                path: `${item.prefix}:resource`,
                element: <ResourceComponentWrapper optionParam={item} />,
            },
            {
                path: `${item.prefix}:resource/:action`,
                element: <ResourceComponentWrapper optionParam={item} />,
            },
            {
                path: `${item.prefix}:resource/:action/:id`,
                element: <ResourceComponentWrapper optionParam={item} />,
            },
        );
    });

    const routes: Route[] = [
        ...[...(customRoutes || [])].filter((p: RefineRouteProps) => !p.layout),
        {
            element: (
                <LayoutWrapper>
                    <Outlet />
                </LayoutWrapper>
            ),
            children: subRoutesArray,
        },
    ];

    return (
        <Router
            location={locationFromProps ?? location}
            {...rest}
            filterRoutes={rankRoutes as any}
            routes={routes}
        />
    );
};

const LoginNavigateWithToParam: React.FC = () => {
    const { state } = useRouter();

    return (
        <Navigate
            to={`/login`}
            search={{
                to: `${state.location.href}`,
            }}
        />
    );
};
