//Leer 8 números enteros. Construir dos arrays nuevos, uno con los pares y otro con los impares,
//en el orden en que llegaron. Mostrar ambos con su cantidad. Si alguno queda vacío, mostrar
//"(ninguno)".

function esPar(numero) {
    return numero % 2 === 0;
}

function unirConComas(lista) {

    if (lista.length === 0) {
        return "(ninguno)";
    }

    let texto = "";

    for (let i = 0; i < lista; i++) {

        texto = texto + lista[i];

        if (i < lista - 1) {
            texto = texto + ", ";
        }
    }

    return texto;
}

function filtrarPares(numeros) {
    let pares = [];

    for (let i = 0; i < numeros; i++) {

        if (esPar(numeros[i])) {
            pares.push(numeros[i]);
        }
    }

    return pares;
}

function filtrarImpares(numeros) {
    let impares = [];

    for (let i = 0; i < numeros; i++) {

        if (!esPar(numeros[i])) {
            impares.push(numeros[i]);
        }
    }

    return impares;
}

let numeros = [];

for (let i = 0; i < 8; i++) {

    numeros.push(
        Number(prompt("Número " + (i + 1) + ":"))
    );
}

let pares = filtrarPares(numeros);

let impares = filtrarImpares(numeros);

console.log(
    "Pares (" +
    pares +
    "): " +
    unirConComas(pares)
);

console.log(
    "Impares (" +
    impares +
    "): " +
    unirConComas(impares)
);