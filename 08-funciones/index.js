// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"

function myFunction(){
    console.log("true")
}

myFunction();

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

setTimeout(function(){
    console.log("Hola soy una promesa");
}, 5000)

// - Una función generadora de índices pares automáticos

function* generaPar(){
    let par = 0;
    while(true){
        par +=2
        yield par
    }  
}

const gen = generaPar();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
