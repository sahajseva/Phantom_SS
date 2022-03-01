import { BaseRecord, GetListResponse, GetOneResponse } from "../interfaces";
import { QueryKey } from "react-query";

export type MutationMode = "pessimistic" | "optimistic" | "undoable";

export type QueryResponse<T = BaseRecord> =
    | GetListResponse<T>
    | GetOneResponse<T>;

export type PreviousQuery<TData> = [QueryKey, TData | unknown];

export type PrevContext<TData> = {
    previousQueries: PreviousQuery<TData>[];
};
