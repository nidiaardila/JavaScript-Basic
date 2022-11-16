//calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

var contador = 1;
var fac = 1;

while (true) {
  fac *= contador;
  contador++;
  if (contador === 10) {
    break;
  }
  
}
console.log("factorial de 10 es = " + fac);