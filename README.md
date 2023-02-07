# Ejercicios de Node.js en ITAcademy - Sprint 1

Este repositorio contiene  - ejercicios del Sprint 1 realizados en el curso de Node.js en ITAcademy. El sprint incluye los siguientes temas:

    Entorno de Desarrollo
    JavaScript
    Node.js

## Entrega 1.1: Functions & Template Literals
### Nivel 1
- Ejercicio 1

Crea una función que muestre por consola el nombre de usuario/aria al invocarla, pasándole el nombre como parámetro.
### Nivel 2
- Ejercicio 1

Muestra por consola el nombre y apellidos del usuario/aria mediante template literals, guardándolos en variables y referenciándolos en la impresión del mensaje.
- Ejercicio 2

Invocar una función que retorne un valor desde dentro de una template literal.
### Nivel 3
- Ejercicio 1

Crea una matriz de diez funciones y llénala mediante un bucle de manera que cada función cuente de 0 a 9 por la consola. Invoca cada función del array iterativamente. Deberá mostrarse por consola el conteo de 0 a 9 diez veces.
- Ejercicio 2

Crea una función anónima autoinvocable igualada a una variable que muestre por consola el nombre del usuario/aria recibido como parámetro.
## Entrega 1.2: Classes & Arrow Functions
### Nivel 1
- Ejercicio 1

Muestra por la consola el resultado de una arrow function autoinvocable que sume dos números.
### Nivel 2
- Ejercicio 1

Crea una arrow function que, recibido un parámetro, retorne un objeto con un atributo que tenga como valor el parámetro recibido.
- Ejercicio 2

Crea una clase "Persona" que reciba un parámetro 'nombre' al ser instanciada. La clase incluirá un método dirNombre que imprima por consola el parámetro 'nombre'. Invoca el método dirNombre desde fuera de la clase.
### Nivel 3
- Ejercicio 1

Escribe una función constructor de objetos que haga instancias de una clase abstracta. Invócala con diferentes definiciones.
## Entrega 1.3: Promises & Callbacks
### Nivel 1
- Ejercicio 1

Crea una función que retorne una Promise que invoque la función resolve() o reject() que reciba. Invócala pasándole las dos funciones de manera que imprima un mensaje diferente dependiendo de si la Promise se resuelve o no.
### Nivel 2
- Ejercicio 1

Crea una arrow function que reciba un parámetro y una función callback y le pase a la función un mensaje u otro (que se imprimirá por consola) en función del parámetro recibido.
- Ejercicio 2

Dados los objetos employees y salaries, crea una arrow function getEmployee() que retorne una Promise efectuando la búsqueda en el objeto por su id.

```javascript
let employees = [
  { id: 1, name: 'Linux Torvalds' },
  { id: 2, name: 'Bill Gates' },
  { id: 3, name: 'Jeff Bezos' }
];

let salaries = [
  { id: 1, salary: 4000 },
  { id: 2, salary: 1000 },
  { id: 3, salary: 2000 }
];
```
- Ejercicio 3

Crea otra arrow function getSalary() similar a la anterior que reciba como parámetro un objeto employee y retorne su salario.
- Ejercicio 4

Invoca la primera función getEmployee() y después getSalary() anidando la ejecución de las dos promises de manera que se retorne por la consola el nombre del empleado/a y su salario.
### Nivel 3
- Ejercicio 1

Fija un elemento catch a la invocación del  nivel anterior que capture cualquier error y lo muestre por la consola.
## Entrega 1.4: Async / Await
### Nivel 1
- Ejercicio 1

Crea una función asíncrona que reciba un id de empleado y muestre por pantalla el nombre del empleado y su salario, usando las funciones getEmployee() y getSalary() que definiste en la tarea anterior.

- Ejercicio 2

Crea una nueva función asíncrona que llame a otra que devuelva una Promise que ejecute su función resolve() después de 2 segundos de su invocación.

### Nivel 2

- Ejercicio 1

Crea una función que devuelva el doble del número que se le pasa como parámetro después de 2 segundos.

Crea otra función que reciba tres números y calcule la suma de sus dobles utilizando la función anterior.

### Nivel 3

- Ejercicio 1

Forza y captura tantos errores como puedas de los niveles 1 y 2.