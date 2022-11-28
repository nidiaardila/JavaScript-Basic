// Crea un nuevo proyecto de Node

// - Instala la dependencia Winston

const winston = require("winston");

const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
  ],
});

// - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado

const miFuncion = val => {
    if (typeof val === "number") {
        return val * val * val
    }
    throw new Error("El valor debe ser de tipo número")
}

const multi = miFuncion(2)
console.log(multi);


// - Registra el error en un archivo a través de un try...catch

try {
    console.log("Está ejecutándose de manera correcta")
    const triplica = miFuncion(3)
    console.log(triplica)
} catch (e) {
    console.error(`El valor de e es: ${e}`)
    console.error("ERROR!")
} finally {
    console.log("Esto se va a ejecutar tanto si se produce algún error, como si no existe ninguno")
} 