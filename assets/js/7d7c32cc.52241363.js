"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54873],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,m=f["".concat(i,".").concat(d)]||f[d]||l[d]||c;return t?n.createElement(m,u(u({ref:r},p),{},{components:t})):n.createElement(m,u({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,u=new Array(c);u[0]=f;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var s=2;s<c;s++)u[s]=t[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},41684:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>s,toc:()=>l});t(67294);var n=t(3905);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={id:"useResourceWithRoute",title:"useResourceWithRoute"},i=void 0,s={unversionedId:"api-reference/core/hooks/resource/useResourceWithRoute",id:"version-3.xx.xx/api-reference/core/hooks/resource/useResourceWithRoute",title:"useResourceWithRoute",description:"useResourceWithRoute is used to get the resource object in resources array that you defined in `` by route name.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/resource/useResourceWithRoute.md",sourceDirName:"api-reference/core/hooks/resource",slug:"/api-reference/core/hooks/resource/useResourceWithRoute",permalink:"/docs/3.xx.xx/api-reference/core/hooks/resource/useResourceWithRoute",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/resource/useResourceWithRoute.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1709904578,formattedLastUpdatedAt:"Mar 8, 2024",frontMatter:{id:"useResourceWithRoute",title:"useResourceWithRoute"},sidebar:"someSidebar",previous:{title:"useResource",permalink:"/docs/3.xx.xx/api-reference/core/hooks/resource/useResource"},next:{title:"useShow",permalink:"/docs/3.xx.xx/api-reference/core/hooks/show/useShow"}},p={},l=[{value:"API Reference",id:"api-reference",level:2},{value:"Return value",id:"return-value",level:3}],f=(d="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var d;const m={toc:l};function b(e){var{components:r}=e,t=u(e,["components"]);return(0,n.kt)("wrapper",c(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){o(e,r,t[r])}))}return e}({},m,t),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useResourceWithRoute")," is used to get the resource object in resources array that you defined in ",(0,n.kt)("inlineCode",{parentName:"p"},"<Refine>")," by route name."),(0,n.kt)("p",null,"The hook is used internal in ",(0,n.kt)("strong",{parentName:"p"},"refine"),". Normally you don't need this hook, but we export it as it may be useful for some use-cases."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { useResourceWithRoute } from "@pankod/refine-core";\n\nconst resourceWithRoute = useResourceWithRoute();\n\nconst resource = resourceWithRoute("posts");\n')),(0,n.kt)("h2",{id:"api-reference"},"API Reference"),(0,n.kt)("h3",{id:"return-value"},"Return value"),(0,n.kt)(f,{id:"return-value",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"resourceWithRoute"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#resourceitemprops"},(0,n.kt)("inlineCode",{parentName:"a"},"(route: string) => IResourceItem"))))))))}b.isMDXComponent=!0}}]);