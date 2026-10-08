//Reescribe mostrarLista del ejercicio 1 usando forEach en lugar de for. La salida debe ser
//idéntica. Al final del archivo, responde en un comentario: ¿se puede detener un forEach a la
//mitad, como hiciste en existeEnLista? ¿Qué te dice eso sobre cuándo usarlo y cuándo no?

function leerProductos(cantidad) {

    let productos = [];

    for (let i = 0; i < cantidad; i++) {

        productos.push(
            prompt("Producto " + (i + 1) + ":")
        );
    }

    return productos;
}

function mostrarLista(productos) {

    console.log("Lista del mercado:");

    productos.forEach((producto, i) => {

        console.log(
            (i + 1) + ". " + producto
        );
    });

    console.log(
        "Total: " +
        productos+
        " productos"
    );
}

let cantidad =
    Number(prompt("¿Cuántos productos?"));

while (
    cantidad < 1 ||
    !Number(cantidad)
) {
    cantidad =
        Number(
            prompt(
                "Cantidad inválida. ¿Cuántos productos?"
            )
        );
}

let productos =
    leerProductos(cantidad);

mostrarLista(productos);
