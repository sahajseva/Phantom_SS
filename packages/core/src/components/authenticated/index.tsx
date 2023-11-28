import React from "react";

import {
    useGo,
    useNavigation,
    useParsed,
    useRouterContext,
    useRouterType,
    useIsAuthenticated,
} from "@hooks";
import { useActiveAuthProvider } from "@definitions/index";

export type AuthenticatedCommonProps = {
    /**
     * Unique key to identify the component.
     * This is required if you have multiple `Authenticated` components at the same level.
     * @required
     */
    key: React.Key;
    /**
     * Whether to redirect user if not logged in or not.
     * If not set, user will be redirected to `redirectTo` property of the `check` function's response.
     * This behavior is only available for new auth providers.
     * Legacy auth providers will redirect to `/login` by default if this property is not set.
     * If set to a string, user will be redirected to that string.
     *
     * This property only works if `fallback` is **not set**.
     */
    redirectOnFail?: string | true;
    /**
     * Whether to append current path to search params of the redirect url at `to` property.
     *
     * By default, `to` parameter is used by successful invocations of the `useLogin` hook.
     * If `to` present, it will be used as the redirect url after successful login.
     */
    appendCurrentPathToQuery?: boolean;
    /**
     * Content to show if user is not logged in.
     */
    fallback?: React.ReactNode;
    /**
     * Content to show while checking whether user is logged in or not.
     */
    loading?: React.ReactNode;
    /**
     * Content to show if user is logged in
     */
    children?: React.ReactNode;
};

export type LegacyAuthenticatedProps = {
    v3LegacyAuthProviderCompatible: true;
} & AuthenticatedCommonProps;

export type AuthenticatedProps = {
    v3LegacyAuthProviderCompatible?: false;
} & AuthenticatedCommonProps;

export function Authenticated(
    props: LegacyAuthenticatedProps,
): JSX.Element | null;

export function Authenticated(props: AuthenticatedProps): JSX.Element | null;

/**
 * `<Authenticated>` is the component form of {@link https://refine.dev/docs/api-reference/core/hooks/auth/useAuthenticated `useAuthenticated`}. It internally uses `useAuthenticated` to provide it's functionality.
 *
 *  "key" prop is required if you have multiple `Authenticated` components at the same level.
 *
 * @see {@link https://refine.dev/docs/core/components/auth/authenticated `<Authenticated>`} component for more details.
 */
export function Authenticated({
    redirectOnFail = true,
    appendCurrentPathToQuery = true,
    children,
    fallback: fallbackContent,
    loading: loadingContent,
}: AuthenticatedProps | LegacyAuthenticatedProps): JSX.Element | null {
    const activeAuthProvider = useActiveAuthProvider();
    const routerType = useRouterType();

    const hasAuthProvider = Boolean(activeAuthProvider?.isProvided);
    const isLegacyAuth = Boolean(activeAuthProvider?.isLegacy);
    const isLegacyRouter = routerType === "legacy";

    const parsed = useParsed();
    const go = useGo();
    const { replace } = useNavigation();
    const { useLocation } = useRouterContext();
    const legacyLocation = useLocation();

    const {
        isFetching,
        isSuccess,
        data: {
            authenticated: isAuthenticatedStatus,
            redirectTo: authenticatedRedirect,
        } = {},
    } = useIsAuthenticated({
        v3LegacyAuthProviderCompatible: isLegacyAuth,
    });

    // Authentication status
    const isAuthenticated = hasAuthProvider
        ? isLegacyAuth
            ? isSuccess
            : isAuthenticatedStatus
        : true;

    // when there is no auth provider
    if (!hasAuthProvider) {
        return <>{children ?? null}</>;
    }

    // when checking authentication status
    if (isFetching) {
        return <>{loadingContent ?? null}</>;
    }

    // when user is authenticated return children
    if (isAuthenticated) {
        return <>{children ?? null}</>;
    }
    // when user is not authenticated redirect or render fallbackContent
    else {
        // render fallbackContent if it is exist
        if (typeof fallbackContent !== "undefined") {
            return <>{fallbackContent ?? null}</>;
        }
        // if there is no fallbackContent, redirect page

        // Redirect url to use. use redirectOnFail if it is set.
        // Otherwise use redirectTo property of the check function's response.
        // If both are not set, use `/login` as the default redirect url. (only for legacy auth providers)
        const appliedRedirect = isLegacyAuth
            ? typeof redirectOnFail === "string"
                ? redirectOnFail
                : "/login"
            : typeof redirectOnFail === "string"
            ? redirectOnFail
            : (authenticatedRedirect as string | undefined);

        // Current pathname to append to the redirect url.
        // User will be redirected to this url after successful mutation. (like login)
        const pathname = `${
            isLegacyRouter ? legacyLocation?.pathname : parsed.pathname
        }`.replace(/(\?.*|#.*)$/, "");
        // Redirect if appliedRedirect is set, otherwise return null.
        //  Uses `replace` for legacy router and `go` for new router.
        if (appliedRedirect) {
            if (isLegacyRouter) {
                const toQuery = appendCurrentPathToQuery
                    ? `?to=${encodeURIComponent(pathname)}`
                    : "";
                replace(`${appliedRedirect}${toQuery}`);
            } else {
                go({
                    to: appliedRedirect,
                    query: appendCurrentPathToQuery
                        ? {
                              to: parsed.params?.to
                                  ? parsed.params.to
                                  : go({
                                        to: pathname,
                                        options: { keepQuery: true },
                                        type: "path",
                                    }),
                          }
                        : undefined,
                    type: "replace",
                });
            }
        }

        return null;
    }
}
