// CLASE 1: SINTAXIS Y VARIABLES

// tiro mensaje en la consola
/*
console.log("Hello world 1");
console.log("Hello world 2");
console.log("Hello world 3");
*/



/*
let numero = 5.2;
let frase = "kbz";
let llave = true;

console.log(numero + frase);
console.log(numero, frase, llave);
*/



/*
// declaración
let nombre;
// asignación
nombre = "Pablo";
let apellido = "Montedóncio";

console.log(nombre + " " + apellido);
alert(nombre + " " + apellido);
*/



/*
nombre = "Leonardo";
console.log(nombre + " " + apellido);
*/


/*
const anioNacimiento = 1975;
console.log(anioNacimiento);
*/



/*
let numeroA = 1;
let numeroB = 2;
const numeroC = 3;

//Suma  de dos números (1 + 2 = 3)
let resultadoSuma  = numeroA + numeroB;
//Resta de dos números (2 - 1 = 1)
let resultadoResta = numeroB - numeroA;
//Producto de dos números (2 * 3 = 6)
let resultadoProducto = numeroB * numeroC;


console.log(resultadoSuma, resultadoResta, resultadoProducto);
*/


/*
let nombreIngresado = prompt("Ingrese su nombre");
alert("Hola " + nombreIngresado);
console.log("Hola " + nombreIngresado);
*/




/*
const valorDolar = 41.30;

let montoIngresado = prompt("Ingrese el monto a comprar dólares ($U " + valorDolar + " c/u)");

let totalDolares =  Number(montoIngresado) / valorDolar;

alert("Usted a compado " + totalDolares + " dóalres americanos.");
console.log( "Usted a compado " + totalDolares + " dóalres americanos." );

alert("Usted a compado " + parseFloat(totalDolares).toFixed(2) + " dóalres americanos.");
console.log( "Usted a compado " + parseFloat(totalDolares).toFixed(2) + " dóalres americanos." );
*/







// CLASE 2 control-de-flujo
// console.log("control-de-flujo");



/*
let nombre = "Pablo";
// if (nombre == "Pablo") console.log("Hola Pablo");
if (nombre == "Pablo") {
    console.log("Hola Pablo");
    console.log("Cómo estás?");
}
*/


/*
let nombre = "Laura";
let edad = 47;
let vivo = true;


// condicional
if (nombre == "Pablo") {
    console.log("Hola Pablo");
}

// condicional en una sola linea sin llaves
if (nombre == "Pablo") console.log("Hola Pablo");

if (edad == 47) console.log("si es la edad de Pablo");
if (edad == "47") console.log("si la variable existe");

if (edad === "47") console.log("te aseguras q string");
if (edad === 47) console.log("te aseguras q sea numero");

if (nombre) {
    console.log("MENSAJE!!!!");
}
*/



/*
let pais = "Uruguay";
let paisMayusculas = pais.toUpperCase();
console.log(pais);
console.log(paisMayusculas);

//let pais = "Perú";

if (pais === "URUGUAY") {
    console.log("Hola Bo!");
} else if (pais === "ARGENTINA") {
    console.log("Hola Chabón!");

} else {
    console.log("de q país sos?");
}
*/

/*
let numero = 5;
let esMayor5 = (numero >= 5); // su valor sera true

if (esMayor5) {
    console.log("Es boolean true");
}

let numero = 11;
if (numero != 10) {
    console.log("No es igual a 10")
}
*/



/*
let nombreUsuario = prompt("Ingresar nombre de usuario");

if (nombreUsuario === "") {
    alert("Debe ingresar su nombre");
} else if (nombreUsuario === null) {
    alert("Debe ingresar su nombre");
} else {
    alert("Hola " + nombreUsuario);
}
*/



/*
let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if( (nombreIngresado != "") && (apellidoIngresado != "") ){
    alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado);
}else{
    alert("Error: Ingresar nombre y apellido");
}
*/



/*
let nombreIngresado = prompt("Ingresar nombre");
if( (nombreIngresado == "ANA") || (nombreIngresado == "ana") || (nombreIngresado == "aNa") || (nombreIngresado == "aNA") || (nombreIngresado == "ANa") || (nombreIngresado == "anA") || (nombreIngresado == "ANa") ){
    alert("Hola Ana");
}else{
    alert("Usted no Ana");
}
*/


