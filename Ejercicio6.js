//El programa tiene la lista fija de invitados:
//let invitados = ["ana", "carlos", "luisa", "pedro", "sofía"];
//El portero escribe nombres y para cada uno el programa dice si puede entrar. Termina cuando
//escribe "fin". Al final muestra cuántos entraron y cuántos fueron rechazados. Prohibido

let invitados = [
    "ana",
    "carlos",
    "luisa",
    "pedro",
    "sofía"
];

function existeEnLista(lista, valor) {
    let encontrado = false;
    let i = 0;

    while (i < lista.length && !encontrado) {
        if (lista[i] === valor) {
            encontrado = true;
        }

        i++;
    }

    return encontrado;
}

let nombre = "";
let entraron = 0;
let rechazados = 0;

while (nombre !== "fin") {

    nombre = prompt("Nombre:")();

    if (nombre !== "fin") {

        if (existeEnLista(invitados, nombre)) {
            console.log(nombre + " puede entrar");
            entraron++;
        } else {
            console.log(
                nombre + " no está en la lista"
            );

            rechazados++;
        }
    }
}

console.log("Entraron: " + entraron);
console.log("Rechazados: " + rechazados);