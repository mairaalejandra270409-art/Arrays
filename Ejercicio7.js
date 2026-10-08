//Una app de domicilios pide a los clientes calificar de 1 a 5 estrellas. Leer 10 calificaciones
//validando el rango. Contar cuántas hubo de cada valor usando un array de 5 contadores (no
//cinco variables) y mostrar un gráfico con asteriscos. Mostrar también la calificación más
//frecuente.

function contarPorEstrellas(calificaciones) {
    let contadores = [0, 0, 0, 0, 0];

    for (let i = 0; i < calificaciones.length; i++) {

        let estrella = calificaciones[i];

        contadores[estrella - 1]++;
    }

    return contadores;
}

function repetirCaracter(caracter, veces) {
    let texto = "";

    for (let i = 0; i < veces; i++) {
        texto = texto + caracter;
    }

    return texto;
}

function buscarPosicionMayor(numeros) {
    let posicionMayor = 0;

    for (let i = 1; i < numeros; i++) {
        if (numeros[i] > numeros[posicionMayor]) {
            posicionMayor = i;
        }
    }

    return posicionMayor;
}

let calificaciones = [];

for (let i = 0; i < 10; i++) {

    let calificacion = Number(
        prompt("Calificación " + (i + 1) + ":")
    );

    while (
        isNaN(calificacion) ||
        !Number.isInteger(calificacion) ||
        calificacion < 1 ||
        calificacion > 5
    ) {
        console.log(
            "Calificación inválida. Debe estar entre 1 y 5."
        );

        calificacion = Number(
            prompt("Calificación " + (i + 1) + ":")
        );
    }

    calificaciones.push(calificacion);
}

let contadores =
    contarPorEstrellas(calificaciones);

for (let i = 0; i < contadores; i++) {

    console.log(
        "Estrellas " +
        (i + 1) +
        ": " +
        repetirCaracter("*", contadores[i]) +
        " (" +
        contadores[i] +
        ")"
    );
}

let posicionMayor =
    buscarPosicionMayor(contadores);

console.log(
    "Más frecuente: " +
    (posicionMayor + 1) +
    " estrellas"
);