/*
let nombreIngresado = prompt("Ingresar nombre");

if( (nombreIngresado !="") &&
        ( (nombreIngresado == "EMA") || (nombreIngresado == "ema")) ) {
    alert("Hola Ema");
}else{
    alert("Error: Ingresar nombre valido");
}
*/












/*
le pido al usuario q ingrese un número del 0 al 9
e imprimo en consola el número escrito
si no es un número del 0 añl 9 tiro un mensaje en la consla
*/


/*
let numeroIngresado = prompt("Ingrese un número del 0 al 9");
// ejemplo con if
if (numeroIngresado == 0) {
    console.log("cero");
} else if (numeroIngresado == 1) {
    console.log("uno");
} else if (numeroIngresado == 2) {
    console.log("dos");
} else if (numeroIngresado == 3) {
    console.log("tres");
} else if (numeroIngresado == 4) {
    console.log("cuatro");
} else if (numeroIngresado == 5) {
    console.log("cinco");
} else if (numeroIngresado == 6) {
    console.log("seis");
} else if (numeroIngresado == 7) {
    console.log("siete");
} else if (numeroIngresado == 8) {
    console.log("ocho");
} else if (numeroIngresado == 9) {
    console.log("nueve");
} else {
    console.log("Ingresó otra cosa, debe ingresar un número del 0 al 9, recargue la página.");
}
*/

/*
// ejemplo con switch
switch(Number(numeroIngresado)) {
    case 0:
    console.log("cero");
    break;

    case 1:
    console.log("uno");
    break;

    case 2:
    console.log("dos");
    break;

    case 3:
    console.log("tres");
    break;

    case 4:
    console.log("cuatro");
    break;

    case 5:
    console.log("cinco");
    break;

    case 6:
    console.log("seis");
    break;

    case 7:
    console.log("siete");
    break;

    case 8:
    console.log("ocho");
    break;

    case 9:
    console.log("nueve");
    break;

    default:
    console.log("Ingresó otra cosa, debe ingresar un número del 0 al 9, recargue la página.");
    break;
}





/*
if (2+2 == 4) {
    console.log("esta lina se ejecuta")
}
*/

/*
// typeof nombre
// dice el tipo de datop console
let nombre = "Pablo"; // string
let numero = 3 + 4; // number
let llave = true // Boolean

// declarar una variable la asigna en true
let papafrita;

let numero2 = 0;

// 0 cero es false
if (numero2 == false) {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
}
if (papafrita === undefined) {
    console.log("papafrita");
}
*/



/*
let a = 5;
let b = 15;
let c = 30;
if ( (a+b) >= 20 ) {
    console.log("20");
}
*/



/*
let numero = 10;
let esMayor5 = (numero > 5);

if (esMayor5) {
    console.log(esMayor5);
    console.log("esta linea se ejecuta");
}
*/



/*
let cafe = false;
if(!cafe) console.log("a por un café");
*/



/*
let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if ( (nombreIngresado != "") && (apellidoIngresado != "") ) {
    alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado);
} else {
    alert("Error: Ingresar nombre y apellido");
}
*/



/*
let nombreIngresado = prompt("Usuario");
if ((nombreIngresado == "ANA") || (nombreIngresado == "ana") || (nombreIngresado == "Ana")) {
    alert("Hola Ana");
} else {
    alert("Error");
}
*/



/*
let nombreIngresado = prompt("Usuario");


if ( (nombreIngresado != "") && ( (nombreIngresado == "EMA") || (nombreIngresado =="ema"))) {
    alert("Hola Ema");
} else {
    alert("Error: Ingresar nombre valido");
}
*/



/*
let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")) {
    alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado);
} else {
    alert("Error: Ingresar nombre y apellido");
}
*/






// CLASE 3 ciclos-iteraciones
// console.log("ciclos-iteraciones");
/*
*/


/*
if (condicion) ...;

if (condicion) {
    ...;
    ...;
    ...;
}
*/

/*
for ( desde ; hasta ; actualizació ) {
    ...
}
*/


/*
while (condicion) {
    ...
}

do {
    ...
} while (condicion)

switch(numero) {
    case 5:
    ...
    break;

    case 8:
    ...
    break;

    case 20:
    ...
    break;

    default:
    ...
    break;
}
*/



