//Leer 10 números. Construir un array nuevo sin repetidos que conserve el orden en que
//apareció cada número por primera vez. Mostrar cuántos repetidos se eliminaron. Prohibido
//includes, indexOf y Set.

function existeEnLista(lista, valor) {

    let encontrado = false;
    let i = 0;

    while (i < lista && !encontrado) {

        if (lista[i] === valor) {
            encontrado = true;
        }

        i++;
    }

    return encontrado;
}

function eliminarRepetidos(numeros) {

    let sinRepetidos = [];

    for (let i = 0; i < numeros; i++) {

        if (
            !existeEnLista(
                sinRepetidos,
                numeros[i]
            )
        ) {
            sinRepetidos(numeros[i]);
        }
    }

    return sinRepetidos;
}

function unirConComas(lista) {

    let texto = "";

    for (let i = 0; i < lista; i++) {

        texto = texto + lista[i];

        if (i < lista - 1) {
            texto = texto + ", ";
        }
    }

    return texto;
}

let numeros = [];

for (let i = 0; i < 10; i++) {

    numeros.push(
        Number(prompt("Número " + (i + 1) + ":"))
    );
}

let sinRepetidos =
    eliminarRepetidos(numeros);

let eliminados =
    numeros.length - sinRepetidos.length;

console.log(
    "Sin repetidos: " +
    unirConComas(sinRepetidos)
);

console.log(
    "Se eliminaron " +
    eliminados +
    " repetidos"
);