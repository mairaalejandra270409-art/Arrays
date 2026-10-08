//Leer las distancias en kilómetros de N pedidos del día. El envío es gratis hasta 3 km y la
//cobertura máxima es de 10 km. Con filter, obtener los pedidos con envío gratis. Con find, el
//primer pedido fuera de cobertura. Mostrar también cuántos pedidos pagan envío (más de 3 km
//y hasta 10 km). Si ningún pedido está fuera de cobertura, mostrar "Todos los pedidos están en
//cobertura".

function obtenerEnvioGratis(distancias) {

    return distancias.filter(
        (distancia) => distancia <= 3
    );
}

function contarConEnvio(distancias) {

    let pedidos =
        distancias.filter(
            (distancia) =>
                distancia > 3 &&
                distancia <= 10
        );

    return pedidos.length;
}

function buscarPrimeroFuera(distancias) {

    return distancias.find(
        (distancia) => distancia > 10
    );
}

function unirConComas(lista) {

    let texto = "";

    for (let i = 0; i < lista.length; i++) {

        texto = texto + lista[i];

        if (i < lista.length - 1) {
            texto = texto + ", ";
        }
    }

    return texto;
}

let cantidad =
    Number(prompt("¿Cuántos pedidos?"));

while (
    cantidad < 1 ||
    !Number.isInteger(cantidad)
) {
    cantidad =
        Number(
            prompt(
                "Cantidad inválida. ¿Cuántos pedidos?"
            )
        );
}

let distancias = [];

for (let i = 0; i < cantidad; i++) {

    let distancia =
        Number(
            prompt(
                "Distancia " + (i + 1) + ":"
            )
        );

    while (
        isNaN(distancia) ||
        distancia < 0
    ) {
        distancia =
            Number(
                prompt(
                    "Distancia inválida. Distancia " +
                    (i + 1) +
                    ":"
                )
            );
    }

    distancias.push(distancia);
}

let gratis =
    obtenerEnvioGratis(distancias);

let fuera =
    buscarPrimeroFuera(distancias);

console.log(
    "Envío gratis (" +
    gratis +
    "): " +
    unirConComas(gratis)
);

console.log(
    "Pagan envío: " +
    contarConEnvio(distancias)
);

if (fuera === undefined) {

    console.log(
        "Todos los pedidos están en cobertura"
    );

} else {

    console.log(
        "Primer pedido fuera de cobertura: " +
        fuera +
        " km"
    );
}