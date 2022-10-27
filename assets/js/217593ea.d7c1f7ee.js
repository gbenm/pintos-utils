"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[522],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?n.createElement(k,o(o({ref:a},p),{},{components:t})):n.createElement(k,o({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},186:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const i={sidebar_position:3},o="Crear un dev container",l={unversionedId:"pintos-vscode/dev-container",id:"pintos-vscode/dev-container",title:"Crear un dev container",description:"Qu\xe9 es?",source:"@site/docs/pintos-vscode/dev-container.md",sourceDirName:"pintos-vscode",slug:"/pintos-vscode/dev-container",permalink:"/pintos-utils/pintos-vscode/dev-container",draft:!1,editUrl:"https://github.com/gbenm/pintos-utils/tree/main/docs/pintos-vscode/dev-container.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"pintos-vscode",previous:{title:"Crear un nuevo proyecto de PintOS",permalink:"/pintos-utils/pintos-vscode/create-pintos-pj"},next:{title:"Verificar la salud del proyecto",permalink:"/pintos-utils/pintos-vscode/check-health"}},s={},c=[{value:"Qu\xe9 es?",id:"qu\xe9-es",level:2},{value:"Por qu\xe9 deber\xeda usarlo?",id:"por-qu\xe9-deber\xeda-usarlo",level:2},{value:"Respuesta - Com\xfan",id:"respuesta---com\xfan",level:3},{value:"Respuesta - Windows",id:"respuesta---windows",level:3},{value:"Respuesta - Unix like",id:"respuesta---unix-like",level:3},{value:"Prerequisitos para utilizaci\xf3n",id:"prerequisitos-para-utilizaci\xf3n",level:2},{value:"Instalaci\xf3n",id:"instalaci\xf3n",level:2},{value:"Ejecutar el comando",id:"ejecutar-el-comando",level:3},{value:"Entra al contenedor",id:"entra-al-contenedor",level:3},{value:"Configurar el contenedor",id:"configurar-el-contenedor",level:3},{value:"Verifica que la extensi\xf3n est\xe9 instalada",id:"verifica-que-la-extensi\xf3n-est\xe9-instalada",level:3},{value:"Limpia y compila los tests",id:"limpia-y-compila-los-tests",level:3},{value:"Ejecuci\xf3n",id:"ejecuci\xf3n",level:2},{value:"Verifica que el proyecto est\xe9 bien instalado",id:"verifica-que-el-proyecto-est\xe9-bien-instalado",level:2}],p={toc:c};function u(e){let{components:a,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"crear-un-dev-container"},"Crear un dev container"),(0,r.kt)("h2",{id:"qu\xe9-es"},"Qu\xe9 es?"),(0,r.kt)("p",null,"Esta una caracter\xedstica de vscode que te permite desarrollar dentro\nde un contenedor de Docker utilizando \xfanicamente el editor para enlazarte,\nal contrario de ",(0,r.kt)("a",{parentName:"p",href:"/pintos-docker"},"PintOS Ballenizado")," no necesita montar\nlos vol\xfamenes ni abrir nuevas terminales para poder utilizar el contenedor\n(es decir est\xe1 m\xe1s f\xe1cil xD), puedes consultar m\xe1s informaci\xf3n en la\ndocumentaci\xf3n oficial de ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/containers"},"dev containers"),"."),(0,r.kt)("h2",{id:"por-qu\xe9-deber\xeda-usarlo"},"Por qu\xe9 deber\xeda usarlo?"),(0,r.kt)("h3",{id:"respuesta---com\xfan"},"Respuesta - Com\xfan"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No tienes que instalar lo que necesita PintOS para ejecutarse"),(0,r.kt)("li",{parentName:"ul"},"Cu\xe1ndo usas m\xe1quinas virtuales",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Necesitas m\xe1s recursos"),(0,r.kt)("li",{parentName:"ul"},"F\xe1cilmente se traban (en el peor de los casos podr\xedas perder tu c\xf3digo si no haces commits con frecuencia)"))),(0,r.kt)("li",{parentName:"ul"},"Puedes usar cualquier cosa que ya conoces")),(0,r.kt)("h3",{id:"respuesta---windows"},"Respuesta - Windows"),(0,r.kt)("p",null,"El proyecto fue desarrollado para usarlo en linux xD."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Aqu\xed se podr\xeda tratar de correr con ",(0,r.kt)("inlineCode",{parentName:"p"},"WSL")," puro, si alguien intenta y le funciona por favor ayuda a extender la gu\xeda :D")),(0,r.kt)("h3",{id:"respuesta---unix-like"},"Respuesta - Unix like"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Contar\xe9 macOS ya que creo que podr\xeda ser posible ejecutarse nativamente")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Los GNU/Linux actuales no incluyen ",(0,r.kt)("inlineCode",{parentName:"p"},"stropts.h")," puedes ver una respuesta\nrelacionado a esto ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/61010487/stropts-h-on-ubuntu-19-10"},"aqu\xed"),".\nAl compilar utils te saltar\xe1 un error."),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"image",src:t(5915).Z,width:"585",height:"150"})),(0,r.kt)("p",{parentName:"li"},"  Esto s\xf3lo importa si vas utilizar bochs o vmware (seg\xfan la doc) ya que al menos en qemu no es necesario\nlos binarios resultantes del ",(0,r.kt)("inlineCode",{parentName:"p"},"make"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Al ejecutar ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," con un sistema moderno el tama\xf1o del ",(0,r.kt)("inlineCode",{parentName:"p"},"loader.bin")," es de ",(0,r.kt)("inlineCode",{parentName:"p"},"129M")," cu\xe1ndo\ndeber\xeda ser de ",(0,r.kt)("inlineCode",{parentName:"p"},"512B")," (una diferencia incre\xedble)"))),(0,r.kt)("p",null,"Si logras pasar esos dos obst\xe1culos no es necesario que utilices Docker para correr\ntu implementaci\xf3n."),(0,r.kt)("h2",{id:"prerequisitos-para-utilizaci\xf3n"},"Prerequisitos para utilizaci\xf3n"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tener una instalaci\xf3n de docker capaz de ejecutar contenedores de linux (Esto es un punto\na tomar en cuenta en Windows, busca una gu\xeda para instalar Docker para esto), puedes consultar\nla documentaci\xf3n oficial de docker si lo encuentras m\xe1s f\xe1cil ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/"},"https://docs.docker.com/desktop/")),(0,r.kt)("li",{parentName:"ul"},"Un Visual Studio Code que soporte esta caracter\xedstica")),(0,r.kt)("h2",{id:"instalaci\xf3n"},"Instalaci\xf3n"),(0,r.kt)("h3",{id:"ejecutar-el-comando"},"Ejecutar el comando"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"No necesitas cumplir los prerequisitos para generar los archivos")),(0,r.kt)("p",null,'Busca el comando "setup dev container for pintos"'),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"image",src:t(5614).Z,width:"640",height:"168"})),(0,r.kt)("h3",{id:"entra-al-contenedor"},"Entra al contenedor"),(0,r.kt)("p",null,"Entra por primera vez para que el contenedor se construya"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Para esto si necesitas cumplir con los prerequisitos."),(0,r.kt)("li",{parentName:"ul"},"Aseg\xfarate de que el servicio de Docker est\xe9 corriendo"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ve a la parte inferior izquierda y presiona en el s\xedmbolo que se parece a ",(0,r.kt)("inlineCode",{parentName:"p"},"> <")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:t(2215).Z,width:"339",height:"141"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Escoge "reopen in container"'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:t(9328).Z,width:"638",height:"365"})))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A veces aparece una notificaci\xf3n que te pregunta si quieres abrir el espacio de trabajo\nen el contenedor, la cu\xe1l es otra forma de entrar")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Si por casualidad haz creado otro proyecto pintos anteriormente y le\nhaz configurado dev container, aseg\xfarate de:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Darle un nombre diferente a la carpeta de esta versi\xf3n del proyecto"),(0,r.kt)("li",{parentName:"ul"},"Si le colocas el mismo nombre, debes eliminar el contenedor anterior")),(0,r.kt)("p",{parentName:"admonition"},"Esto es porque el contenedor no se elimina y va a tratar de utilzar\nel anterior lo cu\xe1l va resultar en un error")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'Si llegase a fallar intenta con "reintentar" o cerrar y volver abrir\nel editor')),(0,r.kt)("p",null,"Todo ha ido bien si puedes ver esto en vez de s\xedmbolo anterior"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(943).Z,width:"485",height:"170"})),(0,r.kt)("h3",{id:"configurar-el-contenedor"},"Configurar el contenedor"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"abre una terminal"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:t(8178).Z,width:"1053",height:"239"})),(0,r.kt)("p",{parentName:"li"},"ver\xe1s una terminal sin color como la siguiente"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:t(7641).Z,width:"1053",height:"239"})),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"A partir de ac\xe1 debes usar esta terminal para ejecutar lo que sigue"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Coloca una contrase\xf1a para poder utilizar ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo"),". Ejecuta lo siguiente en la terminal abierta\n(mostrar\xe1 un input para colocar la contrase\xf1a)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"passwd\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verifica que /host es de tu propiedad"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'ls -l / | grep "host"\n')),(0,r.kt)("p",{parentName:"li"},'Deber\xe1 aparecer "pintos pintos" en lo desplegado, si es as\xed sigue con el paso 4'),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'si aparece "root root" debes cambiar la propiedad de la carpeta es decir',(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown pintos.pintos /host\n")))))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configura oh my bash"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source bash-config\n")),(0,r.kt)("p",{parentName:"li"},"Deber\xe1 salirte una terminal con colores a partir de ahora"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:t(7370).Z,width:"1053",height:"239"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Verifica la propiedad del archivo ~/.bashrc"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls -l container/.bashrc\n")),(0,r.kt)("p",{parentName:"li"},'Deber\xe1 salir "pintos pintos"'),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("img",{alt:"image",src:t(5230).Z,width:"1053",height:"239"})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'si aparece "root root" debes cambiar la propiedad del archivo',(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chown pintos.pintos container/.bashrc\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Opcional) el tema actual de ",(0,r.kt)("strong",{parentName:"p"},"oh my bash")," para Ubuntu 16.04 no funciona bien (si escribes\ny llegas al l\xedmite se empieza a sobreescribir lo que haz escrito antes), te recomiendo cambiarlo\na ",(0,r.kt)("inlineCode",{parentName:"p"},"brainy")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Abre ",(0,r.kt)("inlineCode",{parentName:"p"},"container/.bashrc")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:t(5315).Z,width:"1366",height:"768"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cambia ",(0,r.kt)("inlineCode",{parentName:"p"},'OSH_THEME="font"')," por ",(0,r.kt)("inlineCode",{parentName:"p"},'OSH_THEME="brainy"')),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:t(2676).Z,width:"1366",height:"768"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"En la terminal que haz usado ejecuta lo siguiente para refrescar el tema"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.bashrc\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Puedes encontrar m\xe1s temas en ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ohmybash/oh-my-bash/wiki/Themes"},"oh my bash"))),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Haz un commit con tus cambios",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git add .\ngit commit -m "chore: setup dev container"\n')))),(0,r.kt)("h3",{id:"verifica-que-la-extensi\xf3n-est\xe9-instalada"},"Verifica que la extensi\xf3n est\xe9 instalada"),(0,r.kt)("p",null,"Y mi extensi\xf3n? Ver\xe1s las extensiones como esta (de tipo workspace) se ejecutan del\nlado del contenedor, ve al apartado de las extensiones y busca pintos y verifica que\nse encuentre instalada"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(8935).Z,width:"1366",height:"768"})),(0,r.kt)("h3",{id:"limpia-y-compila-los-tests"},"Limpia y compila los tests"),(0,r.kt)("p",null,"Si estabas en un sistema con gcc, make, etc. Es probable que se hayan compilado las\nfases del proyecto, por lo que los archivos resultantes no sirven, ve a la secci\xf3n de\ntesting en la barra lateral y dale al icono de refrescar"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(1751).Z,width:"1366",height:"768"})),(0,r.kt)("p",null,"y luego selecciona las 4 fases"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:t(7665).Z,width:"1366",height:"768"})),(0,r.kt)("h2",{id:"ejecuci\xf3n"},"Ejecuci\xf3n"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Aseg\xfarate de que el servicio de Docker est\xe9 corriendo"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Abre visual studio code en la carpeta del proyecto")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ve a la parte inferior izquierda y presiona en el s\xedmbolo que se parece a ",(0,r.kt)("inlineCode",{parentName:"p"},"> <")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:t(2215).Z,width:"339",height:"141"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Escoge "reopen in container"'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image",src:t(9328).Z,width:"638",height:"365"})))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"si te aparece una notificaci\xf3n que te pregunta si quieres abrir el espacio de trabajo\nen el contenedor puedes usar esa forma tambi\xe9n.")),(0,r.kt)("h2",{id:"verifica-que-el-proyecto-est\xe9-bien-instalado"},"Verifica que el proyecto est\xe9 bien instalado"),(0,r.kt)("p",null,"Sigue los pasos listados ",(0,r.kt)("a",{parentName:"p",href:"./check-health"},"aqu\xed")))}u.isMDXComponent=!0},2676:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/bashrc-changed-0eec3ca74c9770c73343a65f353ad921.png"},5230:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/bashrc-owner-71dd85ad086646e4da6e0809f4cb6173.png"},8935:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/extension-in-container-2ab4f071227f99a4336263d04d9ca1fa.png"},7641:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/new-terminal-opened-72188e759cf65e0a2025cb9a9f4ae540.png"},7370:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/oh-my-bash-cbf0c659b39e9fb25595836a5bd76307.png"},5315:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/open-bashrc-e5792c81b7d1f27b04a3595f9c52901b.png"},943:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/open-success-7c3e682d1afea7d2d62f3f79addbd511.png"},8178:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/open-terminal-d6bd4856d73f68f86c9e99e854570b87.png"},1751:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/refresh-button-9750edecf0501b59553d0cac6cfa7cad.png"},7665:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/refresh-options-c5c62ce3498511dd57e8bc44c47b81f1.png"},2215:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/remote-control-c05329d8c464079e8d842bd0c22b4e46.png"},9328:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/reopen-in-container-2b4bf657e672d97c8210089f783d7e9a.png"},5614:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/setup-dev-container-b8c0684970c97592d87dcf4ba7baf432.png"},5915:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/utils-error-08491d6f7fc317ba8b545ba3d7caafe5.png"}}]);