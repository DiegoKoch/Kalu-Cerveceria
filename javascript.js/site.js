
 
 /* console.log
  para dejar un mensaje en la consola */

 /* para dejar comentario en mas 
 de un renglon
 */ 

 // para dejar un comentario en una sola linea

 //typeof para saber que tipo de variable es (en la consola)

 //contatenar juntar 2 variables (numericas + frases o v/f)

 //declaracion
 //let nombre;

 //asignacion
 //let nombre = "Pablo";

 //se puede declarar y despues asignar o hacer las dos juntas 

/* let nombre =  prompt('Ingrese su nombre');
let apellido =  prompt('Ingrese su apellido');;
let edad =  prompt('Ingrese su edad');;

if(nombre != '' || apellido != '' && edad >= 20) {
  console.log(`Hola, ${nombre} ${apellido}, tenés ${edad} años`);
} else {
  console.log(`Hola ${nombre} ${apellido} tu edad actual es ${edad}`);
}; */


// Cambio de dolar a peso

/*  Ejercicio clase 1
const valorDolar = 298;

let montoIngresado = prompt ( "Ingrese el monto a comprar dolares ($A " + valorDolar + " c/u)" );

let dolarCompra = Number(montoIngresado) / valorDolar;

alert ( "Ustede a comprado " + parseFloat(dolarCompra).toFixed(2) + " dolares amercianos")

console.log( "Ustede a comprado " +  parseFloat(dolarCompra).toFixed(2) + " dolares amercianos")

*/


/* for ( let i=0; i<10 ; i++) {
console.log ("esta es la  " + i + " vez que pasa por esta linea")
}

for (let i=)
 */
/* toUpperCase() mayusculas
toLowerCase() minusculas
 */

/*
funcion flecha
const suma = (a , b)  => { return (a + b)}
const resta = (a , b)  => { return (a - b)}
*/

// Presentacion; Entrega 1 Inicio


let nombreIngresado = prompt ("Ingrese su nombre por favor.");
let apellidoIngresado = prompt ("Ingrese su apellido por favor.");


 function saludarConNombreYApellido (nombre, apellido) {
  console.log("Hola " + nombre + " " + apellido);
}

saludarConNombreYApellido(nombreIngresado, apellidoIngresado);

console.log ("Vamos a hacer una calculadora")


operacion = prompt("Elija la operación matemática que desea aprender: suma, resta, multiplicacion, division");
numero1 = parseFloat(prompt("Ingrese el primer numero"))
numero2 = parseFloat(prompt("Ingrese el segundo numero"))

function calculadora(numero1, operacion, numero2){
  switch (operacion){
    case "suma":
      console.log("Usted eligio hacer una suma")
      return numero1 + numero2;
      break;
      
      case "resta-":
        console.log("Usted eligio hacer una resta")
        return numero1 - numero2;
        break
        
        case "division":
          console.log("Usted eligio hacer una division")
          return numero1 / numero2;
          break
          
          case "multiplicacion":
          console.log("Usted eligio hacer una multiplicacion")
          return numero1 * numero2;
          break

          default:
            return 0;
            break;

  }
}

let resultado = calculadora(numero1, operacion , numero2)

console.log("Tu resultado es = " + resultado); 




 // Listado de presentes
for ( let i=0; i<10; i++ ) {
  // En cada repetición solicitamos un nombre.
  let ingresarNombre = prompt("Ingresar nombre");
  // Informamos el turno asignado usando el número de repetición (i).
  console.log(" Turno N° " + (1 + i) + " Nombre: " + ingresarNombre);
} 


prompt("¡Vamos a preguntar por el clima!")

 function consultaClima(){
  let dia = toLowerCase(prompt("¿De que dia queres saber el clima?"));

  switch (dia) {

    case "lunes":
      prompt("Van a haber 15 º")
      break;

    case "martes":
      prompt("Van a haber 21 º")
      break;

    case "miercoles":
      prompt("Van a haber -2 º")
      break;

    case "jueves":
      prompt("Van a haber 12 º")
      break;

    case "viernes":
      prompt("Van a haber 40 º")
      break;

    case "sabado":
      prompt("Van a haber 9 º")
      break;

    case "domingo":
      prompt("Van a haber 5 º")
      break;

      default:
      prompt("Dia incorrecto")
  }
}
console.log (consultaClima()) 


/* EJEMPLO WHILE
let entrada1 = prompt("Ingresar un dato"); //Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada1 != "ESC" && entrada1 != "kbz") {
    // alert("El usuario ingresó " + entrada);
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    entrada1 = prompt("Ingresar otro dato");
} */


