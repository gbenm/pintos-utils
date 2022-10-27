"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[917],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6901:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(2949);const i={light:{hover:"#eaeaea",normal:"#f1f1f1"},dark:{hover:"#262738",normal:"#262728"}};function o(e){let{children:t,style:n,className:o}=e;const{colorMode:l}=(0,r.I)(),[s,c]=(0,a.useState)({variant:"normal",color:i[l].hover}),u=(0,a.useCallback)(((e,t)=>{c({color:i[e][t],variant:t})}),[]);return(0,a.useEffect)((()=>{u(l,s.variant)}),[l]),a.createElement("div",{className:o,style:{...n,backgroundColor:s.color,cursor:"pointer",borderRadius:"0.5rem",padding:"1rem 2rem"},onPointerOver:()=>u(l,"hover"),onPointerLeave:()=>u(l,"normal")},t)}},5654:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(9960),r=n(7294),i=n(6901);const o=e=>{let{children:t,style:n,className:o,to:l}=e;return r.createElement(a.Z,{style:{all:"unset"},to:l},r.createElement(i.Z,{className:o,style:{...n,border:"1px solid white",fontWeight:"bold",display:"flex",alignItems:"center"}},r.createElement("span",{style:{fontSize:"1.25rem"}},"\u29c9"),r.createElement("span",{style:{marginLeft:"1rem"}},t)))}},7200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),i=n(5654);const o={sidebar_position:2},l="Instalaci\xf3n",s={unversionedId:"github-action/install",id:"github-action/install",title:"Instalaci\xf3n",description:"Requerimientos",source:"@site/docs/github-action/install.mdx",sourceDirName:"github-action",slug:"/github-action/install",permalink:"/pintos-utils/github-action/install",draft:!1,editUrl:"https://github.com/gbenm/pintos-utils/tree/main/docs/github-action/install.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"github-action",previous:{title:"PintOS Github Checker",permalink:"/pintos-utils/github-action/"},next:{title:"Configuraci\xf3n",permalink:"/pintos-utils/github-action/config"}},c={},u=[{value:"Requerimientos",id:"requerimientos",level:2},{value:"Procedimiento",id:"procedimiento",level:2},{value:"Configuraci\xf3n",id:"configuraci\xf3n",level:2}],d={toc:u};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"instalaci\xf3n"},"Instalaci\xf3n"),(0,r.kt)("h2",{id:"requerimientos"},"Requerimientos"),(0,r.kt)("p",null,"Antes que inicie esta gu\xeda necesita cumplir con:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Debe estar usando Github como su repositorio de c\xf3digo."),(0,r.kt)("li",{parentName:"ul"},"Debe tener el ambiente default de Pintos para ",(0,r.kt)("inlineCode",{parentName:"li"},"kernel.bin")," y ",(0,r.kt)("inlineCode",{parentName:"li"},"loader.bin")," o bien tener la configuraci\xf3n de ",(0,r.kt)("a",{parentName:"li",href:"/pintosph"},"PintOS Phase"),".")),(0,r.kt)("p",null,"Cuando se menciona que el ambiente ",(0,r.kt)("strong",{parentName:"p"},"default")," de pintos para los archivos binarios se refiere a tener la linea 8 (en el archivo real est\xe1 alrededor de la 362) como la siguiente:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-perl",metastring:"{8}","{8}":!0},'# read_loader($file_name)\n#\n# Reads and returns the first $LOADER_SIZE bytes in $file_name.\n# If $file_name is undefined, tries to find the default loader.\n# Makes sure that the loader is a reasonable size.\nsub read_loader {\n    my ($name) = @_;\n    $name = find_file ("loader.bin") if !defined $name;\n    die "Cannot find loader\\n" if !defined $name;\n    my ($handle);\n    open ($handle, \'<\', $name) or die "$name: open: $!\\n";\n    -s $handle == $LOADER_SIZE || -s $handle == 512\n      or die "$name: must be exactly $LOADER_SIZE or 512 bytes long\\n";\n    $loader = read_fully ($handle, $name, $LOADER_SIZE);\n    close ($handle) or die "$name: close: $!\\n";\n    return $loader;\n}\n')),(0,r.kt)("p",null,"Y la linea 6 (la real es aproximadamente la 257) como la siguiente:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-perl",metastring:"{6}","{6}":!0},"# Locates the files used to back each of the virtual disks,\n# and creates temporary disks.\nsub find_disks {\n # Find kernel, if we don't already have one.\n if (!exists $parts{KERNEL}) {\n   my $name = find_file ('kernel.bin');\n   die \"Cannot find kernel\\n\" if !defined $name;\n   do_set_part ('KERNEL', 'file', $name);\n }\n\n ...\n}\n")),(0,r.kt)("p",null,"En los archivos correspondientes, y el otro caso v\xe1lido es tener configurado ",(0,r.kt)("strong",{parentName:"p"},"pintosph")," ya que se hace uso de ",(0,r.kt)("inlineCode",{parentName:"p"},"$PINTOSPH")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"$PINTOS_HOME")," por lo que funcionar\xe1."),(0,r.kt)("p",null,"El github action evaluar\xe1 las 4 fases del proyecto en paralelo utilizando la \xfaltima versi\xf3n\nde Ubuntu como host principal y una imagen de docker (Ubuntu 16.04) que tiene lo necesario\npara correr Pintos."),(0,r.kt)("h2",{id:"procedimiento"},"Procedimiento"),(0,r.kt)("p",null,"Dir\xedjase hacia la carpeta donde tiene su proyecto de github, necesita estar en la ra\xedz del mismo. Suponiendo quei su proyecto se encuentra en el home"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/pintos\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(8857).Z,width:"1366",height:"768"}),(0,r.kt)("img",{src:n(119).Z,width:"858",height:"538"})),(0,r.kt)("p",null,"Notar que coinciden los archivos en Github y la terminal."),(0,r.kt)("p",null,"Puede verificar que est\xe1 en la ra\xedz del proyecto con:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls .git\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"OK!",src:n(1177).Z,width:"868",height:"557"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"No est\xe1  en la ra\xedz",src:n(6327).Z,width:"868",height:"557"})),(0,r.kt)("p",null,"Ejecute el siguiente comando (utilice el botoncito de copy)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'bash -c "$(wget -qO- https://git.io/J3NpR)"\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Si no tiene instalado ",(0,r.kt)("strong",{parentName:"p"},"wget")," proceda a instalarlo. Por la naturaleza del proyecto probablemente se encuentre en Ubuntu 16, por lo que bastar\xe1 con ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"em"},"sudo apt install wget")))),(0,r.kt)("p",null,"Luego de lo anterior su proyecto tendr\xe1 el directorio ",(0,r.kt)("strong",{parentName:"p"},".github")," que es una carpeta oculta."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Nuevo :)",src:n(7992).Z,width:"868",height:"557"})),(0,r.kt)("h2",{id:"configuraci\xf3n"},"Configuraci\xf3n"),(0,r.kt)("p",null,"Si cumple con los siguiente ya no requiere hacer nada m\xe1s:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"El c\xf3digo est\xe1 la carpeta ra\xedz del repositorio, v\xe9ase ",(0,r.kt)("a",{parentName:"li",href:"config#configurar-directorio-de-c%C3%B3digo"},"Configurar directorio de c\xf3digo"),"."),(0,r.kt)("li",{parentName:"ul"},"Por lo menos tiene una de la siguientes ramas: ",(0,r.kt)("strong",{parentName:"li"},"master, main,")," ",(0,r.kt)("strong",{parentName:"li"},"develop.")),(0,r.kt)("li",{parentName:"ul"},"\xdanicamente quiere que se ejecuten los test cuando una de las ramas anteriores sea actualizada.")),(0,r.kt)("p",null,"En la implementaci\xf3n que tuvimos con mi grupo, usamos una rama ",(0,r.kt)("strong",{parentName:"p"},"master")," que conten\xeda s\xf3lo el c\xf3digo que hab\xeda cumplido con pasar todos los tests desde la primera fase hasta la \xfaltima completada y una rama ",(0,r.kt)("strong",{parentName:"p"},"develop")," que era el punto donde se encontraba el desarrollo actual y sobre la develop cre\xe1bamos nuevas ramas para las nuevas caracter\xedsticas, luego de terminar una caracter\xedstica se realizaba un merge sobre la rama ",(0,r.kt)("strong",{parentName:"p"},"develop")," y luego al pushear pod\xedamos ver si el nuevo c\xf3digo afect\xf3 las dem\xe1s fases sin tener que correr una a una localmente."),(0,r.kt)("p",null,"La raz\xf3n detr\xe1s que no est\xe9 sobre todos los commits es porque en repositorios privados hay limitaci\xf3n de 2000 minutos/mes para ejecuci\xf3n de tests, y el de threads se tarda 14 minutos en completarse, sin embargo si puede dejar el repositorio p\xfablico opte por ",(0,r.kt)("a",{parentName:"p",href:"config#cambiar-cuando-se-ejecutan-los-test"},"Cambiar cuando se ejecutan los test")," y cambie para que se haga sobre todos los commits (esto le dar\xe1 mayor precisi\xf3n para detectar errores)."),(0,r.kt)(i.Z,{to:"pintos-checker-file",mdxType:"Link"},"Configurar pintos.checker.cjs"))}p.isMDXComponent=!0},6327:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-fail-028c5cfcb4ef77171cd3fd87b288ec9b.png"},1177:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git-ok-342a4f89a2ebc3b25da2568574803d4a.png"},7992:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github-tree-60ce9ec35c6554064ad79b1ad044f6ea.png"},119:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pintos-src-eb03cf42e9b75f91c27dbad37b0dca0e.png"},8857:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pintos-tuto-root-984243d6aa992732a1d7f805cf5d2b95.png"}}]);