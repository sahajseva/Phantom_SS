import { CrudFilters, CrudSorting, DataProvider } from "@pankod/refine";
import { GraphQLClient } from "graphql-request";
import * as gql from "gql-query-builder";

const genereteSort = (sort?: CrudSorting) => {
    if (sort && sort.length > 0) {
        const sortQuery = sort.map((i) => {
            return `${i.field}:${i.order}`;
        });

        return sortQuery.join();
    }

    return [];
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

const dataProvider = (client: GraphQLClient): DataProvider => {
    return {
        getList: async (resource, params) => {
            const { pagination, sort, filters, metaData } = params;

            const current = pagination?.current || 1;
            const pageSize = pagination?.pageSize || 10;

            const sortBy = genereteSort(sort);
            const filterBy = generateFilter(filters);

            const operation = metaData?.operation ?? resource;
            const { query, variables } = gql.query({
                operation,
                variables: {
                    ...metaData?.variables,
                    sort: sortBy,
                    where: { value: filterBy, type: "JSON" },
                    start: (current - 1) * pageSize,
                    limit: current * pageSize,
                },
                ...metaData,
            });

            const response = await client.request(query, variables);

            return {
                data: response[operation],
                total: 10,
            };
        },

        getMany: async (resource, ids) => {
            return {
                data: [],
            };
        },

        create: async (resource, params) => {
            return {
                data: { id: 1 } as any,
            };
        },

        createMany: async (resource, params) => {
            return {
                data: [],
            };
        },

        update: async (resource, id, params) => {
            return {
                data: { id: 1 } as any,
            };
        },

        updateMany: async (resource, ids, params) => {
            return {
                data: [],
            };
        },

        getOne: async (resource, id) => {
            return {
                data: { id: 1 } as any,
            };
        },

        deleteOne: async (resource, id) => {
            return {
                data: { id: 1 } as any,
            };
        },

        deleteMany: async (resource, ids) => {
            return {
                data: [],
            };
        },

        getApiUrl: () => {
            throw Error("Not implemented on refine-graphql data provider.");
        },

        custom: () => {
            throw Error("Not implemented on refine-graphql data provider.");
        },
    };
};

export default dataProvider;
