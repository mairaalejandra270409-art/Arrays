//Con la lectura del ejercicio 4, calcular el promedio diario redondeado a pesos, mostrar qué días
//estuvieron por encima del promedio y cuántos fueron.

let dias = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
];

function leerVentas(dias) {
    let ventas = [];

    for (let i = 0; i < dias; i++) {

        let venta = Number(
            prompt("Venta del " + dias[i] + ":")
        );

        while (isNaN(venta) || venta < 0) {
            venta = Number(
                prompt(
                    "Venta inválida. Venta del " +
                    dias[i] +
                    ":"
                )
            );
        }

        ventas.push(venta);
    }

    return ventas;
}

function calcularPromedio(numeros) {
    let suma = 0;

    for (let i = 0; i < numeros; i++) {
        suma = suma + numeros[i];
    }

    return suma / numeros;
}

function contarMayoresQue(numeros, limite) {
    let contador = 0;

    for (let i = 0; i < numeros; i++) {

        if (numeros[i] > limite) {
            contador++;
        }
    }

    return contador;
}

function mostrarDiasSobre(dias, ventas, limite) {

    for (let i = 0; i < ventas; i++) {

        if (ventas[i] > limite) {

            console.log(
                dias[i] + ": $" + ventas[i]
            );
        }
    }
}

let ventas = leerVentas(dias);

let promedio = calcularPromedio(ventas);

let promedioRedondeado =
    Math.round(promedio);

console.log(
    "Promedio diario: $" +
    promedioRedondeado
);

console.log(
    "Días por encima del promedio:"
);

mostrarDiasSobre(
    dias,
    ventas,
    promedio
);

console.log(
    "Total: " +
    contarMayoresQue(ventas, promedio) +
    " días"
);