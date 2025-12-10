// Ejercicio 7 - Contador de pares e impares
// Crea un programa que: permita al usuario ingresar 10 números.
// Al final, muestra cuántos fueron pares y cuántos impares.

import contador from 'prompt-sync';

// Configurar prompt para entrada de usuario
const prompt = contador();

// Inicializar contadores
let contadorPares = 0;
let contadorImpares = 0;

// Bucle para ingresar 10 números
for (let i = 0; i < 10; i++) {
    // Solicitar número al usuario
    const numero = parseInt(prompt(`Ingresar el número ${i + 1}: `), 10);

    // Verificar si el número es par o impar
    if (numero % 2 === 0) {
        contadorPares++;
    } else {
        contadorImpares++;
    }
}

// Mostrar resultados
console.log(`Cantidad de números pares: ${contadorPares}`);
console.log(`Cantidad de números impares: ${contadorImpares}`);