"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[237],{6901:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(2949);const l={light:{hover:"#eaeaea",normal:"#f1f1f1"},dark:{hover:"#262738",normal:"#262728"}};function o(e){let{children:t,style:r,className:o}=e;const{colorMode:i}=(0,n.I)(),[c,s]=(0,a.useState)({variant:"normal",color:l[i].normal}),d=(0,a.useCallback)(((e,t)=>{s({color:l[e][t],variant:t})}),[]);return(0,a.useEffect)((()=>{d(i,c.variant)}),[i]),a.createElement("div",{className:o,style:{...r,backgroundColor:c.color,cursor:"pointer",borderRadius:"0.5rem",padding:"1rem 2rem"},onPointerOver:()=>d(i,"hover"),onPointerLeave:()=>d(i,"normal")},t)}},5817:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var a=r(7294),n=r(6010),l=r(9960),o=r(2263),i=r(215),c=r(6901);function s(e){let{description:t,title:r,style:n,className:l}=e;return a.createElement(c.Z,{className:l,style:{...n,display:"flex",flexDirection:"column",alignItems:"center",height:"9rem"}},a.createElement("div",{style:{fontWeight:"bold",fontSize:"1.25rem"}},r),a.createElement("div",{style:{display:"flex",flexGrow:"1",alignItems:"center",textAlign:"center"}},t))}const d="heroBanner_qdFl",m="docsIndex_WlUY",u="docsEntry_Wtb2",p=JSON.parse('[{"order":-3,"title":"PintOS vscode","description":"Crea un nuevo proyecto, corre y haz debugging desde visual studio code","path":"/pintosvsc"},{"order":-2,"title":"PintOS Github Checker","description":"Automatiza la calificaci\xf3n de las 4 fases del proyecto usando Github Actions","path":"/github-action"},{"order":-1,"title":"PintOS Ballenizado","description":"Un entorno listo para ejecutar PintOS utilizando Docker","path":"/pintos-docker"},{"order":99,"title":"PintOS Phase","description":"Una forma r\xe1pida de cambiar de fase en el proyecto de forma global (no recomendado)","path":"/pintosph"}]');function h(){const{siteConfig:e}=(0,o.Z)();return a.createElement("header",{className:(0,n.Z)("hero hero--primary",d)},a.createElement("div",{style:{justifyContent:"center",display:"flex",width:"100%",flexWrap:"wrap"}},a.createElement("img",{src:"img/velociraptor.png",style:{width:"8rem",marginRight:"2rem"}}),a.createElement("div",{style:{justifySelf:"center"}},a.createElement("h1",{className:"hero__title"},e.title),a.createElement("p",{className:"hero__subtitle"},e.tagline))))}function f(){const{siteConfig:e}=(0,o.Z)();e.themeConfig;return a.createElement(i.Z,{description:"Un flujo de desarrollo f\xe1cil y c\xf3modo :)"},a.createElement(h,null),a.createElement("main",null,a.createElement("div",{className:m},p.map((e=>a.createElement("div",{key:e.path,className:(0,n.Z)(u,"")},a.createElement(l.Z,{style:{all:"unset"},to:e.path},a.createElement(s,e))))))))}}}]);