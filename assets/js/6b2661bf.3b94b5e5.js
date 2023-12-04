"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[55111],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),f=i,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},57165:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const s={id:"useSimpleList",title:"useSimpleList","example-title":"Refine's useSimpleList hook","example-tags":["antd"]},l=void 0,p={unversionedId:"examples/list/useSimpleList",id:"examples/list/useSimpleList",title:"useSimpleList",description:"refine's useSimpleList hook allows you to get your data straight from the API. This data is compatible with Ant Design List and can be used in it. Furthermore, this hook includes out-of-the-box features such as pagination, sorting, and filtering. In this example, how to use useSimpleList is explained in detail.",source:"@site/docs/examples/list/useSimpleList.md",sourceDirName:"examples/list",slug:"/examples/list/useSimpleList",permalink:"/docs/examples/list/useSimpleList",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/list/useSimpleList.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1701677405,formattedLastUpdatedAt:"Dec 4, 2023",frontMatter:{id:"useSimpleList",title:"useSimpleList","example-title":"Refine's useSimpleList hook","example-tags":["antd"]},sidebar:"mainSidebar",previous:{title:"JavaScript",permalink:"/docs/examples/javascript"},next:{title:"Ably",permalink:"/docs/examples/live-provider/ably"}},c={},u=[],m=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var f;const d={toc:u};function b(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},d,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"refine"),"'s ",(0,n.kt)("inlineCode",{parentName:"p"},"useSimpleList")," hook allows you to get your data straight from the API. This data is compatible with Ant Design ",(0,n.kt)("a",{parentName:"p",href:"https://ant.design/components/list/"},"List")," and can be used in it. Furthermore, this hook includes out-of-the-box features such as pagination, sorting, and filtering. In this example, how to use ",(0,n.kt)("inlineCode",{parentName:"p"},"useSimpleList")," is explained in detail."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/ui-integrations/ant-design/hooks/use-simple-list"},"Refer to the ",(0,n.kt)("strong",{parentName:"a"},"refine")," useSimpleList hook documentation for more information. \u2192")),(0,n.kt)(m,{path:"use-simple-list-antd",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);