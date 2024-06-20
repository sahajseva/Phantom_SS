"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[63831],{86212:e=>{e.exports=JSON.parse('{"filePath":"/home/runner/work/refine/refine/packages/core/src/index.tsx","description":"Interactions in Refine has 3 main parameters: resource, action and id.\\n\\nThis hook is used to manage these parameters based on below conditions and outputs the final parameters.\\n\\n`resource`: The resource to be used. (either the identifier or the name of the resource)\\n- If a `resource` is provided, it will be used (even if it\'s not defined in the <Refine/> component)\\n- If a `resource` is not provided, it will be inferred from the route.\\n`id`: The `id` of the record to be used.\\n- If an `id` is provided, it will be used.\\n- If an `id` is not provided, it will either be inferred from the route or will be `undefined`.\\n-- If a custom resource is provided and it\'s different from the inferred resource, the id will be undefined.\\n-- If a custom resource is provided and it\'s same as the inferred resource, the id will be inferred from the route.\\n-- If a custom resource is not provided, the id will be inferred from the route.\\n`action`: The action to be used.\\n- If an `action` is provided, it will be used.\\n- If an `action` is not provided, it will be inferred from the route.\\n`formAction`: The action to be used in the form.\\n- `formAction` can only be \\"edit\\", \\"clone\\" or \\"create\\".\\n- If action is \\"edit\\" or \\"clone\\", `formAction` will be the same as action.\\n- Same as `id`, if passed resource is different from inferred resource, `formAction` will fallback to \\"create\\" and ignore the action from the route.","displayName":"useResourceParams","props":{"id":{"defaultValue":null,"description":"","name":"id","required":false,"type":{"name":"[BaseKey](/docs/core/interface-references/#basekey)"},"tags":{}},"resource":{"defaultValue":null,"description":"","name":"resource","required":false,"type":{"name":"string"},"tags":{}},"action":{"defaultValue":null,"description":"","name":"action","required":false,"type":{"name":"\\"create\\" | \\"edit\\" | \\"list\\" | \\"show\\" | \\"clone\\"","raw":"Action","value":[{"value":"\\"create\\""},{"value":"\\"edit\\""},{"value":"\\"list\\""},{"value":"\\"show\\""},{"value":"\\"clone\\""}]},"tags":{}}},"generatedAt":1718896279756}')}}]);