import { useMutation, UseMutationResult, useQueryClient } from "react-query";

import { ActionTypes } from "@contexts/undoableQueue";
import {
    BaseRecord,
    UpdateResponse,
    MutationMode,
    PrevContext as UpdateContext,
    HttpError,
    SuccessErrorNotification,
    MetaDataQuery,
    PreviousQuery,
    GetListResponse,
} from "../../interfaces";
import pluralize from "pluralize";
import {
    useMutationMode,
    useCancelNotification,
    useTranslate,
    useCheckError,
    usePublish,
    useHandleNotification,
    useDataProvider,
} from "@hooks";

type UpdateParams<TVariables> = {
    id: string;
    resource: string;
    mutationMode?: MutationMode;
    undoableTimeout?: number;
    onCancel?: (cancelMutation: () => void) => void;
    values: TVariables;
    metaData?: MetaDataQuery;
    dataProviderName?: string;
} & SuccessErrorNotification;

export type UseUpdateReturnType<
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables = {},
> = UseMutationResult<
    UpdateResponse<TData>,
    TError,
    UpdateParams<TVariables>,
    UpdateContext<TData>
>;

/**
 * `useUpdate` is a modified version of `react-query`'s {@link https://react-query.tanstack.com/reference/useMutation `useMutation`} for update mutations.
 *
 * It uses `update` method as mutation function from the `dataProvider` which is passed to `<Refine>`.
 *
 * @see {@link https://refine.dev/docs/api-references/hooks/data/useUpdate} for more details.
 *
 * @typeParam TData - Result data of the query extends {@link https://refine.dev/docs/api-references/interfaceReferences#baserecord `BaseRecord`}
 * @typeParam TError - Custom error object that extends {@link https://refine.dev/docs/api-references/interfaceReferences#httperror `HttpError`}
 * @typeParam TVariables - Values for mutation function
 *
 */
export const useUpdate = <
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables = {},
>(): UseUpdateReturnType<TData, TError, TVariables> => {
    const queryClient = useQueryClient();
    const dataProvider = useDataProvider();

    const {
        mutationMode: mutationModeContext,
        undoableTimeout: undoableTimeoutContext,
    } = useMutationMode();
    const translate = useTranslate();
    const { mutate: checkError } = useCheckError();
    const publish = usePublish();
    const { notificationDispatch } = useCancelNotification();
    const handleNotification = useHandleNotification();

    const mutation = useMutation<
        UpdateResponse<TData>,
        TError,
        UpdateParams<TVariables>,
        UpdateContext<TData>
    >(
        ({
            id,
            values,
            resource,
            mutationMode,
            undoableTimeout,
            onCancel,
            metaData,
            dataProviderName,
        }) => {
            const mutationModePropOrContext =
                mutationMode ?? mutationModeContext;

            const undoableTimeoutPropOrContext =
                undoableTimeout ?? undoableTimeoutContext;

            if (!(mutationModePropOrContext === "undoable")) {
                return dataProvider(dataProviderName).update<TData, TVariables>(
                    {
                        resource,
                        id,
                        variables: values,
                        metaData,
                    },
                );
            }
            const updatePromise = new Promise<UpdateResponse<TData>>(
                (resolve, reject) => {
                    const doMutation = () => {
                        dataProvider(dataProviderName)
                            .update<TData, TVariables>({
                                resource,
                                id,
                                variables: values,
                                metaData,
                            })
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
                            id: id,
                            resource: resource,
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
            onMutate: async ({ resource, id, mutationMode, values }) => {
                const previousQueries: PreviousQuery<TData>[] =
                    queryClient.getQueriesData([resource]);

                const mutationModePropOrContext =
                    mutationMode ?? mutationModeContext;

                await queryClient.cancelQueries(resource, undefined, {
                    silent: true,
                });

                if (!(mutationModePropOrContext === "pessimistic")) {
                    if (previousQueries) {
                        const listQueries = queryClient.getQueriesData([
                            resource,
                            "list",
                        ]);

                        if (listQueries.length > 0) {
                            queryClient.setQueriesData(
                                [resource, "list"],
                                (previous?: GetListResponse<TData> | null) => {
                                    if (!previous) {
                                        return null;
                                    }
                                    const data = previous.data.map(
                                        (record: TData) => {
                                            if (
                                                record.id?.toString() ===
                                                id.toString()
                                            ) {
                                                return {
                                                    id: Number(id),
                                                    ...values,
                                                } as unknown as TData;
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

                        queryClient.setQueriesData(
                            [resource, "getMany"],
                            (previous?: GetListResponse<TData> | null) => {
                                if (!previous) {
                                    return null;
                                }

                                const data = previous.data.map(
                                    (record: TData) => {
                                        if (
                                            record.id?.toString() ===
                                            id.toString()
                                        ) {
                                            record = {
                                                id: Number(id),
                                                ...values,
                                            } as unknown as TData;
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

                        queryClient.setQueriesData(
                            [resource, "detail", id],
                            (previous?: GetListResponse<TData> | null) => {
                                if (!previous) {
                                    return null;
                                }

                                return {
                                    ...previous,
                                    data: {
                                        ...previous.data,
                                        ...values,
                                    },
                                };
                            },
                        );
                    }
                }

                return {
                    previousQueries: previousQueries,
                };
            },
            onError: (
                err: TError,
                { id, resource, errorNotification },
                context,
            ) => {
                if (context) {
                    for (const query of context.previousQueries) {
                        queryClient.setQueryData(query[0], query[1]);
                    }
                }

                if (err.message !== "mutationCancelled") {
                    checkError?.(err);

                    const resourceSingular = pluralize.singular(resource);

                    handleNotification(errorNotification, {
                        key: `${id}-${resource}-notification`,
                        message: translate(
                            "notifications.editError",
                            {
                                resource: translate(
                                    `${resource}.${resource}`,
                                    resourceSingular,
                                ),
                                statusCode: err.statusCode,
                            },
                            `Error when updating ${resourceSingular} (status code: ${err.statusCode})`,
                        ),
                        description: err.message,
                        type: "error",
                    });
                }
            },
            onSettled: (_data, _error, { id, resource }) => {
                queryClient.invalidateQueries([resource]);

                notificationDispatch({
                    type: ActionTypes.REMOVE,
                    payload: { id, resource },
                });
            },
            onSuccess: (data, { id, resource, successNotification }) => {
                const resourceSingular = pluralize.singular(resource);

                handleNotification(successNotification, {
                    key: `${id}-${resource}-notification`,
                    description: translate(
                        "notifications.success",
                        "Successful",
                    ),
                    message: translate(
                        "notifications.editSuccess",
                        {
                            resource: translate(
                                `${resource}.${resource}`,
                                resourceSingular,
                            ),
                        },
                        `Successfully updated ${resourceSingular}`,
                    ),
                    type: "success",
                });

                publish?.({
                    channel: `resources/${resource}`,
                    type: "updated",
                    payload: {
                        ids: data.data?.id
                            ? [data.data.id.toString()]
                            : undefined,
                    },
                    date: new Date(),
                });
            },
        },
    );

    return mutation;
};
