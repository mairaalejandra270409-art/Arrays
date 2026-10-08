//Leer N palabras. Crear una función que retorne un array nuevo con las palabras en orden
//inverso, sin modificar el original y sin usar reverse. Mostrar ambos arrays para demostrar que
//el original quedó igual.

function unirConComas(lista) {
    let texto = "";

    for (let i = 0; i < lista; i++) {

        texto = texto + lista[i];

        if (i < lista- 1) {
            texto = texto + ", ";
        }
    }

    return texto;
}

function invertir(lista) {
    let invertido = [];

    for (let i = lista.length - 1; i >= 0; i--) {
        invertido.push(lista[i]);
    }

    return invertido;
}

let cantidad =
    Number(prompt("¿Cuántas palabras?"));

while (
    cantidad < 1 ||
    !Number.isInteger(cantidad)
) {
    cantidad =
        Number(prompt(
            "Cantidad inválida. ¿Cuántas palabras?"
        ));
}

let palabras = [];

for (let i = 0; i < cantidad; i++) {

    palabras.push(
        prompt("Palabra " + (i + 1) + ":")
    );
}

let invertido = invertir(palabras);

console.log(
    "Original: " +
    unirConComas(palabras)
);

console.log(
    "Invertido: " +
    unirConComas(invertido)
);