"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[324],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6901:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),o=r(2949);const a={light:{hover:"#eaeaea",normal:"#f1f1f1"},dark:{hover:"#262738",normal:"#262728"}};function i(e){let{children:t,style:r,className:i}=e;const{colorMode:c}=(0,o.I)(),[l,s]=(0,n.useState)({variant:"normal",color:a[c].hover}),p=(0,n.useCallback)(((e,t)=>{s({color:a[e][t],variant:t})}),[]);return(0,n.useEffect)((()=>{p(c,l.variant)}),[c]),n.createElement("div",{className:i,style:{...r,backgroundColor:l.color,cursor:"pointer",borderRadius:"0.5rem",padding:"1rem 2rem"},onPointerOver:()=>p(c,"hover"),onPointerLeave:()=>p(c,"normal")},t)}},5654:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(9960),o=r(7294),a=r(6901);const i=e=>{let{children:t,style:r,className:i,to:c}=e;return o.createElement(n.Z,{style:{all:"unset"},to:c},o.createElement(a.Z,{className:i,style:{...r,border:"1px solid white",fontWeight:"bold",display:"flex",alignItems:"center"}},o.createElement("span",{style:{fontSize:"1.25rem"}},"\u29c9"),o.createElement("span",{style:{marginLeft:"1rem"}},t)))}},8476:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905)),a=r(5654);const i={},c="Dale una estrella al proyecto",l={unversionedId:"pintos-docker/give-a-star",id:"pintos-docker/give-a-star",title:"Dale una estrella al proyecto",description:"Imagen en Docker Hub",source:"@site/docs/pintos-docker/give-a-star.mdx",sourceDirName:"pintos-docker",slug:"/pintos-docker/give-a-star",permalink:"/pintos-utils/pintos-docker/give-a-star",draft:!1,editUrl:"https://github.com/gbenm/pintos-utils/tree/main/docs/pintos-docker/give-a-star.mdx",tags:[],version:"current",frontMatter:{},sidebar:"pintos-docker",previous:{title:"Antes de usar (primera vez)",permalink:"/pintos-utils/pintos-docker/first-use"}},s={},p=[],u={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dale-una-estrella-al-proyecto"},"Dale una estrella al proyecto"),(0,o.kt)(a.Z,{to:"https://hub.docker.com/r/gbenm/pintos",mdxType:"Link"},"Imagen en Docker Hub"),(0,o.kt)("br",null),(0,o.kt)(a.Z,{to:"https://gist.github.com/gbenm/a9fd8c796ba48dbe7a552b91f3bc4044",mdxType:"Link"},"Dockerfile"))}m.isMDXComponent=!0}}]);