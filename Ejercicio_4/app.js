// Ejercicio 4 - Promedio de notas
// Crea un programa que: lea las notas de 5 estudiantes. Calcula el promedio de cada uno y determina,
// mediante condicionales, si aprueba (nota ≥ 3.0) o reprueba.
// Usa ciclos para ingresar los datos de manera ordenada.

import notas from 'prompt-sync';

const prompt = notas();

// Número de estudiantes
const numeroEstudiantes = 5;

// Ciclo para cada estudiante
for (let i = 1; i <= numeroEstudiantes; i++) {
    console.log(`\nEstudiante ${i}:`);
    
    // Suma de notas para el estudiante actual
    let sumaNotas = 0;
    
    // Ciclo para ingresar 3 notas
    for (let j = 1; j <= 3; j++) {
        const nota = parseFloat(prompt(`Ingresar la nota ${j}: `));
        sumaNotas += nota;
    }
    
    // Calcular promedio
    const promedio = sumaNotas / 3;
    console.log(`Promedio del estudiante ${i}: ${promedio.toFixed(2)}`);
    
    // Determinar si aprueba o reprueba
    if (promedio >= 3.0) {
        console.log("Estado: Aprobado");
    } else {
        console.log("Estado: Reprobado");
    }
}