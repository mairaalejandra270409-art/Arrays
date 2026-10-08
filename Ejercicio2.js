//Leer las notas de 5 aprendices en escala de 0 a 5. Si una nota está fuera del rango, se vuelve a
//pedir hasta que sea válida. Mostrar todas las notas separadas por comas, el promedio con un
//decimal y si el grupo aprobó (promedio mayor o igual a 3.0).

const notas = [];
for (let i = 0; i < 5; i++) {
    let nota;
    do {
        nota = parseFloat(prompt(`Ingrese la nota del aprendiz ${i + 1} (0 a 5):`));
    } while (nota < 0 || nota > 5);
    notas.push(nota);
}   
const promedio = notas.reduce((acumulador, nota) => acumulador + nota, 0) / notas.length;
    
console.log(`Notas: ${notas.join(", ")}`);
console.log(`Promedio: ${promedio.toFixed(1)}`);
if (promedio >= 3.0) {
    console.log("El grupo aprobó.");
}

