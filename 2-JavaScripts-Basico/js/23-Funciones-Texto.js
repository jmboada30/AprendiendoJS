'use strict'

var nro = 555;
var texto = "hoy Soy uN TEXTo!";
var texto2 = "Yo soy un String (un texto)."

var dato = nro.toString(); // convierto a texto un numero
    dato = texto.toUpperCase(); // convierto en Mayuscula TODO el texto
    dato = texto.toLowerCase(); // convierto en Minusculas TODO el texto

console.log(dato);
console.log(texto.length); //length nos dice cuantos caracteres tiene el texto.

texto = ['uno','dos'];

console.log(texto.length); //Ahora texto es un ARRAY, por lo tanto length nos dira cuantos valores tiene.

//Concatenar textos
texto = "hoy Soy uN TEXTo!";
//concatenacion tipica con '+'
var concatenacion = texto + ' ' + texto2 + ' Concatenado con +';
console.log(concatenacion);
//concatenar con funcion concat()
concatenacion = texto.concat(' ' + texto2.toUpperCase() + ' Concatenado con Concat()');
console.log(concatenacion + '\n ************');


//Funciones para buscar dentro de texto en JS

var texto3 = 'Soy un texto, y buscaran cosas en mi que soy un texto.';

var busqueda = texto3.indexOf('texto'); //aqui buscamos la primera aparicion de 'buscaran' en texto3
console.log('indexOf '+busqueda);
    busqueda = texto3.lastIndexOf('texto'); //ultima aparicion de la palabra texto
console.log('lastIndexOf '+busqueda);
    busqueda = texto3.search('texto'); //hace lo mismo que indexOf
console.log('search '+busqueda);
    busqueda = texto3.match(/texto/g); //Nos devuelve un array con las palabras, entre // y ultimo el g
console.log('match '+busqueda);
    busqueda = texto3.substr(16,8); //Podemos sacar 8 letras desde el punto 16 del texto.
console.log('substr '+busqueda);
    busqueda = texto3.charAt(16); //Nos trae la letra de la posicion 16 del texto.
console.log('charAt '+busqueda);
    busqueda = texto3.startsWith('Soy un'); //Nos dice si un texto comienza con: Soy un
console.log('startsWith '+busqueda);
    busqueda = texto3.endsWith('texto'); //Nos dice si un texto termina con: texto. (dice false xq falta el punto)
console.log('endsWith '+busqueda);
    busqueda = texto3.includes('texto'); //Busca una palabra y nos dice TRUE si la consigue o FALSE si no consigue nada. Es sensitive.
console.log('includes '+busqueda);


//Funciones para reemplazar texto
    busqueda = texto3.replace('texto', 'String'); //Reemplaza una palabra por otra indicada. Solo una palabra.
console.log('replace '+busqueda);
    busqueda = texto3.slice(29,35); //Nos separa el texto y nos muestra a partir de la posicion 29 y termina en 35.
console.log('slice '+busqueda);
    busqueda = texto3.split(" "); //Hacemos un ARRAY con todos los elementos del texto.
console.log(busqueda);
    texto3 = '          Soy un texto, y buscaran cosas en mi que soy un texto.                 '
    busqueda = texto3.trim(); //Nos quita cualquier espacio por delante o por detras del Texto.
console.log('trim: '+busqueda);

