"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[237],{5817:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var a=r(7294),n=r(6010),i=r(9960),o=r(2263),l=r(215),c=r(2949);const s={light:{hover:"#eaeaea",normal:"#f1f1f1"},dark:{hover:"#262738",normal:"#262728"}};function d(e){let{description:t,title:r,style:n,className:i}=e;const{colorMode:o}=(0,c.I)(),[l,d]=(0,a.useState)({variant:"normal",color:s[o].hover}),m=(0,a.useCallback)(((e,t)=>{d({color:s[e][t],variant:t})}),[]);return(0,a.useEffect)((()=>{m(o,l.variant)}),[o]),a.createElement("div",{className:i,style:{...n,display:"flex",flexDirection:"column",alignItems:"center",height:"9rem",backgroundColor:l.color,cursor:"pointer",borderRadius:"0.5rem",padding:"1rem 2rem"},onPointerOver:()=>m(o,"hover"),onPointerLeave:()=>m(o,"normal")},a.createElement("div",{style:{fontWeight:"bold",fontSize:"1.25rem"}},r),a.createElement("div",{style:{display:"flex",flexGrow:"1",alignItems:"center",textAlign:"center"}},t))}const m="heroBanner_qdFl",p="docsIndex_WlUY",h="docsEntry_Wtb2",u=JSON.parse('[{"order":-3,"title":"PintOS vscode","description":"Crea un nuevo proyecto, corre y haz debugging desde visual studio code","path":"/pintosvsc"},{"order":-2,"title":"PintOS Github Checker","description":"Automatiza la calificaci\xf3n de las 4 fases del proyecto usando Github Actions","path":"/github-action"},{"order":-1,"title":"PintOS Ballenizado","description":"Un entorno listo para ejecutar PintOS utilizando Docker","path":"/pintos-docker"},{"order":99,"title":"PintOS Phase","description":"Una forma r\xe1pida de cambiar de fase en el proyecto de forma global (no recomendado)","path":"/pintosph"}]');function f(){const{siteConfig:e}=(0,o.Z)();return a.createElement("header",{className:(0,n.Z)("hero hero--primary",m)},a.createElement("div",{style:{justifyContent:"center",display:"flex",width:"100%",flexWrap:"wrap"}},a.createElement("img",{src:"img/velociraptor.png",style:{width:"8rem",marginRight:"2rem"}}),a.createElement("div",{style:{justifySelf:"center"}},a.createElement("h1",{className:"hero__title"},e.title),a.createElement("p",{className:"hero__subtitle"},e.tagline))))}function g(){const{siteConfig:e}=(0,o.Z)();e.themeConfig;return a.createElement(l.Z,{description:"Description will go into a meta tag in <head />"},a.createElement(f,null),a.createElement("main",null,a.createElement("div",{className:p},u.map((e=>a.createElement("div",{key:e.path,className:(0,n.Z)(h,"")},a.createElement(i.Z,{style:{all:"unset"},to:e.path},a.createElement(d,e))))))))}}}]);