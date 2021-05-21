import axios, { AxiosInstance } from "axios";
import {
    Sort,
    DataProvider as IDataProvider,
    HttpError,
    CrudFilters,
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

const generateSort = (sort?: Sort) => {
    const _sort = [];
    if (Array.isArray(sort) || sort?.field) {
        if (Array.isArray(sort)) {
            sort.map((item) => {
                if (item.order) {
                    const order = item.order.replace("end", "");
                    _sort.push(`${item.field}:${order}`);
                }
            });
        } else {
            if (sort.order) {
                const order = sort.order.replace("end", "");
                _sort.push(`${sort.field}:${order}`);
            }
        }
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

    getMany: async (resource, ids) => {
        const url = `${apiUrl}/${resource}`;

        const query = ids
            .map((item: string | number) => `id_in=${item}`)
            .join("&");

        const { data } = await httpClient.get(`${url}?${query}`);

        return {
            data,
        };
    },

    create: async (resource, params) => {
        const url = `${apiUrl}/${resource}`;

        const { data } = await httpClient.post(url, params);

        return {
            data,
        };
    },

    update: async (resource, id, params) => {
        const url = `${apiUrl}/${resource}/${id}`;

        const { data } = await httpClient.put(url, params);

        return {
            data,
        };
    },

    updateMany: async (resource, ids, params) => {
        const response = await Promise.all(
            ids.map(async (id) => {
                const { data } = await httpClient.put(
                    `${apiUrl}/${resource}/${id}`,
                    params,
                );
                return data;
            }),
        );

        return { data: response };
    },

    createMany: async () => {
        throw new Error("createMany not implemented");
    },

    getOne: async (resource, id) => {
        const url = `${apiUrl}/${resource}/${id}`;

        const { data } = await httpClient.get(url);

        return {
            data,
        };
    },

    deleteOne: async (resource, id) => {
        const url = `${apiUrl}/${resource}/${id}`;

        const { data } = await httpClient.delete(url);

        return {
            data,
        };
    },

    deleteMany: async (resource, ids) => {
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
        const { filters, sort, payload } = params;

        const _sort = generateSort(sort);
        const queryFilters = generateFilter(filters);

        const query = {
            _sort: _sort.length > 0 ? _sort.join(",") : undefined,
        };

        let axiosResponse;
        switch (method) {
            case "put":
            case "post":
            case "patch":
                axiosResponse = await httpClient.post(`${url}`, payload);
                break;
            case "delete":
                axiosResponse = await httpClient.delete(`${url}`);
                break;
            default:
                axiosResponse = await httpClient.get(
                    `${url}?${stringify(query)}&${stringify(queryFilters)}`,
                );
                break;
        }

        const { data } = axiosResponse;

        return Promise.resolve({ data });
    },
});
