"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10630],{30950:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(30358);function i({children:e,fallback:t}){var n;return(0,o.Z)()?r.createElement(r.Fragment,null,null===(n=e)||void 0===n?void 0:n()):null!=t?t:null}},31984:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(67294),o=n(73727),i=n(25750),c=n(8241),u=n(47785),a=n(58087);const l=r.createContext({collectLink:()=>{}});var s=n(70676);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function v(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e,t){var n,f,m,b,{isNavLink:h,to:y,href:O,activeClassName:w,isActive:g,"data-noBrokenLinkCheck":E,autoAddBaseUrl:k=!0}=e,C=p(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:P,baseUrl:j}}=(0,c.Z)(),{withBaseUrl:x}=(0,s.C)(),R=(0,r.useContext)(l),L=(0,r.useRef)(null);(0,r.useImperativeHandle)(t,(()=>L.current));const A=y||O;const S=(0,u.Z)(A),B=null===(f=A)||void 0===f||null===(n=f.replace)||void 0===n?void 0:n.call(f,"pathname://","");let M=void 0!==B?(U=B,k&&(e=>e.startsWith("/"))(U)?x(U):U):void 0;var U;M&&S&&(M=(0,i.applyTrailingSlash)(M,{trailingSlash:P,baseUrl:j}));const Z=(0,r.useRef)(!1),I=h?o.OL:o.rU,z=a.Z.canUseIntersectionObserver,D=(0,r.useRef)(),N=()=>{Z.current||null==M||(window.docusaurus.preload(M),Z.current=!0)};var F;(0,r.useEffect)((()=>(!z&&S&&null!=M&&window.docusaurus.prefetch(M),()=>{z&&D.current&&D.current.disconnect()})),[D,M,z,S]);const T=null!==(F=null===(b=M)||void 0===b||null===(m=b.startsWith)||void 0===m?void 0:m.call(b,"#"))&&void 0!==F&&F,W=!M||!S||T;return W||E||R.collectLink(M),W?r.createElement("a",d({ref:L,href:M},A&&!S&&{target:"_blank",rel:"noopener noreferrer"},C)):r.createElement(I,d(v(d({},C),{onMouseEnter:N,onTouchStart:N,innerRef:e=>{L.current=e,z&&e&&S&&(D.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(D.current.unobserve(e),D.current.disconnect(),null!=M&&window.docusaurus.prefetch(M))}))})),D.current.observe(e))},to:M}),h&&{isActive:g,activeClassName:w}))}const b=r.forwardRef(m)},21190:(e,t,n)=>{n.d(t,{M:()=>h});var r=n(70655),o=n(67294),i=n(49304),c=n(54735),u=n(58868);function a(){var e=(0,o.useRef)(!1);return(0,u.L)((function(){return e.current=!0,function(){e.current=!1}}),[]),e}var l=n(240),s=n(96681),f=n(76316),d=function(e){var t=e.children,n=e.initial,i=e.isPresent,c=e.onExitComplete,u=e.custom,a=e.presenceAffectsLayout,d=(0,s.h)(v),p=(0,f.M)(),m=(0,o.useMemo)((function(){return{id:p,initial:n,isPresent:i,custom:u,onExitComplete:function(e){var t,n;d.set(e,!0);try{for(var o=(0,r.XA)(d.values()),i=o.next();!i.done;i=o.next()){if(!i.value)return}}catch(u){t={error:u}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}null==c||c()},register:function(e){return d.set(e,!1),function(){return d.delete(e)}}}}),a?void 0:[i]);return(0,o.useMemo)((function(){d.forEach((function(e,t){return d.set(t,!1)}))}),[i]),o.useEffect((function(){!i&&!d.size&&(null==c||c())}),[i]),o.createElement(l.O.Provider,{value:m},t)};function v(){return new Map}var p=n(25364),m=n(65411),b=function(e){return e.key||""};var h=function(e){var t=e.children,n=e.custom,l=e.initial,s=void 0===l||l,f=e.onExitComplete,v=e.exitBeforeEnter,h=e.presenceAffectsLayout,y=void 0===h||h,O=(0,r.CR)(function(){var e=a(),t=(0,r.CR)((0,o.useState)(0),2),n=t[0],i=t[1],u=(0,o.useCallback)((function(){e.current&&i(n+1)}),[n]);return[(0,o.useCallback)((function(){return c.ZP.postRender(u)}),[u]),n]}(),1),w=O[0],g=(0,o.useContext)(p.p).forceRender;g&&(w=g);var E=a(),k=function(e){var t=[];return o.Children.forEach(e,(function(e){(0,o.isValidElement)(e)&&t.push(e)})),t}(t),C=k,P=new Set,j=(0,o.useRef)(C),x=(0,o.useRef)(new Map).current,R=(0,o.useRef)(!0);if((0,u.L)((function(){R.current=!1,function(e,t){e.forEach((function(e){var n=b(e);t.set(n,e)}))}(k,x),j.current=C})),(0,m.z)((function(){R.current=!0,x.clear(),P.clear()})),R.current)return o.createElement(o.Fragment,null,C.map((function(e){return o.createElement(d,{key:b(e),isPresent:!0,initial:!!s&&void 0,presenceAffectsLayout:y},e)})));C=(0,r.ev)([],(0,r.CR)(C),!1);for(var L=j.current.map(b),A=k.map(b),S=L.length,B=0;B<S;B++){var M=L[B];-1===A.indexOf(M)&&P.add(M)}return v&&P.size&&(C=[]),P.forEach((function(e){if(-1===A.indexOf(e)){var t=x.get(e);if(t){var r=L.indexOf(e);C.splice(r,0,o.createElement(d,{key:b(t),isPresent:!1,onExitComplete:function(){x.delete(e),P.delete(e);var t=j.current.findIndex((function(t){return t.key===e}));if(j.current.splice(t,1),!P.size){if(j.current=k,!1===E.current)return;w(),f&&f()}},custom:n,presenceAffectsLayout:y},t))}}})),C=C.map((function(e){var t=e.key;return P.has(t)?e:o.createElement(d,{key:b(e),isPresent:!0,presenceAffectsLayout:y},e)})),"production"!==i.O&&v&&C.length>1&&console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."),o.createElement(o.Fragment,null,P.size?C:C.map((function(e){return(0,o.cloneElement)(e)})))}}}]);