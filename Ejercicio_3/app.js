// Ejercicio 3 - Cajero automático
// Crea un programa que: simule un cajero automático.
// El usuario inicia con un saldo definido en una variable constante.
// Podrá retirar dinero varias veces mientras tenga fondos suficientes.
// Si intenta retirar más de lo que tiene, debe aparecer un mensaje de error y no permitir la transacción.

import cajero from 'prompt-sync';

const prompt = cajero();

const saldoInicial = 1000000; // Saldo inicial del usuario
let saldoActual = saldoInicial; // Variable para rastrear el saldo actual

// Mensaje de bienvenida
console.log("Bienvenido al cajero automático.");
console.log(`Su saldo inicial es: $${saldoActual}`);

// Bucle para permitir múltiples retiros
while (true) {
    const retiro = parseFloat(prompt("Ingresar la cantidad a retirar (o 0 para salir): "));

    // Salir si el usuario ingresa 0
    if (retiro === 0) {
        console.log("Gracias por usar el cajero automático. ¡Hasta luego!");
        break;
    }

    // Verificar si hay fondos suficientes
    if (retiro > saldoActual) {
        console.log("Error: Fondos insuficientes para realizar esta transacción.");
    } else if (retiro < 0) {
        console.log("Error: La cantidad a retirar debe ser positiva.");
    } else {
        saldoActual -= retiro;
        console.log(`Retiro exitoso. Su nuevo saldo es: $${saldoActual}`);
    }
}