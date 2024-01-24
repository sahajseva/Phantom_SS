"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85030],{58943:(e,t,n)=>{n.d(t,{x:()=>m});var r=n(86010),o=n(67294),a=n(73808),s=n(96319),i=n(79526);const l=({horizontalSize:e,onMouseDown:t})=>o.createElement("div",{className:(0,r.Z)("resize-handler","hidden","md:block","absolute","z-[3]","top-0","bottom-0","w-2.5","cursor-ew-resize"),"data-direction":"horizontal",onMouseDown:t,style:{left:`calc(${e}% - 5px)`}});function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const m=e=>{var t;return"nextjs"===(null===(t=e)||void 0===t?void 0:t.template)?o.createElement(f,e):o.createElement(h,e)},h=e=>{var t,n,c,m,h,f,g,v,b,k,y,w,C,x,N,{startRoute:O,showNavigator:P,showLineNumbers:A,showOpenInCodeSandbox:R,initialPercentage:E=50,dependencies:z,showReadOnly:j,options:S={showTabs:!0,initMode:"lazy",classes:{"sp-layout":"!rounded-lg !border-gray-300 dark:!border-gray-700","sp-editor":"!gap-0 border-r !border-r-gray-300 dark:!border-r-gray-700","sp-tabs":"!border-b-gray-300 dark:!border-b-gray-700 !bg-gray-0 dark:!bg-gray-800","sp-tabs-scrollable-container":"!min-h-[32px]","sp-input":"!text-gray-800 dark:!text-gray-100","sp-cm":(0,r.Z)("p-0 bg-transparent","[&>.cm-editor]:!bg-refine-react-light-code","[&>.cm-editor]:dark:!bg-refine-react-dark-code","[&_.cm-activeLine]:!bg-gray-100 [&_.cm-activeLine]:dark:!bg-gray-800"),"sp-icon-standalone":"!bg-gray-300 dark:!bg-gray-700 !text-gray-400 dark:!text-gray-500","sp-tab-button":(0,r.Z)("!h-8","!px-2 !pb-2 !pt-1.5","!text-gray-800 dark:!text-gray-100","!border !border-solid !border-b-0 !border-x-gray-300 dark:!border-x-gray-700","-ml-px first:ml-0","!border-t-2 !border-t-transparent [&[data-active='true']]:!border-t-refine-react-light-link dark:[&[data-active='true']]:!border-t-refine-react-dark-link")}},template:I="react-ts",customSetup:D,files:L,previewOnly:B,layout:T,height:M=420,wrapperClassName:U,className:H,showFiles:F=!1,showConsole:Z=!1,hidePreview:$=!1}=e,W=d(e,["startRoute","showNavigator","showLineNumbers","showOpenInCodeSandbox","initialPercentage","dependencies","showReadOnly","options","template","customSetup","files","previewOnly","layout","height","wrapperClassName","className","showFiles","showConsole","hidePreview"]);const[q,G]=o.useState(!1);o.useEffect((()=>{G(!0)}),[]);const{colorMode:X}=(0,i.I)();var _,K;null!=S||(S={}),null!==(_=(x=S).resizablePanels)&&void 0!==_||(x.resizablePanels=!0),null!==(K=(N=S).editorWidthPercentage)&&void 0!==K||(N.editorWidthPercentage=null!=E?E:50);const J={showTabs:S.showTabs,showLineNumbers:S.showLineNumbers,showInlineErrors:S.showInlineErrors,wrapContent:S.wrapContent,closableTabs:S.closableTabs,initMode:S.initMode,extensions:null===(t=S.codeEditor)||void 0===t?void 0:t.extensions,extensionsKeymap:null===(n=S.codeEditor)||void 0===n?void 0:n.extensionsKeymap,readOnly:S.readOnly,showReadOnly:null!=j?j:S.showReadOnly,additionalLanguages:null===(c=S.codeEditor)||void 0===c?void 0:c.additionalLanguages},V={activeFile:S.activeFile,visibleFiles:S.visibleFiles,recompileMode:S.recompileMode,recompileDelay:S.recompileDelay,autorun:S.autorun,autoReload:S.autoReload,bundlerURL:S.bundlerURL,startRoute:S.startRoute,skipEval:S.skipEval,fileResolver:S.fileResolver,initMode:S.initMode,initModeObserverOptions:S.initModeObserverOptions,externalResources:S.externalResources,logLevel:S.logLevel,classes:S.classes},[Y,Q]=o.useState(!1),{onHandleMouseDown:ee,horizontalSize:te}=(({initialSize:e=50})=>{const[t,n]=o.useState(e),r=o.useRef(null),a=e=>{if(!r.current)return;const t=r.current.parentElement;if(!t)return;const{left:o,width:a}=t.getBoundingClientRect(),s=(e.clientX-o)/a*100,i=Math.min(Math.max(s,25),75);n(i),t.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents="none"}))},s=()=>{var e;const t=null===(e=r.current)||void 0===e?void 0:e.parentElement;t&&(t.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents=""})),r.current=null)};return o.useEffect((()=>(document.body.addEventListener("mousemove",a),document.body.addEventListener("mouseup",s),()=>{document.body.removeEventListener("mousemove",a),document.body.removeEventListener("mouseup",s)})),[]),{horizontalSize:t,onHandleMouseDown:o.useCallback((e=>{r.current=e.target}),[])}})({initialSize:S.editorWidthPercentage}),ne=!B&&!(null===(h=T)||void 0===h||null===(m=h.includes)||void 0===m?void 0:m.call(h,"col"));var re,oe,ae,se,ie,le;return o.createElement(o.Fragment,null,o.createElement("div",{className:(0,r.Z)("pb-6",U)},o.createElement("div",{className:(0,r.Z)("absolute","left-0","right-0","w-full","px-2","md:px-4","xl:px-6","max-w-screen-xl","mx-auto",H)},o.createElement(s.oT,u({key:`${I}-${X}-${q}`,customSetup:u({dependencies:z},D),files:L,options:V,template:I,theme:"light"===X?p(u({},a.FM),{colors:p(u({},a.FM.colors),{accent:"#1D1E30",surface1:"transparent",surface2:"transparent",surface3:"transparent"})}):p(u({},a.I2),{colors:p(u({},a.I2.colors),{surface1:"transparent",surface2:"transparent",surface3:"transparent"})}),className:(0,r.Z)("not-prose sandpack-container","max-w-screen-xl","animate-reveal")},W),o.createElement(s.sp,{className:(0,r.Z)("col"===T&&"!flex-col","col-reverse"===T&&"!flex-col-reverse")},F&&o.createElement(s.Lj,{autoHiddenFiles:!0,style:{height:null!==(re=S.editorHeight)&&void 0!==re?re:M}}),!B&&o.createElement(s._V,p(u({},J),{showLineNumbers:A,closableTabs:F,initMode:"lazy",style:p(u({height:null!==(oe=S.editorHeight)&&void 0!==oe?oe:M},(null===(g=T)||void 0===g||null===(f=g.includes)||void 0===f?void 0:f.call(g,"col"))?{flex:"initial"}:{flexGrow:te,flexShrink:te,flexBasis:0}),{overflow:"hidden"})})),Z?o.createElement(s.Tq,{style:p(u({height:null!==(ae=S.editorHeight)&&void 0!==ae?ae:M},(null===(b=T)||void 0===b||null===(v=b.includes)||void 0===v?void 0:v.call(b,"col"))?{flex:"initial"}:{flexGrow:te,flexShrink:te,flexBasis:0}),{overflow:"hidden"})}):null,ne?o.createElement(l,{onMouseDown:ee,horizontalSize:te}):null,$?null:o.createElement(o.Fragment,null,o.createElement(s.Gj,{showOpenInCodeSandbox:R,startRoute:O,showNavigator:null!=P?P:S.showNavigator,showRefreshButton:S.showRefreshButton,style:p(u({display:$?"none":"flex"},(null===(y=T)||void 0===y||null===(k=y.includes)||void 0===k?void 0:k.call(y,"col"))?{flex:"initial",width:"100%"}:{flexGrow:100-te,flexShrink:100-te,flexBasis:0,width:B?"100%":100-te+"%"}),{gap:0,height:null!==(se=S.editorHeight)&&void 0!==se?se:M})},o.createElement("div",{className:"sp-custom-loading"},o.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/spinner.gif",className:(0,r.Z)("w-12","h-12","rounded-full")}))))))),o.createElement("div",{className:(0,r.Z)(""),style:{height:Number(null!==(ie=S.editorHeight)&&void 0!==ie?ie:M)+2}}),o.createElement("div",{className:(0,r.Z)((null===(C=T)||void 0===C||null===(w=C.includes)||void 0===w?void 0:w.call(C,"col"))?"block":"block md:hidden"),style:{height:Number(null!==(le=S.editorHeight)&&void 0!==le?le:M)+2}})),o.createElement("section",{className:"hidden max-w-0 max-h-0"},o.createElement("p",null,`Dependencies: ${Object.keys(null!=z?z:{}).map((e=>`${e}@${z[e]}`))}`),o.createElement("h3",null,"Code Files"),Object.keys(null!=L?L:{}).map((e=>o.createElement("div",{key:e},o.createElement("div",null,`File: ${e}`),o.createElement("div",null,`Content: ${"code"in L[e]?L[e].code:L[e]}`))))))},f=e=>{const t={hidePreview:!0,showConsole:!1};return o.createElement(h,p(u({},e,t),{template:"react-ts"}))};'\nimport { NavigateToResource } from "@refinedev/nextjs-router";\n\nconst Home = () => {\n    return <NavigateToResource resource="products" />;\n};\n\nexport default Home;\n'.trim()},99542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>y,frontMatter:()=>h,metadata:()=>g,toc:()=>b});var r=n(67294),o=n(3905),a=n(58943);function s(){return r.createElement(a.x,{showNavigator:!0,dependencies:{"@refinedev/core":"latest","@refinedev/simple-rest":"latest","@refinedev/react-router-v6":"latest","react-router-dom":"latest","react-router":"latest"},startRoute:"/payments/1",files:{"/App.tsx":{code:l,hidden:!0},"/style.css":{code:c,hidden:!0},"/access-control.ts":{code:i,active:!0},"/show.tsx":{code:u}}})}const i='\nimport { AccessControlProvider } from "@refinedev/core";\n\nconst role = "editor";\n// Uncomment this line and refresh to see difference.\n// const role = "admin";\n\nexport const accessControlProvider: AccessControlProvider = {\n  can: async ({ action, resource, params }) => {\n    console.log(action, resource, params);\n\n    if (\n      role === "admin" &&\n      ["field", "refund", "approve"].includes(action)\n    ) {\n      return {\n        can: true,\n      };\n    }\n\n    return {\n      can: false,\n      reason: "Unauthorized",\n    };\n  },\n};\n'.trim(),l='\nimport React from "react";\n\nimport { Refine } from "@refinedev/core";\nimport routerProvider from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes } from "react-router-dom";\n\nimport "./style.css";\n\nimport { accessControlProvider } from "./access-control.ts";\nimport { PaymentShow } from "./show.tsx";\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <Refine\n      accessControlProvider={accessControlProvider}\n        routerProvider={routerProvider}\n        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n        resources={[\n          {\n            name: "payments",\n            show: "/payments/:id",\n          },\n        ]}\n      >\n        <Routes>\n          <Route path="/payments/:id" element={<PaymentShow />} />\n        </Routes>\n      </Refine>\n    </BrowserRouter>\n  );\n}\n'.trim(),c="\nhtml {\n    margin: 0;\n    padding: 0;\n}\nbody {\n    margin: 0;\n    padding: 12px;\n}\n* {\n    box-sizing: border-box;\n}\nbody {\n    font-family: sans-serif;\n}\nform label, form input, form button {\n    display: block;\n    width: 100%;\n    margin-bottom: 6px;\n}\nspan + button {\n    margin-left: 6px;\n}\nul > li {\n    margin-bottom: 6px;\n}\n".trim(),u='\nimport { CanAccess, useCan } from "@refinedev/core";\n\nexport const PaymentShow: React.FC = () => {\n  const { data } = useCan({\n    resource: "payments",\n    action: "refund",\n    params: { id: 1 },\n  });\n\n  return (\n    <>\n      <h1>Payment Details</h1>\n      <p>\n        <b>ID</b>: <span>1</span>\n      </p>\n      <p>\n        <b>Amount</b>: <span>$100</span>\n      </p>\n      <p>\n        <b>Transaction ID</b>:\n        <span>\n          <CanAccess\n            resource="payments"\n            action="field"\n            params={{ field: "transactionId" }}\n            fallback={<>This field is only visible to admin users.</>}\n          >\n            <span>123456789</span>\n          </CanAccess>\n        </span>\n      </p>\n      <button disabled={!data?.can}>\n        {data?.can ? "Refund" : data?.reason}\n      </button>\n    </>\n  );\n};\n'.trim();function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const h={title:"Authorization"},f=void 0,g={unversionedId:"guides-concepts/authorization/index",id:"guides-concepts/authorization/index",title:"Authorization",description:"Authorization is a key aspect of security and user experience in web applications. Whether you are building a complex enterprise-level application or a simple CRUD interface, Refine's authorization system provides the necessary infrastructure to protect your resources and ensure that users interact with your application in a secure and controlled manner.",source:"@site/docs/guides-concepts/authorization/index.md",sourceDirName:"guides-concepts/authorization",slug:"/guides-concepts/authorization/",permalink:"/docs/guides-concepts/authorization/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/guides-concepts/authorization/index.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1706090028,formattedLastUpdatedAt:"Jan 24, 2024",frontMatter:{title:"Authorization"},sidebar:"mainSidebar",previous:{title:"Authentication",permalink:"/docs/guides-concepts/authentication/"},next:{title:"UI Libraries",permalink:"/docs/guides-concepts/ui-libraries/"}},v={},b=[{value:"Access Control Provider",id:"access-control-provider",level:2},{value:"CanAccess Component",id:"canaccess-component",level:2},{value:"Router Integrations",id:"router-integrations",level:3},{value:"useCan Hook",id:"usecan-hook",level:2},{value:"Handling Authorization",id:"handling-authorization",level:2},{value:"UI Integrations",id:"ui-integrations",level:2},{value:"Sider",id:"sider",level:3},{value:"Buttons",id:"buttons",level:3}],k={toc:b};function y(e){var{components:t}=e,n=m(e,["components"]);return(0,o.kt)("wrapper",d(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Authorization is a key aspect of security and user experience in web applications. Whether you are building a complex ",(0,o.kt)("strong",{parentName:"p"},"enterprise-level")," application or a simple CRUD interface, Refine's authorization system provides the necessary infrastructure to protect your resources and ensure that users interact with your application in a secure and controlled manner."),(0,o.kt)("p",null,"Refine's ",(0,o.kt)("strong",{parentName:"p"},"flexible architecture")," allows you to easily implement various authorization strategies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Role-Based Access Control (",(0,o.kt)("strong",{parentName:"li"},"RBAC"),")"),(0,o.kt)("li",{parentName:"ul"},"Attribute-Based Access Control (",(0,o.kt)("strong",{parentName:"li"},"ABAC"),")"),(0,o.kt)("li",{parentName:"ul"},"Access Control List (",(0,o.kt)("strong",{parentName:"li"},"ACL"),")")),(0,o.kt)("p",null,"With ",(0,o.kt)("strong",{parentName:"p"},"any")," authorization solution. (i.e. ",(0,o.kt)("a",{parentName:"p",href:"https://help.okta.com/wf/en-us/content/topics/workflows/connector-reference/okta/overviews/authorization.htm"},"Okta"),", ",(0,o.kt)("a",{parentName:"p",href:"https://casbin.org/"},"Casbin"),", ",(0,o.kt)("a",{parentName:"p",href:"https://cerbos.dev"},"Cerbos"),", or more)"),(0,o.kt)("p",null,"Refine offers several features to help you implement authorization in your application:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<CanAccess />")," component: Conditionally renders child components based on the user's access to a resource."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"useCan")," hook: Returns a value indicating whether the user has access to a resource based on the given parameters."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UI Integrations"),": Conditionally renders UI elements such as ",(0,o.kt)("strong",{parentName:"li"},"buttons"),", ",(0,o.kt)("strong",{parentName:"li"},"menu items"),", etc. based on the user's access to a resource.")),(0,o.kt)("p",null,"In order to enable these features, Refine uses the ",(0,o.kt)("strong",{parentName:"p"},"Access Control Provider")," as an interface to connect your application with your authorization solution and provides necessary parameters to make access control decisions."),(0,o.kt)("h2",{id:"access-control-provider"},"Access Control Provider"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},"Access Control Provider")," is an object that contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"can")," method. This method is called by Refine to understand if the user can see a certain resource or perform an action."),(0,o.kt)("p",null,"A basic ",(0,o.kt)("strong",{parentName:"p"},"Access Control Provider")," looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="access-control-provider.ts"',title:'"access-control-provider.ts"'},'import { AccessControlProvider } from "@refinedev/core";\n\nexport const accessControlProvider: AccessControlProvider = {\n  can: async ({ resource, action, params }) => {\n    console.log(resource); // products, orders, etc.\n    console.log(action); // list, edit, delete, etc.\n    console.log(params); // { id: 1 }, { id: 2 }, etc.\n\n    if (meetSomeCondition) {\n      return { can: true };\n    }\n\n    return {\n      can: false,\n      reason: "Unauthorized",\n    };\n  },\n};\n')),(0,o.kt)("p",null,"And can be passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine />")," component's ",(0,o.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," prop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@refinedev/core";\n\nimport { accessControlProvider } from "./access-control-provider";\n\nexport const App = () => {\n  return (\n    <Refine\n      // highlight-next-line\n      accessControlProvider={accessControlProvider}\n    >\n      {/* ... */}\n    </Refine>\n  );\n};\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/authorization/access-control-provider"},"To learn more about the ",(0,o.kt)("inlineCode",{parentName:"a"},"Access Control Provider"),", check out the reference page.")),(0,o.kt)("h2",{id:"canaccess-component"},"CanAccess Component"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"CanAccess")," component can be used to wrap your ",(0,o.kt)("strong",{parentName:"p"},"pages")," or ",(0,o.kt)("strong",{parentName:"p"},"components")," to hide them from unauthorized users."),(0,o.kt)("p",null,"It calls ",(0,o.kt)("strong",{parentName:"p"},"Access Control Provider"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"can")," method and conditionally renders its children based on the result."),(0,o.kt)("p",null,"Here's a basic example of how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"CanAccess")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="list-page.tsx"',title:'"list-page.tsx"'},'import { CanAccess } from "@refinedev/core";\n\nexport const ListPage = () => {\n  return (\n    <CanAccess resource="products" action="list" fallback={<h1>You are not authorized to see this page.</h1>}>\n      <>\n        <h1>Products</h1>\n        <CanAccess resource="products" action="show" params={{ id: 1 }}>\n          <Button>See Details</Button>\n        </CanAccess>\n      </>\n    </CanAccess>\n  );\n};\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/authorization/components/can-access"},"To learn more about the ",(0,o.kt)("inlineCode",{parentName:"a"},"CanAccess")," component, check out the reference page.")),(0,o.kt)("h3",{id:"router-integrations"},"Router Integrations"),(0,o.kt)("p",null,"Refine's router integrations can infer ",(0,o.kt)("inlineCode",{parentName:"p"},"resource"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"action"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"params.id")," props from the current route and pass them to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<CanAccess />")," component."),(0,o.kt)("p",null,"This means you can wrap all of your routes with a single ",(0,o.kt)("inlineCode",{parentName:"p"},"<CanAccess />")," component, instead of wrapping each page individually."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"React Router"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"Next.js"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"Remix")," integration pages for more information."),(0,o.kt)("h2",{id:"usecan-hook"},"useCan Hook"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useCan")," hook can be used to check if the user has access to a resource or action."),(0,o.kt)("p",null,"It calls ",(0,o.kt)("strong",{parentName:"p"},"Access Control Provider"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"can")," method and returns a value indicating whether the user has access to the resource or action."),(0,o.kt)("p",null,"Here's a basic example of how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useCan")," hook:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="list-page.tsx"',title:'"list-page.tsx"'},'import { useCan } from "@refinedev/core";\n\nexport const ListPage = () => {\n  const { data } = useCan({\n    resource: "products",\n    action: "show",\n    params: { id: 1 },\n  });\n\n  return (\n    <>\n      <h1>Products</h1>\n      {data?.can && <Button>See Details</Button>}\n    </>\n  );\n};\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/authorization/hooks/use-can"},"To learn more about the ",(0,o.kt)("inlineCode",{parentName:"a"},"useCan")," hook, check out the reference page.")),(0,o.kt)("h2",{id:"handling-authorization"},"Handling Authorization"),(0,o.kt)(s,{mdxType:"AccessControlExample"}),(0,o.kt)("h2",{id:"ui-integrations"},"UI Integrations"),(0,o.kt)("p",null,"When Access Control Provider is provided, Refine's UI Integrations automatically manages the ",(0,o.kt)("strong",{parentName:"p"},"visibility")," of their components like ",(0,o.kt)("strong",{parentName:"p"},"buttons")," and ",(0,o.kt)("strong",{parentName:"p"},"menu items"),", simplifying the management of UI."),(0,o.kt)("p",null,"These UI Integrations uses the Access Control Provider to check if a user has the necessary permissions. This check is performed without requiring manual implementation for each component, streamlining the development process."),(0,o.kt)("h3",{id:"sider"},"Sider"),(0,o.kt)("p",null,"Sider component's ",(0,o.kt)("strong",{parentName:"p"},"menu items")," will ",(0,o.kt)("strong",{parentName:"p"},"automatically hidden")," if user don't have access."),(0,o.kt)("p",null,"Let's assume we have ",(0,o.kt)("strong",{parentName:"p"},"products")," resource."),(0,o.kt)("p",null,"Menu item of this resource will call ",(0,o.kt)("inlineCode",{parentName:"p"},"can")," method with following parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{ resource: "products", action: "list" }\n')),(0,o.kt)("p",null,"And if user isn't allowed to ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," products, menu item will be hidden."),(0,o.kt)("h3",{id:"buttons"},"Buttons"),(0,o.kt)("p",null,"If you are using one of our buttons from our UI Integrations in your application, you don't need to wrap it with ",(0,o.kt)("inlineCode",{parentName:"p"},"<CanAccess />")," or use ",(0,o.kt)("inlineCode",{parentName:"p"},"useCan")," every time. These buttons will automatically be shown or hidden."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=button-example.ts",title:"button-example.ts"},'// Following buttons call `can` method with commented parameters.\nimport {\n  CreateButton, //  { resource: "products", action: "create", params: { resource }}\n  ListButton, //    { resource: "products", action: "list" , params: { resource }}\n  EditButton, //    { resource: "products", action: "edit", params: { id: 1, resource } }\n  ShowButton, //    { resource: "products", action: "show", params: { id: 1, resource } }\n  DeleteButton, //  { resource: "products", action: "delete", params: { id: 1, resource } }\n  CloneButton, //   { resource: "products", action: "clone", params: { id: 1, resource } }\n} from "@refinedev/antd"; // or @refinedev/chakra-ui, @refinedev/mui, @refinedev/mantine\n')))}y.isMDXComponent=!0}}]);