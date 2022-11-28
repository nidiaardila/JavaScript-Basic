// Crea un nuevo fichero JS que contenga las siguientes líneas
// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci
// (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función

function fibonacci(num){
    let a=1;
    let b=0;
    let c=1;
    for(i=1;i<=num;i++){
        console.log(c)
        a=b;
        b=c;
        c=a+b;
    }
}
 
fibonacci(6);