/*
for ( let i=0; i<10; i++) {
    console.log(i + 1);
}

// bucle negativo
for (let i=9; i>=0; i--){
    console.log("Maxi " + i);
}


for (let i=-10; i<0; i++) {
    console.log("Joaquin " + i);
}
*/



/*
for ( let i=0; i<10; i++) {
    console.log("esta es la " + i + "vez que pasa por esta linea")
}
*/


// 0 a 9
/*
for (let i=0; i<10; i++) {
    // console.log("esta es la vuelta " + i + " del ciclo");
    console.log("kbz " + i);
}
*/

/*
// 1 a 10
for (let i=1; i<=10; i++) {
    // console.log("esta es la vuelta " + i + " del ciclo");
    console.log("kbz " + i);
}
*/


/*
// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for ( let i=1; i<=10; i++) {
    let resultado = ingresarNumero * i ;
    console.log(ingresarNumero + " X " + i + " = " + resultado);
}
*/


/*
for ( let i=1; i<=20; i++ ) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    console.log(" Turno N° " + i + " Nombre: " + ingresarNombre);
}
*/

/*
for ( let i=1; i<=10; i++ ) {
    // Si la variable i es igual 5 interrumpo el for.
    if (i == 5 || i == 7) {
        continue;
    } else if (i == 9) {
        break;
    }
    console.log(i);
}
*/

/*
for ( let i=1; i<=10; i++ ) {
    console.log("CODER");
}
*/

/*
let entrada = prompt("Ingresar un dato");
// Repetimos con While hasta que el usuario ingresa "ESC"
while (entrada != "ESC") {
    console.log("El usuario ingresó " + entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}
*/


/*
let repetir = false;
do {
    console.log("¡Solo una vez!");
} while (repetir)
*/




/*
let numero = 0;
do {
   // Repetimos con do...while mientras el usuario ingresa un n°
   numero = prompt("Ingresar Número");
   console.log(numero);
   // Si el parseo no resulta un número se interrumpe el bucle.
} while (parseInt(numero));
*/




/*
let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"

while (entrada != "ESC" ) {
    switch (entrada) {
        case "ANA":
        console.log("HOLA ANA");
        break;

        case "JUAN":
        console.log("HOLA JUAN");
        break;

        default:
        console.log("USTED NO ES USUARIO")
        break;
    }
    entrada = prompt("Ingresar un nombre");
}
*/







/*
// 1 a 10 pero el dato corregido por variable
for (let i=0; i<10; i++) {
    let vueltaHumana = i+1;
    // console.log("esta es la vuelta " + i + " del ciclo");
    console.log("kbz " + vueltaHumana);
}
*/



// let ingresarNumero = parseInt(prompt("Ingresar Numero"));

/*
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
for ( let i=1; i<=10; i++ ) {
    let resultado = ingresarNumero * i;
    console.log(ingresarNumero + " x " + i + " = " + resultado);
}
*/



/*
let uno = parseInt(prompt("ingresa un numero "));
let dos = parseInt(prompt("ingresa un numero "));
alert(uno + dos);
*/

/*
let num = 15;
console.log(num);
let text = num.toString();
console.log(text + 1);
*/


/*
for (let i = 1; i <= 20; i++) {
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    console.log("Turno N° " + i + " Nombre: " + ingresarNombre);
}
*/

/*
for (let i=0; i<10; i++) {
    if(i==8) break;
    console.log("vamos en la vuelta " + (i+1));
}
*/

/*
for (let i=1; i<=10; i++) {
    if(i==5) {
        continue;
    }
    console.log("vamos en la vuelta " + i);
}
*/


/*
for (let i = 1; i <= 10; i++) {
    if(i == 5 || i == 9) {
        continue;
    }
    console.log(i);
}
*/

/*
let repetir = true;
while(repetir) {
    console.log("Al infinito y...¡Más allá!");
}
*/

/*
let entrada = prompt("Ingresar un dato"); //Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC" && entrada != "kbz") {
    // alert("El usuario ingresó " + entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada = prompt("Ingresar otro dato");
}
*/


/*
let repetir2 = false;
while(repetir2 != false) {
    console.log("kbz");
}
do {
    console.log("kbz");
} while (repetir2 != false);
*/


/*
let repetir = false;
do {
    console.log("¡Solo una vez!");
} while(repetir);
*/



