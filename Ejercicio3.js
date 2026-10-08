//Leer N números (N lo da el usuario y debe ser al menos 1). Mostrar el primero, el último y el del
//medio. Si N es par hay dos del medio: mostrar ambos.

let N;
do {
    N = parseInt(prompt("Ingrese la cantidad de números (al menos 1):"));
} while (N < 1);    

const numeros = [];
for (let i = 0; i < N; i++) {
    const numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
    numeros.push(numero);
}
  
console.log(`Primer número: ${numeros[0]}`);
console.log(`Último número: ${numeros[numeros.length - 1]}`);       

if (N % 2 === 1) {


    
    const medio = Math.floor(N / 2);
    console.log(`Número del medio: ${numeros[medio]}`);
}
 
