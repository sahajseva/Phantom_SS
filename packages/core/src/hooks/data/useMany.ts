import { useContext } from "react";
import { QueryObserverResult, useQuery, UseQueryOptions } from "react-query";

import { DataContext } from "@contexts/data";
import {
    IDataContext,
    BaseRecord,
    Identifier,
    GetManyResponse,
    HttpError,
} from "../../interfaces";
import { useNotification, useCheckError } from "@hooks";
import { useTranslate } from "@hooks/translate";

export const useMany = <
    TData extends BaseRecord = BaseRecord,
    TError extends HttpError = HttpError
>(
    resource: string,
    ids: Identifier[],
    options?: UseQueryOptions<GetManyResponse<TData>, TError>,
): QueryObserverResult<GetManyResponse<TData>> => {
    const { getMany } = useContext<IDataContext>(DataContext);
    const notification = useNotification();
    const translate = useTranslate();
    const checkError = useCheckError();

    const queryResponse = useQuery<GetManyResponse<TData>, TError>(
        [`resource/getMany/${resource}`, ids],
        () => getMany<TData>(resource, ids),
        {
            ...options,
            onError: (err: TError) => {
                checkError?.(err);
                options?.onError?.(err);

                notification.error({
                    key: `${ids[0]}-${resource}-notification`,
                    message: translate(
                        "common:notifications.error",
                        { statusCode: err.statusCode },
                        `Error (status code: ${err.statusCode})`,
                    ),
                    description: err.message,
                });
            },
        },
    );

    return queryResponse;
};
