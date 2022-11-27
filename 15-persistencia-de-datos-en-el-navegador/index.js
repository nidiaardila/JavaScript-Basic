let nombre = "Nidia";
let apellido ="Ardila";

const misDatos = {
    nombre,
    apellido
}

// sessionStorage.setItem("misDatos", JSON.stringify(misDatos))

// localStorage.setItem("misDatos", JSON.stringify(misDatos))

const ahora = new Date()
// document.cookie=`misDatos=${JSON.stringify(misDatos)}; expira=${new Date(now.getTime()+2*60000)}`