// Ejercicio 8 - Control de acceso
// Crea un programa que: solicite un usuario y contraseña.
// El programa debe permitir hasta 3 intentos; si el usuario falla en todos,
// mostrar un mensaje de “Acceso denegado”. Si acierta, mostrar “Bienvenido”.

import control from 'prompt-sync';

// Configurar prompt-sync
const prompt = control();

// Usuario y contraseña correctos
const usuarioCorrecto = "admin";
const contrasenaCorrecta = "1234";

// Intentos de acceso
let intentos = 0;
const maxIntentos = 3;
let accesoConcedido = false;

// Bucle de intentos de acceso
while (intentos < maxIntentos) {
    const usuarioIngresado = prompt("Ingresar su usuario: ");
    const contrasenaIngresada = prompt("Ingresar su contraseña: ");

    // Verificar credenciales
    if (usuarioIngresado === usuarioCorrecto && contrasenaIngresada === contrasenaCorrecta) {
        console.log("¡Bienvenido!");
        accesoConcedido = true;
        break;
    } else {
        console.log("Usuario o contraseña incorrectos. Intente de nuevo.");
        intentos++;
    }
}

// Mensaje de acceso denegado si se agotaron los intentos
if (!accesoConcedido) {
    console.log("¡Acceso denegado!");
}