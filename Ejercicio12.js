//En una fila de turnos, rotar k posiciones a la derecha significa que los últimos k pasan al inicio.
//Leer N nombres y el valor de k, y retornar un array nuevo rotado. k puede ser mayor que N:
//rotar 7 en una fila de 5 es lo mismo que rotar 2.

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

function rotarDerecha(lista, k) {

    let rotado = [];

    let cantidad = lista.length;

    k = k % cantidad;

    for (let i = 0; i < cantidad; i++) {

        let nuevaPosicion =
            (i + k) % cantidad;

        rotado[nuevaPosicion] =
            lista[i];
    }

    return rotado;
}

let cantidad =
    Number(prompt("¿Cuántas personas?"));

while (
    cantidad < 1 ||
    !Number.isInteger(cantidad)
) {
    cantidad =
        Number(prompt(
            "Cantidad inválida. ¿Cuántas personas?"
        ));
}

let personas = [];

for (let i = 0; i < cantidad; i++) {

    personas.push(
        prompt("Persona " + (i + 1) + ":")
    );
}

let k =
    Number(
        prompt("¿Cuántas posiciones rotar?")
    );

while (
    isNaN(k) ||
    !Number.isInteger(k) ||
    k < 0
) {
    k =
        Number(
            prompt(
                "Valor inválido. ¿Cuántas posiciones rotar?"
            )
        );
}

let rotada =
    rotarDerecha(personas, k);

console.log(
    "Fila original: " +
    unirConComas(personas)
);

console.log(
    "Fila rotada: " +
    unirConComas(rotada)
);