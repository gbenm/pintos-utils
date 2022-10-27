---
sidebar_position: 2
---
# Instalación

## Descargar el script

Diríjase a `<directorio-pintos>/pintos/utils` con el objetivo que tal como los otros scripts, pueda utilizarse de forma global (note que esta ruta es un ejemplo).

```bash
cd ~/pintos/utils # si está en el home del usuario
```

Utilice **curl** para descargar el script:

```bash
curl -fsSLo pintosph https://git.io/J3NAP && chmod +x pintosph
```

:::info
Si no tiene instalado **curl** proceda a instalarlo. Por la naturaleza del proyecto probablemente se encuentre en Ubuntu 16, por lo que bastará con _`sudo apt install curl`_
:::

## Bash o Zsh

Dirijase hacia a su **home** y edite nuevamente el archivo que corresponde a la configuración del entorno de su terminal, normalmente se llama `.bashrc` (note que es un archivo oculto). Si utiliza **zsh** en vez de **bash** su archivo es `.zshrc` si no tiene ni idea que es **zsh** no se preocupe por eso, simplemente edite `.bashrc` (pintosph únicamente funciona con estos 2).

Ahora agregue las siguiente lineas en el archivo que corresponde a su situación.

```bash showLineNumbers
export PINTOS_HOME=~/pintos # coloque la ruta al código fuente del pj
PINTOSPH="" # stop@000001

export PINTOSPH
```

Y refresque las configuraciones, si está usando bash utilice:

```bash
source ~/.bashrc
```

:::caution
Es de vital importancia que copie exactamente la **linea 2** porque el script utiliza una expresión regular basada en el comentario para localizar y reemplazar la linea, la **linea 4** es importante para exportar la variable, pero no tiene ninguna implicación en la búsqueda y sustitución de la fase.
:::

Al final su archivo se verá similar a lo de abajo.

```bash {5-6} showLineNumbers title='&#126;/.bashrc'
... # cosas que tiene el archivo

export PATH=$PATH:/home/benyamin/pintos/utils

export PINTOS_HOME=~/pintos
PINTOSPH="" # stop@000001

export PINTOSPH
```

:::info
La **linea 3** ya debería estar en su archivo si ya instaló el proyecto así que sólo se puso de indicador.
:::

:::tip
Sí, exactamente, PINTOSPH tiene un valor vacío al inicio, no se preocupe, de eso se encarga **pintosph.**
:::

:::info
Recuerde que: **kernel.bin** y **loader.bin** se generan siempre en <**fase>/build,** por ejemplo para la fase **threads** deberá buscarlos como **threads/build/kernel.bin** y **threads/build/loader.bin**
:::

:::caution
La sección de [Bash o Zsh](install/#bash-o-zsh) es necesario que cada miembro del grupo lo realice en su propio archivo, los demás pasos sólo necesitan ser hechos una vez.
:::

## Archivo Pintos.pm

Diríjase hacia este archivo, y en vez de colocar un **path absoluto** a su computadora, lo haremos funcionar para cualquier ordenador que coloque el proyecto en el mismo lugar relativo al **home.** Si no ha modificado el archivo se verá como el siguiente, la linea de interés es la **linea 8** en el caso de abajo, en el archivo real está alrededor de la 362.

```perl title="&#126;/pintos/utils/Pintos.pm" showLineNumbers {8}
# read_loader($file_name)
#
# Reads and returns the first $LOADER_SIZE bytes in $file_name.
# If $file_name is undefined, tries to find the default loader.
# Makes sure that the loader is a reasonable size.
sub read_loader {
    my ($name) = @_;
    $name = find_file ("loader.bin") if !defined $name;
    die "Cannot find loader\n" if !defined $name;
    my ($handle);
    open ($handle, '<', $name) or die "$name: open: $!\n";
    -s $handle == $LOADER_SIZE || -s $handle == 512
      or die "$name: must be exactly $LOADER_SIZE or 512 bytes long\n";
    $loader = read_fully ($handle, $name, $LOADER_SIZE);
    close ($handle) or die "$name: close: $!\n";
    return $loader;
}
```

Y prosiga a dejar la **linea 8** similar a la **linea 8** del siguiente bloque.

```perl title="&#126;/pintos/utils/Pintos.pm" showLineNumbers {8}
# read_loader($file_name)
#
# Reads and returns the first $LOADER_SIZE bytes in $file_name.
# If $file_name is undefined, tries to find the default loader.
# Makes sure that the loader is a reasonable size.
sub read_loader {
  my ($name) = @_;
  $name = find_file ($ENV{"PINTOS_HOME"} . "/" . $ENV{"PINTOSPH"} . "/build/loader.bin") if !defined $name;
  die "Cannot find loader\n" if !defined $name;
  my ($handle);
  open ($handle, '<', $name) or die "$name: open: $!\n";
  -s $handle == $LOADER_SIZE || -s $handle == 512
    or die "$name: must be exactly $LOADER_SIZE or 512 bytes long\n";
  $loader = read_fully ($handle, $name, $LOADER_SIZE);
  close ($handle) or die "$name: close: $!\n";
  return $loader;
}
```

Lo que se hizo es que la instrucción `$ENV{"PINTOS_HOME"}` en Perl, saca el path hacia el proyecto (usted definió esta variable), es decir que es equivalente al `~/pintos`, el `.` sirve para concatenar `strings` y exactamente como lo pensó `$ENV{"PINTOSPH"}` saca el valor de la variable que definió en el paso anterior :ok\_hand: , como ejemplo particular tomemos **home** de Pedro, el decidió ponerle a su usuario pedro, por lo que el path hacia su _home es_ `/home/pedro`  y que Pedro descargó la versión de la [guía del frijol](https://hernandez-kevin.gitbook.io/la-guia-del-frijol/) por lo que `pintos` es la carpeta raíz de los archivos fuente (la versión de original tiene `pintos/src`como punto de partida), actualmente Pedro debe comenzar en **threads** para empezar la batalla contra la fase 1. Después de haber [cambiado de fase](change-phase) a **threads** la **linea 8** equivaldría a lo siguiente:

* `$ENV{"PINTOS_HOME"}` -> /home/pedro/pintos
* `$ENV{"PINTOSPH"}` -> threads

`"/home/pedro/pintos" + "/" + "threads" + "/build/loader.bin"`

`"/home/pedro/pintos/threads/build/loader.bin"`

Y de esa forma no depende de la computadora de Pedro, sino de la dirección relativa.

## Archivo pintos

Debe repetir lo anterior, pero con el archivo `utils/pintos`. La linea de importancia es la **linea 6** (la real es aproximadamente la 257)

```perl title="&#126;/pintos/utils/pintos" {6} showLineNumbers
# Locates the files used to back each of the virtual disks,
# and creates temporary disks.
sub find_disks {
 # Find kernel, if we don't already have one.
 if (!exists $parts{KERNEL}) {
   my $name = find_file ('kernel.bin');
   die "Cannot find kernel\n" if !defined $name;
   do_set_part ('KERNEL', 'file', $name);
 }

 ...
}
```

```perl title="&#126;/pintos/utils/pintos" {6} showLineNumbers
# Locates the files used to back each of the virtual disks,
# and creates temporary disks.
sub find_disks {
  # Find kernel, if we don't already have one.
  if (!exists $parts{KERNEL}) {
    my $name = find_file ($ENV{"PINTOS_HOME"} . '/' . $ENV{"PINTOSPH"} . '/build/kernel.bin');
    die "Cannot find kernel\n" if !defined $name;
    do_set_part ('KERNEL', 'file', $name);
  }

 ...
}
```