/*
let numero = 0;
do {
    //Repetimos con do...while mientras el usuario ingresa un n°
    numero = prompt("Ingresar Número");
    console.log(numero);
    //Si el parseo no resulta un número se interrumpe el bucle.
// } while (parseInt(numero));
} while (numero != 666);
*/

/*
let entrada = prompt("Ingresar un nombre"); //Repetimos hasta que se ingresa "ESC"

while(entrada != "ESC" ) {
    switch (entrada) {
        case "ana":
        alert("HOLA ANA");
        break;

        case "luis":
        alert("HOLA LUIS");
        break;

        default:
        alert("¿QUIÉN SOS?");
        break;
    }

    // if (entrada == "ana") {
    //     alert("HOLA ANA");
    // } else if (entrada == "luis") {
    //     alert("HOLA LUIS");
    // } else {
    //     alert("QUIEN SOS?");
    // }

    entrada = prompt("Ingresar un nombre");
}
*/

/*
do {
    let entrada = prompt("Ingresar un nombre"); //Repetimos hasta que se ingresa "ESC"
    switch (entrada) {
        case "ana":
        alert("HOLA ANA");
        break;

        case "luis":
        alert("HOLA LUIS");
        break;

        default:
        alert("¿QUIÉN SOS?");
        break;
    }
} while (entrada != "ESC");
*/


// este condicional es lo mismo que el switch
/*
if (entrada == "ana") {
    alert("HOLA ANA");
} else if (entrada == "luis") {
    alert("HOLA LUIS");
} else {
    alert("¿QUIÉN SOS?");
}

/*
*/







// CLASE 5 funciones
// console.log("Calse 5 - funciones");

/*
function saludar() {
    console.log("Hola");
}
saludar();
*/

/*
function saludar() {
    console.log("Hola");
}
saludar();
*/



/*
function saludar2(saludo) {
    console.log(saludo);
}

saludar2("Hola");
saludar2("Hi");
saludar2("Chiao");
saludar2(5);
*/


/*
function saludarConNombreYApellido (nombre, apellido) {
    console.log("Hola " + nombre + " " + apellido);
}

saludarConNombreYApellido("Pablo", "Montedónico");
*/



/*
function sumar(a, b) {
    console.log(a + b);
}
sumar(10, 5);
sumar(1, 100);
*/



/*
// const sumarFunctAnonima = function (a, b) { return (a + b) };
const sumarFunctAnonima = function (a, b) {
    return (a + b);
}
console.log( sumarFunctAnonima(10, 5) );
console.log( sumarFunctAnonima(1, 100) );
*/


/*
const sumarFunctFlecha = (a, b) => a + b;
// const sumarFunctFlecha = (a, b) => {
//     return (a + b);
// }
console.log( sumarFunctFlecha(10, 5) );
console.log( sumarFunctFlecha(1, 100) );
*/



/*
function sumar2(a, b) {
    return a + b;
}
console.log( sumar2(10, 5));
*/




// scope de variable dentro de una función

/*
let nombre = "kbz";

function mensajeAMosrtrar() {
    console.log("Este mensaje lo ejecuta la función");

    let miVariable = "CODER";
    console.log(miVariable);
    console.log(nombre); // kbz
}

mensajeAMosrtrar();
console.log(nombre);

/*
// da error porque no se puede preguntar por ella
console.log(miVariable);
*/



/*
let nombre = "Juan Carlos";
let apellido = "Puig";

function saludarNombre(nombreDelParametro) {
    console.log("Hola " + nombreDelParametro);
    despedir(nombreDelParametro);
}
function saludarNombreApellido(nombreDelParametro, apellidoDelPArametro) {
    console.log("Hola " + nombreDelParametro + " " + apellidoDelPArametro);
    despedir(nombreDelParametro);
}
function despedir(nombre) {
    console.log("Chau " + nombre);
}



saludarNombre(nombre);
saludarNombreApellido(nombre, apellido);
*/



/*
//Declaración de variable para guardar el resultado de la suma
let resultado = 0;
//Función que suma dos números y asigna a resultado
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero;
}
//Función que muestra resultado por consola
function mostrar(mensaje) {
    console.log(mensaje);
}
//Llamamos primero a sumar y luego a mostrar
sumar(6, 3);
mostrar(resultado);
*/

