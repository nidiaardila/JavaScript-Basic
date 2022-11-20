// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

const miCompra = ["leche", "salmon", "camarones", "avena", "arandanos", "granola", "huevos"];
console.log(miCompra);

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

miCompra.push("Aceite de Girasol");
console.log(miCompra);

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

miCompra.pop();
console.log(miCompra);

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const misPeliculas=[
    {titulo: "Forrest Gump", director: "Robert Zemeckis", fecha: 1994},
    {titulo: "Wonder Woman 1984", director: "Patty Jenkins", fecha: 2020},
    {titulo: "Matrix", director: "Andy Wachowski y Larry Wachowski", fecha: 1999},
];
console.log(misPeliculas);

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const posteriores = misPeliculas.filter(obj => obj.fecha >= 2010)
console.log(posteriores);

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const directores = misPeliculas.map(obj =>obj.director)
console.log(directores);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const titulos = misPeliculas.map(obj => obj.titulo)
console.log(titulos);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const directorTitulo = directores.concat(titulos)
console.log(directorTitulo);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const directorTituloP = [...directores, ...titulos]
console.log(directorTituloP);