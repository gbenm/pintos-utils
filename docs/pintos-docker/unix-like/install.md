# Instalación

## Docker

Instale docker en su sistema como Dios le ayude xD.
Descargar pintos-docker
Si nadie más del equipo ha descargado el archivo pintos-docker note que no es pintos-docker.bat ya que ese es para windows. Diríjase a la carpeta utils dentro del directorio de pintos y junto con los demás scripts decarguelo (el comando siguiente también le da permisos de ejecución, todo en uno 😄👌)

## Pintos docker

```bash
curl -fsSLo pintos-docker https://git.io/JG8nA && chmod +x pintos-docker
```

:::info
Si no tiene instalado curl prosiga a instalarlo, si anda en un derivado de Debian (como Ubuntu) podría utilizar `sudo apt install curl`, y en OS X ya viene instalado.
:::


Luego defina una variable extra en su ar chivo de configuración inicial (tipicamente se llama .bashrc) llamada PINTOS_HOME con el directorio de código fuente del proyecto, si ya la había definido omita este paso. Agregue la línea siguiente al final del archivo


```bash title="~/.bashrc"
export PINTOS_HOME=~/pintos
```

Refresque la terminal con (si está usando bash)

```bash
source ~/.bashrc
```
