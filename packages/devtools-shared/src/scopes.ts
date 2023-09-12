export type RefineHook =
    | "useCan"
    | "useLog"
    | "useLogList"
    | "useCreate"
    | "useCreateMany"
    | "useCustom"
    | "useCustomMutation"
    | "useDelete"
    | "useDeleteMany"
    | "useInfiniteList"
    | "useList"
    | "useMany"
    | "useOne"
    | "useUpdate"
    | "useUpdateMany";

export type Scopes = "data" | "audit-log" | "access-control" | "auth";

export const scopes: Record<RefineHook, Scopes> = {
    useCan: "access-control",
    useLog: "audit-log",
    useLogList: "audit-log",
    useCreate: "data",
    useCreateMany: "data",
    useCustom: "data",
    useCustomMutation: "data",
    useDelete: "data",
    useDeleteMany: "data",
    useInfiniteList: "data",
    useList: "data",
    useMany: "data",
    useOne: "data",
    useUpdate: "data",
    useUpdateMany: "data",
};

export const hooksByScope = Object.entries(scopes).reduce(
    (acc, [hook, scope]) => {
        if (!acc[scope]) {
            acc[scope] = [];
        }

        acc[scope].push(hook as RefineHook);

        return acc;
    },
    {} as Record<Scopes, RefineHook[]>,
);
