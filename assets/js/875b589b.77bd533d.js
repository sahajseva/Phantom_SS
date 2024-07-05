"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[52883],{58860:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var a=n(37953);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,u=m["".concat(s,".").concat(h)]||m[h]||c[h]||i;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},83981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});n(37953);var a=n(58860);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"Understanding Virtual DOM in React",description:"We'll dive into the concept of a virtual DOM in the React as well as explore its purpose.",slug:"react-virtual-dom",authors:"peter_osah",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-23-react-virtual-dom/social.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/react-virtual-dom",source:"@site/blog/2023-11-23-react-virtual-dom.md",title:"Understanding Virtual DOM in React",description:"We'll dive into the concept of a virtual DOM in the React as well as explore its purpose.",date:"2023-11-23T00:00:00.000Z",formattedDate:"November 23, 2023",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:12.11,hasTruncateMarker:!1,authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],frontMatter:{title:"Understanding Virtual DOM in React",description:"We'll dive into the concept of a virtual DOM in the React as well as explore its purpose.",slug:"react-virtual-dom",authors:"peter_osah",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-23-react-virtual-dom/social.png",hide_table_of_contents:!1},prevItem:{title:"A Complete guide to pnpm",permalink:"/blog/how-to-use-pnpm"},nextItem:{title:"Kubernetes CrashLoopBackOff - What is it and how to fix it?",permalink:"/blog/crashloopbackoff-kubernetes"},relatedPosts:[{title:"How to use Material UI Modal",description:"We'll learn how to use Material UI Modal to create a popup window that can display important information or facilitate user input.",permalink:"/blog/material-ui-modal",formattedDate:"May 9, 2023",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:11.215,date:"2023-05-09T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.06,date:"2022-03-29T00:00:00.000Z"},{title:"React Slick Examples - Creating a carousel",description:"We'll see how to use React Slick in your React projects through a step-by-step guide and hands-on demo.",permalink:"/blog/react-slick",formattedDate:"October 29, 2023",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:18.155,date:"2023-10-29T00:00:00.000Z"}],authorPosts:[{title:"Swiper.js Tutorial - A Powerful Touch Slider Library",description:"We'll take a dive into the Swiper.js library, a powerful JavaScript library that lets you quickly add touch-enabled and responsive sliders to your website or web application.",permalink:"/blog/swiper-js",formattedDate:"December 7, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:13.65,date:"2023-12-07T00:00:00.000Z"},{title:"Tailwind Animations with Examples",description:"Understanding the cleanup function of the useEffect hook in React. Learn how to clean up side effects in React components to prevent memory leaks and improve performance.",permalink:"/blog/tailwind-animations",formattedDate:"March 25, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:5.035,date:"2024-03-25T00:00:00.000Z"},{title:"Framer Motion React Animations",description:"We'll walk you through the features and functionalities of Framer Motion.",permalink:"/blog/framer-motion",formattedDate:"June 20, 2024",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:15.475,date:"2024-06-20T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"What is the DOM?",id:"what-is-the-dom",level:2},{value:"Drawbacks in updating the DOM",id:"drawbacks-in-updating-the-dom",level:2},{value:"React&#39;s Virtual DOM Implementation",id:"reacts-virtual-dom-implementation",level:2},{value:"Components of the Virtual DOM",id:"components-of-the-virtual-dom",level:3},{value:"React Virtual DOM vs. real DOM",id:"react-virtual-dom-vs-real-dom",level:2},{value:"The Role of the Virtual DOM in React&#39;s Reconciliation",id:"the-role-of-the-virtual-dom-in-reacts-reconciliation",level:2},{value:"React virtual DOM vs. shadow DOM",id:"react-virtual-dom-vs-shadow-dom",level:2},{value:"Real DOM vs. virtual DOM vs. shadow DOM",id:"real-dom-vs-virtual-dom-vs-shadow-dom",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:m},h="wrapper";function u(e){var{components:t}=e,n=o(e,["components"]);return(0,a.yg)(h,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},c,n),{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"introduction"},"Introduction"),(0,a.yg)("p",null,'The virtual DOM (Virtual Document Object Model) is a programming concept in which a "virtual" representation of a user interface is preserved in memory and synchronized with the browser\'s DOM (Document Object Model) via a library.'),(0,a.yg)("p",null,"The concept of the virtual DOM has been an integral part of various Javascript frontend frameworks, and it has been one of the things that make them efficient.\nIn this article, we will dive into the concept of a virtual DOM in the React Library as well as explore its purpose in React."),(0,a.yg)("p",null,"Steps we'll cover:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#what-is-the-dom"},"What is the DOM?")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#drawbacks-in-updating-the-dom"},"Drawbacks in updating the DOM")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#reacts-virtual-dom-implementation"},"React's Virtual DOM Implementation"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#components-of-the-virtual-dom"},"Components of the Virtual DOM")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#react-virtual-dom-vs-real-dom"},"React Virtual DOM vs. real DOM")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#the-role-of-the-virtual-dom-in-reacts-reconciliation"},"The Role of the Virtual DOM in React's Reconciliation")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#react-virtual-dom-vs-shadow-dom"},"React virtual DOM vs. shadow DOM")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#real-dom-vs-virtual-dom-vs-shadow-dom"},"Real DOM vs. virtual DOM vs. shadow DOM"))),(0,a.yg)("h2",{id:"what-is-the-dom"},"What is the DOM?"),(0,a.yg)("p",null,"When a webpage is loaded into a browser, the browser typically receives an HTML document for that page from the server. The browser constructs a logical, tree-like structure from the HTML to show the requested page to the client. The DOM refers to this ",(0,a.yg)("inlineCode",{parentName:"p"},"tree")," structure."),(0,a.yg)("p",null,"The Document Object Model (DOM) is a logical tree that describes a document. Each tree branch terminates in a ",(0,a.yg)("inlineCode",{parentName:"p"},"node"),", which holds an ",(0,a.yg)("inlineCode",{parentName:"p"},"object"),".\nBecause the document on the browser has been parsed to a tree structure, methods that offer programmatic access to the tree, allowing one to change the structure, style, or content of a document, are required. This gave rise to the DOM API, which provides these methods for altering the elements represented as nodes in the tree."),(0,a.yg)("h2",{id:"drawbacks-in-updating-the-dom"},"Drawbacks in updating the DOM"),(0,a.yg)("p",null,"Making updates to the DOM using the DOM API is quick and efficient. However, there is a predominant issue with updating the DOM, which is:"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Performance issues"),": When updating an element in a document, the updated element and its children must be re-rendered to update the application's UI. This re-rendering affects the website's or web application's performance. As a result, the more elements present in your website or web application, the more expensive the DOM updates may be, and the more frequent re-rendering of the DOM occurs."),(0,a.yg)("h2",{id:"reacts-virtual-dom-implementation"},"React's Virtual DOM Implementation"),(0,a.yg)("p",null,"For the purpose of optimizing re-rendering on websites/applications, many JavaScript frameworks provide various approaches. However, React's approach is the idea of the virtual DOM."),(0,a.yg)("p",null,"React's virtual DOM implies a \"",(0,a.yg)("strong",{parentName:"p"},"virtual"),"\" representation (as a tree, as each element is a node that holds an object ) of a user interface, which is preserved in memory and synchronized with the browser's DOM via React's ReactDOM library."),(0,a.yg)("h3",{id:"components-of-the-virtual-dom"},"Components of the Virtual DOM"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"React Elements"),": We will illustrate React Elements with an example as they are an integral part of the virtual DOM:")),(0,a.yg)("p",null,"Consider a regular React component rendered with ",(0,a.yg)("inlineCode",{parentName:"p"},"JSX"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"export const SampleComponent = () => {\n  return (\n    <div>\n      <h1>This is the component header</h1>\n      <p> This is the component paragraph</p>\n    </div>\n  );\n};\n")),(0,a.yg)("p",null,"We will console log this component."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"console.log(SampleComponent());\n")),(0,a.yg)("p",null,"When we log this component, we get the value shown below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'{\n    "type": "div",\n    $$typeof: Symbol(react.element)\n    "key": null,\n    "ref": null,\n    "props": {\n        "children": [\n            {\n                "type": "h1",\n                "key": null,\n                "ref": null,\n                "props": {\n                    "children": "This is the component header"\n                },\n                "_owner": null,\n                "_store": {}\n            },\n            {\n                "type": "p",\n                "key": null,\n                "ref": null,\n                "props": {\n                    "children": "This is the component paragraph"\n                },\n                "_owner": null,\n                "_store": {}\n            }\n        ]\n    },\n    "_owner": null,\n    "_store": {}\n}\n')),(0,a.yg)("p",null,"The code above implies that our ",(0,a.yg)("inlineCode",{parentName:"p"},"JSX")," code has been parsed to a React element. A ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"ReactElement"))," is simply a representation of a DOM ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"element"))," in the ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"Virtual DOM."))),(0,a.yg)("p",null,"This parsing is possible by ",(0,a.yg)("inlineCode",{parentName:"p"},"react/jsx-runtime")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"react/jsx-dev-runtime")," (development mode) present in the React library."),(0,a.yg)("p",null,"A React Element consists of many fields. but our interest will be in the following:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"$$typeof :")," This field is represented by a ",(0,a.yg)("inlineCode",{parentName:"li"},"symbol"),". React uses this field to identify a react element in the virtual DOM. As a result, any React element lacking that field may not be recognized as an element by React."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"props"),": This field contains the props values for your react component and its children."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"props"),".",(0,a.yg)("strong",{parentName:"li"},"children"),": The children fields can both accept React elements and be ",(0,a.yg)("inlineCode",{parentName:"li"},"null")," values.")),(0,a.yg)("p",null,"for example we have a nested React component below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"export const SampleComponent = () => {\n  return (\n    <div>\n      <div>\n        <h1>This is the component header</h1>\n      </div>\n      <p> This is the component paragraph</p>\n    </div>\n  );\n};\n")),(0,a.yg)("p",null,"When we log this component, the component's ",(0,a.yg)("inlineCode",{parentName:"p"},"props.children")," property will be rendered as:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'{\n    ...\n    "props": {\n        "children": [\n            {\n                "type": "div",\n                "key": null,\n                "ref": null,\n                "props": {\n                    "children": {\n                        "type": "h1",\n                        "key": null,\n                        "ref": null,\n                        "props": {\n                            "children": "This is the component header"\n                        },\n                        "_owner": null,\n                        "_store": {}\n                    }\n                },\n                "_owner": null,\n                "_store": {}\n            },\n            {\n                "type": "p",\n                "key": null,\n                "ref": null,\n                "props": {\n                    "children": "This is the component paragraph"\n                },\n                "_owner": null,\n                "_store": {}\n            }\n        ]\n    }\n}\n\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Events")," can be represented in a React element. For example, we have a React component with an ",(0,a.yg)("inlineCode",{parentName:"p"},"onClick")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"onkeydown")," event as shown below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'export const SampleComponent = () => {\n  return (\n    <div>\n      <div\n        role="button"\n        tabIndex={0}\n        onClick={() => {\n          console.log("hello world");\n        }}\n        onKeyDown={() => {\n          console.log("hello world");\n        }}\n      >\n        <h1>This is the component header</h1>\n      </div>\n      <p> This is the component paragraph</p>\n    </div>\n  );\n};\n')),(0,a.yg)("p",null,"When we log this component, the component's ",(0,a.yg)("inlineCode",{parentName:"p"},"props.children")," property will be rendered as:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'{\n    "type": "div",\n    "key": null,\n    "ref": null,\n    "props": {\n        "children": [\n            {\n                "type": "div",\n                "key": null,\n                "ref": null,\n                "props": {\n                    "role": "button",\n                    "tabIndex": 0,\n                    "onClick": () => { console.log("hello world"); },\n                    "onKeyDown": () => { console.log("hello world"); },\n                    "children": {\n                        "type": "h1",\n                        "key": null,\n                        "ref": null,\n                        "props": {\n                            "children": "This is the component header"\n                        },\n                        "_owner": null,\n                        "_store": {}\n                    }\n                },\n                "_owner": null,\n                "_store": {}\n            },\n            {\n                "type": "p",\n                "key": null,\n                "ref": null,\n                "props": {\n                    "children": "This is the component paragraph"\n                },\n                "_owner": null,\n                "_store": {}\n            }\n        ]\n    }\n}\n')),(0,a.yg)("p",null,"As mentioned, ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"React element"))," represents a DOM ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"element"))," in the ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"Virtual DOM")),". This implies that the virtual DOM JavaScript ",(0,a.yg)("inlineCode",{parentName:"p"},"object")," is simply a composition of nested React elements."),(0,a.yg)("h2",{id:"react-virtual-dom-vs-real-dom"},"React Virtual DOM vs. real DOM"),(0,a.yg)("p",null,"The table below provides an overview of the distinctions between virtual and real DOM:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Real DOM"),(0,a.yg)("th",{parentName:"tr",align:null},"Virtual DOM"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"when the actual structure of the web page (which is not lightweight) or document is represented by DOM."),(0,a.yg)("td",{parentName:"tr",align:null},"The virtual DOM is a lightweight and in-memory representation")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Any change causes the entire DOM tree to be updated."),(0,a.yg)("td",{parentName:"tr",align:null},"Any change only affects the corresponding node in the tree.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"It is an HTML abstraction of a page."),(0,a.yg)("td",{parentName:"tr",align:null},"It is an HTML DOM abstraction.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"It is capable of manipulating items on the screen."),(0,a.yg)("td",{parentName:"tr",align:null},"It is unable to manipulate the elements displayed on the screen.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Every modification updates the complete DOM tree, which is a laborious and slow operation."),(0,a.yg)("td",{parentName:"tr",align:null},"Because the update is tailored to the modified nodes, its update operation is quick and effective.")))),(0,a.yg)("h2",{id:"the-role-of-the-virtual-dom-in-reacts-reconciliation"},"The Role of the Virtual DOM in React's Reconciliation"),(0,a.yg)("p",null,'When new elements are added to a user interface, the virtual DOM is constructed. If the state of any of these elements changes, a new virtual DOM tree is produced.\nThis tree is then compared, or "',(0,a.yg)("strong",{parentName:"p"},"diffed"),'," with the preceding virtual DOM tree. This is done through the ',(0,a.yg)("strong",{parentName:"p"},"diffing")," algorithm."),(0,a.yg)("p",null,"The ",(0,a.yg)("strong",{parentName:"p"},"diffing")," algorithm is an ",(0,a.yg)("inlineCode",{parentName:"p"},"O(n)")," heuristic algorithm predicated on two suppositions:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Different trees will result from two different types of elements."),(0,a.yg)("li",{parentName:"ul"},"Using a ",(0,a.yg)("inlineCode",{parentName:"li"},"key")," prop, we can indicate which child items might remain consistent between renders.")),(0,a.yg)("p",null,"When the ",(0,a.yg)("strong",{parentName:"p"},"diffing")," algorithm comes across ",(0,a.yg)("strong",{parentName:"p"},"DOM elements of different types"),", it does the following:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"It treats the two as distinct entities and removes the entire old DOM subtree."),(0,a.yg)("li",{parentName:"ul"},"Following the new element type's specifications, the react diffing process then starts from scratch and builds a new DOM subtree.")),(0,a.yg)("p",null,"When it comes across ",(0,a.yg)("strong",{parentName:"p"},"DOM elements of same types"),", it does the following:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"It preserves the current DOM node and only modifies the altered properties when it compares two components of the same type. This is an important aspect of the algorithm. Reducing the amount of manipulation required to update the actual DOM fosters efficiency."),(0,a.yg)("li",{parentName:"ul"},"It guarantees that updates are displayed in the user interface while maintaining the current component and its state in this manner.")),(0,a.yg)("p",null,"When it ","*","*","*","*","comes across React elements(components) of the same types, it does the following:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"It does not reject or replace existing component elements with new ones when it comes across component elements of the same type. Instead, it only updates the ",(0,a.yg)("inlineCode",{parentName:"li"},"props")," supplied to the component instance, leaving it intact. This ensures that the component's state is maintained across renderings.")),(0,a.yg)("p",null,"On handling recursion on the ",(0,a.yg)("inlineCode",{parentName:"p"},"children")," of the React element, the ",(0,a.yg)("strong",{parentName:"p"},"diffing")," algorithm does the following:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"It simply iterates across both child lists concurrently, producing a modification each time there is a difference.")),(0,a.yg)("p",null,"For the ",(0,a.yg)("strong",{parentName:"p"},"diffing")," algorithm, switching between these two trees is effective when adding an element at the end of the children:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},"<ul>\n  <li>first</li>\n  <li>second</li>\n</ul>\n\n<ul>\n  <li>first</li>\n  <li>second</li>\n  <li>third</li>\n</ul>\n")),(0,a.yg)("p",null,"The algorithm can easily match the existing list and append the new list element to the tree."),(0,a.yg)("p",null,"However, in cases where there is an Insertion of an element at the beginning of the tree, as shown below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},"<ul>\n  <li>Second</li>\n  <li>Third</li>\n</ul>\n\n<ul>\n  <li>First</li>\n  <li>Second</li>\n  <li>Third</li>\n</ul>\n")),(0,a.yg)("p",null,"This could inherently cause performance issues because rather than realizing, it can preserve the subtree values that didn't change (in this case, the ",(0,a.yg)("inlineCode",{parentName:"p"},"<li>Second</li>")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"<li>Third</li>")," subtrees), the algorithm will alter every child.\nTo combat this, React provides support for a ",(0,a.yg)("inlineCode",{parentName:"p"},"key")," attribute to address this problem. The algorithm matches the ",(0,a.yg)("inlineCode",{parentName:"p"},"children")," in the initial tree with ",(0,a.yg)("inlineCode",{parentName:"p"},"children")," in the succeeding tree using the ",(0,a.yg)("inlineCode",{parentName:"p"},"key")," that the ",(0,a.yg)("inlineCode",{parentName:"p"},"children")," have. To make the tree conversion more efficient, for instance, we can add a key to our previously inefficient example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<ul>\n  <li key="Second">Second</li>\n  <li key="Third">Third</li>\n</ul>\n\n<ul>\n  <li key="First">First</li>\n  <li key="Second">Second</li>\n  <li key="Third">Third</li>\n</ul>\n')),(0,a.yg)("p",null,"It is now known to the algorithm that the elements with the keys ",(0,a.yg)("inlineCode",{parentName:"p"},"Second")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"Third")," have moved, and the element with ",(0,a.yg)("inlineCode",{parentName:"p"},"First")," is the new element."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"N/B"),": One thing to note is that the key should be distinct and unique"),(0,a.yg)("p",null,"After these are done, the Virtual DOM Representation of the application is passed to the ",(0,a.yg)("inlineCode",{parentName:"p"},"ReactDOM. render()")," function in the application. To update the real DOM to its current state, the ",(0,a.yg)("inlineCode",{parentName:"p"},"render()")," method makes the fewest feasible modifications by comparing the virtual and real DOM components and their offspring. It renders the updated HTML to the real DOM."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App.tsx";\nimport "./index.css";\n\nReactDOM.createRoot(document.getElementById("root")!).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>,\n);\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"N/B:")," The ",(0,a.yg)("inlineCode",{parentName:"p"},"ReactDOM.render()")," function works differently from the regular ",(0,a.yg)("inlineCode",{parentName:"p"},"render()")," function in class components. While ",(0,a.yg)("inlineCode",{parentName:"p"},"ReactDOM.render")," ensures the update of the real DOM, ",(0,a.yg)("inlineCode",{parentName:"p"},"render()")," in class components simply creates a React Element from JSX."),(0,a.yg)("h2",{id:"react-virtual-dom-vs-shadow-dom"},"React virtual DOM vs. shadow DOM"),(0,a.yg)("p",null,"Is the virtual DOM the same as the shadow DOM? The quick answer is that they are quite different."),(0,a.yg)("p",null,"The Shadow DOM allows hidden DOM trees to be joined to ordinary DOM tree elements \u2013 this shadow DOM tree begins with a shadow root, beneath which you can attach any element, just like the standard DOM. This makes the shadow DOM very useful for creating web components."),(0,a.yg)("p",null,"For example, Consider the following HTML ",(0,a.yg)("inlineCode",{parentName:"p"},"input")," element range:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'<div>\n  <h1>This is the component header</h1>\n  <input type="range" />\n  <p> This is the component paragraph</p>\n</div>\n')),(0,a.yg)("p",null,"When we view the element with the browser's developer tools, we just see a simple ",(0,a.yg)("inlineCode",{parentName:"p"},"input")," element. Internally, browsers encapsulate and hide the additional components and styles that make up the input slider."),(0,a.yg)("p",null,"To see the shadow DOM, utilize Chrome DevTools and enable the ",(0,a.yg)("inlineCode",{parentName:"p"},"Show user agent shadow DOM")," option from ",(0,a.yg)("inlineCode",{parentName:"p"},"preferences")," in ",(0,a.yg)("inlineCode",{parentName:"p"},"Settings"),":"),(0,a.yg)("div",{className:"centered-image"},(0,a.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-11-23-react-virtual-dom/virtual-dom.png",alt:"react virtual dom"})),(0,a.yg)("br",null),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'<input type="range">\n  #shadow-root (user-agent)\n  <div>\n    <div pseudo="-webkit-slider-runnable-track" id="track">\n      <div id="thumb"></div>\n  </div>\n</input>\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"A code snippet showing the shadow DOM of the input range function"))),(0,a.yg)("p",null,"Meanwhile, the virtual DOM is a lightweight representation of the DOM that optimizes updates to the real DOM."),(0,a.yg)("h2",{id:"real-dom-vs-virtual-dom-vs-shadow-dom"},"Real DOM vs. virtual DOM vs. shadow DOM"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null}),(0,a.yg)("th",{parentName:"tr",align:null},"Real DOM"),(0,a.yg)("th",{parentName:"tr",align:null},"Virtual DOM"),(0,a.yg)("th",{parentName:"tr",align:null},"shadow DOM"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"Definition")),(0,a.yg)("td",{parentName:"tr",align:null},"It is the representation of a document/webpage/web application's user interface as a tree data structure(node and objects)."),(0,a.yg)("td",{parentName:"tr",align:null},'It is a "virtual" representation of a the real DOM as a tree data structure(node and objects).'),(0,a.yg)("td",{parentName:"tr",align:null},'The shadow DOM can be thought of as a "DOM within a DOM." It is a separate DOM tree with its own elements and styles, fully separate from the main DOM.')),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"usage")),(0,a.yg)("td",{parentName:"tr",align:null},"The Real DOM is used in every browser."),(0,a.yg)("td",{parentName:"tr",align:null},"The virtual DOM is employed in many frontend frameworks and libraries like React, Vue, etc."),(0,a.yg)("td",{parentName:"tr",align:null},"Web components use the concept of shadowDOM.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"The purpose of each technology")),(0,a.yg)("td",{parentName:"tr",align:null},"It provides a simpler, more programmatic method of representing web pages."),(0,a.yg)("td",{parentName:"tr",align:null},"The virtual DOM was created to address performance problems with webpages and web applications that resulted from the constant re-rendering of the whole DOM whenever DOM elements were updated."),(0,a.yg)("td",{parentName:"tr",align:null},"The shadow DOM was designed to contain and isolate DOM elements, hence preventing direct DOM leakage of those elements and their dependent data.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"Implementation")),(0,a.yg)("td",{parentName:"tr",align:null},"Implemented on the browser"),(0,a.yg)("td",{parentName:"tr",align:null},"utilized by frameworks and libraries such as, React, Vue, etc."),(0,a.yg)("td",{parentName:"tr",align:null},"implemented on the browser")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"Principle")),(0,a.yg)("td",{parentName:"tr",align:null},"The DOM represents the document/webpage as nodes and objects, allowing programming languages like javascript to interact with the page using an API."),(0,a.yg)("td",{parentName:"tr",align:null},"The virtual DOM is a tree representation of the real DOM using nodes and objects and is subsequently used as a blueprint to update the real DOM."),(0,a.yg)("td",{parentName:"tr",align:null},"The shadow DOM doesn't comprehensively represent the whole DOM. Instead of adding DOM items to the main DOM tree, it inserts subtrees of DOM elements into the document.")))),(0,a.yg)("h2",{id:"conclusion"},"Conclusion"),(0,a.yg)("p",null,"We delved into React's virtual DOM in this article. Understanding the virtual DOM's operating principle is crucial for React developers. Knowing the virtual DOM's active principles from this post will improve your comprehension of React as a Javascript framework."))}u.isMDXComponent=!0}}]);