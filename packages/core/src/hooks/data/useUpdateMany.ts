import {
    useMutation,
    UseMutationOptions,
    UseMutationResult,
    useQueryClient,
} from "@tanstack/react-query";

import {
    useResource,
    useCancelNotification,
    useMutationMode,
    useTranslate,
    usePublish,
    useHandleNotification,
    useDataProvider,
    useInvalidate,
    useLog,
    useOnError,
    useMeta,
    useRefineContext,
} from "@hooks";
import { ActionTypes } from "@contexts/undoableQueue";
import {
    BaseRecord,
    BaseKey,
    UpdateManyResponse,
    HttpError,
    MutationMode,
    QueryResponse,
    PrevContext as UpdateContext,
    SuccessErrorNotification,
    MetaQuery,
    GetListResponse,
    IQueryKeys,
    OptimisticUpdateManyMapType,
} from "../../interfaces";
import {
    queryKeysReplacement,
    pickDataProvider,
    handleMultiple,
    pickNotDeprecated,
    useActiveAuthProvider,
} from "@definitions/helpers";
import {
    useLoadingOvertime,
    UseLoadingOvertimeOptionsProps,
    UseLoadingOvertimeReturnType,
} from "../useLoadingOvertime";
import { useKeys } from "@hooks/useKeys";

type UpdateManyParams<TData, TError, TVariables> = {
    /**
     * ids for mutation function
     */
    ids: BaseKey[];
    /**
     * Resource name for API data interactions
     */
    resource: string;
    /**
     * [Determines when mutations are executed](/advanced-tutorials/mutation-mode.md)
     */
    mutationMode?: MutationMode;
    /**
     * Duration in ms to wait before executing the mutation when `mutationMode = "undoable"`
     */
    undoableTimeout?: number;
    /**
     * Provides a function to cancel the mutation when `mutationMode = "undoable"`
     */
    onCancel?: (cancelMutation: () => void) => void;
    /**
     * Values for mutation function
     */
    values: TVariables;
    /**
     * meta data for `dataProvider`
     */
    meta?: MetaQuery;
    /**
     * meta data for `dataProvider`
     * @deprecated `metaData` is deprecated with refine@4, refine will pass `meta` instead, however, we still support `metaData` for backward compatibility.
     */
    metaData?: MetaQuery;
    /**
     * If there is more than one `dataProvider`, you should use the `dataProviderName` that you will use.
     * @default "default"
     */
    dataProviderName?: string;
    /**
     *  You can use it to manage the invalidations that will occur at the end of the mutation.
     */
    invalidates?: Array<keyof IQueryKeys>;
    /**
     * You can use it to manage the invalidations that will occur at the end of the mutation.
     * @default {
     *   list: true,
     *   many: true,
     *   detail: true,
     * }
     */
    queryCacheUpdateMap?: OptimisticUpdateManyMapType<TData, TVariables>;
} & SuccessErrorNotification<
    UpdateManyResponse<TData>,
    TError,
    { ids: BaseKey[]; values: TVariables }
>;

type UseUpdateManyReturnType<
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables = {},
> = UseMutationResult<
    UpdateManyResponse<TData>,
    TError,
    UpdateManyParams<TData, TError, TVariables>,
    UpdateContext<TData>
> &
    UseLoadingOvertimeReturnType;

export type UseUpdateManyProps<
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables = {},
> = {
    mutationOptions?: Omit<
        UseMutationOptions<
            UpdateManyResponse<TData>,
            TError,
            UpdateManyParams<TData, TError, TVariables>,
            UpdateContext<TData>
        >,
        "mutationFn" | "onError" | "onSuccess" | "onSettled" | "onMutate"
    >;
} & UseLoadingOvertimeOptionsProps;

