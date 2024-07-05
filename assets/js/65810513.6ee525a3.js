"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[63576],{58860:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>y});var a=t(37953);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=a.createContext({}),p=function(e){var r=a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(d.Provider,{value:r},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(t),m=n,y=l["".concat(d,".").concat(m)]||l[m]||c[m]||o;return t?a.createElement(y,s(s({ref:r},u),{},{components:t})):a.createElement(y,s({ref:r},u))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i[l]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},82071:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>l});t(37953);var a=t(58860);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const i={id:"useUpdatePassword",title:"useUpdatePassword",siderbar_label:"useUpdatePassword",description:"useUpdatePassword data hook from refine is a modified version of react-query's useMutation for registration."},d=void 0,p={unversionedId:"api-reference/core/hooks/auth/useUpdatePassword",id:"version-3.xx.xx/api-reference/core/hooks/auth/useUpdatePassword",title:"useUpdatePassword",description:"useUpdatePassword data hook from refine is a modified version of react-query's useMutation for registration.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useUpdatePassword.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/useUpdatePassword",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useUpdatePassword",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/auth/useUpdatePassword.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1720185359,formattedLastUpdatedAt:"Jul 5, 2024",frontMatter:{id:"useUpdatePassword",title:"useUpdatePassword",siderbar_label:"useUpdatePassword",description:"useUpdatePassword data hook from refine is a modified version of react-query's useMutation for registration."},sidebar:"someSidebar",previous:{title:"useForgotPassword",permalink:"/docs/3.xx.xx/api-reference/core/hooks/auth/useForgotPassword"},next:{title:"useLog",permalink:"/docs/3.xx.xx/api-reference/core/hooks/audit-log/useLog"}},u={},l=[{value:"Usage",id:"usage",level:2},{value:"Redirection after updatePassword",id:"redirection-after-updatepassword",level:2}],c=(m="DocThumbsUpDownFeedbackWidget",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.yg)("div",e)});var m;const y={toc:l},f="wrapper";function g(e){var{components:r}=e,t=s(e,["components"]);return(0,a.yg)(f,o(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(r){n(e,r,t[r])}))}return e}({},y,t),{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"useUpdatePassword")," calls ",(0,a.yg)("inlineCode",{parentName:"p"},"updatePassword")," method from ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},(0,a.yg)("inlineCode",{parentName:"a"},"authProvider"))," under the hood. It update passwords the user if ",(0,a.yg)("inlineCode",{parentName:"p"},"updatePassword")," method from ",(0,a.yg)("inlineCode",{parentName:"p"},"authProvider")," resolves and if it rejects shows an error notification."),(0,a.yg)("p",null,"It returns the result of ",(0,a.yg)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,a.yg)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation"),"."),(0,a.yg)("p",null,"Data that is resolved from ",(0,a.yg)("inlineCode",{parentName:"p"},"updatePassword")," will be returned as the ",(0,a.yg)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)(c,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"Normally refine provides a default update password page. If you prefer to use this default update password page, there is no need to handle update password flow manually.",(0,a.yg)("br",{parentName:"p"}),"\n","If we want to build a custom update password page instead of default one that comes with ",(0,a.yg)("strong",{parentName:"p"},"refine"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"useUpdatePassword")," can be used like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customupdatePasswordPage"',title:'"pages/customupdatePasswordPage"'},'import { useUpdatePassword } from "@pankod/refine-core";\n\ntype updatePasswordVariables = {\n    password: string;\n};\n\nexport const updatePasswordPage = () => {\n    const { mutate: updatePassword } =\n        useUpdatePassword<updatePasswordVariables>();\n\n    const onSubmit = (values: updatePasswordVariables) => {\n        updatePassword(values);\n    };\n\n    return (\n        <form onSubmit={onSubmit}>\n            <label>Password</label>\n            <input name="password" value="refine" />\n            <button type="submit">Submit</button>\n        </form>\n    );\n};\n')),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"mutate")," acquired from ",(0,a.yg)("inlineCode",{parentName:"p"},"useUpdatePassword")," can accept any kind of object for values since the ",(0,a.yg)("inlineCode",{parentName:"p"},"updatePassword")," method from ",(0,a.yg)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.",(0,a.yg)("br",{parentName:"p"}),"\n","A type parameter for the values can be provided to ",(0,a.yg)("inlineCode",{parentName:"p"},"useUpdatePassword"),"."),(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const { mutate: updatePassword } = useUpdatePassword<{ newPassword: string }>();\n"))),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"useUpdatePassword")," gives you query strings for the ",(0,a.yg)("inlineCode",{parentName:"p"},"updatePassword")," method from ",(0,a.yg)("inlineCode",{parentName:"p"},"authProvider"),". If you have a logic that sends a password regeneration email to the email address while resetting the password and proceeds through the access token. You can use ",(0,a.yg)("inlineCode",{parentName:"p"},"queryStrings")," variable ",(0,a.yg)("inlineCode",{parentName:"p"},"updatePassword")," method from ",(0,a.yg)("inlineCode",{parentName:"p"},"authProvider"),". For example, your regeneration link is ",(0,a.yg)("inlineCode",{parentName:"p"},"YOUR_DOMAIN/update-password?token=123"),". You can access the token from the parameters of the URL."),(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n    ...\n    updatePassword: (params) => {\n        // you can access query strings from params.queryStrings\n        console.log(params.token);\n        if(param.token === "123") {\n            // your logic to update the password\n        }\n        ...\n    }\n}\n')))),(0,a.yg)("h2",{id:"redirection-after-updatepassword"},"Redirection after updatePassword"),(0,a.yg)(c,{id:"redirection-after-updatepassword",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,a.yg)("p",null,"We have 2 options for redirecting the app after updatePassword successfully."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"A custom url can be resolved from the promise returned from the ",(0,a.yg)("inlineCode",{parentName:"li"},"updatePassword")," method of the ",(0,a.yg)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"},"authProvider"),".")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n    ...\n    updatePassword: () => {\n        ...\n        return Promise.resolve("/custom-url");\n    }\n}\n')),(0,a.yg)("p",null,"A custom url can be given to mutate the function from the ",(0,a.yg)("inlineCode",{parentName:"p"},"useUpdatePassword")," hook if you want to redirect yourself to a certain url."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},'import { useUpdatePassword } from "@pankod/refine-core";\n\nconst { mutate: updatePassword } = useUpdatePassword();\n\nupdatePassword({ redirectPath: "/custom-url" });\n')),(0,a.yg)("p",null,"Then, you can handle this url in your ",(0,a.yg)("inlineCode",{parentName:"p"},"updatePassword")," method of the ",(0,a.yg)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"\nconst authProvider: AuthProvider = {\n    ...\n    updatePassword: ({ redirectPath }) => {\n        ...\n        return Promise.resolve(redirectPath);\n    }\n}\n\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"If the promise returned from the ",(0,a.yg)("inlineCode",{parentName:"li"},"updatePassword")," method of the ",(0,a.yg)("inlineCode",{parentName:"li"},"authProvider")," gets resolved with ",(0,a.yg)("inlineCode",{parentName:"li"},"false")," no redirection will occur.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-tsx"},"const authProvider: AuthProvider = {\n    ...\n    updatePassword: () => {\n        ...\n        return Promise.resolve(false);\n    }\n}\n")),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"If the promise returned from ",(0,a.yg)("inlineCode",{parentName:"p"},"updatePassword")," is resolved with nothing, app won't be redirected to any route by default.")),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"This hook can only be used if ",(0,a.yg)("inlineCode",{parentName:"p"},"authProvider")," is provided."))))}g.isMDXComponent=!0}}]);