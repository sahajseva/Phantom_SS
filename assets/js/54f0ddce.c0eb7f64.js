"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99111],{58943:(e,t,n)=>{n.d(t,{x:()=>m});var o=n(86010),i=n(67294),r=n(73808),a=n(96319),s=n(79526);const l=({horizontalSize:e,onMouseDown:t})=>i.createElement("div",{className:(0,o.Z)("resize-handler","hidden","md:block","absolute","z-[3]","top-0","bottom-0","w-2.5","cursor-ew-resize"),"data-direction":"horizontal",onMouseDown:t,style:{left:`calc(${e}% - 5px)`}});function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){c(e,t,n[t])}))}return e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const m=e=>{var t;return"nextjs"===(null===(t=e)||void 0===t?void 0:t.template)?i.createElement(h,e):i.createElement(f,e)},f=e=>{var t,n,c,m,f,h,b,g,v,k,y,w,N,x,P,O,{startRoute:C,showNavigator:R,showLineNumbers:T,showOpenInCodeSandbox:E,initialPercentage:S=50,dependencies:j,showReadOnly:B,options:F={showTabs:!0,initMode:"lazy",classes:{"sp-bridge-frame":"!hidden","sp-layout":"!rounded-lg !border-gray-300 dark:!border-gray-700","sp-editor":"!gap-0 border-r !border-r-gray-300 dark:!border-r-gray-700","sp-tabs":"!border-b-gray-300 dark:!border-b-gray-700 !bg-gray-0 dark:!bg-gray-800","sp-tabs-scrollable-container":"!min-h-[32px]","sp-input":"!text-gray-800 dark:!text-gray-100","sp-cm":(0,o.Z)("p-0 bg-transparent","[&>.cm-editor]:!bg-refine-react-light-code","[&>.cm-editor]:dark:!bg-refine-react-dark-code","[&_.cm-activeLine]:!bg-gray-100 [&_.cm-activeLine]:dark:!bg-gray-800"),"sp-icon-standalone":"!bg-gray-300 dark:!bg-gray-700 !text-gray-400 dark:!text-gray-500","sp-file-explorer":"border-r !border-r-gray-300 dark:!border-r-gray-700","sp-console":(0,o.Z)("not-prose","!border-t-0 !border !border-solid !border-t-none","!border-gray-300 dark:!border-gray-700","!rounded-bl-lg !rounded-br-lg","!bg-refine-react-light-code","dark:!bg-refine-react-dark-code"),"sp-console-header":(0,o.Z)("!bg-gray-0 dark:!bg-gray-800","border-b border-solid !border-b-gray-300 dark:!border-b-gray-700","!h-[32px] !min-h-[32px]"),"sp-console-header-actions":(0,o.Z)("h-full","!gap-0"),"sp-console-header-button":(0,o.Z)("!bg-transparent","!border !border-solid !border-b-0 !border-x-gray-300 dark:!border-x-gray-700","!border-t-2 !border-t-transparent [&[data-active='true']]:!border-t-refine-react-light-link dark:[&[data-active='true']]:!border-t-refine-react-dark-link","h-full","!text-gray-800 dark:!text-gray-100","!rounded-none","-ml-px"),"sp-console-list":(0,o.Z)("!bg-refine-react-light-code","dark:!bg-refine-react-dark-code","[&>code]:!bg-transparent"),"sp-tab-button":(0,o.Z)("!h-8","!px-2 !pb-2 !pt-1.5","!text-gray-800 dark:!text-gray-100","!border !border-solid !border-b-0 !border-x-gray-300 dark:!border-x-gray-700","-ml-px first:ml-0","!border-t-2 !border-t-transparent [&[data-active='true']]:!border-t-refine-react-light-link dark:[&[data-active='true']]:!border-t-refine-react-dark-link")}},template:M="react-ts",customSetup:D,files:I,previewOnly:A,layout:U,height:z=420,wrapperClassName:L,className:G,showFiles:H=!1,showConsole:W=!1,hidePreview:Z=!1}=e,$=p(e,["startRoute","showNavigator","showLineNumbers","showOpenInCodeSandbox","initialPercentage","dependencies","showReadOnly","options","template","customSetup","files","previewOnly","layout","height","wrapperClassName","className","showFiles","showConsole","hidePreview"]);const[q,_]=i.useState(!1);i.useEffect((()=>{_(!0)}),[]);const{colorMode:X}=(0,s.I)();var Y,K;null!=F||(F={}),null!==(Y=(P=F).resizablePanels)&&void 0!==Y||(P.resizablePanels=!0),null!==(K=(O=F).editorWidthPercentage)&&void 0!==K||(O.editorWidthPercentage=null!=S?S:50);const V={showTabs:F.showTabs,showLineNumbers:F.showLineNumbers,showInlineErrors:F.showInlineErrors,wrapContent:F.wrapContent,closableTabs:F.closableTabs,initMode:F.initMode,extensions:null===(t=F.codeEditor)||void 0===t?void 0:t.extensions,extensionsKeymap:null===(n=F.codeEditor)||void 0===n?void 0:n.extensionsKeymap,readOnly:F.readOnly,showReadOnly:null!=B?B:F.showReadOnly,additionalLanguages:null===(c=F.codeEditor)||void 0===c?void 0:c.additionalLanguages},J={activeFile:F.activeFile,visibleFiles:F.visibleFiles,recompileMode:F.recompileMode,recompileDelay:F.recompileDelay,autorun:F.autorun,autoReload:F.autoReload,bundlerURL:F.bundlerURL,startRoute:F.startRoute,skipEval:F.skipEval,fileResolver:F.fileResolver,initMode:F.initMode,initModeObserverOptions:F.initModeObserverOptions,externalResources:F.externalResources,logLevel:F.logLevel,classes:F.classes},[Q,ee]=i.useState(!1),{onHandleMouseDown:te,horizontalSize:ne}=(({initialSize:e=50})=>{const[t,n]=i.useState(e),o=i.useRef(null),r=e=>{if(!o.current)return;const t=o.current.parentElement;if(!t)return;const{left:i,width:r}=t.getBoundingClientRect(),a=(e.clientX-i)/r*100,s=Math.min(Math.max(a,25),75);n(s),t.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents="none"}))},a=()=>{var e;const t=null===(e=o.current)||void 0===e?void 0:e.parentElement;t&&(t.querySelectorAll(".sp-stack").forEach((e=>{e.style.pointerEvents=""})),o.current=null)};return i.useEffect((()=>(document.body.addEventListener("mousemove",r),document.body.addEventListener("mouseup",a),()=>{document.body.removeEventListener("mousemove",r),document.body.removeEventListener("mouseup",a)})),[]),{horizontalSize:t,onHandleMouseDown:i.useCallback((e=>{o.current=e.target}),[])}})({initialSize:F.editorWidthPercentage}),oe=!A&&!(null===(f=U)||void 0===f||null===(m=f.includes)||void 0===m?void 0:m.call(f,"col"));var ie,re,ae,se,le;return i.createElement(i.Fragment,null,i.createElement("div",{className:(0,o.Z)("pb-6",L)},i.createElement("div",{className:(0,o.Z)("absolute","left-0","right-0","w-full","px-2","md:px-4","xl:px-6","max-w-screen-xl","mx-auto",G)},i.createElement(a.oT,d({key:`${M}-${X}-${q}`,customSetup:d({dependencies:j},D),files:I,options:u(d({},J),{classes:u(d({},J.classes),{"sp-layout":(0,o.Z)(null===(h=J.classes)||void 0===h?void 0:h["sp-layout"],W&&"!rounded-bl-none !rounded-br-none")})}),template:M,theme:"light"===X?u(d({},r.FM),{colors:u(d({},r.FM.colors),{accent:"#1D1E30",surface1:"transparent",surface2:"transparent",surface3:"transparent"})}):u(d({},r.I2),{colors:u(d({},r.I2.colors),{surface1:"transparent",surface2:"transparent",surface3:"transparent"})}),className:(0,o.Z)("not-prose sandpack-container","max-w-screen-xl","animate-reveal")},$),i.createElement(a.sp,{className:(0,o.Z)("col"===U&&"!flex-col","col-reverse"===U&&"!flex-col-reverse")},H&&i.createElement(a.Lj,{autoHiddenFiles:!0,style:{height:null!==(ie=F.editorHeight)&&void 0!==ie?ie:z}}),!A&&i.createElement(a._V,u(d({},V),{showLineNumbers:T,closableTabs:H,initMode:"lazy",style:u(d({height:null!==(re=F.editorHeight)&&void 0!==re?re:z},(null===(g=U)||void 0===g||null===(b=g.includes)||void 0===b?void 0:b.call(g,"col"))?{flex:"initial"}:{flexGrow:ne,flexShrink:ne,flexBasis:0}),{overflow:"hidden"})})),oe?i.createElement(l,{onMouseDown:te,horizontalSize:ne}):null,Z?null:i.createElement(i.Fragment,null,i.createElement(a.Gj,{showOpenInCodeSandbox:E,startRoute:C,showNavigator:null!=R?R:F.showNavigator,showRefreshButton:F.showRefreshButton,style:u(d({display:Z?"none":"flex"},(null===(k=U)||void 0===k||null===(v=k.includes)||void 0===v?void 0:v.call(k,"col"))?{flex:"initial",width:"100%"}:{flexGrow:100-ne,flexShrink:100-ne,flexBasis:0,width:A?"100%":100-ne+"%"}),{gap:0,height:null!==(ae=F.editorHeight)&&void 0!==ae?ae:z})},i.createElement("div",{className:"sp-custom-loading"},i.createElement("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/assets/spinner.gif",className:(0,o.Z)("w-12","h-12","rounded-full")}))))),W?i.createElement(a.Tq,{style:u(d({height:200},(null===(w=U)||void 0===w||null===(y=w.includes)||void 0===y?void 0:y.call(w,"col"))?{flex:"initial"}:{flexGrow:ne,flexShrink:ne,flexBasis:0}),{overflow:"hidden"})}):null)),i.createElement("div",{className:(0,o.Z)(""),style:{height:Number(null!==(se=F.editorHeight)&&void 0!==se?se:z)+2}}),i.createElement("div",{className:(0,o.Z)((null===(x=U)||void 0===x||null===(N=x.includes)||void 0===N?void 0:N.call(x,"col"))?"block":"block md:hidden"),style:{height:Number(null!==(le=F.editorHeight)&&void 0!==le?le:z)+2}}),i.createElement("div",{className:(0,o.Z)(W?"block":"hidden","h-[200px]")})),i.createElement("section",{className:"hidden max-w-0 max-h-0"},i.createElement("p",null,`Dependencies: ${Object.keys(null!=j?j:{}).map((e=>`${e}@${j[e]}`))}`),i.createElement("h3",null,"Code Files"),Object.keys(null!=I?I:{}).map((e=>i.createElement("div",{key:e},i.createElement("div",null,`File: ${e}`),i.createElement("div",null,`Content: ${"code"in I[e]?I[e].code:I[e]}`))))))},h=e=>{const t={hidePreview:!0,showConsole:!1};return i.createElement(f,u(d({},t,e),{template:"react-ts"}))}},70115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>P,contentTitle:()=>N,default:()=>B,frontMatter:()=>w,metadata:()=>x,toc:()=>O});var o=n(67294),i=n(3905),r=n(58943);function a(){return o.createElement(r.x,{height:460,showOpenInCodeSandbox:!1,dependencies:{"@refinedev/antd":"latest","@refinedev/core":"latest","@refinedev/simple-rest":"latest",antd:"^5.0.5"},startRoute:"/",files:{"/App.tsx":{code:s},"/home-page.tsx":{code:l,active:!0}}})}const s='\nimport React from "react";\n\nimport { Refine } from "@refinedev/core";\nimport { useNotificationProvider, RefineThemes } from "@refinedev/antd";\nimport { ConfigProvider, App as AntdApp } from "antd";\nimport dataProvider from "@refinedev/simple-rest";\nimport "@refinedev/antd/dist/reset.css";\nimport { HomePage } from "./home-page";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <ConfigProvider theme={RefineThemes.Blue}>\n            <AntdApp>\n                <Refine\n                    dataProvider={dataProvider(API_URL)}\n                    notificationProvider={useNotificationProvider}\n                >\n                    <HomePage />\n                </Refine>\n            </AntdApp>\n        </ConfigProvider>\n    );\n};\n\nexport default App;\n\n'.trim(),l='\nimport React from "react";\nimport { useNotification } from "@refinedev/core";\nimport { Button, Col, Row } from "antd";\n\nexport const HomePage: React.FC = () => {\n  const { open, close } = useNotification();\n\n  return (\n      <Row\n          gutter={[16, 16]}\n          style={{\n              justifyContent: "center",\n              alignItems: "center",\n              height: "100vh",\n          }}\n      >\n          <Col>\n              <Button\n                  type="primary"\n                  onClick={() => {\n                      open?.({\n                          type: "success",\n                          message: "Notification Title",\n                          description:\n                              "This is the content of the notification.",\n                          key: "notification-key",\n                      });\n                  }}\n              >\n                  Open Notification\n              </Button>\n          </Col>\n          <Col>\n              <Button\n                  type="default"\n                  onClick={() => {\n                      close?.("notification-key");\n                  }}\n              >\n                  Close Notification\n              </Button>\n          </Col>\n      </Row>\n  );\n};\n\n\n'.trim();function c(){return o.createElement(r.x,{height:460,showOpenInCodeSandbox:!1,dependencies:{"@refinedev/core":"latest","@refinedev/simple-rest":"latest","@emotion/react":"^11.8.2","@emotion/styled":"^11.8.1","@mui/lab":"^5.0.0-alpha.85","@mui/material":"^5.14.2","@refinedev/mui":"latest"},startRoute:"/",files:{"/App.tsx":{code:d},"/home-page.tsx":{code:u,active:!0}}})}const d='\nimport React from "react";\nimport { Refine } from "@refinedev/core";\nimport {\n    RefineThemes,\n    useNotificationProvider,\n    RefineSnackbarProvider,\n} from "@refinedev/mui";\nimport CssBaseline from "@mui/material/CssBaseline";\nimport GlobalStyles from "@mui/material/GlobalStyles";\nimport { ThemeProvider } from "@mui/material/styles";\nimport dataProvider from "@refinedev/simple-rest";\nimport { HomePage } from "./home-page";\n\nconst App: React.FC = () => {\n    return (\n        <ThemeProvider theme={RefineThemes.Blue}>\n            <CssBaseline />\n            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n            <RefineSnackbarProvider preventDuplicate={true}>\n                <Refine\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={useNotificationProvider}\n                >\n                    <HomePage />\n                </Refine>\n            </RefineSnackbarProvider>\n        </ThemeProvider>\n    );\n};\n\nexport default App;\n\n'.trim(),u='\nimport React from "react";\nimport Grid from "@mui/material/Grid";\nimport Button from "@mui/material/Button";\nimport { useNotification } from "@refinedev/core";\n\nexport const HomePage = () => {\n    const { open, close } = useNotification();\n    return (\n        <Grid\n            container\n            spacing={2}\n            sx={{\n                justifyContent: "center",\n                alignItems: "center",\n                height: "100vh",\n            }}\n        >\n            <Grid item>\n                <Button\n                    variant="contained"\n                    onClick={() => {\n                        open?.({\n                            type: "success",\n                            message: "Notification Title",\n                            description:\n                                "This is the content of the notification.",\n                            key: "notification-key",\n                        });\n                    }}\n                >\n                    Open Notification\n                </Button>\n            </Grid>\n            <Grid item>\n                <Button\n                    variant="outlined"\n                    onClick={() => {\n                        close?.("notification-key");\n                    }}\n                >\n                    Close Notification\n                </Button>\n            </Grid>\n        </Grid>\n    );\n};\n\n\n'.trim();function p(){return o.createElement(r.x,{height:460,showOpenInCodeSandbox:!1,dependencies:{"@refinedev/core":"latest","@refinedev/simple-rest":"latest","@mantine/notifications":"^5.10.4","@emotion/react":"^11.8.2","@mantine/core":"^5.10.4","@mantine/hooks":"^5.10.4","@refinedev/mantine":"^2.28.21"},startRoute:"/",files:{"/App.tsx":{code:m},"/home-page.tsx":{code:f,active:!0}}})}const m='\nimport React from "react";\nimport { Refine } from "@refinedev/core";\nimport { useNotificationProvider, RefineThemes } from "@refinedev/mantine";\nimport { NotificationsProvider } from "@mantine/notifications";\nimport { MantineProvider, Global } from "@mantine/core";\nimport dataProvider from "@refinedev/simple-rest";\nimport { HomePage } from "./home-page";\n\nconst App: React.FC = () => {\n    return (\n        <MantineProvider\n            theme={RefineThemes.Blue}\n            withNormalizeCSS\n            withGlobalStyles\n        >\n            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />\n            <NotificationsProvider position="top-right">\n                <Refine\n                    dataProvider={dataProvider(\n                        "https://api.fake-rest.refine.dev",\n                    )}\n                    notificationProvider={useNotificationProvider}\n                >\n                    <HomePage />\n                </Refine>\n            </NotificationsProvider>\n        </MantineProvider>\n    );\n};\n\nexport default App;\n\n'.trim(),f='\nimport React from "react";\nimport { Flex, Button } from "@mantine/core";\nimport { useNotification } from "@refinedev/core";\n\nexport const HomePage = () => {\n    const { open, close } = useNotification();\n\n    return (\n        <Flex mih={"100vh"} gap="md" justify="center" align="center">\n            <Button\n                onClick={() => {\n                    open?.({\n                        type: "success",\n                        message: "Notification Title",\n                        description: "This is the content of the notification.",\n                        key: "notification-key",\n                    });\n                }}\n            >\n                Open Notification\n            </Button>\n            <Button\n                variant="outline"\n                onClick={() => {\n                    close?.("notification-key");\n                }}\n            >\n                Close Notification\n            </Button>\n        </Flex>\n    );\n};\n\n\n'.trim();function h(){return o.createElement(r.x,{height:460,showOpenInCodeSandbox:!1,dependencies:{"@refinedev/core":"latest","@refinedev/simple-rest":"latest","@chakra-ui/react":"^2.5.1","@refinedev/chakra-ui":"^2.26.17"},startRoute:"/",files:{"/App.tsx":{code:b},"/home-page.tsx":{code:g,active:!0}}})}const b='\nimport React from "react";\nimport { Refine } from "@refinedev/core";\nimport { RefineThemes, useNotificationProvider } from "@refinedev/chakra-ui";\nimport { ChakraProvider } from "@chakra-ui/react";\nimport dataProvider from "@refinedev/simple-rest";\nimport { HomePage } from "./home-page";\n\n\nconst App: React.FC = () => {\n    return (\n        <ChakraProvider theme={RefineThemes.Blue}>\n            <Refine\n                notificationProvider={useNotificationProvider()}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            >\n                <HomePage />\n            </Refine>\n        </ChakraProvider>\n    );\n};\n\nexport default App;\n'.trim(),g='\nimport React from "react";\nimport { Flex, Button } from "@chakra-ui/react";\nimport { useNotification } from "@refinedev/core";\n\nexport const HomePage = () => {\n    const { open, close } = useNotification();\n\n    return (\n        <Flex align="center" justify="center" height="100vh" gap={4}>\n            <Button\n                onClick={() => {\n                    open?.({\n                        type: "success",\n                        message: "Notification Title",\n                        description: "This is the content of the notification.",\n                        key: "notification-key",\n                    });\n                }}\n            >\n                Open Notification\n            </Button>\n            <Button\n                variant="outline"\n                onClick={() => {\n                    close?.("notification-key");\n                }}\n            >\n                Close Notification\n            </Button>\n        </Flex>\n    );\n};\n\n\n'.trim();function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function y(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const w={title:"Notifications"},N=void 0,x={unversionedId:"guides-concepts/notifications/index",id:"guides-concepts/notifications/index",title:"Notifications",description:"One of the most important parts of an application is the notifications and the visual feedbacks. Refine has this built-in notification integration that works automatically when it's needed in cases such as when a request fails or when a form is submitted.",source:"@site/docs/guides-concepts/notifications/index.md",sourceDirName:"guides-concepts/notifications",slug:"/guides-concepts/notifications/",permalink:"/docs/guides-concepts/notifications/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/guides-concepts/notifications/index.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1709904578,formattedLastUpdatedAt:"Mar 8, 2024",frontMatter:{title:"Notifications"},sidebar:"mainSidebar",previous:{title:"UI Libraries",permalink:"/docs/guides-concepts/ui-libraries/"},next:{title:"Realtime",permalink:"/docs/guides-concepts/realtime/"}},P={},O=[{value:"Notification Providers",id:"notification-providers",level:2},{value:"Built-in Notification Providers",id:"built-in-notification-providers",level:3},{value:"Undoable",id:"undoable",level:3},{value:"Customizing Notifications",id:"customizing-notifications",level:2},{value:"With props",id:"with-props",level:3},{value:'With i18n <GuideBadge id="i18n/i18n-provider/" />',id:"with-i18n-",level:3}],C=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},R=C("DocThumbsUpDownFeedbackWidget"),T=C("Tabs"),E=C("TabItem"),S=C("GuideBadge"),j={toc:O};function B(e){var{components:t}=e,n=y(e,["components"]);return(0,i.kt)("wrapper",k(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){v(e,t,n[t])}))}return e}({},j,n),{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"One of the most important parts of an application is the notifications and the visual feedbacks. Refine has this built-in notification integration that works automatically when it's needed in cases such as when a request fails or when a form is submitted."),(0,i.kt)("p",null,"While this integration is not coupled with the UI integrations, it will be a wise choice to use the one that is provided by the UI libraries for a consistent design language. This is why Refine's UI integrations also provides a ",(0,i.kt)("a",{parentName:"p",href:"/docs/notification/notification-provider/"},(0,i.kt)("inlineCode",{parentName:"a"},"notificationProvider"))," to be used with the notification integration of refine."),(0,i.kt)("h2",{id:"notification-providers"},"Notification Providers"),(0,i.kt)(R,{id:"notification-providers",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.kt)("p",null,"Refine let's you set a notification API by providing the ",(0,i.kt)("inlineCode",{parentName:"p"},"notificationProvider")," property to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Refine />")," component. ",(0,i.kt)("inlineCode",{parentName:"p"},"notificationProvider")," is an object with close and open methods. Refine uses these methods to show and hide notifications. These methods can be called from anywhere in the application with ",(0,i.kt)("inlineCode",{parentName:"p"},"useNotification")," hook."),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"notificationProvider")," must include ",(0,i.kt)("inlineCode",{parentName:"p"},"open")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"close")," methods with the following types:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'interface NotificationProvider {\n  open: (params: OpenNotificationParams) => void;\n  close: (key: string) => void;\n}\n\ninterface OpenNotificationParams {\n  key?: string;\n  message: string;\n  type: "success" | "error" | "progress";\n  description?: string;\n  cancelMutation?: () => void;\n  undoableTimeout?: number;\n}\n')),(0,i.kt)("p",null,"Once you provide the notification provider, Refine seamlessly integrate with ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides-concepts/data-fetching/#data-hooks"},"data hooks")," to displays user-friendly notifications for various data-related actions, ensuring a clear and informative user experience. This includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Form Submission"),": Whether a ",(0,i.kt)("a",{parentName:"li",href:"/docs/data/hooks/use-form/"},"form")," is successfully submitted or encounters errors, Refine will display the appropriate notification to keep the user informed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Resource Management"),": ",(0,i.kt)("a",{parentName:"li",href:"/docs/data/hooks/use-create/"},"Creation"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/data/hooks/use-delete/"},"deletion"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/data/hooks/use-update/"},"update"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/core/hooks/utilities/use-import/"},"import"),", and ",(0,i.kt)("a",{parentName:"li",href:"/docs/core/hooks/utilities/use-export/"},"export")," of resources are all accompanied by success or error notifications, providing immediate feedback to the user."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Data Fetching"),": Refine also displays notifications for failed data fetching operations, including those using ",(0,i.kt)("a",{parentName:"li",href:"/docs/data/hooks/use-list/"},"useList"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/data/hooks/use-infinite-list/"},"useInfiniteList"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/data/hooks/use-many/"},"useMany"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/data/hooks/use-one/"},"useOne"),"."),(0,i.kt)("li",{parentName:"ul"},"Auth Actions: ",(0,i.kt)("a",{parentName:"li",href:"/docs/authentication/hooks/use-login/"},"Login"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/authentication/hooks/use-logout/"},"logout"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/authentication/hooks/use-register/"},"register"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/authentication/hooks/use-update-password/"},"update password"),", and ",(0,i.kt)("a",{parentName:"li",href:"/docs/authentication/hooks/use-forgot-password/"},"forgot password")," actions are all integrated with Refine's notification provider to display error notifications."))),(0,i.kt)("h3",{id:"built-in-notification-providers"},"Built-in Notification Providers"),(0,i.kt)(R,{id:"built-in-notification-providers",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.kt)("p",null,"Using of the prebuilt notification providers are optional and can be customized, extended or even swapped with a custom implementation if needed."),(0,i.kt)("p",null,"As an example, we'll demonstrate how to open and close notifications using the ",(0,i.kt)("inlineCode",{parentName:"p"},"useNotification")," hook. However, in most cases, you won't need to do this, as Refine typically manages notifications for you automatically."),(0,i.kt)(T,{wrapContent:!1,mdxType:"Tabs"},(0,i.kt)(E,{default:!0,value:"antd",label:"Ant Design",mdxType:"TabItem"},(0,i.kt)(a,{mdxType:"NotificationAntd"})),(0,i.kt)(E,{value:"material-ui",label:"Material UI",mdxType:"TabItem"},(0,i.kt)(c,{mdxType:"NotificationMui"})),(0,i.kt)(E,{value:"mantine",label:"Mantine",mdxType:"TabItem"},(0,i.kt)(p,{mdxType:"NotificationMantine"})),(0,i.kt)(E,{value:"chakra-ui",label:"Chakra UI",mdxType:"TabItem"},(0,i.kt)(h,{mdxType:"NotificationChakraUI"})))),(0,i.kt)("h3",{id:"undoable"},"Undoable"),(0,i.kt)(R,{id:"undoable",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.kt)("p",null,"Refine also supports undoable notification."),(0,i.kt)("p",null,"You can trigger an undoable notification by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"progress"),". After timeout, the notification will be closed automatically. If the user clicks the undo button, the ",(0,i.kt)("inlineCode",{parentName:"p"},"cancelMutation")," callback will be called."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'const { open } = useNotification();\n\nopen?.({\n  type: "progress",\n  message: "Progress",\n  undoableTimeout: 5,\n  cancelMutation: () => {\n    // when undo button is clicked, run this callback\n  },\n});\n')),(0,i.kt)("p",null,"Mutation hooks such as ",(0,i.kt)("inlineCode",{parentName:"p"},"useUpdate"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"useDelete")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," supports undoable notifications. It can be used for canceling the mutation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { useForm } from "@refinedev/core";\n\n// automatically cancel the mutation when undo button is clicked\nuseForm({ mutationMode: "undoable" });\n'))),(0,i.kt)("h2",{id:"customizing-notifications"},"Customizing Notifications"),(0,i.kt)("h3",{id:"with-props"},"With props"),(0,i.kt)(R,{id:"with-props",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.kt)("p",null,"All data hooks have a ",(0,i.kt)("inlineCode",{parentName:"p"},"successNotification")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"errorNotification")," prop that can be used to customize the notification that will be shown when the hook is called."),(0,i.kt)("p",null,"We will look ",(0,i.kt)("inlineCode",{parentName:"p"},"useUpdate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," hooks as an example but all data hooks have the same props and they work the same way."),(0,i.kt)(T,{mdxType:"Tabs"},(0,i.kt)(E,{default:!0,value:"useUpdate",label:"useUpdate",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useUpdate } from "@refinedev/core";\n\nconst { mutate } = useUpdate();\n\nmutate({\n  // it will be called when the mutation is successful\n  // By setting it to `false`, you can disable the notification.\n  successNotification: (data, values, resource) => {\n    return {\n      message: `${data.title} Successfully fetched.`,\n      description: "Success with no errors",\n      type: "success",\n    };\n  },\n  // it will be called when the mutation is failed\n  errorNotification: (data, values, resource) => {\n    return {\n      message: `Something went wrong when getting ${data.id}`,\n      description: "Error",\n      type: "error",\n    };\n  },\n});\n'))),(0,i.kt)(E,{value:"useForm",label:"useForm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useForm } from "@refinedev/core";\n\nuseForm({\n  //  it will be called when the form is submitted successfully\n  // By setting it to `false`, you can disable the notification.\n  successNotification: (data, values, resource) => {\n    return {\n      message: `Successfully created ${data.title}`,\n      description: "good job!",\n      type: "success",\n    };\n  },\n  // it will be called when the form is submitted with errors\n  // By setting it to `false`, you can disable the notification.\n  errorNotification: (error, values, resource) => {\n    return {\n      message: `Failed to create ${values.title}`,\n      description: error.message,\n      type: "error",\n    };\n  },\n});\n'))))),(0,i.kt)("h3",{id:"with-i18n-"},"With i18n ",(0,i.kt)(S,{id:"i18n/i18n-provider/",mdxType:"GuideBadge"})),(0,i.kt)(R,{id:"with-i18n-",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,i.kt)("p",null,"Refine's notification integration is also integrated with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/i18n/i18n-provider/"},(0,i.kt)("inlineCode",{parentName:"a"},"i18n Provider")),". This means that you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"i18n")," integration to customize the notifications."),(0,i.kt)("p",null,"Refine uses following keys for the notifications and popultes ",(0,i.kt)("inlineCode",{parentName:"p"},"{{resource}}")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"{{statusCode}}"),". You can override these keys in your ",(0,i.kt)("inlineCode",{parentName:"p"},"i18n")," provider to customize the notifications."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="/locales/en/common.json"',title:'"/locales/en/common.json"'},'{\n  "notifications": {\n    "success": "Successful",\n    "error": "Error (status code: {{statusCode}})",\n    "undoable": "You have {{seconds}} seconds to undo",\n    "createSuccess": "Successfully created {{resource}}",\n    "createError": "There was an error creating {{resource}} (status code: {{statusCode}})",\n    "deleteSuccess": "Successfully deleted {{resource}}",\n    "deleteError": "Error when deleting {{resource}} (status code: {{statusCode}})",\n    "editSuccess": "Successfully edited {{resource}}",\n    "editError": "Error when editing {{resource}} (status code: {{statusCode}})",\n    "importProgress": "Importing: {{processed}}/{{total}}"\n  }\n}\n'))))}B.isMDXComponent=!0}}]);