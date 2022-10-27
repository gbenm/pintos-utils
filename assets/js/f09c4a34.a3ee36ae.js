"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a="Instalaci\xf3n",l={unversionedId:"pintos-docker/unix-like/install",id:"pintos-docker/unix-like/install",title:"Instalaci\xf3n",description:"Docker",source:"@site/docs/pintos-docker/unix-like/install.md",sourceDirName:"pintos-docker/unix-like",slug:"/pintos-docker/unix-like/install",permalink:"/pintos-utils/pintos-docker/unix-like/install",draft:!1,editUrl:"https://github.com/gbenm/pintos-utils/tree/main/docs/pintos-docker/unix-like/install.md",tags:[],version:"current",frontMatter:{},sidebar:"pintos-docker",previous:{title:"Sistemas tipo Unix",permalink:"/pintos-utils/pintos-docker/unix-like/"},next:{title:"Uso",permalink:"/pintos-utils/pintos-docker/unix-like/use"}},s={},c=[{value:"Docker",id:"docker",level:2},{value:"Pintos docker",id:"pintos-docker",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"instalaci\xf3n"},"Instalaci\xf3n"),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("p",null,"Instale docker en su sistema como Dios le ayude xD.\nDescargar pintos-docker\nSi nadie m\xe1s del equipo ha descargado el archivo pintos-docker note que no es pintos-docker.bat ya que ese es para windows. Dir\xedjase a la carpeta utils dentro del directorio de pintos y junto con los dem\xe1s scripts decarguelo (el comando siguiente tambi\xe9n le da permisos de ejecuci\xf3n, todo en uno \ud83d\ude04\ud83d\udc4c)"),(0,o.kt)("h2",{id:"pintos-docker"},"Pintos docker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSLo pintos-docker https://git.io/JG8nA && chmod +x pintos-docker\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Si no tiene instalado curl prosiga a instalarlo, si anda en un derivado de Debian (como Ubuntu) podr\xeda utilizar ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo apt install curl"),", y en OS X ya viene instalado.")),(0,o.kt)("p",null,"Luego defina una variable extra en su ar chivo de configuraci\xf3n inicial (tipicamente se llama .bashrc) llamada PINTOS_HOME con el directorio de c\xf3digo fuente del proyecto, si ya la hab\xeda definido omita este paso. Agregue la l\xednea siguiente al final del archivo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="~/.bashrc"',title:'"~/.bashrc"'},"export PINTOS_HOME=~/pintos\n")),(0,o.kt)("p",null,"Refresque la terminal con (si est\xe1 usando bash)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.bashrc\n")))}u.isMDXComponent=!0}}]);