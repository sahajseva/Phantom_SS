"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40523],{58860:(e,r,t)=>{t.d(r,{xA:()=>s,yg:()=>f});var o=t(37953);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),p=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return o.createElement(l.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=n,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return t?o.createElement(f,i(i({ref:r},s),{},{components:t})):o.createElement(f,i({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59966:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>c,metadata:()=>p,toc:()=>u});t(37953);var o=t(58860);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const c={id:"serverSideFormValidation",title:"Server-Side Form Validation","example-tags":["form","chakra-ui","react-hook-form"]},l=void 0,p={unversionedId:"examples/form/chakra-ui/serverSideFormValidation",id:"examples/form/chakra-ui/serverSideFormValidation",title:"Server-Side Form Validation",description:"You can handle server-side form validation errors out-of-the-box with React Hook Form useForm.",source:"@site/docs/examples/form/chakra-ui/serverSideFormValidation.md",sourceDirName:"examples/form/chakra-ui",slug:"/examples/form/chakra-ui/serverSideFormValidation",permalink:"/docs/examples/form/chakra-ui/serverSideFormValidation",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/form/chakra-ui/serverSideFormValidation.md",tags:[],version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1720174164,formattedLastUpdatedAt:"Jul 5, 2024",frontMatter:{id:"serverSideFormValidation",title:"Server-Side Form Validation","example-tags":["form","chakra-ui","react-hook-form"]},sidebar:"mainSidebar",previous:{title:"useDrawerForm",permalink:"/docs/examples/form/chakra-ui/useDrawerForm"},next:{title:"Base64 Upload",permalink:"/docs/examples/upload/chakra-ui/base64"}},s={},u=[],m=(d="CodeSandboxExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.yg)("div",e)});var d;const f={toc:u},y="wrapper";function b(e){var{components:r}=e,t=i(e,["components"]);return(0,o.yg)(y,a(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(r){n(e,r,t[r])}))}return e}({},f,t),{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"You can handle server-side form validation errors out-of-the-box with ",(0,o.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"React Hook Form useForm"),"."),(0,o.yg)("p",null,"When ",(0,o.yg)("inlineCode",{parentName:"p"},"dataProvider")," returns rejected promise with ",(0,o.yg)("inlineCode",{parentName:"p"},"errors")," field, ",(0,o.yg)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},(0,o.yg)("inlineCode",{parentName:"a"},"useForm"))," will automatically update the error state with the rejected ",(0,o.yg)("inlineCode",{parentName:"p"},"errors")," field."),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/advanced-tutorials/forms/server-side-form-validation/"},"Refer to the server-side Form Validation documentation for more information. \u2192")),(0,o.yg)(m,{path:"server-side-form-validation-chakra-ui",mdxType:"CodeSandboxExample"}))}b.isMDXComponent=!0}}]);