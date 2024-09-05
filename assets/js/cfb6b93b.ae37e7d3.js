"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[73460],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var r=n(37953);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),y=i,d=u["".concat(l,".").concat(y)]||u[y]||m[y]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},72130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>s,toc:()=>u});n(37953);var r=n(58860);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const p={title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",slug:"typescript-omit-utility-type",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-03-typescript-omit/social.png",hide_table_of_contents:!1},l=void 0,s={permalink:"/blog/typescript-omit-utility-type",source:"@site/blog/2022-10-03-typescript-omit.md",title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",date:"2022-10-03T00:00:00.000Z",formattedDate:"October 3, 2022",tags:[{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:3.44,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"A Guide on TypeScript Omit Type",description:"We'll dive into the TypeScript Omit utility type with examples",slug:"typescript-omit-utility-type",authors:"abdullah_numan",tags:["typescript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-03-typescript-omit/social.png",hide_table_of_contents:!1},prevItem:{title:"refine Joins the Hacktoberfest Fun",permalink:"/blog/hacktoberfest-refine"},nextItem:{title:"A Detailed Guide on TypeScript Pick Type",permalink:"/blog/typescript-pick-utility-type"},relatedPosts:[{title:"How to use TypeScript Partial Type?",description:"We'll explain the TypeScript Partial utility type with examples",permalink:"/blog/typescript-partial-utility-type",formattedDate:"October 10, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.925,date:"2022-10-10T00:00:00.000Z"},{title:"TypeScript Record Type with Examples",description:"We'll explore TypeScript Record type with examples.",permalink:"/blog/typescript-record-type",formattedDate:"June 16, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.175,date:"2023-06-16T00:00:00.000Z"},{title:"Form Schema Validation with Zod and React Hook Form",description:"We'll explore how to use Zod schema validation with React Hook Form in a TypeScript based React application.",permalink:"/blog/zod-typescript",formattedDate:"May 21, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:22.145,date:"2024-05-21T00:00:00.000Z"}],authorPosts:[{title:"Creating Mission and Invoice Pages",description:"We add more CRUD views to the Pdf Invoice Generator app we have been building using Refine and Strapi last few days.",permalink:"/blog/refine-react-invoice-generator-4",formattedDate:"April 13, 2023",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:17.78,date:"2023-04-13T00:00:00.000Z"},{title:"How to Use Two Dimensional Layouts with CSS Grid?",description:"We'll explore how to create two dimensional layouts using CSS Grid.",permalink:"/blog/css-grid",formattedDate:"July 17, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:41.51,date:"2024-07-17T00:00:00.000Z"},{title:"Dictionaries in TypeScript -  How to Ensure Type Safety",description:"This post is provides a guide on how to ensure type safety to dictionaries with TypeScript.",permalink:"/blog/typescript-dictionary",formattedDate:"May 7, 2024",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:20.44,date:"2024-05-07T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},u=[{value:"Introduction",id:"introduction",level:2},{value:"TypeScript <code>Omit&lt;Type, Keys&gt;</code> Example",id:"typescript-omittype-keys-example",level:2},{value:"TypeScript <code>Omit&lt;&gt;</code> with Interface",id:"typescript-omit-with-interface",level:2},{value:"When to Avoid",id:"when-to-avoid",level:2},{value:"Conclusion",id:"conclusion",level:2}],m={toc:u},y="wrapper";function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.yg)(y,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"In this article, we discuss object type transformations in TypeScript using ",(0,r.yg)("inlineCode",{parentName:"p"},"Omit<>"),". This is the second part of the series titled ",(0,r.yg)("a",{parentName:"p",href:"https://refine.dev/blog/typescript-pick-utility-type/"},"TypeScript Utility Type Series"),"."),(0,r.yg)("p",null,"In the previous post, we went through an example where we derived a ",(0,r.yg)("inlineCode",{parentName:"p"},"GuestUser")," type by picking a few properties from the base type, ",(0,r.yg)("inlineCode",{parentName:"p"},"SuperbUser"),", with ",(0,r.yg)("inlineCode",{parentName:"p"},"Pick<>"),". We hinted that if the number of properties to be picked are more than those being discarded, picking becomes less convenient. In that case, we should prefer using ",(0,r.yg)("inlineCode",{parentName:"p"},"Omit<>"),"."),(0,r.yg)("p",null,"In this post, we will consider an example of ",(0,r.yg)("inlineCode",{parentName:"p"},"Omit<>")," by creating a type for our ",(0,r.yg)("inlineCode",{parentName:"p"},"Subscriber")," entity."),(0,r.yg)("p",null,"Step we'll cover:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#typescript-omittype-keys-example"},"TypeScript Omit Example")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#typescript-omit-with-interface"},"TypeScript Omit with Interface")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#when-to-avoid"},"When to Avoid"))),(0,r.yg)("h2",{id:"typescript-omittype-keys-example"},"TypeScript ",(0,r.yg)("inlineCode",{parentName:"h2"},"Omit<Type, Keys>")," Example"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Omit<>"),", like ",(0,r.yg)("inlineCode",{parentName:"p"},"Pick<>"),", takes a base type as the first argument. It takes an union type of the keys to be omitted as the second argument and returns the derived type that excludes those properties."),(0,r.yg)("p",null,"Looking back at the ERD, the ",(0,r.yg)("inlineCode",{parentName:"p"},"Subscriber")," entity has all the same properties as ",(0,r.yg)("inlineCode",{parentName:"p"},"SuperbUser")," - except ",(0,r.yg)("inlineCode",{parentName:"p"},"roles"),":"),(0,r.yg)("div",{class:"img-container","align-items":"center"},(0,r.yg)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-10-03-typescript-omit/ts-omit-visualize.png",alt:"TypeScript Omit Type"})),(0,r.yg)("br",null),(0,r.yg)("p",null,"Deriving a ",(0,r.yg)("inlineCode",{parentName:"p"},"Subscriber")," type from the ",(0,r.yg)("inlineCode",{parentName:"p"},"SuperbUser")," plainly requires us to omit only the ",(0,r.yg)("inlineCode",{parentName:"p"},"roles")," property, as opposed to picking all the rest:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'type SuperbUser = {\n  userId: number;\n  macAddress: string;\n  username: string;\n  email: string;\n  password: string;\n  firstName: string;\n  lastName: string;\n  roles: ("Admin" | "Editor" | "Author")[];\n};\n\ntype Subscriber = Omit<SuperbUser, "roles">;\n')),(0,r.yg)("p",null,"So, in this case, TypeScript ",(0,r.yg)("inlineCode",{parentName:"p"},"Omit<>")," offers us convenience over ",(0,r.yg)("inlineCode",{parentName:"p"},"Pick<>"),". We can now create a subscriber object that has ",(0,r.yg)("inlineCode",{parentName:"p"},"roles")," property removed from its fields:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'const subscriber: Subscriber = {\n  userId: 4,\n  macAddress: "a:5ub:mach1ne",\n  username: "sub_user",\n  email: "sub_user@gmail.com",\n  password: "12345678",\n  firstName: "Abdullah",\n  lastName: "Numan",\n};\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com",\n  "password": "12345678",\n  "firstName": "Abdullah",\n  "lastName": "Numan"\n}\n*/\n\nconsole.log(subscriber.roles); // undefined\n')),(0,r.yg)("p",null,"Notice, if we navigate to ",(0,r.yg)("inlineCode",{parentName:"p"},"subscriber.roles")," it returns ",(0,r.yg)("inlineCode",{parentName:"p"},"undefined"),"."),(0,r.yg)("p",null,"Now, let's try adding ",(0,r.yg)("inlineCode",{parentName:"p"},"roles")," to the ",(0,r.yg)("inlineCode",{parentName:"p"},"subscriber"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'subscriber.roles = ["Reader", "Commenter"]; // Property \'roles\' does not exist on type \'Subscriber\'.\n\nconsole.log(subscriber.roles); // ["Reader", "Commenter"]\n')),(0,r.yg)("p",null,"And TypeScript grunts:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"// Property 'roles' does not exist on type 'Subscriber'.\n")),(0,r.yg)("p",null,"If we look at ",(0,r.yg)("inlineCode",{parentName:"p"},"console.log(subscriber.roles);")," though, we can see that our assignment actually sets the property and value of ",(0,r.yg)("inlineCode",{parentName:"p"},"subscriber.roles"),". TypeScript only yells at us at development, but doesn't help us with this in runtime. JavaScript sets the value of ",(0,r.yg)("inlineCode",{parentName:"p"},"subscribe.roles"),"."),(0,r.yg)("p",null,"So, caution there, as it is an important distinction that TypeScript is applying omit at development, not JavaScript. TypeScript does not check for any consequence of the written code ",(0,r.yg)("strong",{parentName:"p"},"after")," it is compiled to JavaScript. So, it is crucial to leverage TypeScript linter suggestions to strictly check omit while developing."),(0,r.yg)("h2",{id:"typescript-omit-with-interface"},"TypeScript ",(0,r.yg)("inlineCode",{parentName:"h2"},"Omit<>")," with Interface"),(0,r.yg)("p",null,"Like it was in ",(0,r.yg)("inlineCode",{parentName:"p"},"Pick<>"),", we can use an interface for ",(0,r.yg)("inlineCode",{parentName:"p"},"SuperbUser")," and the results will be the same:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},'interface SuperbUser {\n  userId: number;\n  macAddress: string;\n  username: string;\n  email: string;\n  password: string;\n  firstName: string;\n  lastName: string;\n  roles: ("Admin" | "Editor" | "Author")[];\n}\n\ntype Subscriber = Omit<SuperbUser, "roles">;\n\nconst subscriber: Subscriber = {\n  userId: 4,\n  macAddress: "a:5ub:mach1ne",\n  username: "sub_user",\n  email: "sub_user@gmail.com",\n  password: "12345678",\n  firstName: "Abdullah",\n  lastName: "Numan",\n};\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com",\n  "password": "12345678",\n  "firstName": "Abdullah",\n  "lastName": "Numan"\n}\n*/\n\nconsole.log(subscriber.roles); // undefined\n')),(0,r.yg)("h2",{id:"when-to-avoid"},"When to Avoid"),(0,r.yg)("p",null,"As with ",(0,r.yg)("inlineCode",{parentName:"p"},"Pick<>"),", the second argument to Typescript Omit also takes a union of keys. So, if we need to omit any other property, we can add them to the second argument with the pipe operator ",(0,r.yg)("inlineCode",{parentName:"p"},"|"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx"},"type Subscriber = Omit<SuperbUser, 'roles' | 'firstName' | ...>;\n")),(0,r.yg)("p",null,"We should avoid using ",(0,r.yg)("inlineCode",{parentName:"p"},"Omit<>")," and prefer ",(0,r.yg)("inlineCode",{parentName:"p"},"Pick<>")," when we have more properties to omit than to pick."),(0,r.yg)("h2",{id:"conclusion"},"Conclusion"),(0,r.yg)("p",null,"In this article, we delved into ",(0,r.yg)("inlineCode",{parentName:"p"},"Omit<>")," with an example of deriving a type for our ",(0,r.yg)("inlineCode",{parentName:"p"},"Subscriber")," entity by omitting a property from our base type, ",(0,r.yg)("inlineCode",{parentName:"p"},"SuperbUser"),". We saw that ",(0,r.yg)("inlineCode",{parentName:"p"},"Omit<>")," is the opposite equivalent of ",(0,r.yg)("inlineCode",{parentName:"p"},"Pick<>")," and is more convenient when we want to pick more properties and omit less from a base type."),(0,r.yg)("p",null,"In the next article, we'll cover object type transformations using ",(0,r.yg)("inlineCode",{parentName:"p"},"Partial<Type>"),"."))}d.isMDXComponent=!0}}]);