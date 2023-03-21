import React, { ComponentProps } from "react";
import {
    GoConfig,
    ParseResponse,
    RouterBindings,
    matchResourceFromRoute,
    ResourceContext,
    useTranslate,
    PromptConfig,
} from "@refinedev/core";
import { useCallback, useContext } from "react";
import { parse, stringify } from "qs";
import { useNavigate, useLocation, useParams, Link } from "react-router-dom";
import { convertToNumberIfPossible } from "./convert-to-number-if-possible";

export const stringifyConfig = {
    addQueryPrefix: true,
    skipNulls: true,
    arrayFormat: "indices" as const,
    encode: false,
    encodeValuesOnly: true,
};

export const routerBindings: RouterBindings = {
    go: () => {
        const { search: existingSearch, hash: existingHash } = useLocation();
        const navigate = useNavigate();

        const fn = useCallback(
            ({
                to,
                type,
                query,
                hash,
                options: { keepQuery, keepHash } = {},
            }: GoConfig) => {
                /** Construct query params */
                const urlQuery = {
                    ...(keepQuery &&
                        existingSearch &&
                        parse(existingSearch, { ignoreQueryPrefix: true })),
                    ...query,
                };

                if (urlQuery.to) {
                    urlQuery.to = encodeURIComponent(`${urlQuery.to}`);
                }

                const hasUrlQuery = Object.keys(urlQuery).length > 0;

                /** Get hash */
                const urlHash = `#${(
                    hash ||
                    (keepHash && existingHash) ||
                    ""
                ).replace(/^#/, "")}`;

                const hasUrlHash = urlHash.length > 1;

                const urlTo = to || "";

                const fullPath = `${urlTo}${
                    hasUrlQuery ? stringify(urlQuery, stringifyConfig) : ""
                }${hasUrlHash ? urlHash : ""}`;

                if (type === "path") {
                    return fullPath;
                }

                /** Navigate to the url */
                return navigate(fullPath, {
                    replace: type === "replace",
                });
            },
            [existingHash, existingSearch, navigate],
        );

        return fn;
    },
    back: () => {
        const navigate = useNavigate();

        const fn = useCallback(() => {
            navigate(-1);
        }, [navigate]);

        return fn;
    },
    parse: () => {
        const params = useParams();
        const { pathname, search } = useLocation();
        const { resources } = useContext(ResourceContext);

        const { resource, action } = React.useMemo(() => {
            return matchResourceFromRoute(pathname, resources);
        }, [resources, pathname]);

        const fn = useCallback(() => {
            const parsedSearch = parse(search, { ignoreQueryPrefix: true });

            const combinedParams = {
                ...params,
                ...parsedSearch,
            };

            const response: ParseResponse = {
                ...(resource && { resource }),
                ...(action && { action }),
                ...(params?.id && { id: decodeURIComponent(params.id) }),
                // ...(params?.action && { action: params.action }), // lets see if there is a need for this
                pathname,
                params: {
                    ...combinedParams,
                    current: convertToNumberIfPossible(
                        combinedParams.current as string,
                    ) as number | undefined,
                    pageSize: convertToNumberIfPossible(
                        combinedParams.pageSize as string,
                    ) as number | undefined,
                    to: combinedParams.to
                        ? decodeURIComponent(combinedParams.to as string)
                        : undefined,
                },
            };

            return response;
        }, [pathname, search, params, resource, action]);

        return fn;
    },
    Link: React.forwardRef<
        HTMLAnchorElement,
        ComponentProps<NonNullable<RouterBindings["Link"]>>
    >(function RefineLink(props, ref) {
        return <Link {...props} ref={ref} />;
    }),
    prompt: () => {
        const translate = useTranslate();

        const fn = useCallback(
            ({
                message = "Are you sure you want to leave? You have unsaved changes.",
                onConfirm,
                onCancel,
                translationKey = "warnWhenUnsavedChanges",
            }: PromptConfig) => {
                const confirm = window.confirm(
                    translate(translationKey, message),
                );
                if (confirm) {
                    onConfirm?.();
                } else {
                    onCancel?.();
                }
                return confirm;
            },
            [translate],
        );

        return fn;
    },
};
