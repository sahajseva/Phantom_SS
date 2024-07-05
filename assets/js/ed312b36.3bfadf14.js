"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83639],{58860:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>m});var a=t(37953);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(t),g=i,m=p["".concat(s,".").concat(g)]||p[g]||c[g]||o;return t?a.createElement(m,r(r({ref:n},d),{},{components:t})):a.createElement(m,r({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},10442:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});t(37953);var a=t(58860);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const l={title:"esbuild - Next-generation JavaScript bundler",description:"The advantages of using esbuild and how to use it in your project.",slug:"what-is-esbuild",authors:"muhammad_khabbab",tags:["javascript","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-03-esbuild/social-2.png",hide_table_of_contents:!1},s=void 0,u={permalink:"/blog/what-is-esbuild",source:"@site/blog/2024-07-04-esbuild.md",title:"esbuild - Next-generation JavaScript bundler",description:"The advantages of using esbuild and how to use it in your project.",date:"2024-07-04T00:00:00.000Z",formattedDate:"July 4, 2024",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:11.845,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"esbuild - Next-generation JavaScript bundler",description:"The advantages of using esbuild and how to use it in your project.",slug:"what-is-esbuild",authors:"muhammad_khabbab",tags:["javascript","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-03-esbuild/social-2.png",hide_table_of_contents:!1},prevItem:{title:"How to Install and Use NVM?",permalink:"/blog/install-nvm-mac-and-windows"},nextItem:{title:"A Guide on Material UI AutoComplete in React",permalink:"/blog/material-ui-autocomplete-component"},relatedPosts:[{title:"git stash - Save the Uncommitted Changes Locally",description:"Explore the essential guide to Git Stash with practical examples and expert tips. Learn how to effectively save, manage, and apply your code changes with the git stash command.",permalink:"/blog/git-stash",formattedDate:"January 26, 2024",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:12.005,date:"2024-01-26T00:00:00.000Z"},{title:"Introduction to HTMX",description:"We will explore what HTMX is and its capabilities.",permalink:"/blog/what-is-htmx",formattedDate:"October 26, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:15.11,date:"2023-10-26T00:00:00.000Z"},{title:"How to Edit a crontab",description:"Crontab is a powerful scheduling tool in Unix-like systems. This article provides a comprehensive guide on using crontab, covering the basics of creating a crontab, setting up environment variables, scheduling jobs, and error handling.",permalink:"/blog/edit-crontab",formattedDate:"December 27, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.59,date:"2023-12-27T00:00:00.000Z"}],authorPosts:[{title:"Kubernetes CrashLoopBackOff - What is it and how to fix it?",description:"In this article, we will discuss the Kubernetes CrashLoopBackOff error, its causes, and how to fix it.",permalink:"/blog/crashloopbackoff-kubernetes",formattedDate:"November 22, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:9.76,date:"2023-11-22T00:00:00.000Z"},{title:"Understanding the Basics of Kubernetes CronJob",description:"CronJobs in Kubernetes is the way of running jobs automatically based on time intervals.",permalink:"/blog/kubernetes-cron-jobs",formattedDate:"December 12, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:10.52,date:"2023-12-12T00:00:00.000Z"},{title:"git diff - Comparing Changes in Git",description:"We'll explore Git's 'git diff' which helps you track changes throughout your working directory, commits, and branches.",permalink:"/blog/git-diff-command",formattedDate:"May 12, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:11.915,date:"2023-05-12T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Why another JS bundler",id:"why-another-js-bundler",level:2},{value:"Features of esbuild",id:"features-of-esbuild",level:2},{value:"Bundling and supported content types",id:"bundling-and-supported-content-types",level:3},{value:"The build API",id:"the-build-api",level:3},{value:"Incremental compilation",id:"incremental-compilation",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Server mode",id:"server-mode",level:3},{value:"Watch mode",id:"watch-mode",level:3},{value:"Comparison with other bundlers",id:"comparison-with-other-bundlers",level:2},{value:"Why it is so fast",id:"why-it-is-so-fast",level:2},{value:"Example esbuild Usage",id:"example-esbuild-usage",level:2},{value:"Advanced Configuration Options",id:"advanced-configuration-options",level:2},{value:"Customizing Build Process",id:"customizing-build-process",level:4},{value:"Is it Production ready?",id:"is-it-production-ready",level:2},{value:"esbuild TypeScript support",id:"esbuild-typescript-support",level:2},{value:"Performance Optimization",id:"performance-optimization",level:2},{value:"Analyzing Bundle Size",id:"analyzing-bundle-size",level:3},{value:"Advanced Minification Techniques",id:"advanced-minification-techniques",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},g="wrapper";function m(e){var{components:n}=e,t=r(e,["components"]);return(0,a.yg)(g,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){i(e,n,t[n])}))}return e}({},c,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"This article was last updated on July 04, 2024, to add sections for Advanced Configuration Options and Performance Optimization to esbuild")),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,"Bundlers are an essential component of the JavaScript ecosystem. As the name implies, bundlers generate one or more module bundles. Module bundlers process the JavaScript applications and build dependency graphs to map each module needed by your project. Generally speaking, bundlers perform the following tasks:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Bundle CSS, HTML, images, and other assets"),(0,a.yg)("li",{parentName:"ul"},"Bundle JavaScript code in required module formats"),(0,a.yg)("li",{parentName:"ul"},"Build optimizations, including code-splitting, scope-hoisting, tree-shaking, etc."),(0,a.yg)("li",{parentName:"ul"},"Hot module replacement during the development")),(0,a.yg)("p",null,"Many bundlers are used in developing modern JavaScript applications, including Webpack, Rollup, and parcel, but we will discuss a relatively new entrant, esbuild, which is a very fast and efficient bundler."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#why-another-js-bundler"},"Why another JS bundler")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#features-of-esbuild"},"Features of esbuild")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#comparison-with-other-bundlers"},"Comparison with other bundlers")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#why-it-is-so-fast"},"Why it is so fast")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#example-esbuild-usage"},"Example esbuild Usage")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#advanced-configuration-options"},"Advanced Configuration Options")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#is-it-production-ready"},"Is it Production ready?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#esbuild-typescript-support"},"esbuild TypeScript support")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#performance-optimization"},"Performance Optimization"))),(0,a.yg)("h2",{id:"why-another-js-bundler"},"Why another JS bundler"),(0,a.yg)("p",null,"Technology is progressing very fast. Every day you will see new frameworks, build tools, and libraries to speed up and improve your software applications. ",(0,a.yg)("strong",{parentName:"p"},"esbuild")," is another example of constant innovation and improvement. It is an open-source next-generation JavaScript bundler that is very fast and more efficient than other bundlers in the industry. It is written in Go language with speed in mind; it is powered by parallel parsing, printing, and source map generation. It packages and bundles JS code for distribution on the web. Some of its features include:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"It is very fast, even without any cache. It is much faster than other bundlers."),(0,a.yg)("li",{parentName:"ul"},"A robust API for JavaScript and Go"),(0,a.yg)("li",{parentName:"ul"},"ES6 and common JS modules"),(0,a.yg)("li",{parentName:"ul"},"Supports TypeScript and JSX syntax"),(0,a.yg)("li",{parentName:"ul"},"Source maps"),(0,a.yg)("li",{parentName:"ul"},"Minification")),(0,a.yg)("h2",{id:"features-of-esbuild"},"Features of esbuild"),(0,a.yg)("p",null,"Let's go through some of its features in detail."),(0,a.yg)("h3",{id:"bundling-and-supported-content-types"},"Bundling and supported content types"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"esbuild")," supports both bundling and code splitting. Bundling is when you want to deploy a single ",(0,a.yg)("inlineCode",{parentName:"p"},"app.js")," target. Code splitting is when you want to split ",(0,a.yg)("inlineCode",{parentName:"p"},"app.js")," into many targets, like ",(0,a.yg)("inlineCode",{parentName:"p"},"header.js")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"sidebar.js")," etc.\n",(0,a.yg)("strong",{parentName:"p"},"esbuild"),' has built-in support for various content types using its component called "loaders". The loader tells esbuild how to parse a particular content type. The three common loaders enabled by default are:'),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Typescript loader"),(0,a.yg)("li",{parentName:"ul"},"JavaScript loader"),(0,a.yg)("li",{parentName:"ul"},"CSS loader")),(0,a.yg)("p",null,"If we look at the content types supported by esbuild, then these are as below:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"JavaScript Loader: As mentioned above, the JavaScript loader is enabled by default, and it supports ",(0,a.yg)("inlineCode",{parentName:"li"},".js"),". ",(0,a.yg)("inlineCode",{parentName:"li"},".cjs"),", and ",(0,a.yg)("inlineCode",{parentName:"li"},".mjs")," files"),(0,a.yg)("li",{parentName:"ul"},"Typescript Loader: Enabled by default for ",(0,a.yg)("inlineCode",{parentName:"li"},".ts"),". ",(0,a.yg)("inlineCode",{parentName:"li"},".tsx"),". ",(0,a.yg)("inlineCode",{parentName:"li"},"mts"),", and ",(0,a.yg)("inlineCode",{parentName:"li"},".cts")," files. However, it does not support type-checking."),(0,a.yg)("li",{parentName:"ul"},"JSX Loader: It is enabled by default for ",(0,a.yg)("inlineCode",{parentName:"li"},".jsx")," and ",(0,a.yg)("inlineCode",{parentName:"li"},".tsx")," files. Note that ",(0,a.yg)("inlineCode",{parentName:"li"},"JSX")," syntax is not enabled in ",(0,a.yg)("inlineCode",{parentName:"li"},".js")," files by default. You can, however, enable this by updating the configuration."),(0,a.yg)("li",{parentName:"ul"},"JSON Loader: It is enabled by default for ",(0,a.yg)("inlineCode",{parentName:"li"},".json")," files. It parses JSON files to JavaScript objects and exports these objects."),(0,a.yg)("li",{parentName:"ul"},"CSS Loader: It can bundle CSS files directly without importing your CSS from the JavaScript code. This loader is also enabled by default."),(0,a.yg)("li",{parentName:"ul"},"Text Loader: It is also enabled by default for ",(0,a.yg)("inlineCode",{parentName:"li"},".txt")," files. It loads the files as a string during build time and exports the string default export."),(0,a.yg)("li",{parentName:"ul"},"Binary Loader: It loads the file in the form of a binary buffer at build time and includes it in the bundle as Base64 encoding. It is not enabled by default."),(0,a.yg)("li",{parentName:"ul"},"Data URL: It loads the file as a binary buffer at build time and embeds it into the bundle as a Base64 encoded data URL. This loader is useful for bundling images along with the CSS loader to load images using the method ",(0,a.yg)("inlineCode",{parentName:"li"},"url()"),". It is not enabled by default.")),(0,a.yg)("h3",{id:"the-build-api"},"The build API"),(0,a.yg)("p",null,"esbuild has a powerful JavaScript build API through which you can customize the behavior of esbuild. It is similar to ",(0,a.yg)("inlineCode",{parentName:"p"},"webpack.config.js")," file in the Webpack.",(0,a.yg)("br",{parentName:"p"}),"\n","If you look at the code sample below, you can see that the build function executes the esbuild in a child process and returns a promise that is resolved when the build is complete.",(0,a.yg)("br",{parentName:"p"}),"\n","Note that esbuild also provides a synchronous build API ",(0,a.yg)("inlineCode",{parentName:"p"},"buildSync")," that runs synchronously. You will need to use the asynchronous build API because esbuild plugins are compatible with only asynchronous API."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ts"},"require('esbuild').build({\n  entryPoints: ['app.jsx'],\n  bundle: true,\n  outfile: `bundle.js',\n}).catch(() => process.exit(1))\n")),(0,a.yg)("h3",{id:"incremental-compilation"},"Incremental compilation"),(0,a.yg)("p",null,"esbuild supports incremental compilation. If you are compiling the same file from different sources again and again, esbuild will work only on changed sources instead of code splitting or bundling from scratch each time."),(0,a.yg)("h3",{id:"plugins"},"Plugins"),(0,a.yg)("p",null,"The plugins API is a very useful feature of ",(0,a.yg)("strong",{parentName:"p"},"esbuild"),". It allows you to preprocess files when they are linked. It can be very beneficial if you are converting Sass to CSS or markdown to JSX etc. You can still configure the implementation details through the plugins API."),(0,a.yg)("h3",{id:"server-mode"},"Server mode"),(0,a.yg)("p",null,"The server mode enables you to use ",(0,a.yg)("strong",{parentName:"p"},"esbuild")," as a web server, and you can implement your own server handler for incoming requests. This feature is very powerful because you can use the server handler to perform different functions on incoming requests, like observe events and log them. ",(0,a.yg)("strong",{parentName:"p"},"esbuild")," utilizes code-split targets from memory instead of the disk to serve your bundled code, making it a highly performant web server as it reduces the total work spent on each request."),(0,a.yg)("h3",{id:"watch-mode"},"Watch mode"),(0,a.yg)("p",null,"Watch mode means the ",(0,a.yg)("strong",{parentName:"p"},"esbuild")," can detect the changes in the source code as they occur. Instead of worrying about file-watchers or using libraries like ",(0,a.yg)("a",{parentName:"p",href:"hhttps://npmjs.com/package/nodemon"},"Nodemon"),", or ",(0,a.yg)("a",{parentName:"p",href:"https://npmjs.com/package/chokidar"},"chokidar"),", etc. you can offload this responsibility to esbuild. In fact you can also implement your own watch handlers so you can log events, observe them and push ",(0,a.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events"},"server-sent events"),"."),(0,a.yg)("h2",{id:"comparison-with-other-bundlers"},"Comparison with other bundlers"),(0,a.yg)("p",null,"If you look at the below comparison between different bundlers, you can see that esbuild has a significant performance advantage over its competitors. Image a large team with many projects and dependencies where reducing build times is crucial for product development. The magic lies in the ability of esbuild to parallelize printing, parsing, and source map generation."),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-11-03-esbuild/esbuild-chart.png",alt:"esbuild"}),(0,a.yg)("em",null," Source - https://esbuild.github.io/")),(0,a.yg)("br",null),(0,a.yg)("h2",{id:"why-it-is-so-fast"},"Why it is so fast"),(0,a.yg)("p",null,"Here is how esbuild is able to achieve this performance:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"It is developed using the Go language, which compiles to native code. Other bundlers are mostly written in JavaScript, and NodeJS has to spend extra time to parse the JavaScript in case of other bundlers."),(0,a.yg)("li",{parentName:"ul"},"It is able to perform printing, parsing, and source map generation in parallel. The algorithms in esbuild are developed to fully saturate all CPU cores when possible. Note that parallelism is at the heart of Go language, and Go can make intelligent use of memory utilization as compared to JavaScript."),(0,a.yg)("li",{parentName:"ul"},"Everything is done in very few passes instead of expensive data transformation."),(0,a.yg)("li",{parentName:"ul"},"It has not too many features like Webpack, and its main focus is speed.")),(0,a.yg)("h2",{id:"example-esbuild-usage"},"Example esbuild Usage"),(0,a.yg)("p",null,"First, you need to create a NodeJS project by running this command"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"npm init \u2013y\n")),(0,a.yg)("p",null,"Go to your project directory and install the esbuild package by running the below command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"npm install esbuild\n")),(0,a.yg)("p",null,"To verify if esbuild is correctly installed, run the below command, and it will return the esbuild version:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"/node_modules/.bin/esbuild \u2014 version\n")),(0,a.yg)("p",null,"This example uses using React application, so you need to run the following command to install react packages:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"npm install react react-dom\n")),(0,a.yg)("p",null,"Create an ",(0,a.yg)("inlineCode",{parentName:"p"},"app.jsx")," file having the following code:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport * as Server from "react-dom/server";\n\nlet Greet = () => <h1>Hello, esbuild Users</h1>;\n\nconsole.log(Server.renderToString(<Greet />));\n')),(0,a.yg)("p",null,"Now let's ask esbuild to bundle this application by running the below command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"./node_modules/.bin/esbuild app.jsx \u2014 bundle \u2014 outfile=bundle.js\n")),(0,a.yg)("p",null,"What esbuild does here is that it bundles your application into ",(0,a.yg)("inlineCode",{parentName:"p"},"bundle.js"),", and the whole process is extremely fast."),(0,a.yg)("h2",{id:"advanced-configuration-options"},"Advanced Configuration Options"),(0,a.yg)("p",null,"I added in another section for the advanced options of configuration of our article on esbuild, which explains how we can modify the process of creating a build with esbuild: different entry points, formats of output, and target environments. I added examples of esbuild configuration for different use cases."),(0,a.yg)("h4",{id:"customizing-build-process"},"Customizing Build Process"),(0,a.yg)("p",null,"esbuild provides flexible options to customize the build process, allowing developers to set different entry points, output formats, and target environments. These customizations enable esbuild to be used in a variety of scenarios, from creating library bundles to optimizing builds for specific environments."),(0,a.yg)("p",null,"Here are some of the examples of configuring esbuild for different use-cases:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Creating a Library Bundle"))),(0,a.yg)("p",null,"If you're developing a library, you will probably want to output both ESM and CJS simultaneously. Here's how you might configure build to do this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'require("esbuild")\n  .build({\n    entryPoints: ["src/index.ts"],\n    bundle: true,\n    minify: true,\n    sourcemap: true,\n    outdir: "dist",\n    target: ["es2020"], // Target environment\n    format: "esm", // Output format\n  })\n  .then(() => {\n    console.log("ESM build complete");\n  })\n  .catch(() => process.exit(1));\n\nrequire("esbuild")\n  .build({\n    entryPoints: ["src/index.ts"],\n    bundle: true,\n    minify: true,\n    sourcemap: true,\n    outdir: "dist",\n    target: ["es2020"], // Target environment\n    format: "cjs", // Output format\n  })\n  .then(() => {\n    console.log("CJS build complete");\n  })\n  .catch(() => process.exit(1));\n')),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Optimizing Builds for Specific Environments"))),(0,a.yg)("p",null,"In the case of web applications, you may need to optimize the build for modern browsers or a specific JavaScript environment. Here is an example of setting up build for a web application:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'require("esbuild")\n  .build({\n    entryPoints: ["src/app.jsx"],\n    bundle: true,\n    minify: true,\n    sourcemap: true,\n    outfile: "dist/app.js",\n    target: ["chrome58", "firefox57", "safari11", "edge16"], // Target modern browsers\n    define: {\n      "process.env.NODE_ENV": \'"production"\',\n    },\n  })\n  .then(() => {\n    console.log("Web application build complete");\n  })\n  .catch(() => process.exit(1));\n')),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Create Node.js Application Bundle"))),(0,a.yg)("p",null,"While building for a Node.js environment, you might want to specify a different target and use external dependencies. Here's how to configure esbuild for a Node.js application:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'require("esbuild")\n  .build({\n    entryPoints: ["src/server.ts"],\n    bundle: true,\n    platform: "node", // Target Node.js environment\n    target: ["node14"], // Specify Node.js version\n    outfile: "dist/server.js",\n    external: ["express"], // Exclude dependencies to be resolved at runtime\n  })\n  .then(() => {\n    console.log("Node.js application build complete");\n  })\n  .catch(() => process.exit(1));\n')),(0,a.yg)("p",null,"Examples include the way esbuild can be configured to cater for building a library, a web application, or even a Node.js server. With this, you can optimize your project for various environments and use cases."),(0,a.yg)("h2",{id:"is-it-production-ready"},"Is it Production ready?"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"esbuild")," is a great tool with a lot of potentials, however, it is still a small project maintained by a single person. There are not a lot of open-source contributions to this project, and its author is the only person maintaining it. While ",(0,a.yg)("strong",{parentName:"p"},"esbuild")," shows great performance compared to its counterparts, being a new entrant, you will not see many projects in production with ",(0,a.yg)("strong",{parentName:"p"},"esbuild")," yet. It is better to test it on a side project and push it to production after it goes well for your need."),(0,a.yg)("h2",{id:"esbuild-typescript-support"},"esbuild TypeScript support"),(0,a.yg)("p",null,"For TypeScript-based projects in production, you can take advantage of using ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/egoist/tsup"},"tsup"),"."),(0,a.yg)("p",null,"Using tsup you can build your TypeScript applications with minimal configuration.",(0,a.yg)("br",{parentName:"p"}),"\n","It uses ",(0,a.yg)("strong",{parentName:"p"},"esbuild")," behind the scene so you get the power of esbuild along with the convenience of tsup. We, at Refine, have seen remarkable performance using tsup in our project dev/build processes."),(0,a.yg)("h2",{id:"performance-optimization"},"Performance Optimization"),(0,a.yg)("p",null,"I've made a fresh section in the performance optimization of our build article. It should cover bundle size analysis and advanced minification using in-built and third-party build tools/plugins for performance improvement."),(0,a.yg)("h3",{id:"analyzing-bundle-size"},"Analyzing Bundle Size"),(0,a.yg)("p",null,"Optimizing your JavaScript application bundle size is an important process that can help you improve your load time and overall performance. esbuild offers in-built tools with additional support for third-party plugins to analyze, reduce, or compress bundle size."),(0,a.yg)("p",null,"To analyze bundle size and optimize it using esbuild:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Built-in Tools:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"esbuild outputs statistics about the build contents, which helps know the composition of the bundle\u2014including the size of each module and asset contained in a bundle.")))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const esbuild = require("esbuild");\n\nesbuild\n  .build({\n    entryPoints: ["src/index.ts"],\n    bundle: true,\n    minify: true,\n    sourcemap: true,\n    outfile: "dist/bundle.js",\n    logLevel: "info", // Provides detailed output statistics\n  })\n  .catch(() => process.exit(1));\n')),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Third-Party Plugins:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Visualization of the bundle size can also be done through third-party plugins, for instance, ",(0,a.yg)("inlineCode",{parentName:"li"},"source-map-explorer"),".")))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"npm install source-map-explorer\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"// After building with esbuild, use source-map-explorer to analyze the bundle\n// Command to run: source-map-explorer dist/bundle.js\n\n")),(0,a.yg)("h3",{id:"advanced-minification-techniques"},"Advanced Minification Techniques"),(0,a.yg)("p",null,"Advanced minification can optimize your JavaScript bundle significantly through file reduction and the removal of redundant code. Here are performance enhancement configurations of esbuild that are supported to minify:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example: Enable and Set Up Advanced Minification esbuild:")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("strong",{parentName:"li"},"Enabling Minification:"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"The minification can be enabled in esbuild through build configuration: whitespace is stripped, variable names are shortened, and dead code is eliminated.")))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'esbuild\n  .build({\n    entryPoints: ["src/index.ts"],\n    bundle: true,\n    minify: true, // Enable minification\n    sourcemap: true,\n    outfile: "dist/bundle.js",\n  })\n  .catch(() => process.exit(1));\n')),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Configuring Minification Options:")),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Minification: Additional settings can be set to minify the bundle further; these include being able to exclude console statements, debugging information, and more.")))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'esbuild\n  .build({\n    entryPoints: ["src/index.ts"],\n    bundle: true,\n    minify: true,\n    sourcemap: true,\n    outfile: "dist/bundle.js",\n    define: {\n      "process.env.NODE_ENV": \'"production"\', // Remove development-specific code\n      "console.log": "null", // Remove console.log statements\n    },\n  })\n  .catch(() => process.exit(1));\n')),(0,a.yg)("p",null,"We can significantly enhance the performance of our JavaScript applications with esbuild by analyzing and optimizing bundle size, which uses cutting-edge minification."),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"The world of JavaScript has a lot of great frameworks and tools. You will see many bundlers in the market, but esbuild is gaining a lot of popularity due to its amazing speed. In this article, we compared some top bundlers being used. We also discussed some of the core features of esbuild and how it delivers blazing-fast builds."),(0,a.yg)("p",null,"We also went through some basic commands for installing and building projects with esbuild. esbuild has a lot of future, and although it is a new kid on the block, it holds tremendous potential for organizations that want to build applications quicker and faster."))}m.isMDXComponent=!0}}]);