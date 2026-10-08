//Un local de empanadas registra sus ventas diarias. El programa arranca con este array fijo:
//let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado",
//"Domingo"];
//Pedir la venta de cada día usando el nombre del día en el mensaje, guardarlas en otro array y
//mostrar un reporte día por día con el total de la semana.

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const ventas = [];
for (let i = 0; i < dias.length; i++) {
    const venta = parseFloat(prompt(`Ingrese la venta del día ${dias[i]}:`));
    ventas.push(venta);
}

console.log("Reporte de ventas diarias:");
let totalSemana = 0;
for (let i = 0; i < dias.length; i++) {
    console.log(`${dias[i]}: $${ventas[i]}`);
    totalSemana += ventas[i];
}
console.log(`Total de ventas de la semana: $${totalSemana}`);

