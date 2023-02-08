import {
    useInfiniteQuery,
    UseInfiniteQueryOptions,
    InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import {
    CrudFilters,
    Pagination,
    BaseRecord,
    HttpError,
    CrudSorting,
    MetaDataQuery,
    SuccessErrorNotification,
    LiveModeProps,
    GetListResponse,
} from "../../interfaces";
import {
    useResource,
    useCheckError,
    useHandleNotification,
    useResourceSubscription,
    useTranslate,
    useDataProvider,
} from "@hooks";
import {
    queryKeys,
    pickDataProvider,
    getNextPageParam,
    getPreviousPageParam,
} from "@definitions/helpers";

export interface UseInfiniteListConfig {
    pagination?: Pagination;
    hasPagination?: boolean;
    sort?: CrudSorting;
    filters?: CrudFilters;
}

export type UseInfiniteListProps<TData, TError> = {
    /**
     * Resource name for API data interactions
     */
    resource: string;
    /**
     * Configuration for pagination, sorting and filtering
     * @type [`useInfiniteListConfig`](/docs/api-reference/core/hooks/data/useInfiniteList/#config-parameters)
     * @deprecated `config` property is deprecated. Use `pagination`, `hasPagination`, `sorters` and `filters` instead.
     */
    config?: UseInfiniteListConfig;
    /**
     * Pagination properties
     */
    pagination?: Pagination;
    /**
     * Whether to use server-side pagination or not
     */
    hasPagination?: boolean;
    /**
     * Sorter parameters
     */
    sorters?: CrudSorting;
    /**
     * Filter parameters
     */
    filters?: CrudFilters;
    /**
     * Tanstack Query's [useInfiniteQuery](https://tanstack.com/query/v4/docs/react/reference/useInfiniteQuery) options
     */
    queryOptions?: UseInfiniteQueryOptions<GetListResponse<TData>, TError>;
    /**
     *  Metadata query for `dataProvider`
     */
    metaData?: MetaDataQuery;
    /**
     * If there is more than one `dataProvider`, you should use the `dataProviderName` that you will use
     */
    dataProviderName?: string;
} & SuccessErrorNotification &
    LiveModeProps;

/**
 * `useInfiniteList` is a modified version of `react-query`'s {@link https://tanstack.com/query/latest/docs/react/guides/infinite-queries `useInfiniteQuery`} used for retrieving items from a `resource` with pagination, sort, and filter configurations.
 *
 * It uses the `getList` method as the query function from the `dataProvider` which is passed to `<Refine>`.
 *
 * @see {@link https://refine.dev/docs/core/hooks/data/useInfiniteList} for more details.
 *
 * @typeParam TData - Result data of the query extends {@link https://refine.dev/docs/core/interfaceReferences#baserecord `BaseRecord`}
 * @typeParam TError - Custom error object that extends {@link https://refine.dev/docs/core/interfaceReferences#httperror `HttpError`}
 *
 */
export const useInfiniteList = <
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
>({
    resource,
    config,
    filters,
    hasPagination,
    pagination,
    sorters,
    queryOptions,
    successNotification,
    errorNotification,
    metaData,
    liveMode,
    onLiveEvent,
    liveParams,
    dataProviderName,
}: UseInfiniteListProps<TData, TError>): InfiniteQueryObserverResult<
    GetListResponse<TData>,
    TError
> => {
    const { resources } = useResource();
    const dataProvider = useDataProvider();
    const queryKey = queryKeys(
        resource,
        pickDataProvider(resource, dataProviderName, resources),
        metaData,
    );
    const { getList } = dataProvider(
        pickDataProvider(resource, dataProviderName, resources),
    );

    const translate = useTranslate();
    const { mutate: checkError } = useCheckError();
    const handleNotification = useHandleNotification();

    const isEnabled =
        queryOptions?.enabled === undefined || queryOptions?.enabled === true;

    useResourceSubscription({
        resource,
        types: ["*"],
        params: {
            metaData,
            pagination: pagination ?? config?.pagination,
            hasPagination: hasPagination ?? config?.hasPagination,
            sort: sorters ?? config?.sort,
            sorters: sorters ?? config?.sort,
            filters: filters ?? config?.filters,
            subscriptionType: "useList",
            ...liveParams,
        },
        channel: `resources/${resource}`,
        enabled: isEnabled,
        liveMode,
        onLiveEvent,
    });

    const queryResponse = useInfiniteQuery<GetListResponse<TData>, TError>(
        queryKey.list({
            filters: filters ?? config?.filters,
            hasPagination: hasPagination ?? config?.hasPagination,
            pagination: pagination ?? config?.pagination,
            sort: sorters ?? config?.sort,
        }),
        ({ queryKey, pageParam, signal }) => {
            const paginationProperties = {
                ...(pagination ?? config?.pagination),
                current: pageParam,
            };

            return getList<TData>({
                resource,
                filters: filters ?? config?.filters,
                sort: sorters ?? config?.sort,
                pagination: paginationProperties,
                hasPagination: hasPagination ?? config?.hasPagination,
                metaData: {
                    ...metaData,
                    queryContext: {
                        queryKey,
                        pageParam,
                        signal,
                    },
                },
            }).then(({ data, total, ...rest }) => {
                return {
                    data,
                    total,
                    pagination: paginationProperties,
                    ...rest,
                };
            });
        },
        {
            getNextPageParam: (lastPage) => getNextPageParam(lastPage),
            getPreviousPageParam: (lastPage) => getPreviousPageParam(lastPage),
            ...queryOptions,
            onSuccess: (data) => {
                queryOptions?.onSuccess?.(data);

                const notificationConfig =
                    typeof successNotification === "function"
                        ? successNotification(
                              data,
                              {
                                  metaData,
                                  filters: filters ?? config?.filters,
                                  hasPagination:
                                      hasPagination ?? config?.hasPagination,
                                  pagination: pagination ?? config?.pagination,
                                  sorters: sorters ?? config?.sort,
                                  config,
                              },
                              resource,
                          )
                        : successNotification;

                handleNotification(notificationConfig);
            },
            onError: (err: TError) => {
                checkError(err);
                queryOptions?.onError?.(err);

                const notificationConfig =
                    typeof errorNotification === "function"
                        ? errorNotification(
                              err,
                              {
                                  metaData,
                                  filters: filters ?? config?.filters,
                                  hasPagination:
                                      hasPagination ?? config?.hasPagination,
                                  pagination: pagination ?? config?.pagination,
                                  sorters: sorters ?? config?.sort,
                                  config,
                              },
                              resource,
                          )
                        : errorNotification;

                handleNotification(notificationConfig, {
                    key: `${resource}-useInfiniteList-notification`,
                    message: translate(
                        "notifications.error",
                        { statusCode: err.statusCode },
                        `Error (status code: ${err.statusCode})`,
                    ),
                    description: err.message,
                    type: "error",
                });
            },
        },
    );

    return queryResponse;
};
