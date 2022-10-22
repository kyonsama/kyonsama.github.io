// 1.1 una variable es un espacio en memoria 
// 1.2 declarar una variable es cuando asignamos una variable pero sin darle un valor e inicializar es cuando ya le damos un valor 

// var nombre; // declarar una variable 
// var nombre = "emanuel" // inicializar una variable es cuando ya se le asigna un valor

// 1.3 al sumar numeros lo hacemos con un operador matematico de suma y solo se puede con datos tipo numero 
// concatenar es para los strings lo cual junta dos string para volverlos en un solo valor

//1.4
3 + 3; 6 //suma 
3 + "3";  33 //concatenar numero con string
"el" + " es"; 'el es' // concatenar strings

//2 
nombre; "string"
apellido; "string"
usuario; "string"
edad; Number
correo; "string"
mayorDeEdad; true 
dineroAhorrado; Number
deudas; Number
//3 
var nombre = "emanuel";
var apellido = " ruiz saldivar";
var usuario = "kyonsama";
var edad = 24;
var correo = "emanuel_raziel129730@hotmail.com"
var mayor = true;
var dineroAhorrado = 1000;
var deuda = 200;

//4
function nombrecompleto(){
    var resultado = nombre + apellido;
    return resultado;
}
function dineroneto(){
    var resultado = dineroAhorrado - deuda;
    return resultado;
}

// funciones 
// 1.1 una funcion es un procedimiento que podemos utilizar para generar una accion ya se de validar o cambiar un tipo de dato a otro totalmente nuevo y para utilizar parametros y argumentos para no tener que hacer tantas variables 
// 1.2 Una funcion me sirve cuando quiero generar un nuevo tipo de dato o una nueva variable y cuando tenemos que reutilizar codigo en otra parte en la que la necesitemos
// 1.3 un parametro es nuestra variable dentro de la funcion cuando todavia no la llamamos
// 1.3 las funciones reciben parametros cuando las creamos y cuando las llamamos se estos parametros se convierten en argumentos

// 2 

function presentacion (name, lastname, completeName, nickname){
    console.log ("Mi nombre es " + completeName, " pero prefiero que me digas " + nickname + ".");
}

presentacion ("Juan David", " Castro Gallego", " Juan David Castro Gallego", " Juandc");

//Condicionales
// 1.1 es una condicion que se debe cumplir para que nuestra function o bloque de codigo dependiendo de alguna condicion o validacion.
// 1.2 else, else if: estos nos permiten hacer validaciones completamente distintas dependiendo si es true o false y podemos utilizar diferentes condiciones o variables. en switch en cambio solo se puede dar una condicional y este tendra muchos casos pero siempre bajo la misma variable o condicion.  
// 1.3 si las funciones pueden encapsular cualquier bloque de codigo, incluyendo condicionales

// 2

const texto = "tu suscripcion es";
const tipoDeSuscripcion = " Basica";

if (tipoDeSuscripcion == "basica") {
    console.log (texto + tipoDeSuscripcion)    
}   else if (tipoDeSuscripcion == "gratis") {
        console.log (texto + tipoDeSuscripcion);
}   else if (tipoDeSuscripcion == "experta"){
    console.log (texto + tipoDeSuscripcion);
}   if (tipoDeSuscripcion == "experta+") 
        console.log(texto + tipoDeSuscripcion);

// 3

const texto = "tu suscripcion es";

function conseguirTipoSuscripcion (suscripcion){
if (suscripcion == "basica") {
    console.log (texto + " " + suscripcion)    
    return;
    }      
    if (suscripcion == "gratis") {
    console.log (texto + " " + suscripcion);
    return;
    }      
    if (suscripcion == "experta"){
    console.log (texto + " " + suscripcion);
    return;
    }       
    if (suscripcion == "experta+") 
        console.log(texto + " " + suscripcion);
    return;
}

const suscripciones = [" basica"," gratis"," experta"," experta+"]

function tipo(suscripcion){
    console.log (texto + suscripcion)
}

for(var i = 0; i < suscripciones.length; i++){
    tipo(suscripciones[i]);
}

//Ciclos
// 1.1 un loop (ciclo) es la forma de hacer que una tarea se repita hasta que se cumpla una condicion.  
// 1.2  for, while, y do while.
// 1.3 es cuando la validacion de nuestras condicionales nunca se da y no tiene fin esto provoca que el programa o lo que sea que estemos haciendo deje de funcionar. 
// 1.4 si

// 2 
let i = 0; 
while (i < 5){
    console.log("el valor de i es " + i);
    i++
}
let y = 5;
while(y >= 2){
    console.log("el valor de y es " + y);
    y--
}
// 3

let r;
while (r != "4") {
    let pregunta = prompt("¿Cuanto es 2 + 2?")
    r = pregunta;
}
// Listas
// 1.1  es un conjunto de datos en una variable 
// 1.2  es un conjunto de datos con propiedades y palabras clave pora si mismos. 
// 1.3  utilizamos arrays cuando tenemos una lista de valores.  utilizamos objetos para agarrar valores especificos mediante sus propiedades. 
// 1.4  si

//2
let numeros = [1, 2, 3, 4, 5,]; 

function primerElemento(numeros){
   for (let i = 0; i < numeros.length; i++)
   console.log(numeros[i])
}

//3
var frutas = ["fresa", "pera", "naranja"];

function elemento(frutas){
    for (i = 0;i < frutas.length; i++)
    console.log(frutas[i])
}

//4
let obj = {
    nombre:"emanuel",
    edad: 3,
    comidasFavoritas: ["hamburguesas " , "hotcakes "]
}

const arr = Object.values(obj)

function primerElementoObjeto(obj){
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++)
    console.log(arr[i])
 }