"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[542],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(o),m=n,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return o?a.createElement(g,i(i({ref:t},c),{},{components:o})):a.createElement(g,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7516:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=o(7462),n=(o(7294),o(3905));const r={},i="Crear un nuevo proyecto de PintOS",l={unversionedId:"pintos-vscode/create-pintos-pj",id:"pintos-vscode/create-pintos-pj",title:"Crear un nuevo proyecto de PintOS",description:"Este paso es importante realizarlo desde vscode para los usuarios",source:"@site/docs/pintos-vscode/create-pintos-pj.md",sourceDirName:"pintos-vscode",slug:"/pintos-vscode/create-pintos-pj",permalink:"/pintos-utils/pintos-vscode/create-pintos-pj",draft:!1,editUrl:"https://github.com/gbenm/pintos-utils/tree/main/docs/pintos-vscode/create-pintos-pj.md",tags:[],version:"current",frontMatter:{},sidebar:"pintos-vscode",previous:{title:"PintOS vscode",permalink:"/pintos-utils/pintos-vscode/"},next:{title:"Crear un dev container",permalink:"/pintos-utils/pintos-vscode/dev-container"}},p={},s=[{value:"Abre Visual Studio code",id:"abre-visual-studio-code",level:2},{value:"Ejecuta el comando para crear nuevo proyecto",id:"ejecuta-el-comando-para-crear-nuevo-proyecto",level:2},{value:"Elige el repositorio base",id:"elige-el-repositorio-base",level:3},{value:"Elige la carpeta del c\xf3digo fuente",id:"elige-la-carpeta-del-c\xf3digo-fuente",level:3},{value:"Nombre del proyecto",id:"nombre-del-proyecto",level:3},{value:"Agregar el repositorio personal",id:"agregar-el-repositorio-personal",level:3},{value:"Cambie el emulador",id:"cambie-el-emulador",level:2}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"crear-un-nuevo-proyecto-de-pintos"},"Crear un nuevo proyecto de PintOS"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Este paso es importante realizarlo desde vscode para los usuarios\nde Windows ya que se debe tener cuidado al clonar, por defecto en este\nsistema el separador de l\xednea es CRLF mientras que en Linux (de esta forma se necesita para\nque funcione correctamente el proyecto) es \xfanicamente LF")),(0,n.kt)("h2",{id:"abre-visual-studio-code"},"Abre Visual Studio code"),(0,n.kt)("p",null,"Para que funcione se debe de abrir una carpeta d\xf3nde se crear\xe1\nel proyecto pintos, por ejemplo puedes abrir tu directorio\nde documentos."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:o(5901).Z,width:"1366",height:"768"})),(0,n.kt)("h2",{id:"ejecuta-el-comando-para-crear-nuevo-proyecto"},"Ejecuta el comando para crear nuevo proyecto"),(0,n.kt)("p",null,"Abre los comandos de vscode (ctrl+shift+p) y escribe\n",(0,n.kt)("strong",{parentName:"p"},'"pintos"')," para encontrar el comando."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:o(5078).Z,width:"740",height:"271"})),(0,n.kt)("h3",{id:"elige-el-repositorio-base"},"Elige el repositorio base"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"El valor por defecto puede cambiarse desde las configuraciones de vscode")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:o(9862).Z,width:"740",height:"271"})),(0,n.kt)("p",null,"El valor por defecto es el repositorio original de pintos, otra opci\xf3n\npodr\xeda ser:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://github.com/gbenm/pintos-tuto\n")),(0,n.kt)("p",null,"qu\xe9 es el repositorio que us\xe9 para explicar en los v\xeddeos y que ya\ntiene ",(0,n.kt)("a",{parentName:"p",href:"/github-action"},"PintOS Github Checker")," configurado. Lo que debe\ntomar en cuenta son los \xfaltimos cambios en el proyecto, el repo anterior\ntiene una copia del c\xf3digo de 2022 del cu\xe1l el \xfaltimo commit fue en ",(0,n.kt)("strong",{parentName:"p"},"2021-05-29"),'.\nPara verificar el contenido del repositorio copie y pegue el link por defecto\nen el buscador y navegue a la pesta\xf1a de "tree", ah\xed encontrar\xe1 el contenido.'),(0,n.kt)("h3",{id:"elige-la-carpeta-del-c\xf3digo-fuente"},"Elige la carpeta del c\xf3digo fuente"),(0,n.kt)("p",null,"El repositorio podr\xeda no tener el c\xf3digo fuente directamente, este\nes el caso del repositorio original de Pintos que contiene en la ra\xedz\notros archivos y una carpeta ",(0,n.kt)("inlineCode",{parentName:"p"},"src/")," con el c\xf3digo"),(0,n.kt)("p",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:o(321).Z,width:"439",height:"365"})),(0,n.kt)("p",null,"El repo se ve bien viejo, pero ni modo xD")),(0,n.kt)("p",null,"En el caso que por ejemplo hayas usado ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gbenm/pintos-tuto"},"https://github.com/gbenm/pintos-tuto"),"\ncomo proyecto base, este contiene el c\xf3digo fuente en la ra\xedz"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:o(7032).Z,width:"1366",height:"768"})),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"El directorio del c\xf3digo fuente contiene las carpetas ",(0,n.kt)("inlineCode",{parentName:"p"},"threads/"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"userprog/"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"vm/"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"filesys/"),",\n",(0,n.kt)("inlineCode",{parentName:"p"},"utils/"),", etc.")),(0,n.kt)("p",null,"Con esto en mente, el input actual luce como el siguiente y se debe llenar con\nel nombre del folder que contiene el c\xf3digo:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:o(5723).Z,width:"664",height:"189"})),(0,n.kt)("admonition",{title:"Importante",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Si el c\xf3digo fuente est\xe1 en la ra\xedz del repositorio este valor\ndebe estar vac\xedo")),(0,n.kt)("h3",{id:"nombre-del-proyecto"},"Nombre del proyecto"),(0,n.kt)("p",null,"De un nombre a la carpeta que va contener su c\xf3digo fuente. Por ejemplo\n",(0,n.kt)("inlineCode",{parentName:"p"},"pintos")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:o(7260).Z,width:"664",height:"189"})),(0,n.kt)("h3",{id:"agregar-el-repositorio-personal"},"Agregar el repositorio personal"),(0,n.kt)("p",null,"C\xf3mo \xfaltimo paso se le pregunta por el enlace a su repositorio personal,\nesto es porque desde el inicio se deja configurado un repositorio."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Vaya a por ejemplo Github y cree un repo nuevo ",(0,n.kt)("strong",{parentName:"p"},"debe estar vac\xedo")," por\nsu propia salud mental. La extensi\xf3n no hace ni pull ni push, s\xf3lo un commit\ninicial con lo que se ha descargado")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copie el URL puede ser de cualquier formato ya que s\xf3lo es para configurar\nel git y para su uso personal (si quiere hasta puede poner cualquier texto aleatorio)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Pegue el link en el input y continue"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"image",src:o(6561).Z,width:"664",height:"189"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Puede abrir directamente el proyecto desde la notificaci\xf3n que emergi\xf3 despu\xe9s del\n\xfaltimo paso"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{alt:"image",src:o(2103).Z,width:"1366",height:"768"})))),(0,n.kt)("h2",{id:"cambie-el-emulador"},"Cambie el emulador"),(0,n.kt)("p",null,"Este paso depende de lo que tenga instalado, por ejemplo si va utilizar el ",(0,n.kt)("strong",{parentName:"p"},"dev container"),"\nque provee esta extensi\xf3n o va utilizar ",(0,n.kt)("a",{parentName:"p",href:"/pintos-docker"},"PintOS ballenizado")," que se basan\nen la imagen de docker ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/gbenm/pintos"},"gbenm/pintos")," ",(0,n.kt)("strong",{parentName:"p"},"debe cambiar\nel emulador")," a ",(0,n.kt)("inlineCode",{parentName:"p"},"qemu")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Dir\xedjase a threads/Make.vars y \xe1bralo\n",(0,n.kt)("img",{alt:"image",src:o(7062).Z,width:"1366",height:"768"})),(0,n.kt)("li",{parentName:"ol"},"cambie el valor a ",(0,n.kt)("inlineCode",{parentName:"li"},"--qemu"),(0,n.kt)("img",{alt:"image",src:o(1519).Z,width:"1366",height:"768"})),(0,n.kt)("li",{parentName:"ol"},"confirme sus cambios y haga su commit",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit -m "chore: use qemu simulator"\n')))))}d.isMDXComponent=!0},9862:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/choose-base-repo-9447b2b098fe8965f68a90973a9cb309.png"},5078:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/create-cmd-6454519c8f7cb85198015ebb218e027a.png"},7062:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/open-make-vars-9d8776a1b6eb23eaf9d5439caaf2408d.png"},2103:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/open-pj-781275014562cc6e43baf85b806c4862.png"},5901:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/open-vscode-3d47af86eb3e91692a99b8085bf0547d.png"},321:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/original-repo-299f2cb0381ab3fb06271bdc4d386f19.png"},7032:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/pintos-tuto-repo-e5f22e4fa711619c70cb102e4a2612dd.png"},7260:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/pj-name-2ecda02558675ef66449f9deebf23529.png"},6561:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/repo-url-e7ed2becdbe9e1c394739623109e4164.png"},5723:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/source-code-folder-dae2c911d6ea7c1bcb2634ef6bf4b56b.png"},1519:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/use-qemu-e8056fd20e04d9ab245fb318782e1b47.png"}}]);