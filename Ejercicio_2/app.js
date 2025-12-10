// Ejercicio 2 - Tabla de multiplicar personalizada
// Crea un programa que: dado un número ingresado por el usuario,
// muestre su tabla de multiplicar hasta el 12.
// El ciclo debe permitir repetir el proceso si el usuario desea consultar otra tabla.

import tablas from 'prompt-sync';

const prompt = tablas();

// Variable para controlar la repetición del proceso
let repetir = 'si';

// Bucle para repetir el proceso mientras el usuario lo desee
while (repetir.toLowerCase() === 'si') {
    const numero = parseInt(prompt('Ingresar un número para ver su tabla de multiplicar: '));

    // Mostrar la tabla de multiplicar del número ingresado
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 12; i++) { // Ciclo desde 1 hasta 12
        console.log(`${numero} x ${i} = ${numero * i}`); // Mostrar el resultado de la multiplicación
    }

    // Preguntar al usuario si desea repetir el proceso
    repetir = prompt('¿Deseas consultar otra tabla? (si/no): ');
}

// Mensaje de despedida
console.log('¡Gracias por usar el programa de tablas de multiplicar!');