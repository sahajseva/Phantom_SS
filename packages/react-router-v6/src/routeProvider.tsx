/* eslint-disable react/display-name */
import React from "react";
import {
    RouteProps,
    Route,
    Routes,
    Navigate,
    Outlet,
    useLocation,
} from "react-router-dom";
import {
    LoginPage as DefaultLoginPage,
    ErrorComponent,
    LayoutWrapper,
    useAuthenticated,
    useIsAuthenticated,
    useResource,
    useRefineContext,
    useRouterContext,
    CanAccess,
    ResourceRouterParams,
    createTreeView,
    ITreeMenu,
} from "@pankod/refine-core";
import { RefineRouteProps } from "./index";

const ResourceComponent: React.FC<{ route: string }> = ({ route }) => {
    const { catchAll } = useRefineContext();
    const { useParams } = useRouterContext();
    const { resources } = useResource();

    const {
        resource: routeResourceName,
        action,
        id,
    } = useParams<ResourceRouterParams>();

    const resource = resources.find((res) => res.route === routeResourceName);

    if (resource) {
        const {
            list,
            create,
            edit,
            show,
            name,
            canCreate,
            canEdit,
            canShow,
            canDelete,
            options,
        } = resource;

        const List = list ?? (() => null);
        const Create = create ?? (() => null);
        const Edit = edit ?? (() => null);
        const Show = show ?? (() => null);

        const renderCrud = () => {
            switch (action) {
                case undefined:
                default:
                    return (
                        <CanAccess
                            resource={name}
                            action="list"
                            fallback={catchAll ?? <ErrorComponent />}
                        >
                            <List
                                name={name}
                                canCreate={canCreate}
                                canEdit={canEdit}
                                canDelete={canDelete}
                                canShow={canShow}
                                options={options}
                            />
                        </CanAccess>
                    );
                case "create":
                case "clone":
                    return (
                        <CanAccess
                            resource={name}
                            action="create"
                            fallback={catchAll ?? <ErrorComponent />}
                        >
                            <Create
                                name={name}
                                canCreate={canCreate}
                                canEdit={canEdit}
                                canDelete={canDelete}
                                canShow={canShow}
                                options={options}
                            />
                        </CanAccess>
                    );

                case "edit":
                    return (
                        <CanAccess
                            resource={name}
                            action="edit"
                            params={{ id }}
                            fallback={catchAll ?? <ErrorComponent />}
                        >
                            <Edit
                                name={name}
                                canCreate={canCreate}
                                canEdit={canEdit}
                                canDelete={canDelete}
                                canShow={canShow}
                                options={options}
                            />
                        </CanAccess>
                    );

                case "show":
                    return (
                        <CanAccess
                            resource={name}
                            action="show"
                            params={{ id }}
                            fallback={catchAll ?? <ErrorComponent />}
                        >
                            <Show
                                name={name}
                                canCreate={canCreate}
                                canEdit={canEdit}
                                canDelete={canDelete}
                                canShow={canShow}
                                options={options}
                            />
                        </CanAccess>
                    );
            }
        };

        return renderCrud();
    }

    return <>{catchAll ?? <ErrorComponent />}</>;
};

export const RouteProvider = () => {
    const { resources } = useResource();
    const { catchAll, DashboardPage, LoginPage } = useRefineContext();

    const treeMenu: ITreeMenu[] = createTreeView(resources);

    const { routes: customRoutes }: { routes: RouteProps[] } =
        useRouterContext();

    const isAuthenticated = useIsAuthenticated();
    const { isLoading } = useAuthenticated({ type: "routeProvider" });

    if (isLoading) {
        return (
            <Routes>
                <Route path="*" element={null} />
            </Routes>
        );
    }

    const CustomPathAfterLogin: React.FC = (): JSX.Element | null => {
        const { pathname, search } = location;
        const toURL = `${pathname}${search}`;

        return <Navigate to={`/login?to=${encodeURIComponent(toURL)}`} />;
    };

    // const renderTreeView = (item: ITreeMenu[]) => {
    //     return item.map((p: ITreeMenu) => {
    //         if (p.children.length > 0) {
    //             return (
    //                 <Route path={p.name}>{renderTreeView(p.children)}</Route>
    //             );
    //         } else {
    //             return (
    //                 <Route path=":resource" element={<ResourceComponent />}>
    //                     <Route path=":action" element={<ResourceComponent />}>
    //                         <Route path=":id" element={<ResourceComponent />} />
    //                     </Route>
    //                 </Route>
    //             );
    //         }
    //     });
    // };

    const renderAuthorized = () => (
        <Routes>
            {[...(customRoutes || [])]
                .filter((p: RefineRouteProps) => !p.layout)
                .map((route, i) => (
                    <Route
                        key={`custom-route-${i}`}
                        {...route}
                        element={route.element}
                    />
                ))}
            <Route
                path="/"
                element={
                    <LayoutWrapper>
                        <Outlet />
                    </LayoutWrapper>
                }
            >
                {[...(customRoutes || [])]
                    .filter((p: RefineRouteProps) => p.layout)
                    .map((route, i) => (
                        <Route
                            key={`custom-route-${i}`}
                            {...route}
                            element={route.element}
                        />
                    ))}
                <Route
                    index
                    element={
                        DashboardPage ? (
                            <CanAccess
                                resource="dashboard"
                                action="list"
                                fallback={catchAll ?? <ErrorComponent />}
                            >
                                <DashboardPage />
                            </CanAccess>
                        ) : (
                            <Navigate to={`/${resources[0].route}`} />
                        )
                    }
                />
                {resources.map((resource) => (
                    <Route
                        key={resource.route}
                        path={resource.route}
                        element={<ResourceComponent route={resource.route!} />}
                    >
                        <Route
                            path="*"
                            element={
                                <ResourceComponent route={resource.route!} />
                            }
                        />
                    </Route>
                ))}
            </Route>
        </Routes>
    );

    const renderUnauthorized = () => (
        <Routes>
            {[...(customRoutes || [])].map((route, i) => (
                <Route key={`custom-route-${i}`} {...route} />
            ))}
            <Route
                path="/"
                element={LoginPage ? <LoginPage /> : <DefaultLoginPage />}
            />
            <Route
                path="/login"
                element={LoginPage ? <LoginPage /> : <DefaultLoginPage />}
            />
            <Route path="*" element={<CustomPathAfterLogin />} />
        </Routes>
    );
    return isAuthenticated ? renderAuthorized() : renderUnauthorized();
};
