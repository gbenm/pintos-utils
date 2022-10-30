"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[483],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4508:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:6},i="Configuraciones de la extensi\xf3n",s={unversionedId:"pintosvsc/extension-settings",id:"pintosvsc/extension-settings",title:"Configuraciones de la extensi\xf3n",description:'Pueden ser encontradas al buscar en las configuraciones del editor "pintos"',source:"@site/docs/pintosvsc/extension-settings.md",sourceDirName:"pintosvsc",slug:"/pintosvsc/extension-settings",permalink:"/pintos-utils/pintosvsc/extension-settings",draft:!1,editUrl:"https://github.com/gbenm/pintos-utils/tree/main/docs/pintosvsc/extension-settings.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"pintosvsc",previous:{title:"Abrir los resultados del test",permalink:"/pintos-utils/pintosvsc/testing/open-results"}},l={},d=[{value:"Add Utils to PATH",id:"add-utils-to-path",level:2},{value:"Base repository",id:"base-repository",level:2},{value:"Base Repository Code Folder",id:"base-repository-code-folder",level:2},{value:"Build Utils",id:"build-utils",level:2},{value:"Personal Repo Url",id:"personal-repo-url",level:2},{value:"Phases",id:"phases",level:2},{value:"Simulator",id:"simulator",level:2},{value:"Use Nodejs Native Kill",id:"use-nodejs-native-kill",level:2},{value:"Grade Regex",id:"grade-regex",level:2}],c={toc:d};function p(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuraciones-de-la-extensi\xf3n"},"Configuraciones de la extensi\xf3n"),(0,r.kt)("p",null,"Pueden ser encontradas al buscar en las configuraciones del editor ",(0,r.kt)("strong",{parentName:"p"},'"pintos"')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(6460).Z,width:"1366",height:"768"})),(0,r.kt)("h2",{id:"add-utils-to-path"},"Add Utils to PATH"),(0,r.kt)("p",null,"Make hace uso de la CLI de ",(0,r.kt)("inlineCode",{parentName:"p"},"pintos")," por lo que la shell actual debe poder reconocer\nd\xf3nde se encuentra el script, la extensi\xf3n es capaz de agregar la localizaci\xf3n\ndel script sin cambiar ning\xfan archivo de configuraci\xf3n, \xfanicamente utilizando\nel proceso actual de la extensi\xf3n (no afecta al exterior)"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Adem\xe1s de ",(0,r.kt)("inlineCode",{parentName:"p"},"pintos")," existen otros scripts dentro de la carpeta ",(0,r.kt)("inlineCode",{parentName:"p"},"utils/"),", pero\nal dejar esta opci\xf3n activa la extensi\xf3n no tiene problemas para utilizar cualquiera\nde ellos")),(0,r.kt)("h2",{id:"base-repository"},"Base repository"),(0,r.kt)("p",null,"Este es el URL que se muestra como opci\xf3n por predeterminada cu\xe1ndo se\nrequire descargar una copia del c\xf3digo del proyecto, se puede cambiar\na cualquier otra fuente soportada por ",(0,r.kt)("inlineCode",{parentName:"p"},"git"),", tener en cuenta que no\nse piden credenciales por lo que es necesario que se pueda descargar\nel repositorio sin necesidad de las mismas (repositorios p\xfablicos o utilizando\nSSH)"),(0,r.kt)("h2",{id:"base-repository-code-folder"},"Base Repository Code Folder"),(0,r.kt)("p",null,"Cu\xe1ndo el repositorio fuente no tiene el c\xf3digo fuente directamente sino que\nen una de sus carpetas, es necesario indicar de que carpeta se copiar\xe1 el c\xf3digo,\neste valor se usa como predeterminado al clonar, sin embargo se puede cambiar\nen el proceso."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Si la consola ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," soporta ",(0,r.kt)("inlineCode",{parentName:"p"},"sparse-checkout")," s\xf3lo se decargar\xe1 la carpeta del c\xf3digo")),(0,r.kt)("h2",{id:"build-utils"},"Build Utils"),(0,r.kt)("p",null,"La compilaci\xf3n de la carpeta de utilidades \xfanicamente se realiza cu\xe1ndo se ejecuta\nel comando para verificar la salud del proyecto, en caso de que no se requiera\ncompilar ",(0,r.kt)("strong",{parentName:"p"},"utils")," (los resultados sirven en caso de usar bochs o vmware), se\npuede desmarcar la opci\xf3n."),(0,r.kt)("h2",{id:"personal-repo-url"},"Personal Repo Url"),(0,r.kt)("p",null,"El valor predeterminado a mostrar cu\xe1ndo se ha terminado la instalaci\xf3n\ndel proyecto y se busca agregar el remoto a la carpeta actual (un ejemplo\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gbenm/pintos-tuto"},"https://github.com/gbenm/pintos-tuto"),"). Para el correcto funcionamiento\nde git debe ser un valor que pueda entender y el luegar d\xf3nde va a residir\nel c\xf3digo."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"La extensi\xf3n no hace push, ni pull del remoto (para evitar conflictos con\nlas credenciales) \xfanicamente crea un commit inicial con el c\xf3digo extra\xeddo\ndel repositorio base")),(0,r.kt)("h2",{id:"phases"},"Phases"),(0,r.kt)("p",null,"Permite modificar el orden y nombre de las carpetas de las fases, lo cu\xe1l no\nes necesario en la implementaci\xf3n existente de PintOS."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Es importante recordar que el orden y los nombres importa ya que se usan\npara mostrarse en la secci\xf3n de testing del editor")),(0,r.kt)("h2",{id:"simulator"},"Simulator"),(0,r.kt)("p",null,"Cu\xe1ndo la extensi\xf3n utiliza de forma directa la CLI de pintos, se necesita\nsaber que simulador se debe usar (en la implementaci\xf3n actual se usa al\nactivar el servicio de depuraci\xf3n)."),(0,r.kt)("h2",{id:"use-nodejs-native-kill"},"Use Nodejs Native Kill"),(0,r.kt)("p",null,"Cu\xe1ndo se ejecuta ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," este suele crear m\xe1s subprocesos, al utilizar este\n",(0,r.kt)("strong",{parentName:"p"},"kill")," nativo de Nodejs \xfanicamente se manda la ",(0,r.kt)("strong",{parentName:"p"},"signal")," de terminaci\xf3n\nal proceso que se lanz\xf3 (es decir a primer ",(0,r.kt)("inlineCode",{parentName:"p"},"make"),") por lo que cancelar los\ntests, el debugging, etc. No funciona correctamente ya que dependiendo de la\nsi ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," env\xeda o no la se\xf1al de terminaci\xf3n a sus procesos no se detendr\xe1."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"No active esta opci\xf3n a menos que sea totalmente necesario")),(0,r.kt)("h2",{id:"grade-regex"},"Grade Regex"),(0,r.kt)("p",null,"Una expresi\xf3n regular para extraer la nota actual del archivo grade de cada fase.\nLos grupos ",(0,r.kt)("inlineCode",{parentName:"p"},"grade")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"total")," son requeridos (ve\xe1se grupos en las expresiones\nregulares para Javascript)"))}p.isMDXComponent=!0},6460:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/extension-settings-d04e80453d6d4d12701eb321c5c0ada2.png"}}]);