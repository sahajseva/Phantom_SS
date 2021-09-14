import axios, { AxiosInstance } from "axios";
import {
    DataProvider as IDataProvider,
    HttpError,
    CrudFilters,
    CrudSorting,
} from "@pankod/refine";
import { stringify } from "query-string";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const customError: HttpError = {
            ...error,
            message: error.response?.data?.message,
            statusCode: error.response?.status,
        };

        return Promise.reject(customError);
    },
);

const generateSort = (sort?: CrudSorting) => {
    const _sort: string[] = [];

    if (sort) {
        sort.map((item) => {
            if (item.order) {
                _sort.push(`${item.field}:${item.order}`);
            }
        });
    }

    return _sort;
};

const generateFilter = (filters?: CrudFilters) => {
    const queryFilters: { [key: string]: string } = {};
    if (filters) {
        filters.map(({ field, operator, value }) => {
            queryFilters[`${field}_${operator}`] = value;
        });
    }

    return queryFilters;
};

export const DataProvider = (
    apiUrl: string,
    httpClient: AxiosInstance = axiosInstance,
): IDataProvider => ({
    getList: async (resource, params) => {
        const url = `${apiUrl}/${resource}`;
        const { pagination } = params;

        const current = pagination?.current || 1;
        const pageSize = pagination?.pageSize || 10;

        const { sort, filters } = params;
        const _sort = generateSort(sort);
        const queryFilters = generateFilter(filters);

        const query = {
            _start: (current - 1) * pageSize,
            _limit: current * pageSize,
            _sort: _sort.length > 0 ? _sort.join(",") : undefined,
        };

        const { data } = await httpClient.get(
            `${url}?${stringify(query)}&${stringify(queryFilters)}`,
        );

        const countRequest = await httpClient.get(`${url}/count`);

        return {
            data: data,
            total: countRequest.data,
        };
    },

    getMany: async (resource, params) => {
        const { ids } = params;

        const url = `${apiUrl}/${resource}`;

        const query = ids.map((item: string) => `id_in=${item}`).join("&");

        const { data } = await httpClient.get(`${url}?${query}`);

        return {
            data,
        };
    },

    create: async (resource, params) => {
        const { variables } = params;

        const url = `${apiUrl}/${resource}`;

        const { data } = await httpClient.post(url, variables);

        return {
            data,
        };
    },

    update: async (resource, params) => {
        const { id, variables } = params;

        const url = `${apiUrl}/${resource}/${id}`;

        const { data } = await httpClient.put(url, variables);

        return {
            data,
        };
    },

    updateMany: async (resource, params) => {
        const { ids, variables } = params;

        const response = await Promise.all(
            ids.map(async (id) => {
                const { data } = await httpClient.put(
                    `${apiUrl}/${resource}/${id}`,
                    variables,
                );
                return data;
            }),
        );

        return { data: response };
    },

    createMany: async () => {
        throw new Error("createMany not implemented");
    },

    getOne: async (resource, params) => {
        const { id } = params;

        const url = `${apiUrl}/${resource}/${id}`;

        const { data } = await httpClient.get(url);

        return {
            data,
        };
    },

    deleteOne: async (resource, params) => {
        const { id } = params;

        const url = `${apiUrl}/${resource}/${id}`;

        const { data } = await httpClient.delete(url);

        return {
            data,
        };
    },

    deleteMany: async (resource, params) => {
        const { ids } = params;

        const response = await Promise.all(
            ids.map(async (id) => {
                const { data } = await httpClient.delete(
                    `${apiUrl}/${resource}/${id}`,
                );
                return data;
            }),
        );
        return { data: response };
    },

    getApiUrl: () => {
        return apiUrl;
    },

    custom: async (url, method, params = {}) => {
        const { filters, sort, payload, query, headers } = params;

        let requestUrl = `${url}?`;

        if (sort) {
            const sortQuery = generateSort(sort);
            if (sortQuery.length > 0) {
                requestUrl = `${requestUrl}&${stringify({
                    _sort: sortQuery.join(","),
                })}`;
            }
        }

        if (filters) {
            const filterQuery = generateFilter(filters);
            requestUrl = `${requestUrl}&${stringify(filterQuery)}`;
        }

        if (query) {
            requestUrl = `${requestUrl}&${stringify(query)}`;
        }

        if (headers) {
            httpClient.defaults.headers = {
                ...httpClient.defaults.headers,
                ...headers,
            };
        }

        let axiosResponse;
        switch (method) {
            case "put":
            case "post":
            case "patch":
                axiosResponse = await httpClient[method](url, payload);
                break;
            case "delete":
                axiosResponse = await httpClient.delete(url);
                break;
            default:
                axiosResponse = await httpClient.get(requestUrl);
                break;
        }

        const { data } = axiosResponse;

        return Promise.resolve({ data });
    },
});
