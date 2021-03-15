/* eslint-disable react/display-name */
import React, { useContext, ReactNode } from "react";
import { Switch, Route, RouteProps, Redirect } from "react-router-dom";
import { Layout, ErrorComponent } from "@components";
import { LoginPage as DefaultLoginPage } from "@components";
import { AuthContext } from "@contexts/auth";
import { IAuthContext } from "@interfaces";
import { OptionalComponent } from "@definitions";

export interface RouteProviderProps {
    title?: ReactNode;
    resources: React.ReactNode;
    catchAll?: React.ReactNode;
    dashboard?: React.ElementType;
    loginPage?: React.FC | false;
    ready?: React.FC;
}

type IRoutesProps = RouteProps & { routes?: RouteProps[] };

const RouteProviderBase: React.FC<RouteProviderProps> = ({
    title,
    resources,
    catchAll,
    dashboard,
    loginPage,
}) => {
    const { isAuthenticated, checkAuth } = useContext<IAuthContext>(
        AuthContext,
    );

    const resourcesArray: string[] = [];

    checkAuth({});

    const routes: IRoutesProps[] = [];
    const RouteHandler = (val: React.ReactElement): void => {
        const {
            list,
            name,
            create,
            edit,
            show,
            canDelete,
            options,
        } = val.props;

        const routeName = options?.route ?? name;

        const ListComponent = list;
        const CreateComponent = create;
        const EditComponent = edit;
        const ShowComponent = show;

        const canCreate = !!create;
        const canEdit = !!edit;
        const canShow = !!show;

        if (CreateComponent) {
            routes.push({
                exact: true,
                path: `/resources/:resource(${routeName})/:action(create)`,
                component: () => {
                    return <CreateComponent canEdit={canEdit} />;
                },
            });
        }

        if (EditComponent) {
            routes.push({
                exact: true,
                path: `/resources/:resource(${routeName})/:action(edit)/:id`,
                component: () => <EditComponent />,
            });
        }

        if (ShowComponent) {
            routes.push({
                exact: true,
                path: `/resources/:resource(${routeName})/:action(show)/:id`,
                component: () => (
                    <ShowComponent
                        canCreate={canCreate}
                        canEdit={canEdit}
                        canDelete={canDelete}
                    />
                ),
            });
        }

        if (ListComponent) {
            routes.push({
                exact: true,
                path: `/resources/:resource(${routeName})`,
                component: () => (
                    <ListComponent
                        canCreate={canCreate}
                        canEdit={canEdit}
                        canDelete={canDelete}
                        canShow={canShow}
                    />
                ),
            });
        }

        return;
    };

    React.Children.map(resources, (child: any) => {
        resourcesArray.push(child.props.name);
        RouteHandler(child);
    });

    const RouteWithSubRoutes = (route: any) => {
        return (
            <Route
                exact
                path={route.path}
                render={(props) => <route.component {...props} />}
            />
        );
    };

    const renderAuthorized = () => (
        <Layout title={title}>
            <Switch>
                <Route
                    path="/"
                    exact
                    component={() =>
                        dashboard ? (
                            React.createElement(dashboard, null)
                        ) : (
                            <Redirect to={`/resources/${resourcesArray[0]}`} />
                        )
                    }
                />
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
                <Route>{catchAll ?? <ErrorComponent />}</Route>
            </Switch>
        </Layout>
    );

    const renderUnauthorized = () => (
        <Switch>
            <Route
                exact
                path={["/", "/login"]}
                component={() => (
                    <OptionalComponent optional={loginPage}>
                        <DefaultLoginPage />
                    </OptionalComponent>
                )}
            />
            <Route>{catchAll ?? <ErrorComponent />}</Route>
        </Switch>
    );

    return isAuthenticated ? renderAuthorized() : renderUnauthorized();
};

export const RouteProvider = React.memo(RouteProviderBase);
