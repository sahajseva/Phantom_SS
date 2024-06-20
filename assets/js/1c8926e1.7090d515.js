"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[14612],{58860:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>h});var r=o(37953);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),g=a,h=u["".concat(s,".").concat(g)]||u[g]||m[g]||n;return o?r.createElement(h,i(i({ref:t},p),{},{components:o})):r.createElement(h,i({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<n;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},85324:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});o(37953);var r=o(58860);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const l={title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",slug:"lighthouse-google-chrome",authors:"joseph_mawa",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-31-google-lighthouse/social-2.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/blog/lighthouse-google-chrome",source:"@site/blog/2024-05-24-google-lighthouse.md",title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",date:"2024-05-24T00:00:00.000Z",formattedDate:"May 24, 2024",tags:[{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:18.65,hasTruncateMarker:!0,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"Using Google Lighthouse to improve app performance",description:"Learn how to use the Google Chrome Lighthouse performance audit tool to identify and improve problems with your app.",slug:"lighthouse-google-chrome",authors:"joseph_mawa",tags:["dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-08-31-google-lighthouse/social-2.png",hide_table_of_contents:!1},prevItem:{title:"Javascript Currying - Variadic Currying",permalink:"/blog/javascript-variadic-currying"},nextItem:{title:"5 Most Common useState Mistakes React Developers Often Make",permalink:"/blog/common-usestate-mistakes-and-how-to-avoid"},relatedPosts:[{title:"How to Change Node Version",description:"A comprehensive guide on how to change the node version.",permalink:"/blog/change-node-version",formattedDate:"March 27, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.11,date:"2024-03-27T00:00:00.000Z"},{title:"What is Turborepo and Why Should You Care?",description:"The advantages of using Turborepo for monorepo development.",permalink:"/blog/how-to-use-turborepo",formattedDate:"November 13, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:6.07,date:"2022-11-13T00:00:00.000Z"},{title:"Getting started with Astro Framework",description:"We will learn how to set up Astrojs, create a new project, and basics.",permalink:"/blog/astro-js-guide",formattedDate:"February 7, 2024",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:16.44,date:"2024-02-07T00:00:00.000Z"}],authorPosts:[{title:"Building a React Admin Dashboard with Tremor Library",description:"We'll build a simple React admin dashboard using Refine and Tremor.",permalink:"/blog/building-react-admin-dashboard-with-tremor",formattedDate:"July 2, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:23.495,date:"2023-07-02T00:00:00.000Z"},{title:"A complete guide to the React createPortal API",description:"We'll explore the React createPortal API, its advantages, disadvantages, and possible use cases.",permalink:"/blog/react-createportal",formattedDate:"October 12, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:6.205,date:"2023-10-12T00:00:00.000Z"},{title:"Introduction to React Table - TanStack Table Adapter for React",description:"We'll explore how to use TanStack Table(React Table) in a react project. We'll also explore how to use TanStack Table with refine.",permalink:"/blog/tanstack-react-table",formattedDate:"October 31, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:11.745,date:"2023-10-31T00:00:00.000Z"}]},p={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2}],m={toc:u},g="wrapper";function h(e){var{components:t}=e,o=i(e,["components"]);return(0,r.yg)(g,n(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),r.forEach((function(t){a(e,t,o[t])}))}return e}({},m,o),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"This article was last updated on May 24, 2024 to update screenshots, add new sections on advanced configuration, lighthouse metrics and common issues on Google Lighthouse"))),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"As websites and web applications become more complex, it is necessary to measure and track their overall quality to provide a seamless browsing experience to your clients. Though several other tools exist for this purpose, Google lighthouse is quite popular among web developers mainly because it is part of the Chrome DevTools."),(0,r.yg)("p",null,"If it doesn't meet your needs as part of Chrome DevTools, Google lighthouse is also readily available as a Node package or command line utility. You can use it for auditing a website for performance, best practices, accessibility, progressive web app (PWA), and search engine optimization(SEO)."),(0,r.yg)("p",null,"You will explore the different ways of using Google Lighthouse in this article. You will also learn how to remedy some of the issues highlighted in the performance measurement and use Google lighthouse in continuous integration(CI) workflow."))}h.isMDXComponent=!0}}]);