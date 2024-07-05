"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[63259],{58860:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>f});var r=t(37953);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(t),u=o,f=c["".concat(p,".").concat(u)]||c[u]||g[u]||i;return t?r.createElement(f,a(a({ref:n},d),{},{components:t})):r.createElement(f,a({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},10101:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>v,frontMatter:()=>s,metadata:()=>l,toc:()=>c});t(37953);var r=t(58860);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={id:"generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",tutorial:{prev:"3.xx.xx/tutorial/getting-started/{preferredUI}/create-project",next:"3.xx.xx/tutorial/getting-started/store-your-repository"}},p=void 0,l={unversionedId:"tutorial/getting-started/mantine/generate-crud-pages",id:"version-3.xx.xx/tutorial/getting-started/mantine/generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",description:"Inferencer",source:"@site/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/mantine/3-generate-crud-pages.md",sourceDirName:"tutorial/1-getting-started/mantine",slug:"/tutorial/getting-started/mantine/generate-crud-pages",permalink:"/docs/3.xx.xx/tutorial/getting-started/mantine/generate-crud-pages",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/tutorial/1-getting-started/mantine/3-generate-crud-pages.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1720174164,formattedLastUpdatedAt:"Jul 5, 2024",sidebarPosition:3,frontMatter:{id:"generate-crud-pages",title:"4. Generate CRUD pages automatically with Inferencer",tutorial:{prev:"3.xx.xx/tutorial/getting-started/{preferredUI}/create-project",next:"3.xx.xx/tutorial/getting-started/store-your-repository"}}},d={},c=[{value:"Inferencer",id:"inferencer",level:2},{value:"Why use Inferencer?",id:"why-use-inferencer",level:4},{value:"Learn Inferencer",id:"learn-inferencer",level:4},{value:"How to use Inferencer",id:"how-to-use-inferencer",level:2},{value:"Preview the auto-generated pages",id:"preview-the-auto-generated-pages",level:2},{value:"List Page",id:"list-page",level:3},{value:"Create Page",id:"create-page",level:3},{value:"Edit Page",id:"edit-page",level:3},{value:"Show Page",id:"show-page",level:3}],g=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",n)},u=g("DocThumbsUpDownFeedbackWidget"),f=g("Checklist"),m=g("ChecklistItem"),h={toc:c},y="wrapper";function v(e){var{components:n}=e,t=a(e,["components"]);return(0,r.yg)(y,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){o(e,n,t[n])}))}return e}({},h,t),{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"inferencer"},"Inferencer"),(0,r.yg)(u,{id:"inferencer",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"Inferencer is a powerful tool in the ",(0,r.yg)("strong",{parentName:"p"},"refine")," ecosystem that helps developers quickly generate CRUD (create, read, update, delete) pages for their data model. It analyzes your data model based on the resource scheme and automatically creates the pages with required forms and tables for CRUD operations.")),(0,r.yg)("h4",{id:"why-use-inferencer"},"Why use Inferencer?"),(0,r.yg)(u,{id:"why-use-inferencer",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"There are several benefits:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The goal of Inferencer is to reduce the amount of time spent on creating views for resources by generating the code automatically. This can save developers a significant amount of time and effort, especially on large projects with many resources.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Inferencer generates code that is easy to customize. Instead of starting from scratch, you can use the auto-generated code as a starting point and make changes to fit your specific needs. This allows you to quickly iterate and get your project up and running faster.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"By using Inferencer, you can avoid common mistakes that can arise when building CRUD pages manually. This can help you avoid bugs and other issues that can arise during development."))),(0,r.yg)("p",null,"Overall, using Inferencer can greatly speed up development time and reduce the amount of code that needs to be written manually. It helps ensure that your CRUD pages are consistent and adhere to best practices, freeing you up to focus on more complex tasks.")),(0,r.yg)("h4",{id:"learn-inferencer"},"Learn Inferencer"),(0,r.yg)(u,{id:"learn-inferencer",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Learn about ",(0,r.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/packages/documentation/inferencer"},"how Inferencer works"),"."),(0,r.yg)("li",{parentName:"ul"},"Learn about ",(0,r.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/mantine/components/inferencer/"},"how to use Inferencer with Mantine"),"."))),(0,r.yg)("h2",{id:"how-to-use-inferencer"},"How to use Inferencer"),(0,r.yg)(u,{id:"how-to-use-inferencer",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer")," package provides the ",(0,r.yg)("inlineCode",{parentName:"p"},"<MantineInferencer/>")," component, which can be imported from ",(0,r.yg)("inlineCode",{parentName:"p"},"@pankod/refine-inferencer/mantine"),". It used to generate CRUD pages based on your API response with Mantine components."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"<MantineInferencer/>")," component is used by passing to appropriate values in the ",(0,r.yg)("inlineCode",{parentName:"p"},"resources")," prop of the ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component in ",(0,r.yg)("inlineCode",{parentName:"p"},"App.tsx")," as shown below:"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"In ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/understanding-resources/index"},"Unit 4"),", the resources concept will be explained in detail. For now, you can assume that the resource is a collection of data on your API used in the app.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  MantineProvider,\n  Global,\n  NotificationsProvider,\n  useNotificationProvider,\n  LightTheme,\n  Layout,\n  ReadyPage,\n  ErrorComponent,\n} from "@pankod/refine-mantine";\n//highlight-next-line\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst App = () => {\n  return (\n    <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <NotificationsProvider position="top-right">\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          notificationProvider={useNotificationProvider}\n          ReadyPage={ReadyPage}\n          catchAll={<ErrorComponent />}\n          Layout={Layout}\n          //highlight-start\n          resources={[\n            {\n              name: "blog_posts",\n              list: MantineInferencer,\n              show: MantineInferencer,\n              create: MantineInferencer,\n              edit: MantineInferencer,\n            },\n          ]}\n          //highlight-end\n        />\n      </NotificationsProvider>\n    </MantineProvider>\n  );\n};\n\nexport default App;\n')),(0,r.yg)("p",null,"At this point, ",(0,r.yg)("strong",{parentName:"p"},"refine")," will automatically generate the CRUD pages for the ",(0,r.yg)("inlineCode",{parentName:"p"},"blog_posts")," resource based on the API response.")),(0,r.yg)("h2",{id:"preview-the-auto-generated-pages"},"Preview the auto-generated pages"),(0,r.yg)(u,{id:"preview-the-auto-generated-pages",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"So far we have added complete CRUD pages by utilizing Inferencer feature to the project. Let's take a look at the auto-generated CRUD pages that Inferencer handles for us."),(0,r.yg)("p",null,"Before we start, let's understand the API that we will be using in this tutorial. We will be using the ",(0,r.yg)("a",{parentName:"p",href:"https://api.fake-rest.refine.dev"},"https://api.fake-rest.refine.dev")," API. This API is created by the ",(0,r.yg)("strong",{parentName:"p"},"refine")," team and is used for demo purposes. It is a simple REST API that contains some resources like ",(0,r.yg)("inlineCode",{parentName:"p"},"blog_posts"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"categories"),", etc."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"In ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/understanding-dataprovider/index"},"Unit 3"),", it will be explained in detail how ",(0,r.yg)("strong",{parentName:"p"},"refine")," apps communicate with the API via the ",(0,r.yg)("inlineCode",{parentName:"p"},"dataProvider"),".")),(0,r.yg)("p",null,'You can view the code generated by Inferencer by clicking the "Show Code" button in the right corner of the live preview below.')),(0,r.yg)("h3",{id:"list-page"},"List Page"),(0,r.yg)(u,{id:"list-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"To preview the list page, go back to your browser and open the ",(0,r.yg)("a",{href:"localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000")," address."),(0,r.yg)("p",null,"You should see the list page for the ",(0,r.yg)("inlineCode",{parentName:"p"},"blog_posts")," resource that was generated by Inferencer like below:"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"When you navigate to the ",(0,r.yg)("inlineCode",{parentName:"p"},"localhost:3000"),", ",(0,r.yg)("strong",{parentName:"p"},"refine")," will redirect you to the initial resource's list page registered to ",(0,r.yg)("inlineCode",{parentName:"p"},"<Refine/>")," component like ",(0,r.yg)("inlineCode",{parentName:"p"},"localhost:3000/blog-posts"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts"},'setInitialRoutes(["/blog-posts"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  MantineProvider,\n  Global,\n  NotificationsProvider,\n  useNotificationProvider,\n  LightTheme,\n  Layout,\n  ReadyPage,\n  ErrorComponent,\n} from "@pankod/refine-mantine";\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst App = () => {\n  return (\n    <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <NotificationsProvider position="top-right">\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          notificationProvider={useNotificationProvider}\n          ReadyPage={ReadyPage}\n          catchAll={<ErrorComponent />}\n          Layout={Layout}\n          resources={[\n            {\n              name: "blog_posts",\n              list: MantineInferencer,\n              show: MantineInferencer,\n              create: MantineInferencer,\n              edit: MantineInferencer,\n            },\n          ]}\n        />\n      </NotificationsProvider>\n    </MantineProvider>\n  );\n};\n\nrender(<App />);\n'))),(0,r.yg)("h3",{id:"create-page"},"Create Page"),(0,r.yg)(u,{id:"create-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"To preview the create page, go back to your browser and open the ",(0,r.yg)("a",{href:"localhost:3000/blog-posts/create",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/create"),' address or click the "Create" button on the list page.'),(0,r.yg)("p",null,"You should see the create page for the ",(0,r.yg)("inlineCode",{parentName:"p"},"blog_posts")," resource that was generated by Inferencer like below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/create"},'setInitialRoutes(["/blog-posts/create"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  MantineProvider,\n  Global,\n  NotificationsProvider,\n  useNotificationProvider,\n  LightTheme,\n  Layout,\n  ReadyPage,\n  ErrorComponent,\n} from "@pankod/refine-mantine";\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst App = () => {\n  return (\n    <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <NotificationsProvider position="top-right">\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          notificationProvider={useNotificationProvider}\n          ReadyPage={ReadyPage}\n          catchAll={<ErrorComponent />}\n          Layout={Layout}\n          resources={[\n            {\n              name: "blog_posts",\n              list: MantineInferencer,\n              show: MantineInferencer,\n              create: MantineInferencer,\n              edit: MantineInferencer,\n            },\n          ]}\n        />\n      </NotificationsProvider>\n    </MantineProvider>\n  );\n};\n\nrender(<App />);\n'))),(0,r.yg)("h3",{id:"edit-page"},"Edit Page"),(0,r.yg)(u,{id:"edit-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"To preview the edit page, go back to your browser and open the ",(0,r.yg)("a",{href:"localhost:3000/blog-posts/edit/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/edit/123"),' address or click the "Edit" button on the record in the list page.'),(0,r.yg)("p",null,"You should see the edit page for the ",(0,r.yg)("inlineCode",{parentName:"p"},"blog_posts")," resource with the id ",(0,r.yg)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/edit/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/edit/123"},'setInitialRoutes(["/blog-posts/edit/123"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  MantineProvider,\n  Global,\n  NotificationsProvider,\n  useNotificationProvider,\n  LightTheme,\n  Layout,\n  ReadyPage,\n  ErrorComponent,\n} from "@pankod/refine-mantine";\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst App = () => {\n  return (\n    <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <NotificationsProvider position="top-right">\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          notificationProvider={useNotificationProvider}\n          ReadyPage={ReadyPage}\n          catchAll={<ErrorComponent />}\n          Layout={Layout}\n          resources={[\n            {\n              name: "blog_posts",\n              list: MantineInferencer,\n              show: MantineInferencer,\n              create: MantineInferencer,\n              edit: MantineInferencer,\n            },\n          ]}\n        />\n      </NotificationsProvider>\n    </MantineProvider>\n  );\n};\n\nrender(<App />);\n'))),(0,r.yg)("h3",{id:"show-page"},"Show Page"),(0,r.yg)(u,{id:"show-page",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,"To preview the show page, go back to your browser and open the ",(0,r.yg)("a",{href:"localhost:3000/blog-posts/show/123",rel:"noopener noreferrer nofollow"},"localhost:3000/blog-posts/show/123"),' address or click the "Show" button on the record in the list page.'),(0,r.yg)("p",null,"You should see the show page for the ",(0,r.yg)("inlineCode",{parentName:"p"},"blog_posts")," resource with the id ",(0,r.yg)("inlineCode",{parentName:"p"},"123")," that was generated by Inferencer like below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/show/123",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/blog-posts/show/123"},'setInitialRoutes(["/blog-posts/show/123"]);\n\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport {\n  MantineProvider,\n  Global,\n  NotificationsProvider,\n  useNotificationProvider,\n  LightTheme,\n  Layout,\n  ReadyPage,\n  ErrorComponent,\n} from "@pankod/refine-mantine";\nimport { MantineInferencer } from "@pankod/refine-inferencer/mantine";\n\nconst App = () => {\n  return (\n    <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>\n      <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n      <NotificationsProvider position="top-right">\n        <Refine\n          routerProvider={routerProvider}\n          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n          notificationProvider={useNotificationProvider}\n          ReadyPage={ReadyPage}\n          catchAll={<ErrorComponent />}\n          Layout={Layout}\n          resources={[\n            {\n              name: "blog_posts",\n              list: MantineInferencer,\n              show: MantineInferencer,\n              create: MantineInferencer,\n              edit: MantineInferencer,\n            },\n          ]}\n        />\n      </NotificationsProvider>\n    </MantineProvider>\n  );\n};\n\nrender(<App />);\n')),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("p",null,"In ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/tutorial/adding-crud-pages/mantine/index"},"Unit 5"),", you will learn how to create CRUD pages manually using the code generated by Inferencer as a reference."),(0,r.yg)(f,{mdxType:"Checklist"},(0,r.yg)(m,{id:"generated-crud-mantine-pages",mdxType:"ChecklistItem"},"I understood what is Inferencer, how it works and how Inferencer make my work easier."),(0,r.yg)(m,{id:"generated-crud-mantine-pages-2",mdxType:"ChecklistItem"},(0,r.yg)("p",null,"I inspected the auto-generated ",(0,r.yg)("inlineCode",{parentName:"p"},"list"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"create"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"edit"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"show")," pages.")))))}v.isMDXComponent=!0}}]);