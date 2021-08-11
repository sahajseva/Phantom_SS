import { useState } from "react";
import { useParams } from "react-router-dom";
import { QueryObserverResult } from "react-query";
import { ListProps } from "antd/lib/list";
import { FormProps } from "antd/lib/form";
import { useForm } from "antd/lib/form/Form";

import { useResourceWithRoute, useList } from "@hooks";

import {
    ResourceRouterParams,
    BaseRecord,
    CrudFilters,
    CrudSorting,
    GetListResponse,
    SuccessErrorNotification,
} from "../../../interfaces";

export type useSimpleListProps<TData, TSearchVariables = unknown> =
    ListProps<TData> & {
        resource?: string;
        filters?: CrudFilters;
        sorter?: CrudSorting;
        onSearch?: (
            data: TSearchVariables,
        ) => CrudFilters | Promise<CrudFilters>;
    } & SuccessErrorNotification;

export type useSimpleListReturnType<
    TData extends BaseRecord = BaseRecord,
    TSearchVariables = unknown,
> = {
    listProps: ListProps<TData>;
    queryResult: QueryObserverResult<GetListResponse<TData>>;
    searchFormProps: FormProps<TSearchVariables>;
};

/**
 * By using `useSimpleList` you get props for your records from API in accordance with Ant Design {@link https://ant.design/components/list/ `<List>`} component.
 * All features such as pagination, sorting come out of the box.
 *
 * @see {@link https://refine.dev/docs/api-references/hooks/show/useSimpleList} for more details.
 */
export const useSimpleList = <
    TData extends BaseRecord = BaseRecord,
    TSearchVariables = unknown,
>({
    resource: resourceFromProp,
    sorter,
    onSearch,
    successNotification,
    errorNotification,
    ...listProps
}: useSimpleListProps<TData, TSearchVariables>): useSimpleListReturnType<
    TData,
    TSearchVariables
> => {
    const { resource: routeResourceName } = useParams<ResourceRouterParams>();

    const [form] = useForm<TSearchVariables>();

    const resourceWithRoute = useResourceWithRoute();
    const resource = resourceWithRoute(resourceFromProp ?? routeResourceName);

    let defaultPageSize = 10;
    if (listProps.pagination && listProps.pagination.pageSize) {
        defaultPageSize = listProps.pagination.pageSize;
    }

    let defaultCurrent = 1;
    if (listProps.pagination && listProps.pagination.current) {
        defaultCurrent = listProps.pagination.current;
    }

    const [current, setCurrent] = useState(defaultCurrent);
    const [pageSize, setPageSize] = useState(defaultPageSize);
    const [filters, setFilters] = useState<CrudFilters>([]);

    console.log("listprops 222", listProps.pagination);

    const queryResult = useList<TData>(
        resource.name,
        {
            pagination: {
                current,
                pageSize,
                ...listProps.pagination,
            },
            filters,
            sort: sorter,
        },
        undefined,
        successNotification,
        errorNotification,
    );
    const { data, isFetching } = queryResult;

    console.log("data", data);

    const onChange = (page: number, pageSize?: number): void => {
        setCurrent(page);
        setPageSize(pageSize || 10);
    };

    const onFinish = async (values: TSearchVariables) => {
        if (onSearch) {
            const filters = await onSearch(values);
            setCurrent(1);
            return setFilters(filters);
        }
    };

    return {
        searchFormProps: {
            form,
            onFinish,
        },
        listProps: {
            ...listProps,
            dataSource: data?.data,
            loading: isFetching,
            pagination: {
                ...listProps.pagination,
                total: data?.total,
                pageSize,
                current,
                onChange,
            },
        },
        queryResult,
    };
};
