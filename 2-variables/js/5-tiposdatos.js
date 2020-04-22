'use strict'

//operadores

var n1 = 2;
var n2 = 3;
var suma = n1 + n2;
var resta = n1 - n2;
var multi = n1 * n2;
var divi = n1 / n2;
console.log('la suma es: '+ suma,
'la resta es: '+ resta);
console.log('la resta es: '+ resta);
console.log('la multiplicación es: '+ multi);
console.log('la division es: '+ divi);


//tipos de datos

var nro_entero = 44;
var cadena_texto = "Hola 'mundo'";
var verdadero_falso = true;

//funciones de conversion de datos

var nro_falso = '34'; 
console.log(nro_falso+12); //lo concatena
console.log(Number(nro_falso)+52); // lo suma
console.log(String(nro_entero)+' concatenado'); // lo concatena


//como saber el tipo de datos de cualquier variable con TYPEOF

console.log('Es de tipo '+ typeof nro_entero);
console.log('Es de tipo '+ typeof nro_falso);
console.log('Es de tipo '+ typeof verdadero_falso);
console.log('Es de tipo '+ typeof cadena_texto);