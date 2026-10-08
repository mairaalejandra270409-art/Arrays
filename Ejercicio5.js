//Copia la lectura del ejercicio 4. Mostrar el día con mayor venta, el día con menor venta y la
//diferencia entre ambos 

//let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado",
//"Domingo"];

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

function leerventas(dias) {
let ventas = [];
 for (let i = 0; i < dias.length; i++) {
   let venta = number(prompt ("ventas del " + dias[i] + ":"));
   venta.push(ventas);
}
  
return ventas;
}
function  buscarposicionmayor(numeros) {
    let posicionmayor = 0;

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numeros[posicionmayor]) {
            posicionmayor = i;
        }
    }
    return posicionmayor;
}
    function buscarposicionmenor(numeros) {
    let posicionmenor = 0;
        
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < numeros[posicionmenor]) {
            posicionmenor = i;
        }
    }
    return posicionmenor;
}
 let ventas = leerventas(dias); 

 let posicionmayor = buscarposicionmayor(ventas);
 let posicionmenor = buscarposicionmenor(ventas);

 let diferencia = ventas[posicionmayor] - ventas[posicionmenor];

 console.log("El día con mayor venta es: " + dias[posicionmayor] + " con $" + ventas[posicionmayor]);
 console.log("El día con menor venta es: " + dias[posicionmenor] + " con $" + ventas[posicionmenor]);
 console.log("La diferencia entre ambos días es: $" + diferencia);
