# Antes de usar (primera vez)

## Usuarios de PintOS VS Code
Al instalar la [extensión](/pintosvsc) y configurar el dev container el mismo contenedor
puede reutilizarse para pintos docker si se quiere acceder a este desde las terminales. **Si
ya se encuentra usando dev containers no es necesario las secciones posteriores a esta misma**.
Lo único que hay que hacer es crear un archivo `.container-id` obtener el id del contenedor
que utiliza vscode (con un `docker ps` mientras está la sesión activa funcionaría o con docker
desktop), luego ignorar este archivo en `.gitignore`

## Configuración del contenedor

Vea la configuración del contenedor [aquí](/pintosvsc/devcontainer/install#configurar-el-contenedor)

:::caution
Para los usuarios Unix-like el usuario y grupo que vienen configurados son `1000`y `1000`,
puedes verificar que ids tienes, utilizando `id -u` y `id -g` para consultar usuario y grupo
respectivamente. Si tu usuario difiere en id, los archivos pertenecerán al usuario que
tenga los listados anteriormente, por lo que tendrás que evitar escribir archivos desde
el contenedor para no tener que lidiar con permisos de escritura.
:::

:::tip
Para evitar esto es recomendable utilizar la [extensión de visual studio code](/pintosvsc) ya que
este editor configura el id de usuario y grupo de forma automática.
:::


Estando **dentro del contenedor (ejecutó el script),** la primera vez ejecute:

```bash
source bash-config
```

Ahora tiene sincronizada la carpeta **container** en su directorio pintos. Existe una carpeta llamada **host** (**\~/host)** dentro de su contenedor, puede utilizarla como punto de conexión además de la misma carpeta (código fuente).

El directorio **container** también contiene el archivo **.bashrc** por lo que úselo para configurar si necesita, tenga en cuenta que le agregamos [ohmybash](https://github.com/ohmybash/oh-my-bash) para que se vea mejor, pero en el contenedor puede tener problemas a la hora de escribir comandos muy largos, el
tema recomendado es `brainy`

, pero si sucede esto, puede poner en blanco el string donde va el tema y ya no tendrá estos inconvenientes. Al inicio tiene un tema, el cuál está en `OSH_THEME`

```bash {5} title="~/.bashrc (original)" showLineNumbers
# Path to your oh-my-bash installation.
export OSH=/root/.oh-my-bash
# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-bash is loaded.
OSH_THEME="font"
```

Debería queda similar a lo siguiente

```bash {5} title="~/.bashrc (después)" showLineNumbers
# Path to your oh-my-bash installation.
export OSH=/root/.oh-my-bash
# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-bash is loaded.
OSH_THEME="brainy"
```

Si aún sigue teniendo problemas deje en blaco el valor en blaco

```bash {5} title="~/.bashrc" showLineNumbers
# Path to your oh-my-bash installation.
export OSH=/root/.oh-my-bash
# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-bash is loaded.
OSH_THEME=""
```

También puede utilizar este contenedor para correr sus laboratorios sólo coloque alguna copia en **container** y en su contenedor navegue a **\~/host** y testee. El contenedor ya tiene instalado lo necesario para compilar C, y puede instalar cosas ya que el script crea un sólo contendor y utlizar su identificador para ejecutarlo otra vez.

:::info
Puede ejecutar varias veces el script.
:::

## Github

Agregue `.container-id` y `container/` a su **.gitignore** ya que estos serán diferentes para cada usuario y no deberían estar en el repositorio.

```.gitignore {5-6} title=".gitignore" showLineNumbers
cscope.files
cscope.out
TAGS
tags
.container-id
container/
```
