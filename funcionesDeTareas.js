const fs = require("fs");

let archivoDeTareas = {
    file: "tarea.json",
    leerArchivo(){ 
        return JSON.parse(fs.readFileSync(this.file,"utf-8"))
    }
}
module.exports = archivoDeTareas;