---
sidebar_position: 1
---
# Pintos Phase

:::caution
Personalmente no recomiendo estar tocando estos archivos, en primer lugar
porque la implementación original funciona correctamente sin necesidad
de hacer esto, además que ganas la obligación de estar cambiando la fase
actual para seleccionar el **kernel** y **loader** correctos,
cosa que es importante porque dependiendo de en que fase estés `make` compila
diferentes archivos, también activa macros, etc.
:::

## Introducción

En el transcurso del desarrollo de su implementación de Pintos tendrá que cambiar de kernel.bin y loader.bin dependiendo de la fase que esté trabajando, si optó por la solución que le permite ejecutar correctamente pintos desde cualquier lugar la recomendación es dejar los archivos con paths relativos a uno ubicación, para evitar estar tocando los archivos para únicamente cambiar el directorio de trabajo, este script se ha creado para cambiar el directorio basado en la variable $PINTOSPH que tendrá que definir adelante.
