'use strict'

/*Las variables tienen un ambito de operaciones o una 'zona' donde les es permitido operar. Por ejemplo las variables que estan fuera de una funcion no pueden ser usadas fuera de ella.*/

function holamundo(texto){
    var hola_mundo = 'Variable dentro de la funcion!';

    console.log(texto);
    console.log(numero.toString()); // convertir un numero a texto con .toString
    console.log(hola_mundo);
}

var numero = 12;
var texto = 'Variable fuera de la funcion!';
holamundo(texto); // llamar la funcion debe ser despues de asignar valor a las variables.

// console.log(hola_mundo); // esto dara error.!