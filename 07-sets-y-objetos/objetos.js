// Crea un archivo llamado objetos.js que contenga las siguientes líneas
// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datos = {
    nombre: "Nidia",
    apellido: "Ardila",
    edad: 37,
    altura: 172,
    isDeveloper: true
}
console.log(datos);

// - Una variable que obtenga tu edad a partir del objeto anterior

const edad2 = datos.edad;
console.log(edad2);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

const lista = [
    {
        ...datos
    },{
    nombre: "Miguel",
    apellido: "Mendez",
    edad: 38,
    altura: 175,
    isDeveloper: true   
},{
    nombre: "Maria",
    apellido: "Ligth",
    edad: 35,
    altura: 171,
    isDeveloper: true   
}
]
console.log(lista);

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const listaOrdenada = lista.sort((a,b)=>b.edad - a.edad)

console.log(listaOrdenada);