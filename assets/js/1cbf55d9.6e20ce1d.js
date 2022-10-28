"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[717],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),g=o,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||r;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3572:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const r={sidebar_position:3},i="Debug tests",s={unversionedId:"pintosvsc/testing/debug",id:"pintosvsc/testing/debug",title:"Debug tests",description:"C\xf3mo funciona",source:"@site/docs/pintosvsc/testing/debug.md",sourceDirName:"pintosvsc/testing",slug:"/pintosvsc/testing/debug",permalink:"/pintos-utils/pintosvsc/testing/debug",draft:!1,editUrl:"https://github.com/gbenm/pintos-utils/tree/main/docs/pintosvsc/testing/debug.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"pintosvsc",previous:{title:"Correr los tests",permalink:"/pintos-utils/pintosvsc/testing/run"}},c={},l=[{value:"C\xf3mo funciona",id:"c\xf3mo-funciona",level:2},{value:"Configuraci\xf3n",id:"configuraci\xf3n",level:2},{value:"Debuggear",id:"debuggear",level:2},{value:"Iniciar la sesi\xf3n de debugging",id:"iniciar-la-sesi\xf3n-de-debugging",level:3},{value:"Seleccionar scheduler",id:"seleccionar-scheduler",level:3},{value:"&quot;Debug Console&quot; y la secci\xf3n &quot;Run and Debug&quot;",id:"debug-console-y-la-secci\xf3n-run-and-debug",level:3},{value:"Secci\xf3n Output",id:"secci\xf3n-output",level:3}],u={toc:l};function d(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"debug-tests"},"Debug tests"),(0,o.kt)("h2",{id:"c\xf3mo-funciona"},"C\xf3mo funciona"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Lo siguiente se resume en un click, pero la explicaci\xf3n tiene\nmotivo de mejorar la experiencia de debugging")),(0,o.kt)("p",null,"Para debuggear en Pintos se necesitan 2 cosas, una es levantar un gdb server\nseleccionando un test mediante ",(0,o.kt)("inlineCode",{parentName:"p"},"pintos ... --gdb -- ... -q run TEST"),",\neste proceso juega el papel de mostrar el output del test conforme se avanza\nen el debugger y la segunda es ejecutar ",(0,o.kt)("inlineCode",{parentName:"p"},"pintos-gdb")," que es un script que\nejecuta ",(0,o.kt)("inlineCode",{parentName:"p"},"gdb"),' y configura las macros personalizadas de Pintos, aqu\xed es d\xf3nde\nse puede hacer el t\xedpico de "colocar un breakpoint", "ir a la siguiente l\xednea",\ny dem\xe1s'),(0,o.kt)("h2",{id:"configuraci\xf3n"},"Configuraci\xf3n"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Si utiliza el dev container o sigue las indicaciones de la gu\xeda del\nfrijol no debe cambiar esto")),(0,o.kt)("p",null,"C\xf3mo se mencion\xf3 anteriormente la extensi\xf3n tiene que hacer uso directo de\nla CLI de pintos para levantar el ",(0,o.kt)("strong",{parentName:"p"},"gdb server")," por lo que debe seleccionar\nsobre que simulador va correr, por defecto est\xe1 configurado para correr\n",(0,o.kt)("inlineCode",{parentName:"p"},"qemu")," si se necesita cambiar esto, es necesario ir a la configuraci\xf3n de la\nextensi\xf3n y cambiar el simulador"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:t(919).Z,width:"551",height:"192"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"No se necesita modificar ",(0,o.kt)("inlineCode",{parentName:"p"},"utils/pintos-gdb")," para configurar ",(0,o.kt)("inlineCode",{parentName:"p"},"gdb-macros"),"\nla extensi\xf3n autom\xe1ticamente agrega un parche al c\xf3digo de ",(0,o.kt)("inlineCode",{parentName:"p"},"pintos-gdb"),"\n(mantiene el valor por defecto) para que pueda ser cambiado externamente"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"image",src:t(2554).Z,width:"793",height:"328"})),(0,o.kt)("p",{parentName:"admonition"},"El contenido rojo es lo eliminado y el verde las nuevas l\xedneas. El objetivo\nde este parche es que la extensi\xf3n pueda seleccionar las gdb-macros locales\ndel proyecto actual")),(0,o.kt)("h2",{id:"debuggear"},"Debuggear"),(0,o.kt)("h3",{id:"iniciar-la-sesi\xf3n-de-debugging"},"Iniciar la sesi\xf3n de debugging"),(0,o.kt)("p",null,"Prepare lo que necesite para la sesi\xf3n de depuraci\xf3n (por ejemplo colocar\nlos breakpoints) luego presione en el icono de debugging del tests que\nquiere debuggear"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:t(2521).Z,width:"1368",height:"738"})),(0,o.kt)("h3",{id:"seleccionar-scheduler"},"Seleccionar scheduler"),(0,o.kt)("p",null,"Conforme avance en el curso (y el proyecto) entender\xe1 la diferencia\nentre los schedulers, por ejemplo los tests que tienen un nombre que\ninicia con ",(0,o.kt)("strong",{parentName:"p"},"mlfqs")," est\xe1n destinados a ser ejecutados con este scheduler,\npor lo que para buscar errores en estos deber\xeda seleccionar dicho scheduler,\ncomo en este ejemplo se est\xe1 usando ",(0,o.kt)("inlineCode",{parentName:"p"},"alarm-multiple")," el scheduler a usar\nes el por defecto (cu\xe1ndo se hace ",(0,o.kt)("inlineCode",{parentName:"p"},"make grade")," se puede ver en los logs\ncon que simulador se usa, si lleva ",(0,o.kt)("inlineCode",{parentName:"p"},"-mlfqs")," como flag es porque selecciona\ndicho calendarizador y si no lo tiene, usa el por defecto)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:t(138).Z,width:"1368",height:"738"})),(0,o.kt)("h3",{id:"debug-console-y-la-secci\xf3n-run-and-debug"},'"Debug Console" y la secci\xf3n "Run and Debug"'),(0,o.kt)("p",null,"Despu\xe9s de seleccionar el scheduler, se inicia el modo debugging y por defecto\nen la izquierda se tiene la secci\xf3n ",(0,o.kt)("strong",{parentName:"p"},'"Run and Debug"')," con una interfaz con los\ncomandos m\xe1s utilizandos al debuggear y abajo la ",(0,o.kt)("strong",{parentName:"p"},'"Debug Console"')," que es la interfaz\ndirecta con la sesi\xf3n de gdb, desde ah\xed puede utilizar ",(0,o.kt)("inlineCode",{parentName:"p"},"-exec GDB_COMMAND")," para utilizar\nlos que no aparezcan en la interfaz."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:t(1917).Z,width:"1368",height:"738"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Como resumen esta secci\xf3n adapta el segundo paso para debuggear de la secci\xf3n\n",(0,o.kt)("a",{parentName:"p",href:"#c%C3%B3mo-funciona"},"c\xf3mo funciona"))),(0,o.kt)("h3",{id:"secci\xf3n-output"},"Secci\xf3n Output"),(0,o.kt)("p",null,"Al lado de ",(0,o.kt)("strong",{parentName:"p"},'"Debug Console"')," se encuentra ",(0,o.kt)("strong",{parentName:"p"},'"Output"'),", dentro de las opciones\ndel dropdown se encuentra ",(0,o.kt)("strong",{parentName:"p"},"PintOS"),", esta secci\xf3n adapta el paso 1 de\n",(0,o.kt)("a",{parentName:"p",href:"#c%C3%B3mo-funciona"},"c\xf3mo funciona"),", con esto puede observar la evoluci\xf3n del output\ndel test desde vscode"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:t(2294).Z,width:"1049",height:"208"})))}d.isMDXComponent=!0},138:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/choose-scheduler-e1b981c07db4205829749c85dbc6afdd.png"},919:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/choose-sim-8bd8dc4415d18980b425d9b45f643a56.png"},2294:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/debug-output-channel-7b8a29675ea9843b0af6dde5b14529c4.png"},1917:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/debug-session-3b9a81fc0266c2cc7dd6b9bc7f5e5186.png"},2554:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/pintos-gdb-0798702658a1a4b2a9f7ee08d9be10eb.png"},2521:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/start-debug-8b61dac856c56851a85bae585df15182.png"}}]);