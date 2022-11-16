//calcular el factorial de 10 utilizando un bucle while

let fac=1;
let contador = 1;

while (contador <= 10){
    fac *= contador;
    contador++;
}
console.log("factorial de 10 es = "+ fac);