/**
 * `useUpdateMany` is a modified version of `react-query`'s {@link https://react-query.tanstack.com/reference/useMutation `useMutation`} for multiple update mutations.
 *
 * It uses `updateMany` method as mutation function from the `dataProvider` which is passed to `<Refine>`.
 *
 * @see {@link https://refine.dev/docs/api-reference/core/hooks/data/useUpdateMany} for more details.
 *
 * @typeParam TData - Result data of the query extends {@link https://refine.dev/docs/core/interfaceReferences#baserecord `BaseRecord`}
 * @typeParam TError - Custom error object that extends {@link https://refine.dev/docs/core/interfaceReferences#httperror `HttpError`}
 * @typeParam TVariables - Values for mutation function
 *
 */
export const useUpdateMany = <
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables = {},
>({
    mutationOptions,
    overtimeOptions,
}: UseUpdateManyProps<TData, TError, TVariables> = {}): UseUpdateManyReturnType<
    TData,
    TError,
    TVariables
> => {
    const { resources, select } = useResource();
    const queryClient = useQueryClient();
    const dataProvider = useDataProvider();
    const translate = useTranslate();
    const {
        mutationMode: mutationModeContext,
        undoableTimeout: undoableTimeoutContext,
    } = useMutationMode();
    const authProvider = useActiveAuthProvider();
    const { mutate: checkError } = useOnError({
        v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy),
    });
    const { notificationDispatch } = useCancelNotification();
    const publish = usePublish();
    const handleNotification = useHandleNotification();
    const invalidateStore = useInvalidate();
    const { log } = useLog();
    const getMeta = useMeta();
    const {
        options: { textTransformers },
    } = useRefineContext();
    const { keys, preferLegacyKeys } = useKeys();

    const mutation = useMutation<
        UpdateManyResponse<TData>,
        TError,
        UpdateManyParams<TData, TError, TVariables>,
        UpdateContext<TData>
    >(
        ({
            ids,
            values,
            resource: resourceName,
            onCancel,
            mutationMode,
            undoableTimeout,
            meta,
            metaData,
            dataProviderName,
        }: UpdateManyParams<TData, TError, TVariables>) => {
            const { resource, identifier } = select(resourceName);

            const combinedMeta = getMeta({
                resource,
                meta: pickNotDeprecated(meta, metaData),
            });

            const mutationModePropOrContext =
                mutationMode ?? mutationModeContext;

            const undoableTimeoutPropOrContext =
                undoableTimeout ?? undoableTimeoutContext;

            const selectedDataProvider = dataProvider(
                pickDataProvider(identifier, dataProviderName, resources),
            );

            const mutationFn = () => {
                if (selectedDataProvider.updateMany) {
                    return selectedDataProvider.updateMany<TData, TVariables>({
                        resource: resource.name,
                        ids,
                        variables: values,
                        meta: combinedMeta,
                        metaData: combinedMeta,
                    });
                } else {
                    return handleMultiple(
                        ids.map((id) =>
                            selectedDataProvider.update<TData, TVariables>({
                                resource: resource.name,
                                id,
                                variables: values,
                                meta: combinedMeta,
                                metaData: combinedMeta,
                            }),
                        ),
                    );
                }
            };

            if (!(mutationModePropOrContext === "undoable")) {
                return mutationFn();
            }

            const updatePromise = new Promise<UpdateManyResponse<TData>>(
                (resolve, reject) => {
                    const doMutation = () => {
                        mutationFn()
                            .then((result) => resolve(result))
                            .catch((err) => reject(err));
                    };

                    const cancelMutation = () => {
                        reject({ message: "mutationCancelled" });
                    };

                    if (onCancel) {
                        onCancel(cancelMutation);
                    }

                    notificationDispatch({
                        type: ActionTypes.ADD,
                        payload: {
                            id: ids,
                            resource: identifier,
                            cancelMutation: cancelMutation,
                            doMutation: doMutation,
                            seconds: undoableTimeoutPropOrContext,
                            isSilent: !!onCancel,
                        },
                    });
                },
            );
            return updatePromise;
        },

        {
            onMutate: async ({
                resource: resourceName,
                ids,
                values,
                mutationMode,
                dataProviderName,
                meta,
                metaData,
                queryCacheUpdateMap = { list: true, many: true, detail: true },
            }) => {
                const { identifier } = select(resourceName);
                const preferredMeta = pickNotDeprecated(meta, metaData);

                const queryKey = queryKeysReplacement(preferLegacyKeys)(
                    identifier,
                    pickDataProvider(identifier, dataProviderName, resources),
                    pickNotDeprecated(meta, metaData),
                );

                const resourceKeys = keys()
                    .data(
                        pickDataProvider(
                            identifier,
                            dataProviderName,
                            resources,
                        ),
                    )
                    .resource(identifier);

                const mutationModePropOrContext =
                    mutationMode ?? mutationModeContext;

                await queryClient.cancelQueries(
                    resourceKeys.get(preferLegacyKeys),
                    undefined,
                    {
                        silent: true,
                    },
                );

                const previousQueries = queryClient.getQueriesData<
                    QueryResponse<TData>
                >(resourceKeys.get(preferLegacyKeys));

                if (mutationModePropOrContext !== "pessimistic") {
                    if (queryCacheUpdateMap.list) {
                        // Set the previous queries to the new ones:
                        queryClient.setQueriesData(
                            resourceKeys
                                .action("list")
                                .params(preferredMeta ?? {})
                                .get(preferLegacyKeys),
                            (previous?: GetListResponse<TData> | null) => {
                                if (!previous) {
                                    return null;
                                }

                                if (
                                    typeof queryCacheUpdateMap.list ===
                                    "function"
                                ) {
                                    return queryCacheUpdateMap.list(
                                        previous,
                                        values,
                                        ids,
                                    );
                                }

                                const data = previous.data.map(
                                    (record: TData) => {
                                        if (
                                            record.id !== undefined &&
                                            ids
                                                .filter(
                                                    (id) => id !== undefined,
                                                )
                                                .map(String)
                                                .includes(record.id.toString())
                                        ) {
                                            return {
                                                ...record,
                                                ...values,
                                            };
                                        }

                                        return record;
                                    },
                                );

                                return {
                                    ...previous,
                                    data,
                                };
                            },
                        );
                    }

                    if (queryCacheUpdateMap.many) {
                        queryClient.setQueriesData(
                            resourceKeys.action("many").get(preferLegacyKeys),
                            (previous?: GetListResponse<TData> | null) => {
                                if (!previous) {
                                    return null;
                                }

                                if (
                                    typeof queryCacheUpdateMap.many ===
                                    "function"
                                ) {
                                    return queryCacheUpdateMap.many(
                                        previous,
                                        values,
                                        ids,
                                    );
                                }

                                const data = previous.data.map(
                                    (record: TData) => {
                                        if (
                                            record.id !== undefined &&
                                            ids
                                                .filter(
                                                    (id) => id !== undefined,
                                                )
                                                .map(String)
                                                .includes(record.id.toString())
                                        ) {
                                            return {
                                                ...record,
                                                ...values,
                                            };
                                        }
                                        return record;
                                    },
                                );
                                return {
                                    ...previous,
                                    data,
                                };
                            },
                        );
                    }

                    if (queryCacheUpdateMap.detail) {
                        for (const id of ids) {
                            queryClient.setQueriesData(
                                resourceKeys
                                    .action("one")
                                    .id(id)
                                    .params(preferredMeta ?? {})
                                    .get(preferLegacyKeys),
                                (previous?: GetListResponse<TData> | null) => {
                                    if (!previous) {
                                        return null;
                                    }

                                    if (
                                        typeof queryCacheUpdateMap.detail ===
                                        "function"
                                    ) {
                                        return queryCacheUpdateMap.detail(
                                            previous,
                                            values,
                                            id,
                                        );
                                    }

                                    const data = {
                                        ...previous.data,
                                        ...values,
                                    };
                                    return {
                                        ...previous,
                                        data,
                                    };
                                },
                            );
                        }
                    }
                }

                return {
                    previousQueries,
                    queryKey,
                };
            },
            onSettled: (
                _data,
                _error,
                { ids, resource: resourceName, dataProviderName },
            ) => {
                const { identifier } = select(resourceName);

                // invalidate the cache for the list and many queries:
                invalidateStore({
                    resource: identifier,
                    invalidates: ["list", "many"],
                    dataProviderName: pickDataProvider(
                        identifier,
                        dataProviderName,
                        resources,
                    ),
                });

                ids.forEach((id) =>
                    invalidateStore({
                        resource: identifier,
                        invalidates: ["detail"],
                        dataProviderName: pickDataProvider(
                            identifier,
                            dataProviderName,
                            resources,
                        ),
                        id,
                    }),
                );

                notificationDispatch({
                    type: ActionTypes.REMOVE,
                    payload: { id: ids, resource: identifier },
                });
            },
            onSuccess: (
                data,
                {
                    ids,
                    resource: resourceName,
                    meta,
                    metaData,
                    dataProviderName,
                    successNotification,
                    values,
                },
                context,
            ) => {
                const { resource, identifier } = select(resourceName);

                const resourceSingular = textTransformers.singular(identifier);

                const notificationConfig =
                    typeof successNotification === "function"
                        ? successNotification(data, { ids, values }, identifier)
                        : successNotification;

                handleNotification(notificationConfig, {
                    key: `${ids}-${identifier}-notification`,
                    description: translate(
                        "notifications.success",
                        "Successful",
                    ),
                    message: translate(
                        "notifications.editSuccess",
                        {
                            resource: translate(
                                `${identifier}.${identifier}`,
                                identifier,
                            ),
                        },
                        `Successfully updated ${resourceSingular}`,
                    ),
                    type: "success",
                });

                publish?.({
                    channel: `resources/${resource.name}`,
                    type: "updated",
                    payload: {
                        ids: ids.map(String),
                    },
                    date: new Date(),
                });

                const previousData: any[] = [];
                if (context) {
                    ids.forEach((id) => {
                        const queryData = queryClient.getQueryData<
                            UpdateManyResponse<TData>
                        >(context.queryKey.detail(id));

                        previousData.push(
                            Object.keys(values || {}).reduce<any>(
                                (acc, item: any) => {
                                    acc[item] = queryData?.data?.[item];
                                    return acc;
                                },
                                {},
                            ),
                        );
                    });
                }

                const combinedMeta = getMeta({
                    resource,
                    meta: pickNotDeprecated(meta, metaData),
                });

                const { fields, operation, variables, ...rest } =
                    combinedMeta || {};

                log?.mutate({
                    action: "updateMany",
                    resource: resource.name,
                    data: values,
                    previousData,
                    meta: {
                        ids,
                        dataProviderName: pickDataProvider(
                            identifier,
                            dataProviderName,
                            resources,
                        ),
                        ...rest,
                    },
                });
            },
            onError: (
                err: TError,
                { ids, resource: resourceName, errorNotification, values },
                context,
            ) => {
                const { identifier } = select(resourceName);

                // set back the queries to the context:
                if (context) {
                    for (const query of context.previousQueries) {
                        queryClient.setQueryData(query[0], query[1]);
                    }
                }

                if (err.message !== "mutationCancelled") {
                    checkError?.(err);

                    const resourceSingular =
                        textTransformers.singular(identifier);

                    const notificationConfig =
                        typeof errorNotification === "function"
                            ? errorNotification(
                                  err,
                                  { ids, values },
                                  identifier,
                              )
                            : errorNotification;

                    handleNotification(notificationConfig, {
                        key: `${ids}-${identifier}-updateMany-error-notification`,
                        message: translate(
                            "notifications.editError",
                            {
                                resource: resourceSingular,
                                statusCode: err.statusCode,
                            },
                            `Error when updating ${resourceSingular} (status code: ${err.statusCode})`,
                        ),
                        description: err.message,
                        type: "error",
                    });
                }
            },
            mutationKey: keys()
                .data()
                .mutation("updateMany")
                .get(preferLegacyKeys),
            ...mutationOptions,
        },
    );

    const { elapsedTime } = useLoadingOvertime({
        isLoading: mutation.isLoading,
        interval: overtimeOptions?.interval,
        onInterval: overtimeOptions?.onInterval,
    });

    return { ...mutation, overtime: { elapsedTime } };
};
