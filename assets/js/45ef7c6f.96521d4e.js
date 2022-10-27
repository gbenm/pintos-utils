"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="Antes de usar (primera vez)",s={unversionedId:"pintos-docker/first-use",id:"pintos-docker/first-use",title:"Antes de usar (primera vez)",description:"Estando dentro del contenedor (ejecut\xf3 el script), la primera vez ejecute:",source:"@site/docs/pintos-docker/first-use.md",sourceDirName:"pintos-docker",slug:"/pintos-docker/first-use",permalink:"/pintos-utils/pintos-docker/first-use",draft:!1,editUrl:"https://github.com/gbenm/pintos-utils/tree/main/docs/pintos-docker/first-use.md",tags:[],version:"current",frontMatter:{},sidebar:"pintos-docker",previous:{title:"Uso",permalink:"/pintos-utils/pintos-docker/windows/use"},next:{title:"Dale una estrella al proyecto",permalink:"/pintos-utils/pintos-docker/give-a-star"}},l={},p=[{value:"Github",id:"github",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"antes-de-usar-primera-vez"},"Antes de usar (primera vez)"),(0,a.kt)("p",null,"Estando ",(0,a.kt)("strong",{parentName:"p"},"dentro del contenedor (ejecut\xf3 el script),")," la primera vez ejecute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"source bash-config\n")),(0,a.kt)("p",null,"Ahora tiene sincronizada la carpeta ",(0,a.kt)("strong",{parentName:"p"},"pintos-docker")," en su directorio pintos. Existe una carpeta llamada ",(0,a.kt)("strong",{parentName:"p"},"host")," (",(0,a.kt)("strong",{parentName:"p"},"~","/host)")," dentro de su contenedor, puede utilizarla como punto de conexi\xf3n adem\xe1s de la misma carpeta (c\xf3digo fuente)."),(0,a.kt)("p",null,"El directorio ",(0,a.kt)("strong",{parentName:"p"},"pintos-docker")," tambi\xe9n contiene el archivo ",(0,a.kt)("strong",{parentName:"p"},".bashrc")," por lo que \xfaselo para configurar si necesita, tenga en cuenta que le agregamos ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ohmybash/oh-my-bash"},"ohmybash")," para que se vea mejor, pero en el contenedor puede tener problemas a la hora de escribir comandos muy largos, el\ntema recomendado es ",(0,a.kt)("inlineCode",{parentName:"p"},"brainy")),(0,a.kt)("p",null,", pero si sucede esto, puede poner en blanco el string donde va el tema y ya no tendr\xe1 estos inconvenientes. Al inicio tiene un tema, el cu\xe1l est\xe1 en ",(0,a.kt)("inlineCode",{parentName:"p"},"OSH_THEME")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'{5} title="~/.bashrc (original)" showLineNumbers',"{5}":!0,title:'"~/.bashrc','(original)"':!0,showLineNumbers:!0},'# Path to your oh-my-bash installation.\nexport OSH=/root/.oh-my-bash\n# Set name of the theme to load. Optionally, if you set this to "random"\n# it\'ll load a random theme each time that oh-my-bash is loaded.\nOSH_THEME="font"\n')),(0,a.kt)("p",null,"Deber\xeda queda similar a lo siguiente"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'{5} title="~/.bashrc (despu\xe9s)" showLineNumbers',"{5}":!0,title:'"~/.bashrc','(despu\xe9s)"':!0,showLineNumbers:!0},'# Path to your oh-my-bash installation.\nexport OSH=/root/.oh-my-bash\n# Set name of the theme to load. Optionally, if you set this to "random"\n# it\'ll load a random theme each time that oh-my-bash is loaded.\nOSH_THEME="brainy"\n')),(0,a.kt)("p",null,"Si a\xfan sigue teniendo problemas deje en blaco el valor en blaco"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'{5} title="~/.bashrc" showLineNumbers',"{5}":!0,title:'"~/.bashrc"',showLineNumbers:!0},'# Path to your oh-my-bash installation.\nexport OSH=/root/.oh-my-bash\n# Set name of the theme to load. Optionally, if you set this to "random"\n# it\'ll load a random theme each time that oh-my-bash is loaded.\nOSH_THEME=""\n')),(0,a.kt)("p",null,"Tambi\xe9n puede utilizar este contenedor para correr sus laboratorios s\xf3lo coloque alguna copia en ",(0,a.kt)("strong",{parentName:"p"},"pintos-docker")," y en su contenedor navegue a ",(0,a.kt)("strong",{parentName:"p"},"~","/host")," y testee, el contenedor ya tiene instalado lo necesario para compilar C, y puede instalar cosas ya que el script crea un s\xf3lo contendor y utlizar su identificador para ejecutarlo otra vez."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Puede ejecutar varias veces el script, la primera vez levanta el contenedor, las pr\xf3ximas veces abre una terminal dentro del contenedor. Al morir la terminal principal todos las dem\xe1s mueren.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Espere a que se inicie el contenedor antes de volver a ejecutar el script.")),(0,a.kt)("h2",{id:"github"},"Github"),(0,a.kt)("p",null,"Agregue ",(0,a.kt)("inlineCode",{parentName:"p"},".container-id")," y a ",(0,a.kt)("inlineCode",{parentName:"p"},"pintos-docker")," a su ",(0,a.kt)("strong",{parentName:"p"},".gitignore")," ya que estos ser\xe1n diferentes para cada usuario y no deber\xedan porque estar en el repositorio."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image",src:n(5427).Z,width:"868",height:"557"})))}u.isMDXComponent=!0},5427:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gitignore-da83aae3325a120097c8e03e951020a3.png"}}]);