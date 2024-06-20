"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[48064],{58860:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var r=t(37953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(d.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,g=p["".concat(d,".").concat(m)]||p[m]||u[m]||a;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78026:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>p});t(37953);var r=t(58860);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={title:"Command Palette"},d=void 0,l={unversionedId:"packages/command-palette/index",id:"packages/command-palette/index",title:"Command Palette",description:"Refine supports the command palette feature and use the",source:"@site/docs/packages/command-palette/index.md",sourceDirName:"packages/command-palette",slug:"/packages/command-palette/",permalink:"/docs/packages/command-palette/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/packages/command-palette/index.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1718903285,formattedLastUpdatedAt:"Jun 20, 2024",frontMatter:{title:"Command Palette"},sidebar:"mainSidebar",previous:{title:"Inferencer",permalink:"/docs/packages/inferencer/"},next:{title:"Okta Auth Provider",permalink:"/docs/enterprise-edition/okta/"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Access Control",id:"access-control",level:2},{value:"Actions",id:"actions",level:2},{value:"Custom Actions",id:"custom-actions",level:2},{value:"Example",id:"example",level:2}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},m=u("DocThumbsUpDownFeedbackWidget"),g=u("InstallPackagesCommand"),y=u("CodeSandboxExample"),f={toc:p},h="wrapper";function b(e){var{components:n}=e,t=i(e,["components"]);return(0,r.yg)(h,a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},f,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'import {\n  useMany as CoreUseMany,\n  useShow as RefineCoreUseShow,\n  useOne as RefineCoreUseOne,\n} from "@refinedev/core";\nimport {\n  List as RefineAntdList,\n  TextField as RefineAntdTextField,\n  TagField as RefineAntdTagField,\n  useTable as RefineAntdUseTable,\n  EditButton as RefineAntdEditButton,\n  ShowButton as RefineAntdShowButton,\n  getDefaultSortOrder as RefineAntdGetDefaultSortOrder,\n  useForm as RefineAntdUseForm,\n  useSelect as RefineAntdUseSelect,\n  Create as RefineAntdCreate,\n  Show as RefineAntdShow,\n} from "@refinedev/antd";\nimport {\n  Table as AntdTable,\n  Space as AntdSpace,\n  Form as AntdForm,\n  Select as AntdSelect,\n  Input as AntdInput,\n  Typography as AntdTypography,\n} from "antd";\n\nconst PostList: React.FC = () => {\n  const { tableProps, sorter } = RefineAntdUseTable<IPost>();\n\n  const categoryIds =\n    tableProps?.dataSource?.map((item) => item.categoryId) ?? [];\n  const { data, isLoading } = CoreUseMany<ICategory>({\n    resource: "categories",\n    ids: categoryIds,\n    queryOptions: {\n      enabled: categoryIds.length > 0,\n    },\n  });\n\n  return (\n    <RefineAntdList>\n      <AntdTable {...tableProps} rowKey="id">\n        <AntdTable.Column dataIndex="id" title="ID" />\n        <AntdTable.Column dataIndex="title" title="Title" />\n        <AntdTable.Column\n          dataIndex={["category", "id"]}\n          title="Category"\n          render={(value) => {\n            if (isLoading) {\n              return <RefineAntdTextField value="Loading..." />;\n            }\n\n            return (\n              <RefineAntdTextField\n                value={data?.data.find((item) => item.id === value)?.title}\n              />\n            );\n          }}\n        />\n        <AntdTable.Column\n          dataIndex="status"\n          title="Status"\n          render={(value: string) => <RefineAntdTagField value={value} />}\n        />\n        <AntdTable.Column<IPost>\n          title="Actions"\n          dataIndex="actions"\n          render={(_, record) => (\n            <AntdSpace>\n              <RefineAntdEditButton\n                hideText\n                size="small"\n                recordItemId={record.id}\n              />\n              <RefineAntdShowButton\n                hideText\n                size="small"\n                recordItemId={record.id}\n              />\n            </AntdSpace>\n          )}\n        />\n      </AntdTable>\n    </RefineAntdList>\n  );\n};\n\nconst PostCreate: React.FC = () => {\n  const { formProps, saveButtonProps } = RefineAntdUseForm<IPost>();\n\n  const { selectProps: categorySelectProps } = RefineAntdUseSelect<ICategory>({\n    resource: "61bc4afa9ee2c",\n    optionLabel: "title",\n    optionValue: "id",\n  });\n\n  return (\n    <RefineAntdCreate saveButtonProps={saveButtonProps}>\n      <AntdForm {...formProps} layout="vertical">\n        <AntdForm.Item\n          label="Title"\n          name="title"\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <AntdInput />\n        </AntdForm.Item>\n        <AntdForm.Item\n          label="Category"\n          name="categoryId"\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <AntdSelect {...categorySelectProps} />\n        </AntdForm.Item>\n        <AntdForm.Item\n          label="Content"\n          name="content"\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <AntdInput.TextArea />\n        </AntdForm.Item>\n      </AntdForm>\n    </RefineAntdCreate>\n  );\n};\n\nconst PostEdit: React.FC = () => {\n  const { formProps, saveButtonProps, queryResult } =\n    RefineAntdUseForm<IPost>();\n\n  const postData = queryResult?.data?.data;\n  const { selectProps: categorySelectProps } = RefineAntdUseSelect<ICategory>({\n    defaultValue: postData?.categoryId,\n    resource: "61c43adc284ac",\n    optionLabel: "title",\n    optionValue: "id",\n  });\n\n  return (\n    <RefineAntdCreate saveButtonProps={saveButtonProps}>\n      <AntdForm {...formProps} layout="vertical">\n        <AntdForm.Item\n          label="Title"\n          name="title"\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <AntdInput />\n        </AntdForm.Item>\n        <AntdForm.Item\n          label="Category"\n          name="categoryId"\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <AntdSelect {...categorySelectProps} />\n        </AntdForm.Item>\n        <AntdForm.Item\n          label="Content"\n          name="content"\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <AntdInput.TextArea />\n        </AntdForm.Item>\n      </AntdForm>\n    </RefineAntdCreate>\n  );\n};\n\nconst PostShow: React.FC = () => {\n  const { queryResult } = RefineCoreUseShow<IPost>();\n  const { data, isLoading } = queryResult;\n  const record = data?.data;\n\n  const { data: categoryData, isLoading: categoryIsLoading } =\n    RefineCoreUseOne<ICategory>({\n      resource: "categories",\n      id: record?.category?.id || "",\n      queryOptions: {\n        enabled: !!record,\n      },\n    });\n\n  return (\n    <RefineAntdShow isLoading={isLoading}>\n      <AntdTypography.Title level={5}>Id</AntdTypography.Title>\n      <AntdTypography.Text>{record?.id}</AntdTypography.Text>\n\n      <AntdTypography.Title level={5}>\n        AntdTypography.Title\n      </AntdTypography.Title>\n      <AntdTypography.Text>{record?.title}</AntdTypography.Text>\n\n      <AntdTypography.Title level={5}>Category</AntdTypography.Title>\n      <AntdTypography.Text>\n        {categoryIsLoading ? "Loading..." : categoryData?.data.title}\n      </AntdTypography.Text>\n\n      <AntdTypography.Title level={5}>Content</AntdTypography.Title>\n      <AntdTypography.Text>{record?.content}</AntdTypography.Text>\n    </RefineAntdShow>\n  );\n};\n')),(0,r.yg)("p",null,"Refine supports the command palette feature and use the\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/timc1/kbar"},(0,r.yg)("strong",{parentName:"a"},"kbar")),". ",(0,r.yg)("strong",{parentName:"p"},"kbar")," is a fully extensible ",(0,r.yg)("inlineCode",{parentName:"p"},"cmd")," + ",(0,r.yg)("inlineCode",{parentName:"p"},"k"),"(MacOS) or ",(0,r.yg)("inlineCode",{parentName:"p"},"ctrl")," + ",(0,r.yg)("inlineCode",{parentName:"p"},"k"),"(Linux/Windows) interface for your site."),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)(m,{id:"installation",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Install the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/kbar"},"@refinedev/kbar")," library."),(0,r.yg)(g,{args:"@refinedev/kbar",mdxType:"InstallPackagesCommand"})),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"First of all, you need to import the ",(0,r.yg)("inlineCode",{parentName:"p"},"@refinedev/kbar")," library and we will use ",(0,r.yg)("inlineCode",{parentName:"p"},"RefineKbarProvider")," to wrap the whole application."),(0,r.yg)("p",null,"After that, we should mount the ",(0,r.yg)("inlineCode",{parentName:"p"},"RefineKbar")," component inside the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine>")," component."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'tile="app.tsx"',tile:'"app.tsx"'},'// highlight-next-line\nimport { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      // highlight-next-line\n      <RefineKbarProvider>\n        <Refine\n        //...\n        >\n          {/*...*/}\n          {/* highlight-next-line */}\n          <RefineKbar />\n        </Refine>\n        // highlight-next-line\n      </RefineKbarProvider>\n    </BrowserRouter>\n  );\n};\n')),(0,r.yg)("p",null,"You can click on the live preview area and test how it works with ",(0,r.yg)("inlineCode",{parentName:"p"},"cmd")," + ",(0,r.yg)("inlineCode",{parentName:"p"},"k"),"(MacOS) or ",(0,r.yg)("inlineCode",{parentName:"p"},"ctrl")," + ",(0,r.yg)("inlineCode",{parentName:"p"},"k"),"(Linux/Windows)."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly url=http://localhost:5173 previewHeight=650px",live:!0,previewOnly:!0,url:"http://localhost:5173",previewHeight:"650px"},'setInitialRoutes(["/posts"]);\nimport { Refine, Authenticated } from "@refinedev/core";\nimport routerProvider, {\n  CatchAllNavigate,\n  NavigateToResource,\n} from "@refinedev/react-router-v6";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\nimport dataProvider from "@refinedev/simple-rest";\nimport {\n  ThemedLayoutV2,\n  RefineThemes,\n  useNotificationProvider,\n  List,\n  EditButton,\n  ShowButton,\n  useTable,\n  AuthPage,\n  ErrorComponent,\n} from "@refinedev/antd";\nimport { ConfigProvider, Layout, Table, Space } from "antd";\nimport { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <ConfigProvider theme={RefineThemes.Blue}>\n        <RefineKbarProvider>\n          <Refine\n            dataProvider={dataProvider(API_URL)}\n            routerProvider={routerProvider}\n            resources={[\n              {\n                name: "posts",\n                list: "/posts",\n                create: "/posts/create",\n                edit: "/posts/edit/:id",\n                show: "/posts/show/:id",\n                meta: {\n                  canDelete: true,\n                },\n              },\n            ]}\n            notificationProvider={useNotificationProvider}\n            options={{\n              liveMode: "auto",\n              syncWithLocation: true,\n              warnWhenUnsavedChanges: true,\n            }}\n          >\n            <Routes>\n              <Route\n                element={\n                  <ThemedLayoutV2>\n                    <Outlet />\n                  </ThemedLayoutV2>\n                }\n              >\n                <Route index element={<NavigateToResource />} />\n                <Route path="/posts">\n                  <Route index element={<PostList />} />\n                  <Route path="create" element={<PostCreate />} />\n                  <Route path="edit/:id" element={<PostEdit />} />\n                  <Route path="show/:id" element={<PostShow />} />\n                </Route>\n              </Route>\n            </Routes>\n            <RefineKbar />\n          </Refine>\n        </RefineKbarProvider>\n      </ConfigProvider>\n    </BrowserRouter>\n  );\n};\nrender(<App />);\n'))),(0,r.yg)("h2",{id:"access-control"},"Access Control"),(0,r.yg)(m,{id:"access-control",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"refine-kbar")," respects the access control settings of your App. To learn more about access control, please refer to the ",(0,r.yg)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},"Access Control Provider")," section of the documentation. Also, we can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"canDelete")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"resources")," to check the delete accessibility of the command palette."),(0,r.yg)("p",null,"For more information check out the source code of ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/packages/kbar"},(0,r.yg)("inlineCode",{parentName:"a"},"refine-kbar"))," package")),(0,r.yg)("h2",{id:"actions"},"Actions"),(0,r.yg)(m,{id:"actions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"refine-kbar")," uses your resources to create default actions. Which includes; ",(0,r.yg)("inlineCode",{parentName:"p"},"list"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"create"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"edit"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"show")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"delete"),". It will hide the current action of the page you are in.")),(0,r.yg)("h2",{id:"custom-actions"},"Custom Actions"),(0,r.yg)(m,{id:"custom-actions",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"If we want to add custom actions to the command palette, we can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"createAction")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"useRegisterActions")," of the ",(0,r.yg)("inlineCode",{parentName:"p"},"refine-kbar"),".\ncheck the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/refinedev/refine/blob/master/examples/finefoods-material-ui/src/hooks/useOrderCustomKbarActions/index.tsx"},(0,r.yg)("inlineCode",{parentName:"a"},"refine-finefoods"))," example."),(0,r.yg)("p",null,"Also you can find more information about actions in the ",(0,r.yg)("a",{parentName:"p",href:"https://kbar.vercel.app/docs/concepts/actions"},(0,r.yg)("inlineCode",{parentName:"a"},"kbar"))," package."),(0,r.yg)("p",null,"You can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"createAction")," to create a new action and use the ",(0,r.yg)("inlineCode",{parentName:"p"},"useRegisterActions")," to register the action to the command palette."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="Custom action example"',title:'"Custom',action:!0,'example"':!0},'import { createAction, useRegisterActions } from "@refinedev/kbar";\n\nconst customAction = createAction({\n  name: "my custom action",\n  section: "custom-actions",\n  perform: () => {\n    console.log("onSelect my custom action");\n  },\n  priority: Priority.HIGH,\n});\n\nuseRegisterActions(customAction);\n')),(0,r.yg)("admonition",{title:"Good to know",type:"simple"},(0,r.yg)("p",{parentName:"admonition"},"Since ",(0,r.yg)("inlineCode",{parentName:"p"},"refine-kbar")," exports the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/timc1/kbar"},(0,r.yg)("inlineCode",{parentName:"a"},"kbar")),", you use all of its features"))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)(m,{id:"example",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(y,{path:"command-palette-kbar",mdxType:"CodeSandboxExample"})))}b.isMDXComponent=!0}}]);