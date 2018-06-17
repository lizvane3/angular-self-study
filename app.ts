// Un archivo simple de TypeScript
function saludar (nombre: any)
{
  console.log("Hola "+nombre.toUpperCase());
}

var wolverine ={
  nombre: "Logan"
};

saludar(wolverine.nombre);

function getNombre()
{
  return "Liz V";
}

let nombre:string = "Liz";
let apellido:string = "Camacho";
let edad:number = 29;

let texto =`Hola
${nombre} ${apellido} tu edad es: ${edad}`;

let texto2:string = `${getNombre()}`;
console.log(texto);
console.log(texto2);

//////////
function activar (quien:string, objeto:string ="batisenal", momento?:string)
{
  let mensaje:string;
  if(momento)
  {
    mensaje = `${quien} activó la ${objeto} en la ${momento}`;
  }else
  {
    mensaje = `${quien} activó la ${objeto} `;
  }
  console.log(mensaje);
}

activar("Gordon","alarma","madrugada");

let avengers:string[] = ["Thor","Steve","Tony"];

let [thor, capitan, ironman] = avengers;

console.log(capitan);

let prom1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Promesa ejecutada");

    resolve();

    //Si algo sale mal
     reject();
  }, 1500)
})

prom1.then(function(){
  console.log("Ejecutar cuando termine bien");
},
function(){
  console.log("Ejecutar cuando salga mal");
})
