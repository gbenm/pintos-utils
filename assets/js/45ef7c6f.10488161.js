"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},i="Antes de usar (primera vez)",s={unversionedId:"pintos-docker/first-use",id:"pintos-docker/first-use",title:"Antes de usar (primera vez)",description:"Usuarios de PintOS VS Code",source:"@site/docs/pintos-docker/first-use.md",sourceDirName:"pintos-docker",slug:"/pintos-docker/first-use",permalink:"/pintos-utils/pintos-docker/first-use",draft:!1,editUrl:"https://github.com/gbenm/pintos-utils/tree/main/docs/pintos-docker/first-use.md",tags:[],version:"current",frontMatter:{},sidebar:"pintos-docker",previous:{title:"Uso",permalink:"/pintos-utils/pintos-docker/windows/use"},next:{title:"Dale una estrella al proyecto",permalink:"/pintos-utils/pintos-docker/give-a-star"}},l={},c=[{value:"Usuarios de PintOS VS Code",id:"usuarios-de-pintos-vs-code",level:2},{value:"Configuraci\xf3n del contenedor",id:"configuraci\xf3n-del-contenedor",level:2},{value:"Github",id:"github",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"antes-de-usar-primera-vez"},"Antes de usar (primera vez)"),(0,r.kt)("h2",{id:"usuarios-de-pintos-vs-code"},"Usuarios de PintOS VS Code"),(0,r.kt)("p",null,"Al instalar la ",(0,r.kt)("a",{parentName:"p",href:"/pintosvsc"},"extensi\xf3n")," y configurar el dev container el mismo contenedor\npuede reutilizarse para pintos docker si se quiere acceder a este desde las terminales. ",(0,r.kt)("strong",{parentName:"p"},"Si\nya se encuentra usando dev containers no es necesario las secciones posteriores a esta misma"),".\nLo \xfanico que hay que hacer es crear un archivo ",(0,r.kt)("inlineCode",{parentName:"p"},".container-id")," obtener el id del contenedor\nque utiliza vscode (con un ",(0,r.kt)("inlineCode",{parentName:"p"},"docker ps")," mientras est\xe1 la sesi\xf3n activa funcionar\xeda o con docker\ndesktop), luego ignorar este archivo en ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")),(0,r.kt)("h2",{id:"configuraci\xf3n-del-contenedor"},"Configuraci\xf3n del contenedor"),(0,r.kt)("p",null,"Vea la configuraci\xf3n del contenedor ",(0,r.kt)("a",{parentName:"p",href:"/pintosvsc/devcontainer/install#configurar-el-contenedor"},"aqu\xed")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Para los usuarios Unix-like el usuario y grupo que vienen configurados son ",(0,r.kt)("inlineCode",{parentName:"p"},"1000"),"y ",(0,r.kt)("inlineCode",{parentName:"p"},"1000"),",\npuedes verificar que ids tienes, utilizando ",(0,r.kt)("inlineCode",{parentName:"p"},"id -u")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"id -g")," para consultar usuario y grupo\nrespectivamente. Si tu usuario difiere en id, los archivos pertenecer\xe1n al usuario que\ntenga los listados anteriormente, por lo que tendr\xe1s que evitar escribir archivos desde\nel contenedor para no tener que lidiar con permisos de escritura.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Para evitar esto es recomendable utilizar la ",(0,r.kt)("a",{parentName:"p",href:"/pintosvsc"},"extensi\xf3n de visual studio code")," ya que\neste editor configura el id de usuario y grupo de forma autom\xe1tica.")),(0,r.kt)("p",null,"Estando ",(0,r.kt)("strong",{parentName:"p"},"dentro del contenedor (ejecut\xf3 el script),")," la primera vez ejecute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source bash-config\n")),(0,r.kt)("p",null,"Ahora tiene sincronizada la carpeta ",(0,r.kt)("strong",{parentName:"p"},"container")," en su directorio pintos. Existe una carpeta llamada ",(0,r.kt)("strong",{parentName:"p"},"host")," (",(0,r.kt)("strong",{parentName:"p"},"~","/host)")," dentro de su contenedor, puede utilizarla como punto de conexi\xf3n adem\xe1s de la misma carpeta (c\xf3digo fuente)."),(0,r.kt)("p",null,"El directorio ",(0,r.kt)("strong",{parentName:"p"},"container")," tambi\xe9n contiene el archivo ",(0,r.kt)("strong",{parentName:"p"},".bashrc")," por lo que \xfaselo para configurar si necesita, tenga en cuenta que le agregamos ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ohmybash/oh-my-bash"},"ohmybash")," para que se vea mejor, pero en el contenedor puede tener problemas a la hora de escribir comandos muy largos, el\ntema recomendado es ",(0,r.kt)("inlineCode",{parentName:"p"},"brainy")),(0,r.kt)("p",null,", pero si sucede esto, puede poner en blanco el string donde va el tema y ya no tendr\xe1 estos inconvenientes. Al inicio tiene un tema, el cu\xe1l est\xe1 en ",(0,r.kt)("inlineCode",{parentName:"p"},"OSH_THEME")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'{5} title="~/.bashrc (original)" showLineNumbers',"{5}":!0,title:'"~/.bashrc','(original)"':!0,showLineNumbers:!0},'# Path to your oh-my-bash installation.\nexport OSH=/root/.oh-my-bash\n# Set name of the theme to load. Optionally, if you set this to "random"\n# it\'ll load a random theme each time that oh-my-bash is loaded.\nOSH_THEME="font"\n')),(0,r.kt)("p",null,"Deber\xeda queda similar a lo siguiente"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'{5} title="~/.bashrc (despu\xe9s)" showLineNumbers',"{5}":!0,title:'"~/.bashrc','(despu\xe9s)"':!0,showLineNumbers:!0},'# Path to your oh-my-bash installation.\nexport OSH=/root/.oh-my-bash\n# Set name of the theme to load. Optionally, if you set this to "random"\n# it\'ll load a random theme each time that oh-my-bash is loaded.\nOSH_THEME="brainy"\n')),(0,r.kt)("p",null,"Si a\xfan sigue teniendo problemas deje en blaco el valor en blaco"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'{5} title="~/.bashrc" showLineNumbers',"{5}":!0,title:'"~/.bashrc"',showLineNumbers:!0},'# Path to your oh-my-bash installation.\nexport OSH=/root/.oh-my-bash\n# Set name of the theme to load. Optionally, if you set this to "random"\n# it\'ll load a random theme each time that oh-my-bash is loaded.\nOSH_THEME=""\n')),(0,r.kt)("p",null,"Tambi\xe9n puede utilizar este contenedor para correr sus laboratorios s\xf3lo coloque alguna copia en ",(0,r.kt)("strong",{parentName:"p"},"container")," y en su contenedor navegue a ",(0,r.kt)("strong",{parentName:"p"},"~","/host")," y testee. El contenedor ya tiene instalado lo necesario para compilar C, y puede instalar cosas ya que el script crea un s\xf3lo contendor y utlizar su identificador para ejecutarlo otra vez."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Puede ejecutar varias veces el script.")),(0,r.kt)("h2",{id:"github"},"Github"),(0,r.kt)("p",null,"Agregue ",(0,r.kt)("inlineCode",{parentName:"p"},".container-id")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"container/")," a su ",(0,r.kt)("strong",{parentName:"p"},".gitignore")," ya que estos ser\xe1n diferentes para cada usuario y no deber\xedan estar en el repositorio."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-.gitignore",metastring:'{5-6} title=".gitignore" showLineNumbers',"{5-6}":!0,title:'".gitignore"',showLineNumbers:!0},"cscope.files\ncscope.out\nTAGS\ntags\n.container-id\ncontainer/\n")))}u.isMDXComponent=!0}}]);