/*
*/
/*

*/



/*
saludar1(nombre);
saludar1("Estafania");
saludar1("Franco");
saludar1("Juan");
saludar2("Paula", "López");
*/


/*
function solicitarNombre() {
    let nombreIngresado = prompt("Ingresar nombre");
    console.log("El nombre ingresado es " + nombreIngresado);
}

solicitarNombre();
solicitarNombre();
solicitarNombre();
*/






/*
function saludar2(mensaje) {
    console.log(mensaje);
}

*/

/*
function solicitarNombre(){
    let nombreIngresado = prompt("Ingresar nombre");
    alert("El nombre ingresado es " + nombreIngresado);
}
solicitarNombre();
solicitarNombre();
*/



/*
function saludar4(nombre) {
    if (nombre == "Pablo") {
        console.log("Usted no tiene permisos");
        return;
    };
    console.log("Hola " + nombre)
}
saludar4("Pablo");
*/



/*
function saludar3(mensaje) {
    if(mensaje == undefined) return console.log("Debes decirme el mensaje");
    console.log(mensaje);
}
saludar3();
*/



/*
// Declaración de variable para guardar el resultado de la suma
let resultado = 0;
let nombre = "Pablo";

//Función que suma dos números y asigna a resultado
function sumar(primerNumero, segundoNumero) {
    // resultado = primerNumero + segundoNumero;
    // let resultado = primerNumero + segundoNumero;
    return primerNumero + segundoNumero;
}

//Función que muestra resultado por consola
function mostrar(mensaje) {
    console.log(mensaje);
}


//Llamamos primero a sumar y luego a mostrar
mostrar(sumar(15, 8));
mostrar(resultado);
mostrar(nombre);
mostrar("Este es mi mensaje");
mostrar(nombre + " su resultado es: " + resultado);

mostrar(sumar(5,15));
*/



/*
function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}
let resultado = sumar(5, 8);
*/




/*
let resultado = 0;
function sumar(primerNumero, segundoNumero) {
    // resultado = primerNumero + segundoNumero;
    return primerNumero + segundoNumero;
}
console.log(sumar(4,3));
console.log(resultado);
*/


/*
function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}
let resultado = sumar(5,8);
console.log(resultado);
*/




/*
let nicknake = "Cabeza";
function saludar4(nombre, apellido) {
    console.log("Hola " + nombre + " " + apellido);
}
saludar4(nicknake, "Montedónico");
*/


/*
let resultado = 0;

function mostrar (mensaje) {
    console.log(mensaje);
    console.log(resultado);
}
function sumar (a, b) {
    resultado = a + b;
    mostrar(resultado);
}

sumar(3, 5);
*/


/*
let resultado = 0;

function mostrar () {
    console.log("Tu cuenta dio como resultado = " + resultado);
}
function sumar (a, b) {
    resultado = a + b;
    mostrar();
}
function restar (a, b) {
    resultado = a - b;
    mostrar();
}

sumar(2,5);
restar(2, 8);
*/


/*
function sumar (a, b) {
    return a + b;
}
let a = sumar(3,3);
console.log(a)
*/


/*
function sumar(num1, num2) {
    let resultado = num1 + num2;
    return resultado;
}
function restar(num1, num2) {
    let resultado = num1 - num2;
    return resultado;
}
console.log(restar(5,4));
console.log(sumar(5,4));
*/

/*
function calculadora (primerNumero, operacion, segundoNumero) {
    switch (operacion) {
        case "+":
        return primerNumero + segundoNumero;
        break;

        case "-":
        return primerNumero - segundoNumero;
        break;

        case "*":
        return primerNumero * segundoNumero;
        break;

        case "/":
        return primerNumero / segundoNumero;
        break;

        default:
        return 0;
        break;
    }
}
let resultado = calculadora(12, "/", 0);
console.log("Tu resultado es = " + resultado);
*/


/*
let nombre = "Pablo";
function mifuncion() {
    let nombre = "Débora";
    console.log(nombre);
}
console.log(nombre);
mifuncion();
*/

/*
function sumar(primerNumero, segundoNumero) {
    let resultado = primerNumero + segundoNumero;
}
sumar(5,6);
console.log(resultado);
*/

