"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[36988],{58860:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var a=t(37953);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(t),c=r,m=p["".concat(l,".").concat(c)]||p[c]||g[c]||o;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},58885:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>p});t(37953);var a=t(58860);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const s={title:"Live Provider"},l=void 0,d={unversionedId:"realtime/live-provider/index",id:"realtime/live-provider/index",title:"Live Provider",description:"Live Provider is Refine's built-in provider that enables real-time updates and interactions between the server and the client. Refine being agnostic as always allows you to integrate any solution of your choice",source:"@site/docs/realtime/live-provider/index.md",sourceDirName:"realtime/live-provider",slug:"/realtime/live-provider/",permalink:"/docs/realtime/live-provider/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/realtime/live-provider/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1720174164,formattedLastUpdatedAt:"Jul 5, 2024",frontMatter:{title:"Live Provider"},sidebar:"mainSidebar",previous:{title:"Permify",permalink:"/docs/examples/access-control/permify"},next:{title:"usePublish",permalink:"/docs/realtime/hooks/use-publish/"}},u={},p=[{value:"Built-in Integrations",id:"built-in-integrations",level:2},{value:"Live Mode Options",id:"live-mode-options",level:2},{value:"auto",id:"auto",level:3},{value:"manual",id:"manual",level:3},{value:"off",id:"off",level:3},{value:"onLiveEvent",id:"onliveevent",level:2},{value:"With <code>&lt;Refine&gt;</code> component",id:"with-refine-component",level:3},{value:"Integrated Hooks",id:"integrated-hooks",level:2},{value:"useList",id:"uselist",level:3},{value:"useOne",id:"useone",level:3},{value:"useMany",id:"usemany",level:3},{value:"Publish Events from Hooks",id:"publish-events-from-hooks",level:2},{value:"useCreate",id:"usecreate",level:3},{value:"useCreateMany",id:"usecreatemany",level:3},{value:"useDelete",id:"usedelete",level:3},{value:"useDeleteMany",id:"usedeletemany",level:3},{value:"useUpdate",id:"useupdate",level:3},{value:"useUpdateMany",id:"useupdatemany",level:3},{value:"Publishing Events from the Client Side",id:"publishing-events-from-the-client-side",level:2}],g=(c="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)});var c;const m={toc:p},y="wrapper";function h(e){var{components:n}=e,t=i(e,["components"]);return(0,a.yg)(y,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){r(e,n,t[n])}))}return e}({},m,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Live Provider")," is Refine's built-in provider that enables real-time updates and interactions between the server and the client. Refine being agnostic as always allows you to integrate any solution of your choice"),(0,a.yg)("p",null,"A live provider must include the following methods:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"const liveProvider = {\n    subscribe: ({ channel, params: { ids }, types, callback, meta }) => any,\n    unsubscribe: (subscription) => void,\n    publish?: ({ channel, type, payload, date, meta }) => void,\n};\n")),(0,a.yg)("h2",{id:"built-in-integrations"},"Built-in Integrations"),(0,a.yg)(g,{id:"built-in-integrations",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"We have the following built-in integrations which you can use out-of-the-box."),(0,a.yg)("p",null,"Refine includes some out-of-the-box live providers to use in your projects such as:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Ably")," ","\u2192"," ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/packages/ably/src/index.ts"},"Source Code")," - ",(0,a.yg)("a",{parentName:"li",href:"https://codesandbox.io/embed/github/refinedev/refine/tree/master/examples/live-provider-ably/?view=preview&theme=dark&codemirror=1"},"Demo")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Supabase")," ","\u2192"," ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/packages/supabase/src/index.ts#L187"},"Source Code")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Appwrite")," ","\u2192"," ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/packages/appwrite/src/index.ts#L252"},"Source Code")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Hasura")," ","\u2192"," ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/refinedev/refine/blob/master/packages/hasura/src/liveProvider/index.ts#L16"},"Source Code")))),(0,a.yg)("h2",{id:"live-mode-options"},"Live Mode Options"),(0,a.yg)(g,{id:"live-mode-options",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"To activate live features in Refine, you need to use the ",(0,a.yg)("inlineCode",{parentName:"p"},"liveMode")," option."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Global Configuration"),": Add liveMode to the options prop of the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine>")," component. This sets it up for your entire application, and all hooks will automatically use this by default."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'<Refine\n  liveProvider={liveProvider}\n  options={\n    // highlight-next-line\n    { liveMode: "auto" }\n  }\n/>\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Hook-Specific Configuration"),": Alternatively, you can apply liveMode directly to ",(0,a.yg)("a",{parentName:"p",href:"#integrated-hooks"},"integrated hooks")," individually for more precise control. This is useful if you don't want to apply live mode globally."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'useList({ liveMode: "auto" });\n// or\nuseOne({ liveMode: "auto" });\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Priority Handling"),": If you provide ",(0,a.yg)("inlineCode",{parentName:"p"},"liveMode")," in both the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine>")," component and hooks, the config in the hook will take priority over the global ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine>")," configuration.")),(0,a.yg)("h3",{id:"auto"},"auto"),(0,a.yg)(g,{id:"auto",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Queries of related resources ",(0,a.yg)("strong",{parentName:"p"},"will be invalidated")," and ",(0,a.yg)("strong",{parentName:"p"},"re-fetched")," as new events from subscriptions are published."),(0,a.yg)("p",null,"For example, ",(0,a.yg)("inlineCode",{parentName:"p"},"posts")," data of ",(0,a.yg)("inlineCode",{parentName:"p"},"useList")," hook will be re-fetched when a new event is published for ",(0,a.yg)("inlineCode",{parentName:"p"},"posts")," resource."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { data } = useList({ resource: "posts", liveMode: "auto" });\n'))),(0,a.yg)("h3",{id:"manual"},"manual"),(0,a.yg)(g,{id:"manual",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"In ",(0,a.yg)("inlineCode",{parentName:"p"},"manual")," mode, queries of the related resources ",(0,a.yg)("strong",{parentName:"p"},"won't be invalidated"),". Instead, the ",(0,a.yg)("inlineCode",{parentName:"p"},"onLiveEvent")," function will be called when new events are published from the subscriptions."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"manual")," mode can be used to prevent those"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { data } = useList({\n  liveMode: "manual",\n  onLiveEvent: (event) => {\n    console.log(event); // { channel: "resources/posts", type: "created", payload: { ids: ["1"] }, date: new Date() }\n  },\n});\n'))),(0,a.yg)("h3",{id:"off"},"off"),(0,a.yg)(g,{id:"off",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Disables live mode entirely.")),(0,a.yg)("h2",{id:"onliveevent"},"onLiveEvent"),(0,a.yg)(g,{id:"onliveevent",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"onLiveEvent")," is called when the new event(s) are published from the subscriptions."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const { data } = useList({\n  resource: "products",\n  liveMode: "manual",\n  // Called when new event(s) are published for `products` resource.\n  onLiveEvent: (event) => {\n    console.log(event); // { channel: "resources/posts", type: "created", payload: { ids: ["1"] }, date: new Date() }\n  },\n});\n'))),(0,a.yg)("h3",{id:"with-refine-component"},"With ",(0,a.yg)("inlineCode",{parentName:"h3"},"<Refine>")," component"),(0,a.yg)(g,{id:"with-refine-component",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"When passed to the ",(0,a.yg)("inlineCode",{parentName:"p"},"<Refine>")," component, ",(0,a.yg)("inlineCode",{parentName:"p"},"onLiveEvent")," will be called for ",(0,a.yg)("strong",{parentName:"p"},"every event")," from any resource. It can be used for actions that are generally applicable to all events from active subscriptions."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\n\nimport { liveProvider } from "./liveProvider";\n\nconst App: React.FC = () => {\n  return (\n    <Refine\n      liveProvider={liveProvider}\n      options={{ liveMode: "auto" }}\n      onLiveEvent={(event) => {\n        // Put your own logic based on event\n      }}\n    />\n  );\n};\n'))),(0,a.yg)("h2",{id:"integrated-hooks"},"Integrated Hooks"),(0,a.yg)(g,{id:"integrated-hooks",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Following hooks are supported by the ",(0,a.yg)("strong",{parentName:"p"},"Live Provider")," and will subscribe to their resource channels automatically.")),(0,a.yg)("h3",{id:"uselist"},"useList"),(0,a.yg)(g,{id:"uselist",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'useList({ resource: "posts" });\n\n// Calls LiveProvider\'s `subscribe` method with following parameters:\n{\n    types: ["*"],\n    channel: "resources/posts"\n}\n')),(0,a.yg)("p",null,"Since the following hooks are derivative of ",(0,a.yg)("inlineCode",{parentName:"p"},"useList")," hook, they will subscribe to the same events."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Package"),(0,a.yg)("th",{parentName:"tr",align:null},"Hooks"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"@refinedev/core"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/data/hooks/use-table"},"useTable"),", ",(0,a.yg)("a",{parentName:"td",href:"/docs/data/hooks/use-select"},"useSelect"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"@refinedev/antd"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-table"},"useTable"),", ",(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-editable-table"},"useEditableTable"),", ",(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-select"},"useSelect"),", ",(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-simple-list"},"useSimpleList"),", ",(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-checkbox-group"},"useCheckboxGroup"),", ",(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-radio-group"},"useRadioGroup"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"@refinedev/react-table"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/packages/list-of-packages"},"useTable"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"@refinedev/mui"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/material-ui/hooks/use-data-grid"},"useDataGrid"),", ",(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/material-ui/hooks/use-auto-complete"},"useAutoComplete"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"@refinedev/mantine"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/mantine/hooks/use-select"},"useSelect")))))),(0,a.yg)("h3",{id:"useone"},"useOne"),(0,a.yg)(g,{id:"useone",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'useOne({ resource: "posts", id: "1" });\n\n\n// Calls LiveProvider\'s `subscribe` method with following parameters:\n{\n    types: ["*"],\n    channel: "resources/posts",\n    params: { ids: ["1"] }\n}\n')),(0,a.yg)("p",null,"Since the following hooks are derivative of ",(0,a.yg)("inlineCode",{parentName:"p"},"useOne")," hook, they will subscribe to the same events."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Package"),(0,a.yg)("th",{parentName:"tr",align:null},"Hooks"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"@refinedev/core"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/data/hooks/use-show"},"useShow"),", ",(0,a.yg)("a",{parentName:"td",href:"/docs/data/hooks/use-form/"},"useForm"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"@refinedev/antd"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-form"},"useForm"),", ",(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-modal-form"},"useModalForm"),", ",(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-drawer-form"},"useDrawerForm"),", ",(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/ant-design/hooks/use-steps-form"},"useStepsForm"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"@refinedev/mantine"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/mantine/hooks/use-form"},"useForm"),", ",(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/mantine/hooks/use-drawer-form"},"useDrawerForm"),", ",(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/mantine/hooks/use-modal-form"},"useModalForm"),", ",(0,a.yg)("a",{parentName:"td",href:"/docs/ui-integrations/mantine/hooks/use-steps-form"},"useStepsForm")))))),(0,a.yg)("h3",{id:"usemany"},"useMany"),(0,a.yg)(g,{id:"usemany",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'useMany({ resource: "posts", ids: ["1", "2"] });\n\n// Calls LiveProvider\'s `subscribe` method with following parameters:\n{\n    types: ["*"],\n    channel: "resources/posts"\n    params: { ids: ["1", "2"] }\n}\n')),(0,a.yg)("p",null,"Since the following hooks are using ",(0,a.yg)("inlineCode",{parentName:"p"},"useMany")," hook, they will subscribe to the same events."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Package"),(0,a.yg)("th",{parentName:"tr",align:null},"Hooks"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"@refinedev/core"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"/docs/data/hooks/use-select"},"useSelect")))))),(0,a.yg)("h2",{id:"publish-events-from-hooks"},"Publish Events from Hooks"),(0,a.yg)(g,{id:"publish-events-from-hooks",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Refine publishes these events in the hooks. Let's see the usage of hooks and what kind of events are published:")),(0,a.yg)("h3",{id:"usecreate"},"useCreate"),(0,a.yg)(g,{id:"usecreate",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useCreate();\n\nmutate({\n  resource: "posts",\n  values: {\n    title: "New Post",\n  },\n});\n\n// Calls Live Provider\'s publish method with following parameters:\n{\n    channel: `resources/posts`,\n    type: "created",\n    payload: {\n        ids: ["id-of-created-post"]\n    },\n    date: new Date(),\n}\n'))),(0,a.yg)("h3",{id:"usecreatemany"},"useCreateMany"),(0,a.yg)(g,{id:"usecreatemany",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useCreateMany();\n\nmutate({\n  resource: "posts",\n  values: [\n    {\n      title: "New Post",\n    },\n    {\n      title: "Another New Post",\n    },\n  ],\n});\n\n// Calls Live Provider\'s publish method with following parameters:\n{\n    channel: `resources/posts`,\n    type: "created",\n    payload: {\n        ids: ["id-of-new-post", "id-of-another-new-post"]\n    },\n    date: new Date(),\n}\n'))),(0,a.yg)("h3",{id:"usedelete"},"useDelete"),(0,a.yg)(g,{id:"usedelete",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useDelete();\n\nmutate({\n  resource: "posts",\n  id: "1",\n});\n\n// Calls Live Provider\'s publish method with following parameters:\n{\n    channel: `resources/posts`,\n    type: "deleted",\n    payload: {\n        ids: ["1"]\n    },\n    date: new Date(),\n}\n'))),(0,a.yg)("h3",{id:"usedeletemany"},"useDeleteMany"),(0,a.yg)(g,{id:"usedeletemany",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useDeleteMany();\n\nmutate({\n  resource: "posts",\n  ids: ["1", "2"],\n});\n\n// Calls Live Provider\'s publish method with following parameters:\n{\n    channel: `resources/posts`,\n    type: "deleted",\n    payload: {\n        ids: ["1", "2"]\n    },\n    date: new Date(),\n}\n'))),(0,a.yg)("h3",{id:"useupdate"},"useUpdate"),(0,a.yg)(g,{id:"useupdate",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useUpdate();\n\nmutate({\n  resource: "posts",\n  id: "2",\n  values: { title: "New Post Title" },\n});\n\n// Calls Live Provider\'s publish method with following parameters:\n{\n    channel: `resources/posts`,\n    type: "updated",\n    payload: {\n        ids: ["1"]\n    },\n    date: new Date(),\n}\n'))),(0,a.yg)("h3",{id:"useupdatemany"},"useUpdateMany"),(0,a.yg)(g,{id:"useupdatemany",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'const { mutate } = useUpdateMany();\n\nmutate({\n  resource: "posts",\n  ids: ["1", "2"],\n  values: { title: "New Post Title" },\n});\n\n// Calls Live Provider\'s publish method with following parameters:\n{\n    channel: `resources/posts`,\n    type: "updated",\n    payload: {\n        ids: ["1", "2"]\n    },\n    date: new Date(),\n}\n'))),(0,a.yg)("h2",{id:"publishing-events-from-the-client-side"},"Publishing Events from the Client Side"),(0,a.yg)(g,{id:"publishing-events-from-the-client-side",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Publishing on the client side must be avoided generally. It's recommended to handle it on the server side."),(0,a.yg)("p",null,"Events published from the server must be in the following ways:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"When creating a record:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'{\n    channel: `resources/${resource}`,\n    type: "created",\n    payload: {\n        ids: [id]\n    },\n    date: new Date(),\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"When deleting a record:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'{\n    channel: `resources/${resource}`,\n    type: "deleted",\n    payload: {\n        ids: [id]\n    },\n    date: new Date(),\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"When updating a record:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},'{\n    channel: `resources/${resource}`,\n    type: "updated",\n    payload: {\n        ids: [id]\n    },\n    date: new Date(),\n}\n'))))}h.isMDXComponent=!0}}]);