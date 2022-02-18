const archivoDeTareas = require("./funcionesDeTareas")
const command = process.argv[2];

switch (command) {
    case "listar":
        let tareas = archivoDeTareas.leerArchivo();
        for (let i= 0; i < tareas.length;i++){
            console.log(`
            [${i+1}] tarea:${tareas[i].titulo} --- estado: ${tareas[i].estado}
            `) 
}
        break;
    case undefined:
        console.log("pasadme algo")
        break;
    case "help":
    case "-h":
        console.log('comandos habilitados :listar : lista de tareas por hacer help : te ayudo a hacer las cosas bien');
    default:
        console.log("no entiendo")
        break;

}