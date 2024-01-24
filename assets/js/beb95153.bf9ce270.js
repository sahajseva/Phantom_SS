"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[94812],{70770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>m});n(67294);var r=n(3905),a=n(53787),o=n(50551);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const p={title:"Strapi GraphQL",source:"https://github.com/refinedev/refine/tree/master/packages/strapi-graphql",swizzle:!0},d=void 0,u={unversionedId:"data/packages/strapi-graphql/index",id:"data/packages/strapi-graphql/index",title:"Strapi GraphQL",description:"Refine provides a data provider for Strapi's GraphQL APIs that works similar to the GraphQL data provider and enables you to use all the features of Refine without giving up the GraphQL features.",source:"@site/docs/data/packages/strapi-graphql/index.md",sourceDirName:"data/packages/strapi-graphql",slug:"/data/packages/strapi-graphql/",permalink:"/docs/data/packages/strapi-graphql/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/data/packages/strapi-graphql/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1706090028,formattedLastUpdatedAt:"Jan 24, 2024",frontMatter:{title:"Strapi GraphQL",source:"https://github.com/refinedev/refine/tree/master/packages/strapi-graphql",swizzle:!0},sidebar:"mainSidebar",previous:{title:"Strapi v4",permalink:"/docs/data/packages/strapi-v4/"},next:{title:"Supabase",permalink:"/docs/data/packages/supabase/"}},c={},m=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Create Collections",id:"create-collections",level:2},{value:"List Page",id:"list-page",level:2},{value:"Edit Page",id:"edit-page",level:2},{value:"Show Page",id:"show-page",level:2},{value:"Example",id:"example",level:2}],h=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},g=h("InstallPackagesCommand"),f=h("CodeSandboxExample"),v={toc:m};function k(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},v,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'import dataProvider, { GraphQLClient } from "@refinedev/strapi-graphql";\nconst API_URL = "https://api.strapi.refine.dev/graphql";\nconst client = new GraphQLClient(API_URL);\nconst gqlDataProvider = dataProvider(client);\n')),(0,r.kt)("p",null,"Refine provides a data provider for Strapi's GraphQL APIs that works similar to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/packages/graphql"},"GraphQL data provider")," and enables you to use all the features of Refine without giving up the GraphQL features."),(0,r.kt)("admonition",{title:"Good to know",type:"simple"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"This library uses ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/jasonkuhrt/graphql-request"},(0,r.kt)("inlineCode",{parentName:"a"},"graphql-request@5"))," to handle the requests."),(0,r.kt)("li",{parentName:"ul"},"To learn more about data fetching in Refine, check out the ",(0,r.kt)("a",{parentName:"li",href:"/docs/guides-concepts/data-fetching"},"Data Fetching")," guide."),(0,r.kt)("li",{parentName:"ul"},"Example below uses ",(0,r.kt)("inlineCode",{parentName:"li"},"@refinedev/antd")," as the UI library but Refine is UI agnostic and you can use any UI library you want."))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(g,{args:"@refinedev/strapi-graphql",mdxType:"InstallPackagesCommand"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"We'll create a GraphQL Client with our API url and pass it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataProvider")," function to create a data provider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app.tsx"',title:'"app.tsx"'},'import Refine from "@refinedev/core";\nimport dataProvider, { GraphQLClient } from "@refinedev/strapi-graphql";\n\n// highlight-next-line\nconst client = new GraphQLClient("<API_URL>");\n// highlight-next-line\nconst strapiDataProvider = dataProvider(client);\n\nconst App = () => (\n  <Refine\n    // highlight-next-line\n    dataProvider={strapiDataProvider}\n  >\n    {/* ... */}\n  </Refine>\n);\n')),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"We'll create an ",(0,r.kt)("inlineCode",{parentName:"p"},"authProvider")," object and pass it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine />")," component to enable authentication. In ",(0,r.kt)("inlineCode",{parentName:"p"},"login")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"logout")," methods, we'll use the ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," object to set the token to the header."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="app.tsx"',title:'"app.tsx"'},'import Refine from "@refinedev/core";\nimport dataProvider, { GraphQLClient } from "@refinedev/strapi-graphql";\n\n// highlight-next-line\nconst client = new GraphQLClient("<API_URL>");\n\nconst strapiDataProvider = dataProvider(client);\n\nconst authProvider: AuthProvider = {\n  login: async ({ email, password }) => {\n    try {\n      const { data } = await gqlDataProvider.custom!({\n        url: "",\n        method: "post",\n        meta: {\n          operation: "login",\n          variables: {\n            input: {\n              value: { identifier: email, password },\n              type: "UsersPermissionsLoginInput",\n              required: true,\n            },\n          },\n          fields: ["jwt"],\n        },\n      });\n\n      localStorage.setItem("token", data.jwt);\n      /**\n       * Setting the token to the client\'s header to send it with every request.\n       */\n      // highlight-next-line\n      client.setHeader("Authorization", `Bearer ${data.jwt}`);\n\n      return {\n        success: true,\n        redirectTo: "/",\n      };\n    } catch (error) {\n      return {\n        success: false,\n        error: new Error(error),\n      };\n    }\n  },\n  logout: async () => {\n    localStorage.removeItem("token");\n    /**\n     * Removing the token from the client\'s header to prevent sending it with every request.\n     */\n    // highlight-next-line\n    client.setHeader("Authorization", "");\n    return {\n      success: true,\n      redirectTo: "/login",\n    };\n  },\n  check: async () => {\n    const jwt = localStorage.getItem("token");\n\n    if (!jwt) {\n      return {\n        authenticated: false,\n        error: {\n          message: "Check failed",\n          name: "Token not found",\n        },\n        redirectTo: "/login",\n      };\n    }\n\n    /**\n     * This is done to persist the token in the client\'s header for next sessions.\n     */\n    client.setHeader("Authorization", `Bearer ${jwt}`);\n\n    return {\n      authenticated: true,\n    };\n  },\n};\n\nconst App = () => (\n  <Refine\n    dataProvider={strapiDataProvider}\n    // highlight-next-line\n    authProvider={authProvider}\n  >\n    {/* ... */}\n  </Refine>\n);\n')),(0,r.kt)("h2",{id:"create-collections"},"Create Collections"),(0,r.kt)("p",null,"We created two collections on ",(0,r.kt)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"posts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"categories")," and added a relation between them. For detailed information on how to create a collection, you can check ",(0,r.kt)("a",{parentName:"p",href:"https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html"},"here"),"."),(0,r.kt)("p",null,"You can see the fields of the collections we created as below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="post"',title:'"post"'},'{\n  "id": 1,\n  "title": "Eius ea autem.",\n  "content": "Explicabo nihil delectus. Name aliquid sunt numquam...",\n  "category": {\n    "id": 24,\n    "title": "Placeat fuga"\n  }\n}\n')),(0,r.kt)("h2",{id:"list-page"},"List Page"),(0,r.kt)("p",null,"When sending the request, we must specify which fields will come, so we send ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," to hooks that we will fetch data from."),(0,r.kt)(a.Z,{defaultValue:"implementation",values:[{label:"Implementation",value:"implementation"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"implementation",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:5173 previewHeight=450px",live:!0,url:"http://localhost:5173",previewHeight:"450px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@refinedev/core";\nimport { ThemedLayoutV2, RefineThemes } from "@refinedev/antd";\nimport { ConfigProvider, Layout } from "antd";\nimport routerProvider from "@refinedev/react-router-v6";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// visible-block-start\n// src/pages/posts/list.tsx\n\nimport {\n  List,\n  EditButton,\n  ShowButton,\n  DeleteButton,\n  useTable,\n  useSelect,\n  getDefaultSortOrder,\n  FilterDropdown,\n} from "@refinedev/antd";\nimport { Table, Space, Select } from "antd";\n\nconst PostList = () => {\n  const { tableProps, sorter } = useTable<IPost>({\n    sorters: {\n      initial: [\n        {\n          field: "id",\n          order: "asc",\n        },\n      ],\n    },\n    // highlight-start\n    meta: {\n      fields: [\n        "id",\n        "title",\n        {\n          category: ["title"],\n        },\n      ],\n    },\n    // highlight-end\n  });\n\n  const { selectProps } = useSelect<ICategory>({\n    resource: "categories",\n    // highlight-start\n    meta: {\n      fields: ["id", "title"],\n    },\n    // highlight-end\n  });\n\n  return (\n    <List>\n      <Table {...tableProps} rowKey="id">\n        <Table.Column\n          dataIndex="id"\n          title="ID"\n          sorter={{ multiple: 2 }}\n          defaultSortOrder={getDefaultSortOrder("id", sorter)}\n        />\n        <Table.Column key="title" dataIndex="title" title="Title" sorter={{ multiple: 1 }} />\n        <Table.Column<IPost>\n          dataIndex="category"\n          title="Category"\n          filterDropdown={(props) => (\n            <FilterDropdown {...props}>\n              <Select style={{ minWidth: 200 }} mode="multiple" placeholder="Select Category" {...selectProps} />\n            </FilterDropdown>\n          )}\n          render={(_, record) => {\n            if (record.category) {\n              return record.category.title;\n            }\n\n            return "-";\n          }}\n        />\n        <Table.Column<IPost>\n          title="Actions"\n          dataIndex="actions"\n          render={(_, record) => (\n            <Space>\n              <EditButton hideText size="small" recordItemId={record.id} />\n              <ShowButton hideText size="small" recordItemId={record.id} />\n              <DeleteButton hideText size="small" recordItemId={record.id} />\n            </Space>\n          )}\n        />\n      </Table>\n    </List>\n  );\n};\n// visible-block-end\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <ConfigProvider theme={RefineThemes.Blue}>\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={gqlDataProvider}\n          resources={[\n            {\n              name: "posts",\n              list: "/posts",\n            },\n          ]}\n        >\n          <Routes>\n            <Route\n              element={\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              }\n            >\n              <Route path="posts">\n                <Route index element={<PostList />} />\n              </Route>\n            </Route>\n          </Routes>\n        </Refine>\n      </ConfigProvider>\n    </BrowserRouter>\n  );\n};\n\nrender(<App />);\n'))),(0,r.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,r.kt)("p",null,"This will be the result GraphQL query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"\nquery ($sort: String, $where: JSON, $start: Int, $limit: Int) {\n    posts (sort: $sort, where: $where, start: $start, limit: $limit) {\n        id,\n        title,\n        category {\n            title\n        }\n    }\n}\n")))),(0,r.kt)("h2",{id:"edit-page"},"Edit Page"),(0,r.kt)("p",null,"On the edit page, ",(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," sends a request with the record id to fill the form. ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")," must be sent in ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," to determine which fields will come in this request."),(0,r.kt)(a.Z,{defaultValue:"implementation",values:[{label:"Implementation",value:"implementation"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"implementation",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:5173 previewHeight=450px",live:!0,url:"http://localhost:5173",previewHeight:"450px"},'setInitialRoutes(["/posts/edit/2020"]);\nimport { Refine } from "@refinedev/core";\nimport { ThemedLayoutV2, RefineThemes } from "@refinedev/antd";\nimport { ConfigProvider, Layout } from "antd";\nimport routerProvider from "@refinedev/react-router-v6";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// visible-block-start\n// src/pages/posts/edit.tsx\n\nimport { Edit, useForm, useSelect } from "@refinedev/antd";\nimport { Select, Form, Input } from "antd";\nimport { HttpError } from "@refinedev/core";\n\ninterface IPost {\n  id: string;\n  title: string;\n  content: string;\n  category: ICategory;\n}\n\ninterface ICategory {\n  id: string;\n  title: string;\n}\n\nconst PostEdit: React.FC = () => {\n  const { formProps, saveButtonProps, queryResult } = useForm<IPost, HttpError, IPost>({\n    // highlight-start\n    meta: {\n      fields: [\n        "id",\n        "title",\n        {\n          category: ["id", "title"],\n        },\n        "content",\n      ],\n    },\n    // highlight-end\n  });\n\n  const postData = queryResult?.data?.data;\n  const { selectProps: categorySelectProps } = useSelect<ICategory>({\n    resource: "categories",\n    defaultValue: postData?.category.id,\n    // highlight-start\n    meta: {\n      fields: ["id", "title"],\n    },\n    // highlight-end\n  });\n\n  const { TextArea } = Input;\n\n  return (\n    <Edit saveButtonProps={saveButtonProps}>\n      <Form\n        {...formProps}\n        layout="vertical"\n        onFinish={(values) =>\n          formProps.onFinish?.({\n            ...values,\n            category: values.category.id,\n          } as any)\n        }\n      >\n        <Form.Item\n          label="Title"\n          name="title"\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <Input />\n        </Form.Item>\n        <Form.Item\n          label="Category"\n          name={["category", "id"]}\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <Select {...categorySelectProps} />\n        </Form.Item>\n        <Form.Item\n          label="Content"\n          name="content"\n          rules={[\n            {\n              required: true,\n            },\n          ]}\n        >\n          <TextArea />\n        </Form.Item>\n      </Form>\n    </Edit>\n  );\n};\n// visible-block-end\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <ConfigProvider theme={RefineThemes.Blue}>\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={gqlDataProvider}\n          resources={[\n            {\n              name: "posts",\n              edit: "/posts/edit/:id",\n            },\n          ]}\n        >\n          <Routes>\n            <Route\n              element={\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              }\n            >\n              <Route path="posts">\n                <Route path="edit/:id" element={<PostEdit />} />\n              </Route>\n            </Route>\n          </Routes>\n        </Refine>\n      </ConfigProvider>\n    </BrowserRouter>\n  );\n};\n\nrender(<App />);\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The create page is largely the same as the edit page, there is no need to pass ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," to ",(0,r.kt)("a",{parentName:"p",href:"/docs/data/hooks/use-form"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," on the create page. If you want to use the created record as a response after the request, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"meta"),"."))),(0,r.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,r.kt)("p",null,"This will be the result GraphQL query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"mutation ($input: updatePostInput) {\n    updatePost (input: $input) {\n        post  {\n            id\n        }\n    }\n}\n")))),(0,r.kt)("h2",{id:"show-page"},"Show Page"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<Show>")," component includes the ",(0,r.kt)("a",{parentName:"p",href:"/docs/ui-integrations/ant-design/components/buttons/refresh-button"},(0,r.kt)("inlineCode",{parentName:"a"},"<RefreshButton>"))," by default. We can pass ",(0,r.kt)("inlineCode",{parentName:"p"},"refetch")," method of ",(0,r.kt)("inlineCode",{parentName:"p"},"queryResult")," to its ",(0,r.kt)("inlineCode",{parentName:"p"},"onClick"),". This method repeats the last request made by the query. So it refreshes the data that is shown in page."),(0,r.kt)(a.Z,{defaultValue:"implementation",values:[{label:"Implementation",value:"implementation"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"implementation",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:5173 previewHeight=450px",live:!0,url:"http://localhost:5173",previewHeight:"450px"},'setInitialRoutes(["/posts/show/2020"]);\nimport { Refine } from "@refinedev/core";\nimport { ThemedLayoutV2, RefineThemes } from "@refinedev/antd";\nimport { ConfigProvider, Layout } from "antd";\nimport routerProvider from "@refinedev/react-router-v6";\nimport { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";\n\n// visible-block-start\n// src/pages/posts/edit.tsx\n\nimport { Show, RefreshButton } from "@refinedev/antd";\nimport { Select, Form, Input, Typography } from "antd";\nimport { useShow } from "@refinedev/core";\n\nconst PostShow: React.FC = () => {\n  const { Title, Text } = Typography;\n\n  const { queryResult } = useShow<IPost>({\n    resource: "posts",\n    // highlight-start\n    meta: {\n      fields: [\n        "id",\n        "title",\n        {\n          category: ["title"],\n        },\n        "content",\n      ],\n    },\n    // highlight-end\n  });\n  const { data, isLoading } = queryResult;\n  const record = data?.data;\n\n  return (\n    <Show\n      isLoading={isLoading}\n      // highlight-next-line\n      headerProps={{\n        extra: <RefreshButton onClick={() => queryResult.refetch()} />,\n      }}\n    >\n      <Title level={5}>Id</Title>\n      <Text>{record?.id}</Text>\n\n      <Title level={5}>Title</Title>\n      <Text>{record?.title}</Text>\n\n      <Title level={5}>Category</Title>\n      <Text>{record?.category.title}</Text>\n\n      <Title level={5}>Content</Title>\n      <Text value={record?.content} />\n    </Show>\n  );\n};\n// visible-block-end\n\nconst App: React.FC = () => {\n  return (\n    <BrowserRouter>\n      <ConfigProvider theme={RefineThemes.Blue}>\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={gqlDataProvider}\n          resources={[\n            {\n              name: "posts",\n              show: "/posts/show/:id",\n            },\n          ]}\n        >\n          <Routes>\n            <Route\n              element={\n                <ThemedLayoutV2>\n                  <Outlet />\n                </ThemedLayoutV2>\n              }\n            >\n              <Route path="posts">\n                <Route path="show/:id" element={<PostShow />} />\n              </Route>\n            </Route>\n          </Routes>\n        </Refine>\n      </ConfigProvider>\n    </BrowserRouter>\n  );\n};\n\nrender(<App />);\n'))),(0,r.kt)(o.Z,{value:"output",mdxType:"TabItem"},(0,r.kt)("p",null,"This will be the result GraphQL query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"mutation ($input: updatePostInput) {\n    updatePost (input: $input) {\n        post  {\n            id\n        }\n    }\n}\n")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(f,{path:"data-provider-strapi-graphql",mdxType:"CodeSandboxExample"}))}k.isMDXComponent=!0}}]);