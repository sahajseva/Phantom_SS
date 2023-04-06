import { QueryObserverResult } from "@tanstack/react-query";

import { RadioGroupProps } from "antd/lib/radio";
import {
    BaseKey,
    BaseRecord,
    GetListResponse,
    HttpError,
    pickNotDeprecated,
    useSelect,
    UseSelectProps,
} from "@refinedev/core";

export type UseRadioGroupReturnType<TData extends BaseRecord = BaseRecord> = {
    radioGroupProps: RadioGroupProps;
    queryResult: QueryObserverResult<GetListResponse<TData>>;
};

/**
 * `useRadioGroup` hook allows you to manage an Ant Design {@link https://ant.design/components/radio/#components-radio-demo-radiogroup-with-name Radio.Group} component when records in a resource needs to be used as radio options.
 *
 * @see {@link https://refine.dev/docs/ui-frameworks/antd/hooks/field/useRadioGroup} for more details.
 *
 * @typeParam TData - Result data of the query extends {@link https://refine.dev/docs/core/interfaceReferences#baserecord `BaseRecord`}
 *
 */

type UseRadioGroupProps<TData, TError, TSelectData> = Omit<
    UseSelectProps<TData, TError, TSelectData>,
    "defaultValue"
> & {
    /**
     * Sets the default value
     */
    defaultValue?: BaseKey;
};

export const useRadioGroup = <
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError,
    TSelectData extends BaseRecord = TData,
>({
    resource,
    sort,
    sorters,
    filters,
    optionLabel,
    optionValue,
    queryOptions,
    fetchSize,
    pagination,
    liveMode,
    defaultValue,
    onLiveEvent,
    liveParams,
    meta,
    metaData,
    dataProviderName,
}: UseRadioGroupProps<
    TData,
    TError,
    TSelectData
>): UseRadioGroupReturnType<TSelectData> => {
    const { queryResult, options } = useSelect({
        resource,
        sort,
        sorters,
        filters,
        optionLabel,
        optionValue,
        queryOptions,
        fetchSize,
        pagination,
        liveMode,
        defaultValue,
        onLiveEvent,
        liveParams,
        meta: pickNotDeprecated(meta, metaData),
        metaData: pickNotDeprecated(meta, metaData),
        dataProviderName,
    });

    return {
        radioGroupProps: {
            options,
            defaultValue,
        },
        queryResult,
    };
};
