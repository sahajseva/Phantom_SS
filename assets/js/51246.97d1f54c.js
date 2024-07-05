"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51246],{51246:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/core/src/index.tsx","description":"`useCustom` is a modified version of `react-query`\'s {@link https://react-query.tanstack.com/guides/queries `useQuery`} used for custom requests.\\n\\nIt uses the `custom` method from the `dataProvider` which is passed to `<Refine>`.","displayName":"useCustom","props":{"url":{"defaultValue":null,"description":"request\'s URL","name":"url","required":true,"type":{"name":"string"},"tags":{}},"method":{"defaultValue":null,"description":"request\'s method (`GET`, `POST`, etc.)","name":"method","required":true,"type":{"name":"\\"options\\" | \\"get\\" | \\"delete\\" | \\"head\\" | \\"post\\" | \\"put\\" | \\"patch\\"","raw":"\\"options\\" | \\"get\\" | \\"delete\\" | \\"head\\" | \\"post\\" | \\"put\\" | \\"patch\\"","value":[{"value":"\\"options\\""},{"value":"\\"get\\""},{"value":"\\"delete\\""},{"value":"\\"head\\""},{"value":"\\"post\\""},{"value":"\\"put\\""},{"value":"\\"patch\\""}]},"tags":{}},"config":{"defaultValue":null,"description":"The config of your request. You can send headers, payload, query, filters and sorters using this field","name":"config","required":false,"type":{"name":"UseCustomConfig<TQuery, TPayload>"},"tags":{}},"queryOptions":{"defaultValue":null,"description":"react-query\'s [useQuery](https://tanstack.com/query/v4/docs/reference/useQuery) options\\"","name":"queryOptions","required":false,"type":{"name":"UseQueryOptions<CustomResponse<TQueryFnData>, TError, CustomResponse<TData>, QueryKey>"},"tags":{}},"meta":{"defaultValue":null,"description":"meta data for `dataProvider`","name":"meta","required":false,"type":{"name":"MetaQuery"},"tags":{}},"metaData":{"defaultValue":null,"description":"meta data for `dataProvider`","name":"metaData","required":false,"type":{"name":"MetaQuery"},"tags":{"deprecated":"`metaData` is deprecated with refine@4, refine will pass `meta` instead, however, we still support `metaData` for backward compatibility."}},"dataProviderName":{"defaultValue":null,"description":"If there is more than one `dataProvider`, you should use the `dataProviderName` that you will use.","name":"dataProviderName","required":false,"type":{"name":"string"},"tags":{}},"successNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Success notification configuration to be displayed when the mutation is successful.","name":"successNotification","required":false,"type":{"name":"false | OpenNotificationParams | ((data?: CustomResponse<TData>, values?: { [x: string]: any; sort?: CrudSort[]; ... 10 more ...; gqlMutation?: DocumentNode | undefined; } | undefined, resource?: string | undefined) => false | OpenNotificationParams) | undefined"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"errorNotification":{"defaultValue":{"value":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"},"description":"Error notification configuration to be displayed when the mutation fails.","name":"errorNotification","required":false,"type":{"name":"false | OpenNotificationParams | ((error?: TError, values?: { [x: string]: any; sort?: CrudSort[]; sorters?: CrudSort[] | undefined; ... 9 more ...; gqlMutation?: DocumentNode | undefined; } | undefined, resource?: string | undefined) => false | OpenNotificationParams) | undefined"},"tags":{"default":"\'\\"There was an error creating resource (status code: `statusCode`)\\" or \\"Error when updating resource (status code: statusCode)\\"\'"}},"overtimeOptions":{"defaultValue":null,"description":"","name":"overtimeOptions","required":false,"type":{"name":"UseLoadingOvertimeCoreOptions"},"tags":{}}},"generatedAt":1720185602783}')}}]);