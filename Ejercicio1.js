//Pedir cuántos productos se van a comprar, leer el nombre de cada uno y guardarlos en un
//array. Al final mostrar la lista numerada desde 1 y el total de productos.

const cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos que va a comprar:"));
const productos = [];

for (let i = 0; i < cantidadProductos; i++) {
    const producto = prompt(`Ingrese el nombre del producto ${i + 1}:`);
    productos.push(producto);
}

console.log("Lista de productos:");
for (let i = 0; i < productos.length; i++) {
    console.log(`${i + 1}. ${productos[i]}`);
}   
console.log(`Total de productos: ${productos.length}`);
 
    