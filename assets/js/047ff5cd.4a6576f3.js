"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=c(n),f=s,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(7462),s=(n(7294),n(3905));const i={sidebar_position:4},o="Abrir los resultados del test",a={unversionedId:"pintosvsc/testing/open-results",id:"pintosvsc/testing/open-results",title:"Abrir los resultados del test",description:"Los archivos de resultados contienen la informaci\xf3n sobre los fallos",source:"@site/docs/pintosvsc/testing/open-results.md",sourceDirName:"pintosvsc/testing",slug:"/pintosvsc/testing/open-results",permalink:"/pintos-utils/pintosvsc/testing/open-results",draft:!1,editUrl:"https://github.com/gbenm/pintos-utils/tree/main/docs/pintosvsc/testing/open-results.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"pintosvsc",previous:{title:"Debug tests",permalink:"/pintos-utils/pintosvsc/testing/debug"},next:{title:"Configuraciones de la extensi\xf3n",permalink:"/pintos-utils/pintosvsc/extension-settings"}},l={},c=[{value:"Abrir los resultados desde la secci\xf3n de testing",id:"abrir-los-resultados-desde-la-secci\xf3n-de-testing",level:2},{value:"Abrir el c\xf3digo de la prueba",id:"abrir-el-c\xf3digo-de-la-prueba",level:2}],d={toc:c};function p(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"abrir-los-resultados-del-test"},"Abrir los resultados del test"),(0,s.kt)("p",null,"Los archivos de resultados contienen la informaci\xf3n sobre los fallos\nde los tests, aunque hay ocasiones d\xf3nde no est\xe1n presentes, por ejemplo\nsi se eliminan externamente o si el ",(0,s.kt)("inlineCode",{parentName:"p"},"make")," obtuvo un error y no\npudo terminar su tarea."),(0,s.kt)("h2",{id:"abrir-los-resultados-desde-la-secci\xf3n-de-testing"},"Abrir los resultados desde la secci\xf3n de testing"),(0,s.kt)("p",null,"En la secci\xf3n de testing, cada test individual tiene un icono de archivo,\npresione sobre \xe9l para abrir el archivo de resultados para un test en\nespec\xedfico."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(3496).Z,width:"848",height:"533"})),(0,s.kt)("p",null,"Despu\xe9s de esto, el editor abrir\xe1 el archivo de resultados autom\xe1ticamente"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(278).Z,width:"1368",height:"738"})),(0,s.kt)("h2",{id:"abrir-el-c\xf3digo-de-la-prueba"},"Abrir el c\xf3digo de la prueba"),(0,s.kt)("p",null,"Para ver el c\xf3digo fuente del test sin tener que buscar en los folders\ndentro del directorio ",(0,s.kt)("inlineCode",{parentName:"p"},"tests/")," s\xf3lo debe estar posicionado en el\narchivo de resultados (recuerde que puede\n",(0,s.kt)("a",{parentName:"p",href:"#abrir-los-resultados-desde-la-secci%C3%B3n-de-testing"},"abrir los resultados del test desde la secci\xf3n de testing"),')\ny presionar en "open test source file"'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(9984).Z,width:"848",height:"533"})),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"El bot\xf3n aparece aunque el archivo de resultados no exista y puede usarse sin\nproblemas"),(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("img",{alt:"image",src:n(701).Z,width:"1368",height:"738"}))),(0,s.kt)("p",null,"Despu\xe9s se abre una pesta\xf1a en la segunda columna del editor con el archivo\nque contiene el c\xf3digo de la prueba"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"image",src:n(8848).Z,width:"1368",height:"738"})),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},'Las pruebas est\xe1n hechas en "C" y "Perl"')))}p.isMDXComponent=!0},701:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/missing-result-file-3d06c58eafd73f43331a833a0f844455.png"},3496:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/open-test-673bd4a150d5b273efe7b994afdc7f5f.png"},278:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/result-file-fe940df906b518267f9f31f5c8b3a44f.png"},9984:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/source-code-button-f767afd68173c8802f4a690a8de89b92.png"},8848:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/source-code-file-f4bc64df8d0d0e47d39f2caa642561ae.png"}}]);