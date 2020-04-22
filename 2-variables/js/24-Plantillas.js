'use strict'

//JavaScripts nos permite crear PLANTILLAS DE TEXTO listas para usar sin tener que estar concatenando.
/**
 * Se usan con `` esas comillas y dentro la variable va asi: ${variable}  EJEMPLO:
 */

//Para hacer las comillas `` Presionar la tecla AltGr+ (la tecla al lado del entre, debajo del +, la q cierra las llaves.)
//Deben presionar dos veces la segunda tecla indicada arriba.
var nombre = prompt('Cual es tu nombre');
var apellido = prompt('Cual es tu Apellido');

var plantilla_saludo = 
`
<h2>Hola que tal..!</h2>
<h3>Mi nombre es ${nombre}</h3>
<h3>Mi Apellido es ${apellido}</h3>
`;

document.write(plantilla_saludo);