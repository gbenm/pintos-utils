---
sidebar_position: 4
---
# Archivo pintos.checker.cjs

## Qué es?
:::info
Si había usado pintos checker antes, probablemente tenga el archivo pintos.checker.mjs,
pero el comportamiento no difiere, sigue siendo lo mismo, simplemente se mudó a CommonJS.
:::

Este archivo le permite definir cuándo deben fallar las pruebas, por defecto no fallan a menos que no se produzca ninguna salida o bien que la expresión regular para extraer la nota no funcione (esperemos que esto no suceda xD).

El archivo está escrito en Javascript, pero no se preocupe si no sabe, sólo define condiciones para que sean exitosos sus tests.

## Configurar cuándo se debe fallar

Suponga que ya ha completado la fase de threads, y se encuentra en la de userprog, de la cuál ya lleva 60 y sabe que no debería bajar su nota, entonces puede modificar este archivo para que luzca:

```javascript {2,6}
function threads(grade, total) {
  return grade >= 100
}

function userprog(grade, total) {
  return grade >= 60
}
```
Con lo anterior está definiendo que si su fase 1 baja de 100 (si quiere puede colocar == en vez de >=)
o su fase 2 baja del 60 que ya tiene, esos test deben fallar (cuándo fallan los test, Github envía un
correo) lo que le notificaría que algo no anda bien, note que en el caso de **userprog** si es necesario
colocar `>=` ya que si no, esta condición no sería verdadera, cuándo aumente la nota :).

