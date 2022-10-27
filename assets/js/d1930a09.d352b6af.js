"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebase_position:3},i="Cambiar de fase",p={unversionedId:"pintosph/change-phase",id:"pintosph/change-phase",title:"Cambiar de fase",description:"Procedimiento",source:"@site/docs/pintosph/change-phase.md",sourceDirName:"pintosph",slug:"/pintosph/change-phase",permalink:"/pintos-utils/pintosph/change-phase",draft:!1,editUrl:"https://github.com/gbenm/pintos-utils/tree/main/docs/pintosph/change-phase.md",tags:[],version:"current",frontMatter:{sidebase_position:3},sidebar:"pintosph",previous:{title:"Instalaci\xf3n",permalink:"/pintos-utils/pintosph/install"}},s={},l=[{value:"Procedimiento",id:"procedimiento",level:2},{value:"Ejemplo",id:"ejemplo",level:2}],c={toc:l};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cambiar-de-fase"},"Cambiar de fase"),(0,a.kt)("h2",{id:"procedimiento"},"Procedimiento"),(0,a.kt)("p",null,"Fue un poco tedioso, pero ahora s\xf3lo necesita ejecutar una instrucci\xf3n para cambiar de fase yeeh! \ud83d\ude04, lo anterior un s\xf3lo integrante del grupo debe hacerlo, subirlo a su repositorio y manos a la obra, no tendr\xe1 que agregarlo al ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," ni nada por el estilo para evitar los conflictos entre los cambios."),(0,a.kt)("p",null,"Para cambiar de fase entonces ejecute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pintosph <carpeta>\n")),(0,a.kt)("p",null,"donde ",(0,a.kt)("strong",{parentName:"p"},"<","carpeta",">")," deber\xeda ser el nombre del folder donde se encuentra trabajando, es decir que para que no le diga un ",(0,a.kt)("em",{parentName:"p"},'"Cannot find kernel"')," o ",(0,a.kt)("em",{parentName:"p"},'"Cannot find Loader"')," deber\xeda tomar un nombre entre: ",(0,a.kt)("strong",{parentName:"p"},"threads, userprog, vm, filesys.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"pintosph")," es un script hecho con ",(0,a.kt)("strong",{parentName:"p"},"perl"),", de este modo no tiene que instalar nada que pintos no necesite, adem\xe1s por las limitaciones no se pueden alterar las variables de entorno por lo que pintosph abre una nueva instancia, por lo que para regresar a la anterior deber\xe1 ejecutar ",(0,a.kt)("strong",{parentName:"p"},"exit"),".")),(0,a.kt)("h2",{id:"ejemplo"},"Ejemplo"),(0,a.kt)("p",null,"Para comenzar su traves\xeda ejecute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pintosph threads\n")),(0,a.kt)("p",null,"Despu\xe9s de ejecutarlo ver\xe1 lo siguiente en su terminal, cabe decir que ",(0,a.kt)("strong",{parentName:"p"},"no importa el lugar donde lo ejecute.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(7621).Z,width:"860",height:"508"})),(0,a.kt)("p",null,"Para saber en que fase est\xe1 en la terminal actual ejecute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo $PINTOSPH\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(1440).Z,width:"856",height:"538"})))}u.isMDXComponent=!0},7621:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/change-phase-4d6808b9b6c4a954fdde8beae0449cb0.png"},1440:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/check-current-phase-b7da41c67153ed9989ab9d04eed348f8.png"}}]);