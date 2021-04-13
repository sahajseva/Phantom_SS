import { useContext } from "react";
import { useQueryClient, useMutation, UseMutationResult } from "react-query";

import { DataContext } from "@contexts/data";
import { IDataContext, BaseRecord, CreateManyResponse } from "../../interfaces";
import { useListResourceQueries } from "@hooks";

type UseCreateManyReturnType<
    T extends BaseRecord = BaseRecord
> = UseMutationResult<
    CreateManyResponse,
    unknown,
    { resource: string; values: T[] },
    unknown
>;

export const useCreateMany = <
    TParams extends BaseRecord = BaseRecord
>(): UseCreateManyReturnType<TParams> => {
    const { createMany } = useContext<IDataContext>(DataContext);
    const getAllQueries = useListResourceQueries();
    const queryClient = useQueryClient();

    const mutation = useMutation(
        ({ resource, values }: { resource: string; values: TParams[] }) =>
            createMany<TParams>(resource, values),
        {
            onSuccess: (_, { resource }) => {
                getAllQueries(resource).forEach((query) => {
                    queryClient.invalidateQueries(query.queryKey);
                });
            },
        },
    );

    return mutation;
};
