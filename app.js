"use strict";
// Un archivo simple de TypeScript
function saludar(nombre) {
    console.log("Hola " + nombre.toUpperCase());
}
var wolverine = {
    nombre: "Logan"
};
saludar(wolverine.nombre);
function getNombre() {
    return "Liz V";
}
var nombre = "Liz";
var apellido = "Camacho";
var edad = 29;
var texto = "Hola\n" + nombre + " " + apellido + " tu edad es: " + edad;
var texto2 = "" + getNombre();
console.log(texto);
console.log(texto2);
//////////
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batisenal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activ\u00F3 la " + objeto + " ";
    }
    console.log(mensaje);
}
activar("Gordon", "alarma", "madrugada");
var avengers = ["Thor", "Steve", "Tony"];
var thor = avengers[0], capitan = avengers[1], ironman = avengers[2];
console.log(capitan);
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa ejecutada");
        resolve();
        //Si algo sale mal
        reject();
    }, 1500);
});
prom1.then(function () {
    console.log("Ejecutar cuando termine bien");
}, function () {
    console.log("Ejecutar cuando salga mal");
});
