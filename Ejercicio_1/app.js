// Ejercicio 1 - Números primos
// Crea un programa que: muestre todos los números primos entre 1 y 50.
// Utiliza ciclos y condicionales para verificar qué números cumplen la condición de ser primos.

import primos from 'prompt-sync';
const prompt = primos();

// Verificar y mostrar números primos entre 1 y 50
console.log("Números primos entre 1 y 50:");

// Iterar a través de los números del 2 al 50
for (let num = 2; num <= 50; num++) {
    let esPrimo = true; // Asumir que el número es primo

    // Verificar si el número es divisible por algún número entre 2 y la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) { // Si es divisible, no es primo
            esPrimo = false; // Marcar como no primo
            break; // Salir del ciclo interno
        }
    }
    
    // Si es primo, mostrar el número
    if (esPrimo) {
        console.log(num);
    }
}