/*
let resultado = 0;
function sumar (a, b) {
    resultado = a + b;
    mostrar(resultado);
}
function restar (a, b) {
    resultado = a - b;
    mostrar(resultado);
}
function mostrar(mensaje) {
    console.log(mensaje);
}

sumar(6,3);
restar(6,3)
*/


/*
function sumarB (a, b) {
    return a + b;
}
let resultadoFunc = sumarB(6,3);
console.log(resultadoFunc);
*/


/*
"use strict";
let a = "casa";
let fiat = 100;

function auto () {
    let a = 125;
    console.log(a);

    fiat = 300;
}

auto();
console.log(a);
console.log(fiat);
*/

/*
let a = function (a, b) {
    return a + b
}
*/

/*
// sintaxis evolución de función

function suma1(a, b) {
    return a + b
}
console.log(suma1(5,4));



const suma2 = function (a, b) {
    return a + b;
}
console.log(suma2(15,20));
console.log(suma2(45,30));



const suma3 = (a,b) => a + b;
// const suma3 = (a,b) => { return a + b };
console.log(suma3(100,60));

*/

/*
function sumar (a , b) {
    console.log(a+b);
}
sumar(10, 5);
*/

/*
const iva = 0.21;
let precioProducto = 500;
let descuento = 50;

const suma = (a, b) => { return a + b }
// Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const resta = (a, b) => a - b;
// console.log( suma(15,20) ):
const calcIva = x => x * iva;

//Calculo el precioProducto + IVA - descuento
let nuevoPrecio = resta( suma(precioProducto, calcIva(precioProducto)), descuento );
console.log(nuevoPrecio);
*/


/*
const suma = (a,b) => {
    if( isNaN(a) || isNaN(b) ) return console.log("Debes pasar números");
    return a + b;
};
let resultado = suma(44,65);
console.log(resultado);
*/







// CLASE 5 / Objetos
console.log("CLASE 5 / Objetos");


/*
let nombre = "Homero";
let edad = 39;
let calle = "Av. Siempreviva 742";
let simpson = true;

console.log(simpson);
*/



/*
const persona1 = {
    nombre: "Homero",
    edad: 39,
    calle: "Av. Siempreviva 742",
    simpson: true
}

console.log( persona1 );
console.log( persona1.calle );
console.log( persona1.simpson );
console.log( persona1.edad );
console.log( persona1.nombre );
*/

/*
console.log( persona1["nombre"] );
console.log( persona1["edad"] );
console.log( persona1["simpson"] );
console.log( persona1["calle"] );
*/



/*persona1.edad = 40;
console.log( persona1.edad );

persona1["edad"] = 41;
console.log( persona1.edad );
/*


/*
// https://www.javascripttutorial.net/object/convert-an-object-to-an-array-in-javascript/
const persona6 = {
    nombre: "Homero",
    edad: 39,
    calle: "Av. Siempreviva 742",
}
console.log(persona6[0]);
console.log(persona6[1]);
console.log(persona6[2]);
*/


/*
let nombre = "Pablo";
console.log(nombre.length);
console.log(nombre.toUpperCase());
*/

/*
const persona1 = {
    nombre: "Homero",
    edad: 39,
    calle: "Av. Siempreviva 742",
    simpson: true
}
*/



/*
function Persona (nombre, edad, calle, estado) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.estado = estado;
}

const persona1 = new Persona("Homero", 36, "Av. Siempreviva 742", true);
const persona2 = new Persona("March", 36, "Av. Siempreviva 742", true);
const persona3 = new Persona("Bart", 10, "Av. Siempreviva 742", true);
const persona4 = new Persona("Lisa", 8, "Av. Siempreviva 742", true);
const persona5 = new Persona("Maggie", 2, "Av. Siempreviva 742", true);
*/

/*
function Persona (nombre, edad, calle, estado) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.estado = estado;

    this.hablar = function(mensaje) {
        return this.nombre + " dice " + mensaje;
    }

    this.decirNombre = function() {
        return "Hola mi nomnre es " + this.nombre;
    }

    this.saludar = () => this.nombre + " dice Chau";
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742", true);
const persona2 = new Persona("March", undefined, "Av. Siempreviva 742", true);
// console.log( persona2.hablar("que majo esto de los objetos") );
// console.log( persona1.hablar("OUUUUUU") );
// console.log( persona2.decirNombre() );
// console.log( persona1.saludar() );
*/



