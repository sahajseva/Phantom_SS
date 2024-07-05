"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[95516],{58860:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var o=t(37953);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=r,y=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return t?o.createElement(y,a(a({ref:n},p),{},{components:t})):o.createElement(y,a({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},57414:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});t(37953);var o=t(58860);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const c={title:"useNotification",siderbar_label:"useNotification",source:"https://github.com/refinedev/refine/blob/v3/packages/core/src/hooks/notification/useNotification/index.ts"},s=void 0,l={unversionedId:"api-reference/core/hooks/useNotification/index",id:"version-3.xx.xx/api-reference/core/hooks/useNotification/index",title:"useNotification",description:"It can be used to open or close notification at any time. It returns the open and close method from notificationProvider under the hood.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/useNotification/index.md",sourceDirName:"api-reference/core/hooks/useNotification",slug:"/api-reference/core/hooks/useNotification/",permalink:"/docs/3.xx.xx/api-reference/core/hooks/useNotification/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/useNotification/index.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1720185359,formattedLastUpdatedAt:"Jul 5, 2024",frontMatter:{title:"useNotification",siderbar_label:"useNotification",source:"https://github.com/refinedev/refine/blob/v3/packages/core/src/hooks/notification/useNotification/index.ts"},sidebar:"someSidebar",previous:{title:"useNavigation",permalink:"/docs/3.xx.xx/api-reference/core/hooks/navigation/useNavigation"},next:{title:"useTitle",permalink:"/docs/3.xx.xx/api-reference/core/hooks/refine/useTitle"}},p={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>open</code>",id:"open",level:3},{value:"<code>close</code>",id:"close",level:3},{value:"FAQ",id:"faq",level:2},{value:"How to use a undoable notification?",id:"how-to-use-a-undoable-notification",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Return Values",id:"return-values",level:3}],d=(f="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)});var f;const y={toc:u},g="wrapper";function m(e){var{components:n}=e,t=a(e,["components"]);return(0,o.yg)(g,i(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){r(e,n,t[n])}))}return e}({},y,t),{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"It can be used to ",(0,o.yg)("inlineCode",{parentName:"p"},"open")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"close")," notification at any time. It returns the ",(0,o.yg)("inlineCode",{parentName:"p"},"open")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"close")," method from ",(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/notification-provider/"},(0,o.yg)("inlineCode",{parentName:"a"},"notificationProvider"))," under the hood."),(0,o.yg)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.yg)(d,{id:"basic-usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"Here is a basic example of how to use ",(0,o.yg)("inlineCode",{parentName:"p"},"useNotification")," hook."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'const { open, close } = useNotification();\n\n// open notification\nopen?.({\n  type: "success",\n  message: "Success",\n  description: "This is a success message",\n});\n\n// close notification\nclose?.("notification-key");\n'))),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"open"},(0,o.yg)("inlineCode",{parentName:"h3"},"open")),(0,o.yg)(d,{id:"open",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"You can call this method to open a new notification box."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'const { open } = useNotification();\n\nopen?.({\n  type: "success",\n  message: "Success",\n  description: "This is a success message",\n});\n')),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences/#open-notification-params"},"Refer to the ",(0,o.yg)("inlineCode",{parentName:"a"},"Open Notification Params")," interface for more information \u2192")))),(0,o.yg)("h3",{id:"close"},(0,o.yg)("inlineCode",{parentName:"h3"},"close")),(0,o.yg)(d,{id:"close",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"You can close a notification with a ",(0,o.yg)("inlineCode",{parentName:"p"},"key"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'const { close } = useNotification();\n\nclose?.("notification-key");\n')),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences/#close-notification-params"},"Refer to the ",(0,o.yg)("inlineCode",{parentName:"a"},"Close Notification Params")," interface for more information \u2192"))),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"You must pass a ",(0,o.yg)("inlineCode",{parentName:"p"},"key")," to the ",(0,o.yg)("inlineCode",{parentName:"p"},"open")," method. This key is used to close the notification."))),(0,o.yg)("h2",{id:"faq"},"FAQ"),(0,o.yg)("h3",{id:"how-to-use-a-undoable-notification"},"How to use a undoable notification?"),(0,o.yg)(d,{id:"how-to-use-a-undoable-notification",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("p",null,"It should be ",(0,o.yg)("inlineCode",{parentName:"p"},"type=progress")," to show undoable notifications. A function can then be triggered."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-tsx"},'const { open } = useNotification();\n\nopen?.({\n  type: "progress",\n  message: "Progress",\n  undoableTimeout: 5,\n  cancelMutation: () => {\n    // when undo button is clicked run this callback\n  },\n});\n'))),(0,o.yg)("h2",{id:"api-reference"},"API Reference"),(0,o.yg)("h3",{id:"return-values"},"Return Values"),(0,o.yg)(d,{id:"return-values",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Property"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"),(0,o.yg)("th",{parentName:"tr",align:null},"Type"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"open"),(0,o.yg)("td",{parentName:"tr",align:null},"Open Notification Params"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences/#open-notification-params"},(0,o.yg)("inlineCode",{parentName:"a"},"Open Notification Params")))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"close"),(0,o.yg)("td",{parentName:"tr",align:null},"Close Notification Params"),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences/#close-notification-params"},(0,o.yg)("inlineCode",{parentName:"a"},"Close Notification Params"))))))))}m.isMDXComponent=!0}}]);