import { DataProvider, LiveProvider, LiveEvent } from "@pankod/refine";
import {
    BaseRecord,
    CrudFilters,
    CrudSorting,
} from "@pankod/refine/dist/interfaces";
import { Appwrite } from "appwrite";

export * from "appwrite";

const operators = {
    eq: "=",
    ne: "!=",
    lt: "<",
    gt: ">",
    lte: "<=",
    gte: ">=",
    in: undefined,
    nin: undefined,
    contains: undefined,
    containss: undefined,
    ncontains: undefined,
    ncontainss: undefined,
    null: undefined,
};

const appwriteEventToRefineEvent = {
    "database.documents.create": "created",
    "database.documents.update": "updated",
    "database.documents.delete": "deleted",
} as const;

const getRefineEvent = (event: string): LiveEvent["type"] | undefined => {
    if (
        event === "database.documents.create" ||
        event === "database.documents.update" ||
        event === "database.documents.delete"
    ) {
        return appwriteEventToRefineEvent[event];
    }

    return undefined;
};

type GetAppwriteFiltersType = {
    (filters?: CrudFilters): string[] | undefined;
};

type GetAppwriteSortingType = {
    (filters?: CrudSorting): {
        orderField?: string[];
        orderType?: string[];
    };
};

export const getAppwriteFilters: GetAppwriteFiltersType = (filters) => {
    if (!filters) {
        return undefined;
    }

    const appwriteFilters: string[] = [];

    for (const filter of filters) {
        const operator = operators[filter.operator];
        const filterField = filter.field === "id" ? "$id" : filter.field;

        if (!operator) {
            throw new Error(`Operator ${filter.operator} is not supported`);
        }

        appwriteFilters.push(`${filterField}${operator}${filter.value}`);
    }

    return appwriteFilters;
};

export const getAppwriteSorting: GetAppwriteSortingType = (sort) => {
    const _sort: { orderField: string[]; orderType: string[] } = {
        orderField: [],
        orderType: [],
    };
    if (sort) {
        sort.map((item) => {
            _sort.orderField.push(item.field);
            _sort.orderType.push(item.order);
        });
    }
    return _sort;
};

export const dataProvider = (appwriteClient: Appwrite): DataProvider => {
    return {
        //TODO: Fix typing
        getList: async ({ resource, pagination, filters, sort }) => {
            const current = pagination?.current ?? 1;
            const pageSize = pagination?.pageSize ?? 10;
            const appwriteFilters = getAppwriteFilters(filters);
            const { orderField, orderType } = getAppwriteSorting(sort);

            const { sum: total, documents: data } =
                await appwriteClient.database.listDocuments<any>(
                    resource,
                    appwriteFilters,
                    pageSize,
                    (current - 1) * pageSize,
                    undefined,
                    undefined,
                    orderField,
                    orderType,
                );

            return {
                data: data.map(({ $id, ...restData }: { $id: string }) => ({
                    id: $id,
                    ...restData,
                })),
                total,
            };
        },
        getOne: async ({ resource, id }) => {
            const { $id, ...restData } =
                await appwriteClient.database.getDocument(resource, id);

            return {
                data: {
                    id: $id,
                    ...restData,
                },
            } as any;
        },
        update: async ({ resource, id, variables, metaData }) => {
            const { $id, ...restData } =
                await appwriteClient.database.updateDocument(
                    resource,
                    id,
                    variables as any,
                    metaData?.readPermissions ?? ["role:all"],
                    metaData?.writePermissions ?? ["role:all"],
                );

            return {
                data: {
                    id: $id,
                    ...restData,
                },
            } as any;
        },
        create: async ({ resource, variables, metaData }) => {
            const { $id, ...restData } =
                await appwriteClient.database.createDocument(
                    resource,
                    // TODO: Make this configureable
                    "unique()",
                    variables as unknown as object,
                    metaData?.readPermissions ?? ["role:all"],
                    metaData?.writePermissions ?? ["role:all"],
                );

            return {
                data: {
                    id: $id,
                    ...restData,
                },
            } as any;
        },
        createMany: async ({ resource, variables, metaData }) => {
            const data = await Promise.all(
                variables.map((document) =>
                    appwriteClient.database.createDocument<any>(
                        resource,
                        // TODO: Make this configureable
                        "unique()",
                        document as unknown as object,
                        metaData?.readPermissions ?? ["role:all"],
                        metaData?.writePermissions ?? ["role:all"],
                    ),
                ),
            );

            return {
                data: data.map(({ $id, ...restData }) => ({
                    id: $id,
                    ...restData,
                })),
            } as any;
        },
        deleteOne: async ({ resource, id }) => {
            await appwriteClient.database.deleteDocument(resource, id);

            return {
                data: { id },
            } as any;
        },
        deleteMany: async ({ resource, ids }) => {
            await Promise.all(
                ids.map((id) =>
                    appwriteClient.database.deleteDocument(resource, id),
                ),
            );

            return {
                data: ids.map((id) => ({
                    id,
                })),
            } as any;
        },
        getMany: async ({ resource, ids }) => {
            const data = await Promise.all(
                ids.map((id) =>
                    appwriteClient.database.getDocument<any>(resource, id),
                ),
            );

            return {
                data: data.map(({ $id, ...restData }) => ({
                    id: $id,
                    ...restData,
                })),
            } as any;
        },
        updateMany: async ({ resource, ids, variables, metaData }) => {
            const data = await Promise.all(
                ids.map((id) =>
                    appwriteClient.database.updateDocument<any>(
                        resource,
                        id,
                        variables as unknown as object,
                        metaData?.readPermissions ?? ["role:all"],
                        metaData?.writePermissions ?? ["role:all"],
                    ),
                ),
            );

            return {
                data: data.map(({ $id, ...restData }) => ({
                    id: $id,
                    ...restData,
                })),
            } as any;
        },
        getApiUrl: () => {
            throw Error(
                "'getApiUrl' method is not implemented on refine-appwrite data provider.",
            );
        },
        custom: () => {
            throw Error(
                "'custom' method is not implemented on refine-appwrite data provider.",
            );
        },
    };
};

export const liveProvider = (appwriteClient: Appwrite): LiveProvider => {
    return {
        subscribe: ({ channel, types, params, callback }): any => {
            const resource = channel.replace("resources/", "");

            let appwriteChannel;

            if (params?.ids) {
                appwriteChannel = params.ids.map((id) => `documents.${id}`);
            } else {
                appwriteChannel = `collections.${resource}.documents`;
            }

            return appwriteClient.subscribe(appwriteChannel, (event) => {
                const refineEvent = getRefineEvent(event.event);
                if (
                    types.includes("*") ||
                    (refineEvent && types.includes(refineEvent))
                ) {
                    callback({
                        channel,
                        type: getRefineEvent(event.event) ?? event.event,
                        payload: event.payload as any,
                        date: new Date(event.timestamp * 1000),
                    });
                }
            });
        },

        unsubscribe: async (unsubscribe: () => void) => {
            unsubscribe();
        },
    };
};