// pregunta si existe esa propiedad en el objeto
// console.log( "pais" in persona1 );

/*
// recorro el objeto
for (const papafrita in persona1) {
    console.log( persona1[papafrita] );
}
*/

/*
console.log(persona1);
console.log(persona2);

console.log(persona1.nombre);
console.log(persona2.nombre);

console.log(persona1.decirNombre());
console.log(persona2.decirNombre());

console.log(persona2.hablar("sigamos con la clase"));
*/

/*
let cadena = "Hola Coders";
//Propiedad de objeto String: Largo de la cadena.
console.log(cadena.length);
//Método de objeto String: Pasar a minúscula.
console.log(cadena.toLowerCase());
//Método de objeto String: Pasar a mayúscula.
console.log(cadena.toUpperCase());
*/


/*
const persona5 = {
    nombre: "Pablo",
    pais: "Uruguay",
    edad: 47,
    soltero: true
}
if ( "pais" in persona5 ) {
    console.log("si existe la propiedad pais");
    console.log(persona5["pais"])
}
*/



function Persona (nombre, edad, calle, estado) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.estado = estado;

    this.hablar = function(mensaje) {
        return this.nombre + " dice: " + mensaje;
    }
    this.decirNombre = function() {
        return "Hola mi nomnre es " + this.nombre;
    }
    this.saludar = () => {
        return "Chau";
    }
}


const persona10 = new PersonaB("Lucas", 30, "Acanamoas 667", true);
console.log(persona10);
console.log(persona10.nombre);
console.log(persona10.edad);
console.log(persona10.calle);
console.log(persona10.estado);
console.log(persona10.hablar('que buenas las clases'));
console.log(persona10.decirNombre());
console.log(persona10.saludar());


/*
const persona9 = new PersonaB("Lucas", 30, "Acanamoas 667", true);
console.log(persona9);
console.log(persona9.nombre);
console.log(persona9.edad);
console.log(persona9.calle);
console.log(persona9.estado);
console.log(persona9.hablar("Soy Argentino"));
console.log(persona9.decirNombre());
console.log(persona9.saludar());

*/







/*
console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.calle);
console.log(persona1.hablar);

for (const papafrita in persona1) {
    // console.log(persona1[propiedad]);
    console.log(persona1[papafrita]);
}
*/



/*

const persona2 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona4 = new Persona();

console.log(persona2.nombre);
console.log(persona3["edad"]);
console.log(persona2.calle);
console.log(persona3.calle);

console.log(persona4.nombre);
persona4["nombre"] = "Bart";
console.log(persona4.nombre);
persona4.nombre = "Lisa";
console.log(persona4.nombre);

persona4.altura = 1.6;
console.log(persona4.altura);
console.log(persona3.altura);

let a = 17;
console.log(a)
*/





/*

function Persona2(literal) {
    this.nombre = literal.nombre;
    this.edad = literal.edad;
    this.calle = literal.calle;
}
const persona5 = new Persona2({
    nombre: "Homero",
    edad: 39,
    calle: "Av.Siempreviva 742",
});
console.log(persona5.edad);
*/


/*
// http://www.codexexempla.org/curso/curso_4_2_f.php
// http://expertojava.ua.es/experto/restringido/2014-15/js/js.html
let cadena = "Hola Coder";
//Propiedad de objeto String: Largo de la cadena.
console.log(cadena.length);
//Método de objeto String: Pasar a minúscula.
console.log(cadena.toLowerCase());
//Método de objeto String: Pasar a mayúscula.
console.log(cadena.toUpperCase());
*/

/*
function Persona3(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;

    this.hablar = function() {
        console.log("Hola soy " + this.nombre)
    }
}
const persona6 = new Persona3("Homero", 39, "Av. Siempreviva 742");
const persona7 = new Persona3("Marge", 36, "Av. Siempreviva 742");
persona6.hablar();
persona7.hablar();
// persona7.hablar();
*/


/*
const persona8 = {
    nombre: "Homero",
    edad: 39,
    calle: "Av. Siempreviva 742"
};
*/

/*
//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log("nombre" in persona8);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log("origen" in persona8);
//recorremos todas las propiedades del objeto con el ciclo for...in
for (const pp in persona8) {
    console.log("esaaa: " + persona8[pp]);
}
*/