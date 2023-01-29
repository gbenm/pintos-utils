---
sidebar_position: 4
---
# Antes de comenzar

:::caution
En esta sección se cubren posibles problemas, en la mayoría de casos
no se topará con lo que se menciona aquí, pero es mejor comprobar.
:::

:::caution
Esta sección requiere que el entorno sea apto para la ejecución del proyecto
es decir que es después de [crear el proyecto](./create-pintos-pj) y si va
utilizar [dev containers](./devcontainer) posterior a dicha configuración (para
realizar cualquiera de las acciones descritas aquí debe estar dentro del contenedor).
:::

## Los archivos que deben tener permisos de ejecución
Hay ciertos archivos que se usan como **scripts** y por eso deben tener permisos
para ejecutarse. Se listan los importantes:

- `utils/pintos`
- `tests/make-grade`
- `utils/pintos-mkdisk`
- `utils/pintos-gdb`
- `utils/backtrace`

:::tip
Hay varias formas de comprobar si un script tiene permisos de ejecución, desde
tratar de ejecutarlo, listar los archivos, etc. En shells modernas al listar los
archivos salen de un color diferente (`ls`), otra forma es utilizar la lista de permisos
para el archivo, un ejemplo sería `ls -l tests/make-grade` y verificar si contiene `x`'s en
la lista de permisos
```bash
-rwxr-xr-x. 1 gbenm gbenm 4096 Jan 28 21:47 tests/make-grade
```
:::

Si un archivo de los listados anteriormente no tiene permisos de ejecución deberá darselos, por
ejemplo si el archivo `tests/make-grade` no tuviera permisos:

```bash
chmod +x tests/make-grade
```

## Todos los archivos deben pertenecer al usuario en uso

Para evitar problemas de permisos se debe tener en cuenta que
todos los archivos del proyecto deben pertencer al usuario
el cuál hace uso de **pintos**. Para verificar esto puede
listar todos los archivos:

```bash
ls -l
```

Si los archivos pertencen al usuario en uso (por ejemplo, si está usando dev containers
el usuario se llama **pintos**) podrá observarlo en todos los archivos.

Si los archivos pertenecen a otro usuario (por ejemplo root) cambie el propietario:

:::tip
Si está usando los dev containers puede simplemente ejecutar:
```bash
sudo chown -R pintos:pintos /pintos
```
:::

1. Salir a la carpeta que contiene la carpeta del proyecto. Si está dentro del proyecto bastará con
  ejecutar:
  ```bash
  cd ..
  ```
2. Cambiar el propietario:
  ```bash
  sudo chown -R USUARIO:USUARIO FOLDER_DEL_PROYECTO
  ```

