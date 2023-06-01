// Ejercicios javascript
// Prácticas con variables

// Dificultad:  🟢
// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
//alert("un mensaje");

// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
// document.write("hello world")

// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
// document.write("el resultado es : ",3 + 5);

// 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
// Ejemplo:

// input: Coder
// Output: Hola Coder

// let nombreUsuario = prompt("ingrese nombre de usuario"); document.write("hola " + nombreUsuario);
//
// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// Nota: Tener en cuenta la siguiente función: parseInt
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt

// let primerOperando = parseInt(prompt('Ingresa el primer operando:'));
// let segundoOperando = parseInt(prompt("ingrsa el segundo operando:"));
// document.write(
// "el resltado de la suma es: " + (primerOperando + segundoOperando)
// );

// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// Ejemplo:

// input: 15 , 3

// Output: El 15 es el número más grande

/*valorA = parseInt(prompt('Ingrese el primer numero:'));
valorB = parseInt(prompt('Ingrese el segundo numero:'));
if(valorA >= valorB){
    document.write('El mayor de ambos numeros ingresados es: ', valorA);
}
else
{
    document.write('El mayor de ambos numeros ingresados es: ', valorB);
}*/
//otra solucion

/* let a = prompt("ingrese un numero");
let b = prompt("ingrese otro numero");
a = parseInt(a, 10);
b = parseInt(b, 10);
if (a > b) {
  document.write("El" + a + "es el mayor");
} else {
  document.write("El" + b + "es el mayor");
} */

//solucion 2
/* const number1 = prompt('Ingrese un número');
const number2 = prompt('Ingrese otro número');

if (number1 > number2) {
alert('El número mayor es: ' + number1);
} else if (number1 === number2) {
alert('Son iguales');
} else {
alert('El número mayor es: ' + number2);
} */

// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// Ejemplo:

// input: 15 , 3, 9

// Output: El 15 es el número más grande

//

// 8.- Escribe un programa que pida un número y diga si es divisible por 2
// Ejemplo:

// input: 10
// input: 15
// Output: El 10 es divisible por 2.
// Output: El 15 no es divisible por 2.

// Dificultad:  🟢🟡
// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
// Ejemplo:

// input: Hola mundo
// Output: oauo

// Dificultad:  🟢🟡
// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
// Ejemplo:

// input: 20

// Output: El 20 es divisible por 2.

// Dificultad:  🟢🟡
// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
// Ejemplo:

// input: 20
// input: 210

// Output: El 20 es divisible por 2 y por 5.
// Output: El 210 es divisible por 2, por 3, por 5 y por 7.
