import { useContext } from "react";
import { useMutation, UseMutationResult, useQueryClient } from "react-query";
import { notification } from "antd";
import { DataContext } from "@contexts/data";
import { ActionTypes } from "@contexts/notification";
import {
    BaseRecord,
    IDataContext,
    UpdateResponse,
    QueryResponse,
    MutationMode,
    Context as UpdateContext,
    ContextQuery,
    HttpError,
} from "../../interfaces";
import pluralize from "pluralize";
import {
    useMutationMode,
    useCancelNotification,
    useCacheQueries,
    useTranslate,
    useCheckError,
} from "@hooks";

type UpdateParams<TVariables> = {
    id: string;
    resource: string;
    mutationMode?: MutationMode;
    undoableTimeout?: number;
    onCancel?: (cancelMutation: () => void) => void;
    values: TVariables;
};

export type UseUpdateReturnType<
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables = {},
> = UseMutationResult<
    UpdateResponse<TData>,
    TError,
    UpdateParams<TVariables>,
    UpdateContext
>;

export const useUpdate = <
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TVariables = {},
>(): UseUpdateReturnType<TData, TError, TVariables> => {
    const queryClient = useQueryClient();
    const { update } = useContext<IDataContext>(DataContext);
    const {
        mutationMode: mutationModeContext,
        undoableTimeout: undoableTimeoutContext,
    } = useMutationMode();
    const translate = useTranslate();
    const { mutate: checkError } = useCheckError();

    const { notificationDispatch } = useCancelNotification();

    const getAllQueries = useCacheQueries();

    const mutation = useMutation<
        UpdateResponse<TData>,
        TError,
        UpdateParams<TVariables>,
        UpdateContext
    >(
        ({ id, values, resource, mutationMode, undoableTimeout, onCancel }) => {
            const mutationModePropOrContext =
                mutationMode ?? mutationModeContext;

            const undoableTimeoutPropOrContext =
                undoableTimeout ?? undoableTimeoutContext;

            if (!(mutationModePropOrContext === "undoable")) {
                return update<TData, TVariables>(resource, id, values);
            }
            const updatePromise = new Promise<UpdateResponse<TData>>(
                (resolve, reject) => {
                    const updateTimeout = setTimeout(() => {
                        update<TData, TVariables>(resource, id, values)
                            .then((result) => resolve(result))
                            .catch((err) => reject(err));
                    }, undoableTimeoutPropOrContext);

                    const cancelMutation = () => {
                        clearTimeout(updateTimeout);
                        reject({ message: "mutationCancelled" });
                    };

                    if (onCancel) {
                        onCancel(cancelMutation);
                    } else {
                        notificationDispatch({
                            type: ActionTypes.ADD,
                            payload: {
                                id: id,
                                resource: resource,
                                cancelMutation: cancelMutation,
                                seconds: undoableTimeoutPropOrContext,
                            },
                        });
                    }
                },
            );
            return updatePromise;
        },
        {
            onMutate: async ({ resource, id, mutationMode, values }) => {
                const previousQueries: ContextQuery[] = [];

                const allQueries = getAllQueries(resource, id);

                const mutationModePropOrContext =
                    mutationMode ?? mutationModeContext;

                for (const queryItem of allQueries) {
                    const { queryKey } = queryItem;
                    await queryClient.cancelQueries(queryKey);

                    const previousQuery =
                        queryClient.getQueryData<QueryResponse<TData>>(
                            queryKey,
                        );

                    if (!(mutationModePropOrContext === "pessimistic")) {
                        if (previousQuery) {
                            previousQueries.push({
                                query: previousQuery,
                                queryKey,
                            });

                            if (
                                queryKey.includes(`resource/list/${resource}`)
                            ) {
                                const { data } = previousQuery;

                                queryClient.setQueryData(queryKey, {
                                    ...previousQuery,
                                    data: data.map((record: TData) => {
                                        if (record.id === id) {
                                            return {
                                                ...values,
                                                id: id,
                                            };
                                        }
                                        return record;
                                    }),
                                });
                            } else {
                                queryClient.setQueryData(queryKey, {
                                    data: {
                                        ...previousQuery.data,
                                        ...values,
                                    },
                                });
                            }
                        }
                    }
                }

                return {
                    previousQueries: previousQueries,
                };
            },
            onError: (err: TError, { id, resource }, context) => {
                if (context) {
                    for (const query of context.previousQueries) {
                        queryClient.setQueryData(query.queryKey, query.query);
                    }
                }

                notificationDispatch({
                    type: ActionTypes.REMOVE,
                    payload: {
                        id,
                    },
                });

                if (err.message !== "mutationCancelled") {
                    checkError?.(err);

                    const resourceSingular = pluralize.singular(resource);

                    notification.error({
                        key: `${id}-${resource}-notification`,
                        message: translate(
                            "notifications.editError",
                            {
                                resource: resourceSingular,
                                statusCode: err.statusCode,
                            },
                            `Error when updating ${resourceSingular} (status code: ${err.statusCode})`,
                        ),
                        description: err.message,
                    });
                }
            },
            onSettled: (_data, _error, { id, resource }) => {
                const allQueries = getAllQueries(resource, id);
                for (const query of allQueries) {
                    queryClient.invalidateQueries(query.queryKey);
                }
            },
            onSuccess: (_data, { id, resource }) => {
                const resourceSingular = pluralize.singular(resource);

                notification.success({
                    key: `${id}-${resource}-notification`,
                    message: translate("notifications.success", "Successful"),
                    description: translate(
                        "notifications.editSuccess",
                        { resource: resourceSingular },
                        `Successfully updated ${resourceSingular}`,
                    ),
                });
            },
        },
    );

    return mutation;
};
