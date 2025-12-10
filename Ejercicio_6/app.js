// Ejercicio 6 - Juego del adivinador
// Crea un programa que: genere un número aleatorio entre 1 y 20.
// El usuario intentará adivinarlo y el ciclo repetirá los intentos hasta que lo logre.
// Cada vez que falle, el programa debe indicar si el número buscado es mayor o menor que el ingresado.

import juego from 'prompt-sync';

const prompt = juego();

// Generar un número aleatorio entre 1 y 20
const numeroSecreto = Math.floor(Math.random() * 20) + 1;
// Inicializar la variable para almacenar el número ingresado por el usuario
let numeroUsuario = 0;

// Mensaje de bienvenida
console.log("¡Bienvenido al juego del adivinador!");
console.log("He seleccionado un número entre 1 y 20. ¿Puedes adivinar cuál es?");

// Bucle hasta que el usuario adivine el número
while (numeroUsuario !== numeroSecreto) {
    numeroUsuario = parseInt(prompt("Ingresa tu intento: "), 10);

    // Verificar si el número ingresado es mayor, menor o igual al número secreto
    if (numeroUsuario < numeroSecreto) {
        console.log("El número es mayor. Intenta de nuevo.");
    } else if (numeroUsuario > numeroSecreto) {
        console.log("El número es menor. Intenta de nuevo.");
    } else {
        console.log("¡Felicidades! Has adivinado el número.");
    }
}