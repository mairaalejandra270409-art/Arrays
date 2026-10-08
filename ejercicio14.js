//Leer los precios de N productos sin IVA. Generar con map un array nuevo con el precio más
//IVA del 19%, redondeado a pesos con Math.round. Mostrar ambos arrays y el total con IVA.
//Escribe también la versión con for en otra función y comprueba que las dos den el mismo
//resultado.

function calcularConIva(precio) {

    return Math.round(
        precio * 1.19
    );
}

function aplicarIvaConMap(precios) {

    return precios.map(
        (precio) => calcularConIva(precio)
    );
}

function aplicarIvaConFor(precios) {

    let preciosConIva = [];

    for (let i = 0; i < precios; i++) {

        preciosConIva.push(
            calcularConIva(precios[i])
        );
    }

    return preciosConIva;
}

function calcularTotal(numeros) {

    let suma = 0;

    for (let i = 0; i < numeros; i++) {

        suma = suma + numeros[i];
    }

    return suma;
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

let cantidad =
    Number(prompt("¿Cuántos productos?"));

while (
    cantidad < 1 ||
    !Number.isInteger(cantidad)
) {
    cantidad =
        Number(
            prompt(
                "Cantidad inválida. ¿Cuántos productos?"
            )
        );
}

let precios = [];

for (let i = 0; i < cantidad; i++) {

    let precio =
        Number(
            prompt("Precio " + (i + 1) + ":")
        );

    while (
        isNaN(precio) ||
        precio < 0
    ) {
        precio =
            Number(
                prompt(
                    "Precio inválido. Precio " +
                    (i + 1) +
                    ":"
                )
            );
    }

    precios.push(precio);
}

let preciosConMap =
    aplicarIvaConMap(precios);

let preciosConFor =
    aplicarIvaConFor(precios);

console.log(
    "Sin IVA: " +
    unirConComas(precios)
);

console.log(
    "Con IVA: " +
    unirConComas(preciosConMap)
);

console.log(
    "Versión con for: " +
    unirConComas(preciosConFor)
);

console.log(
    "Total con IVA: $" +
    calcularTotal(preciosConMap)
);