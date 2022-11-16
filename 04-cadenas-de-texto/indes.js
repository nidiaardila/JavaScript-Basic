// Crea un archivo JS que contenga las siguientes líneas

// - Una cadena de texto con tu Nombre

let nombre = "Nidia";
console.log(nombre);

// - Otra cadena de texto con tu Apellido

let apellido = "Ardila";
console.log(apellido);

// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

let estudiante = `${nombre} ${apellido}`;
console.log(estudiante);

// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

let numeroCaracteres = estudiante.length;
console.log("Numero de caracteres de la variable estudiante es = " + numeroCaracteres);

// - Una variable que contenga la primera letra del Nombre

let first = nombre.charAt(0);
console.log("La primera letra del nombre es = " + first);

// - Otra variable que contenga la última letra del Apellido

let last = nombre.slice(-1);
console.log("La ultima letra del nombre es = " + last);

// - Una cadena de texto que elimine los espacios de la variable "estudiante"

console.log(estudiante.trim());

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

console.log(estudiante.includes("Nidia"));