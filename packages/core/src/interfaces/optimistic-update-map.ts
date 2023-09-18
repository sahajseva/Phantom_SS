import { BaseKey, GetListResponse, GetManyResponse, GetOneResponse } from ".";

export type OptimisticUpdateMapType<TData, TVariables> = {
    list?:
        | ((
              previous: GetListResponse<TData> | null,
              values: TVariables,
              id: BaseKey,
          ) => GetListResponse<TData> | null)
        | boolean;
    many?:
        | ((
              previous: GetManyResponse<TData> | null,
              values: TVariables,
              id: BaseKey,
          ) => GetManyResponse<TData> | null)
        | boolean;
    detail?:
        | ((
              previous: GetOneResponse<TData> | null,
              values: TVariables,
              id: BaseKey,
          ) => GetOneResponse<TData> | null)
        | boolean;
};

export type OptimisticUpdateManyMapType<TData, TVariables> = {
    list?:
        | ((
              previous: GetListResponse<TData> | null,
              values: TVariables,
              ids: BaseKey[],
          ) => GetListResponse<TData> | null)
        | boolean;
    many?:
        | ((
              previous: GetManyResponse<TData> | null,
              values: TVariables,
              ids: BaseKey[],
          ) => GetManyResponse<TData> | null)
        | boolean;
    detail?:
        | ((
              previous: GetOneResponse<TData> | null,
              values: TVariables,
              id: BaseKey,
          ) => GetOneResponse<TData> | null)
        | boolean;
};
