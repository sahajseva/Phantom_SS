"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[98155],{58860:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>f});var r=n(37953);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>u});n(37953);var r=n(58860);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={id:"number",title:"Number",swizzle:!0},s=void 0,p={unversionedId:"api-reference/mui/components/fields/number",id:"version-3.xx.xx/api-reference/mui/components/fields/number",title:"Number",description:"This field is used to display a number formatted according to the browser locale, right aligned. and uses Intl to display date format.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/mui/components/fields/number.md",sourceDirName:"api-reference/mui/components/fields",slug:"/api-reference/mui/components/fields/number",permalink:"/docs/3.xx.xx/api-reference/mui/components/fields/number",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/mui/components/fields/number.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1720185359,formattedLastUpdatedAt:"Jul 5, 2024",frontMatter:{id:"number",title:"Number",swizzle:!0},sidebar:"someSidebar",previous:{title:"Markdown",permalink:"/docs/3.xx.xx/api-reference/mui/components/fields/markdown"},next:{title:"Tag",permalink:"/docs/3.xx.xx/api-reference/mui/components/fields/tag"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.yg)("div",t)},m=d("DocThumbsUpDownFeedbackWidget"),f=d("PropsTable"),b={toc:u},y="wrapper";function g(e){var{components:t}=e,n=a(e,["components"]);return(0,r.yg)(y,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},b,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This field is used to display a number formatted according to the browser locale, right aligned. and uses ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"},(0,r.yg)("inlineCode",{parentName:"a"},"Intl"))," to display date format."),(0,r.yg)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.yg)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.xx.xx/packages/documentation/cli"},(0,r.yg)("strong",{parentName:"a"},"refine CLI")))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)(m,{id:"usage",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"<NumberField>")," uses Intl.NumberFormat() if available, passing the locales and options props as arguments. This allows a perfect display of decimals, currencies, percentages, etc. See ",(0,r.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat"},"Intl.NumberFormat documentation")," for the options prop syntax."),(0,r.yg)("p",null,"If Intl is not available, ",(0,r.yg)("inlineCode",{parentName:"p"},"<NumberField>")," outputs numbers as is (and ignores the locales and options props)."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=340px",live:!0,url:"http://localhost:3000/posts",previewHeight:"340px"},'// visible-block-start\nimport {\n  useDataGrid,\n  DataGrid,\n  GridColumns,\n  List,\n  // highlight-next-line\n  NumberField,\n} from "@pankod/refine-mui";\n\nconst columns: GridColumns = [\n  { field: "id", headerName: "ID", type: "number" },\n  { field: "title", headerName: "Title", minWidth: 100, flex: 1 },\n  {\n    field: "hit",\n    headerName: "Hit",\n    renderCell: function render({ row }) {\n      // highlight-start\n      return (\n        <NumberField\n          value={row.hit}\n          options={{\n            notation: "compact",\n          }}\n        />\n      );\n      // highlight-end\n    },\n    minWidth: 100,\n    flex: 1,\n  },\n];\n\nconst PostsList: React.FC = () => {\n  const { dataGridProps } = useDataGrid<IPost>();\n\n  return (\n    <List>\n      <DataGrid {...dataGridProps} columns={columns} autoHeight />\n    </List>\n  );\n};\n\ninterface IPost {\n  id: number;\n  title: string;\n  hit: number;\n}\n// visible-block-end\n\nrender(\n  <RefineMuiDemo\n    resources={[\n      {\n        name: "posts",\n        list: PostsList,\n      },\n    ]}\n  />,\n);\n'))),(0,r.yg)("h2",{id:"api-reference"},"API Reference"),(0,r.yg)("h3",{id:"properties"},"Properties"),(0,r.yg)(m,{id:"properties",mdxType:"DocThumbsUpDownFeedbackWidget"},(0,r.yg)(f,{module:"@pankod/refine-mui/NumberField","value-description":"Number value",mdxType:"PropsTable"}),(0,r.yg)("admonition",{title:"External Props",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"It also accepts all props of Material UI ",(0,r.yg)("a",{parentName:"p",href:"https://mui.com/material-ui/react-text-field/"},"Text"),"."))))}g.isMDXComponent=!0}}]);