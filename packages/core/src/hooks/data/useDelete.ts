import { useQueryClient, useMutation, UseMutationResult } from "react-query";

import {
    useMutationMode,
    useCancelNotification,
    useTranslate,
    useCheckError,
    usePublish,
    useHandleNotification,
    useDataProvider,
} from "@hooks";
import { ActionTypes } from "@contexts/undoableQueue";
import pluralize from "pluralize";
import {
    DeleteOneResponse,
    MutationMode,
    PrevContext as DeleteContext,
    BaseRecord,
    HttpError,
    GetListResponse,
    SuccessErrorNotification,
    MetaDataQuery,
    PreviousQuery,
} from "../../interfaces";

type DeleteParams = {
    id: string;
    resource: string;
    mutationMode?: MutationMode;
    undoableTimeout?: number;
    onCancel?: (cancelMutation: () => void) => void;
    metaData?: MetaDataQuery;
    dataProviderName?: string;
} & SuccessErrorNotification;

type UseDeleteReturnType<
    TData extends BaseRecord = BaseRecord,
    TError = HttpError,
> = UseMutationResult<
    DeleteOneResponse<TData>,
    TError,
    DeleteParams,
    DeleteContext<TData>
>;

/**
 * `useDelete` is a modified version of `react-query`'s {@link https://react-query.tanstack.com/reference/useMutation `useMutation`} for delete mutations.
 *
 * It uses `deleteOne` method as mutation function from the `dataProvider` which is passed to `<Refine>`.
 *
 * @see {@link https://refine.dev/docs/api-references/hooks/data/useDelete} for more details.
 *
 * @typeParam TData - Result data of the query extends {@link https://refine.dev/docs/api-references/interfaceReferences#baserecord `BaseRecord`}
 * @typeParam TError - Custom error object that extends {@link https://refine.dev/docs/api-references/interfaceReferences#httperror `HttpError`}
 * @typeParam TVariables - Values for params. default `{}`
 *
 */
export const useDelete = <
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
>(): UseDeleteReturnType<TData, TError> => {
    const { mutate: checkError } = useCheckError();
    const dataProvider = useDataProvider();

    const queryClient = useQueryClient();

    const {
        mutationMode: mutationModeContext,
        undoableTimeout: undoableTimeoutContext,
    } = useMutationMode();

    const { notificationDispatch } = useCancelNotification();
    const translate = useTranslate();
    const publish = usePublish();
    const handleNotification = useHandleNotification();

    const mutation = useMutation<
        DeleteOneResponse<TData>,
        TError,
        DeleteParams,
        DeleteContext<TData>
    >(
        ({
            id,
            mutationMode,
            undoableTimeout,
            resource,
            onCancel,
            metaData,
            dataProviderName,
        }) => {
            const mutationModePropOrContext =
                mutationMode ?? mutationModeContext;

            const undoableTimeoutPropOrContext =
                undoableTimeout ?? undoableTimeoutContext;

            if (!(mutationModePropOrContext === "undoable")) {
                return dataProvider(dataProviderName).deleteOne<TData>({
                    resource,
                    id,
                    metaData,
                });
            }

            const deletePromise = new Promise<DeleteOneResponse<TData>>(
                (resolve, reject) => {
                    const doMutation = () => {
                        dataProvider(dataProviderName)
                            .deleteOne<TData>({ resource, id, metaData })
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
                            id,
                            resource: resource,
                            cancelMutation: cancelMutation,
                            doMutation: doMutation,
                            seconds: undoableTimeoutPropOrContext,
                            isSilent: !!onCancel,
                        },
                    });
                },
            );
            return deletePromise;
        },
        {
            onMutate: async ({ id, resource, mutationMode }) => {
                const mutationModePropOrContext =
                    mutationMode ?? mutationModeContext;

                await queryClient.cancelQueries(resource, undefined, {
                    silent: true,
                });

                const previousQueries: PreviousQuery<TData>[] =
                    queryClient.getQueriesData([resource]);

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
                                    const data = previous.data.filter(
                                        (record: TData) =>
                                            record.id?.toString() !==
                                            id.toString(),
                                    );

                                    return {
                                        data,
                                        total: previous.total - 1,
                                    };
                                },
                            );
                        } else {
                            queryClient.invalidateQueries([resource]);
                        }
                    }
                }

                console.log("previousQueries", previousQueries);

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
                        queryClient.setQueryData([query[0]], [query[1]]);
                    }
                }

                if (err.message !== "mutationCancelled") {
                    checkError(err);

                    const resourceSingular = pluralize.singular(resource);

                    handleNotification(errorNotification, {
                        key: `${id}-${resource}-notification`,
                        message: translate(
                            "notifications.deleteError",
                            {
                                resource: resourceSingular,
                                statusCode: err.statusCode,
                            },
                            `Error (status code: ${err.statusCode})`,
                        ),
                        description: err.message,
                        type: "error",
                    });
                }
            },
            onSuccess: (_data, { id, resource, successNotification }) => {
                const resourceSingular = pluralize.singular(resource);

                const listQueries = queryClient.getQueriesData([
                    resource,
                    "list",
                ]);

                const detailQueries = queryClient.getQueriesData([
                    resource,
                    "detail",
                    id,
                ]);

                const getManyQueries = queryClient.getQueriesData([
                    resource,
                    "getMany",
                ]);

                if (getManyQueries.length > 0) {
                    queryClient.removeQueries(getManyQueries);
                }

                if (detailQueries.length > 0) {
                    queryClient.removeQueries(detailQueries);
                }

                queryClient.invalidateQueries(listQueries);

                handleNotification(successNotification, {
                    key: `${id}-${resource}-notification`,
                    description: translate("notifications.success", "Success"),
                    message: translate(
                        "notifications.deleteSuccess",
                        {
                            resource: translate(
                                `${resource}.${resource}`,
                                resourceSingular,
                            ),
                        },
                        `Successfully deleted a ${resourceSingular}`,
                    ),
                    type: "success",
                });

                publish?.({
                    channel: `resources/${resource}`,
                    type: "deleted",
                    payload: {
                        ids: id ? [id.toString()] : [],
                    },
                    date: new Date(),
                });
            },
            onSettled: (_data, _error, { id, resource }) => {
                notificationDispatch({
                    type: ActionTypes.REMOVE,
                    payload: { id, resource },
                });
            },
        },
    );

    return mutation;
};
