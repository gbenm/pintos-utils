# Crear un dev container

## Qué es?
Esta una característica de vscode que te permite desarrollar dentro
de un contenedor de Docker utilizando únicamente el editor para enlazarte,
al contrario de [PintOS Ballenizado](/pintos-docker) no necesita montar
los volúmenes ni abrir nuevas terminales para poder utilizar el contenedor
(es decir está más fácil xD), puedes consultar más información en la
documentación oficial de [dev containers](https://code.visualstudio.com/docs/remote/containers).

## Por qué debería usarlo?
### Respuesta - Común
- No tienes que instalar lo que necesita PintOS para ejecutarse
- Cuándo usas máquinas virtuales
  - Necesitas más recursos
  - Fácilmente se traban (en el peor de los casos podrías perder tu código si no haces commits con frecuencia)
- Puedes usar cualquier cosa que ya conoces

### Respuesta - Windows
El proyecto fue desarrollado para usarlo en linux xD.

> Aquí se podría tratar de correr con `WSL` puro, si alguien intenta y le funciona por favor ayuda a extender la guía :D

### Respuesta - Unix like
> Contaré macOS ya que creo que podría ser posible ejecutarse nativamente

- Los GNU/Linux actuales no incluyen `stropts.h` puedes ver una respuesta
relacionado a esto [aquí](https://stackoverflow.com/questions/61010487/stropts-h-on-ubuntu-19-10).
Al compilar utils te saltará un error.

  ![image](assets/utils-error.png)

  Esto sólo importa si vas utilizar bochs o vmware (según la doc) ya que al menos en qemu no es necesario
  los binarios resultantes del `make`
- Al ejecutar `make` con un sistema moderno el tamaño del `loader.bin` es de `129M` cuándo
debería ser de `512B` (una diferencia increíble)

Si logras pasar esos dos obstáculos no es necesario que utilices Docker para correr
tu implementación.

## Prerequisitos para utilización
- Tener una instalación de docker capaz de ejecutar contenedores de linux (Esto es un punto
a tomar en cuenta en Windows, busca una guía para instalar Docker para esto), puedes consultar
la documentación oficial de docker si lo encuentras más fácil https://docs.docker.com/desktop/
- Un Visual Studio Code que soporte esta característica

## Instalación
### Ejecutar el comando
> No necesitas cumplir los prerequisitos para generar los archivos

Busca el comando "setup dev container for pintos"
  ![image](assets/setup-dev-container.png)

### Entra al contenedor
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

### Configurar el contenedor
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

5. Verifica la propiedad del archivo ~/.bashrc
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

### Verifica que la extensión esté instalada
Y mi extensión? Verás las extensiones como esta (de tipo workspace) se ejecutan del
lado del contenedor, ve al apartado de las extensiones y busca pintos y verifica que
se encuentre instalada

![image](assets/extension-in-container.png)


### Limpia y compila los tests
Si estabas en un sistema con gcc, make, etc. Es probable que se hayan compilado las
fases del proyecto, por lo que los archivos resultantes no sirven, ve a la sección de
testing en la barra lateral y dale al icono de refrescar

![image](assets/refresh-button.png)

y luego selecciona las 4 fases

![image](assets/refresh-options.png)

## Ejecución
> - Asegúrate de que el servicio de Docker esté corriendo

- Abre visual studio code en la carpeta del proyecto
- Ve a la parte inferior izquierda y presiona en el símbolo que se parece a `> <`
  ![image](assets/remote-control.png)
- Escoge "reopen in container"
  ![image](assets/reopen-in-container.png)

> si te aparece una notificación que te pregunta si quieres abrir el espacio de trabajo
en el contenedor puedes usar esa forma también.
