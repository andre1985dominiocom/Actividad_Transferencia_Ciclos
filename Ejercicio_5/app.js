// Ejercicio 5 - Tienda de productos
// Crea un programa que: simule la venta de productos.
// El usuario podrá registrar la compra de varios artículos hasta que decida no comprar más.
// Se debe calcular el total de la compra y aplicar un descuento del 10% si el valor supera los $100.000.

import tienda from 'prompt-sync';

const prompt = tienda();

// Variables para el total de la compra y control del ciclo
let totalCompra = 0;
let continuarComprando = true;

// Ciclo para registrar productos
while (continuarComprando) {
    const nombreProducto = prompt('Ingresar el nombre del producto: ');
    const precioProducto = parseFloat(prompt('Ingresar el precio del producto: '));

    // Validar el precio y agregar al total
    if ((precioProducto) && precioProducto > 0) {
        totalCompra += precioProducto;
        console.log(`Producto "${nombreProducto}" agregado. Precio: $${precioProducto}`);
    } else {
        console.log('Precio inválido. Por favor, ingrese un número válido.');
    }

    // Preguntar si desea agregar otro producto
    const respuesta = prompt('¿Desea agregar otro producto? (s/n): ').toLowerCase();
    if (respuesta !== 's') {
        continuarComprando = false;
    }
}

// Aplicar descuento si corresponde
if (totalCompra > 100000) {
    const descuento = totalCompra * 0.10;
    totalCompra -= descuento;
    console.log(`Se ha aplicado un descuento del 10%. Monto descontado: $${descuento}`);
}

// Mostrar el total final de la compra
console.log(`El total de la compra es: $${totalCompra}`);