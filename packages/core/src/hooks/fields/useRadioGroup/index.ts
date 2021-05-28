import React from "react";
import { RadioGroupProps } from "antd/lib/radio";
import { QueryObserverResult } from "react-query";

import { useList } from "@hooks";
import {
    CrudSorting,
    BaseRecord,
    Option,
    GetListResponse,
    CrudFilters,
} from "../../../interfaces";

export type useRadioGroupProps = RadioGroupProps & {
    resource: string;
    optionLabel?: string;
    optionValue?: string;
    sort?: CrudSorting;
    filters?: CrudFilters;
};

export type UseRadioGroupReturnType<TData extends BaseRecord = BaseRecord> = {
    radioGroupProps: RadioGroupProps;
    queryResult: QueryObserverResult<GetListResponse<TData>>;
};

export const useRadioGroup = <TData extends BaseRecord = BaseRecord>({
    resource,
    sort,
    filters,
    optionLabel = "title",
    optionValue = "id",
}: useRadioGroupProps): UseRadioGroupReturnType => {
    const [options, setOptions] = React.useState<Option[]>([]);

    const queryResult = useList<TData>(
        resource,
        {
            sort,
            filters,
        },
        {
            onSuccess: (data) => {
                setOptions(() =>
                    data.data.map((item) => ({
                        label: item[optionLabel],
                        value: item[optionValue],
                    })),
                );
            },
        },
    );

    return {
        radioGroupProps: {
            options,
        },
        queryResult,
    };
};
