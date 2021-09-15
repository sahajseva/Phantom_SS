import { CrudFilters, CrudSorting, DataProvider } from "@pankod/refine";
import { GraphQLClient } from "graphql-request";
import * as gql from "gql-query-builder";
import pluralize from "pluralize";
import camelCase from "camelcase";

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
                fields: metaData?.fields,
            });

            const response = await client.request(query, variables);

            return {
                data: response[operation],
                total: 10,
            };
        },

        getMany: async (resource, params) => {
            const { ids, metaData } = params;

            const operation = metaData?.operation ?? resource;

            const { query, variables } = gql.query({
                operation,
                variables: {
                    where: {
                        value: { id_in: ids },
                        type: "JSON",
                    },
                },
                fields: metaData?.fields,
            });

            const response = await client.request(query, variables);

            return {
                data: response[operation],
            };
        },

        create: async (resource, params) => {
            const { variables, metaData } = params;

            const singularResource = pluralize.singular(resource);
            const camelCreateName = camelCase(`create-${singularResource}`);

            const operation = metaData?.operation ?? camelCreateName;

            const { query, variables: qqlVariables } = gql.mutation({
                operation,
                variables: {
                    input: {
                        value: { data: variables },
                        type: `${camelCreateName}Input`,
                    },
                },
                fields: metaData?.fields ?? [
                    {
                        operation: singularResource,
                        fields: ["id"],
                        variables: {},
                    },
                ],
            });
            const response = await client.request(query, qqlVariables);

            return {
                data: response[operation],
            };
        },

        createMany: async (resource, params) => {
            return {
                data: [],
            };
        },

        update: async (resource, params) => {
            const { id, variables, metaData } = params;

            const singularResource = pluralize.singular(resource);
            const camelUpdateName = camelCase(`update-${singularResource}`);

            const operation = metaData?.operation ?? camelUpdateName;

            const { query, variables: qqlVariables } = gql.mutation({
                operation,
                variables: {
                    input: {
                        value: { where: { id }, data: variables },
                        type: `${camelUpdateName}Input`,
                    },
                },
                fields: metaData?.fields ?? [
                    {
                        operation: singularResource,
                        fields: ["id"],
                        variables: {},
                    },
                ],
            });
            const response = await client.request(query, qqlVariables);

            return {
                data: response[operation],
            };
        },

        updateMany: async (resource, params) => {
            return {
                data: [],
            };
        },

        getOne: async (resource, params) => {
            const { id, metaData } = params;

            const operation = metaData?.operation ?? resource;

            const { query, variables } = gql.query({
                operation,
                variables: {
                    id: { value: id, type: "ID", required: true },
                },
                fields: metaData?.fields,
            });

            const response = await client.request(query, variables);

            return {
                data: response[operation],
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
