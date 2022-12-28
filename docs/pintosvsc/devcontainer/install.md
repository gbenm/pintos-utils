---
sidebar_position: 2
---

# Instalación

## Pre requisitos para utilización
- Tener una instalación de docker capaz de ejecutar contenedores de linux (Esto es un punto
a tomar en cuenta en Windows, busca una guía para instalar Docker para esto), puedes consultar
la documentación oficial de docker si lo encuentras más fácil https://docs.docker.com/desktop/
- Instalar la extensión [dev containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

## Ejecutar el comando
> No necesitas cumplir los prerequisitos para generar los archivos

Busca el comando "setup dev container for pintos"

  ![image](assets/setup-dev-container.png)

## Entra al contenedor
Entra por primera vez para que el contenedor se construya
> - Para esto si necesitas cumplir con los prerequisitos.
> - Asegúrate de que el servicio de Docker esté corriendo

- Ve a la parte inferior izquierda y presiona en el símbolo que se parece a `> <`

  ![image](assets/remote-control.png)

- Escoge "reopen in container"

  ![image](assets/reopen-in-container.png)

> A veces aparece una notificación que te pregunta si quieres abrir el espacio de trabajo
en el contenedor, la cuál es otra forma de entrar

:::caution
Si por casualidad haz creado otro proyecto pintos anteriormente y le
haz configurado dev container, asegúrate de:
- Darle un nombre diferente a la carpeta de esta versión del proyecto
- Si le colocas el mismo nombre, debes eliminar el contenedor anterior

Esto es porque el contenedor no se elimina y va a tratar de utilzar
el anterior lo cuál va resultar en un error
:::

:::info
Si llegase a fallar intenta con "reintentar" o cerrar y volver abrir
el editor
:::

Todo ha ido bien si puedes ver esto en vez de símbolo anterior

![image](assets/open-success.png)

## Instalar la extensión en el contenedor
Al terminar de construirse el contenedor se levanta un error que indica que la extensión
no ha podido instalarse debido a que depende de otra:

![image](assets/auto-install-fail.png)

Esto es normal y lo que se debe hacer, es instalar de nuevo la extensión, pero
para el contenedor.

![image](assets/ext-install-container.png)

Se debe esperar a que la instalación termine

<div align="center">

![image](assets/wait-until-installation-finish.png)

Instalación en progreso
</div>

Al terminar la instalación, se debe recargar, lo cuál se realiza con el botón
que aparece:

![image](assets/reload-container.png)

## Configurar el contenedor
1. abre una terminal

  ![image](assets/open-terminal.png)

  verás una terminal sin color como la siguiente

  ![image](assets/new-terminal-opened.png)

  > A partir de acá debes usar esta terminal para ejecutar lo que sigue

2. Coloca una contraseña para poder utilizar `sudo`. Ejecuta lo siguiente en la terminal abierta
  (mostrará un input para colocar la contraseña)
  ```bash
  passwd
  ```

3. Verifica que /host es de tu propiedad
  ```bash
  ls -l / | grep "host"
  ```

  Deberá aparecer "pintos pintos" en lo desplegado, si es así sigue con el paso 4
    - si aparece "root root" debes cambiar la propiedad de la carpeta es decir
      ```bash
      sudo chown pintos.pintos /host
      ```


4. Configura oh my bash
  ```bash
  source bash-config
  ```

  Deberá salirte una terminal con colores a partir de ahora

  ![image](assets/oh-my-bash.png)

5. Verifica la propiedad del archivo container/.bashrc
  ```bash
  ls -l container/.bashrc
  ```

  Deberá salir "pintos pintos"

    ![image](assets/bashrc-owner.png)

    - si aparece "root root" debes cambiar la propiedad del archivo
      ```bash
      sudo chown pintos.pintos container/.bashrc
      ```

6. (Opcional) el tema actual de **oh my bash** para Ubuntu 16.04 no funciona bien (si escribes
  y llegas al límite se empieza a sobreescribir lo que haz escrito antes), te recomiendo cambiarlo
  a `brainy`

  - Abre `container/.bashrc`

    ![image](assets/open-bashrc.png)

  - Cambia `OSH_THEME="font"` por `OSH_THEME="brainy"`

    ![image](assets/bashrc-changed.png)

  - En la terminal que haz usado ejecuta lo siguiente para refrescar el tema

    ```bash
    source ~/.bashrc
    ```

> Puedes encontrar más temas en [oh my bash](https://github.com/ohmybash/oh-my-bash/wiki/Themes)

7. Agregar archivos y carpetas al `.gitignore`

  - La extensión genera una carpeta llamada `container/` que debe ser ignorada,
    si además se utilizará pintos docker para acceder por terminal `.container-id`
    también debe agregarse (para obtener más información de como instalar pintos docker
    junto con pintos vscode [consulte aquí](/pintos-docker/first-use#usuarios-de-pintos-vs-code))

    ```.gitignore {5-6} title=".gitignore" showLineNumbers
    cscope.files
    cscope.out
    TAGS
    tags
    .container-id
    container/
    ```

8. Haz un commit con tus cambios
  ```bash
  git add .
  git commit -m "chore: setup dev container"
  ```

## Limpia y compila los tests
Si estabas en un sistema con gcc, make, etc. Es probable que se hayan compilado las
fases del proyecto, por lo que los archivos resultantes no sirven, ve a la sección de
testing en la barra lateral y dale al icono de refrescar

![image](assets/refresh-button.png)

y luego selecciona las 4 fases

![image](assets/refresh-options.png)

# Verifica que el proyecto esté bien instalado
Sigue los pasos listados [aquí](../check-health)
