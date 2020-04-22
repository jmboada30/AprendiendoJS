'use strict'

//ARRAYS MULTIPLES

//Son arrays dentro de otros arrays

var categorias = ['terror', 'comedia', 'accion'];
var pelis = ['Shrek','it','Avengers'];

var cine = [categorias, pelis];

console.log(cine); //asi muestro el array multiDIMENSIONAL en consola.
console.log(cine[0][2]) // seleciono ACCION; un solo elemento.
console.log(cine[1][2]) // selecciono Avengers.


//Introducir elementos al array.

// var elemento = '';
// do{ 
//     elemento = prompt('Introduce una Pelicula, para salir escribe SALIR');
//     pelis.push(elemento); // Con PUSH AGREGO un elemento al ARRAY
// }while(elemento != 'SALIR');
// pelis.pop(); // con Pop ELIMINO el ultimo elemento del ARRAY
// console.log(pelis);


//Para ELIMINAR un elemento que no sea el ULTIMO. Debemos indicar que Indice tiene.

var indice = pelis.indexOf('Avengers'); //le digo con indexOf cual es la peli a borrar. me traera su indice.
if(indice > -1){
    pelis.splice(indice,1); // con splice podemos eliminar UNO O MAS elementos a partir de un indice. 
    console.log(pelis);
}

console.log(pelis.join());  // para convertir array a string utilizo join

//ORDERNAR ARRAY

pelis.push('Shrek','it','Avengers');

pelis.sort(); //Orden alfabetico
console.log(pelis);

pelis.reverse(); // De atras pa lante. Orden inverso
console.log(pelis);


//---------------------------
//otra forma mas sencilla de recorrer el ARRAY es con FOR IN asi:

document.write(`<h2>Usuarios2</h2>`)
for(let i in categorias){
    document.write(`<p>${Number(i)+1}. ${categorias[i]}</p>`) // se puso number PORQUE en FOR IN la i es un String
}

//*********BUSCAR DENTRO DEL ARRAY************ */
//Busqueda dentro del ARRAY

var resultado = categorias.find(i2 => i2=='terror'); //asi se busca rapido en el array. es un callback de una funcion anonima. 
console.log(resultado);

resultado = categorias.findIndex(i2 => i2 =='accion'); // Si quiero la posicion del Elemento dentro del ARRAY mas no el nombre solo uso findIndex.
console.log(resultado);


//COMO HACER COMPARACIONES EN ARRAY DE NUMEROS?????? con some

var Edades =[12, 2, 3, 4, 55, 64];
console.log('Edades: '+Edades.join());

resultado = Edades.some(edad => edad > 20); //Hay edades mayores a 20?? El some ayuda mucho en Numeros.
console.log('Hay edades mayores a 20 :'+resultado);

resultado = Edades.some(edad => edad < 2); //Hay edades menores a 2??
console.log('Hay edades menores a 2 :'+resultado);
