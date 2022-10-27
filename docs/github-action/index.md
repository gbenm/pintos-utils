---
sidebar_position: 1
---
# PintOS Github Checker

## Introducción

El proyecto PintOS consiste en 4 fases y al usar el mismo código fuente
para avanzar se obtiene una dependencia entre las fases, el detalle es que
fácilmente se puede perder el historial de dónde se a introducido un error,
por ejemplo, correr el `make grade` para la fase 1 (threads) tiene un tiempo
de alrededor de 14 minutos para completarse, estar corriendo los tests para
esta fase es realmente tedioso, pero al utilizar Github actions para realizar
CI todo se vuelve más sencillo, ya que este trabajo es delegado a Github, por
lo tanto es una preocupación menos, además que el flujo de desarrollo será
de mejor calidad ya que puede saber que commit o pull request es la causante
del problema.

## Pequeñas cosas a tomar en cuenta
Sabías que puedes solicitar una cuenta **pro** en Github al demostrar que
eres un estudiante, si ya tienes eso es posible que te de igual la siguiente
información:

- Para los repositorios privados tienes un límite de 2000 minutos/mes (puede no estar actualizado
  el dato, pero sólo debes buscar por el límite y te contrarás al información)
  - Es por esto que inicialmente está configurado sólo para funcionar cuándo se hacen push/pull request
    para las ramas **develop**, **main** o **master**
  - Si tienes el permiso de dejar tu repositorio público esta límitación no se aplica o
    si tienes una cuenta **pro** el límite se incrementa

- Dependiendo de tu tipo de cuenta los artifacts y logs tienen una duración de vida
  por ejemplo repos públicos con cuentas free, tiene una duración máxima de 3 meses,
  en el caso de este [repo](https://github.com/gbenm/pintos-tuto/actions/runs/1870113949/jobs/2633029620)
  si intentas expandir "show results" verás que ya no está disponible la información
  y lo único que puedes saber es que el test pasó.
  - Es raro que tengas problemas con esto, porque de por sí no creo que dejes un bug
    sin cubrir por 3 meses.
  - Otra solución que tiene esta guía es poder configurar `asserts` sobre la nota,
    un ejemplo sería, si tu fase threads ya está completa tu assert debería ser
    `grade === 100` o si se tiene una nota de 70 puntos se puede colocar `grade >= 70`

    > `grade >= 70` es porque probablemente se mejore la solución con el paso del tiempo,
    > si se coloca una igualdad, al tener una nota mayor fallará el test

    Como también se tiene acceso a `total` y hay puntos extras si los activas también
    se podría utilizar `grade/total >= ...` después de todo es `Javascript` lo que
    se utiliza para configurarlas.

    Al tener esto puedes estar seguro que tu código cumplía con los requerimientos
    impuestos y si está en verde significa que el resultado estaba dentro de lo esparado

    > Otra técnica que puedes usar para buscar bugs es `git bisect`

