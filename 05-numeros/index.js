// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga tu altura en centímetros (entero)

let alturaCm = 172;

// - Una variable que contenga tu altura en metros (número de coma flotante)

let alturaMts = 1.72;

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)

let peso = 55.5;

// - Una variable que contenga tu altura en metros redondeada hacia arriba

let alturaRedondeada = alturaMts.toFixed();

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo

let pesoRedondeado = Math.floor(peso);

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede
// obtener en Javascript

let nMax = Number.MAX_VALUE;
let nMaxm1 = nMax + 1;

if (nMax === nMaxm1){
    console.log("El máximo valor que se puede obtener en Javascript + 1 es igual al máximo valor que se puede obtener en Javascript")
}

