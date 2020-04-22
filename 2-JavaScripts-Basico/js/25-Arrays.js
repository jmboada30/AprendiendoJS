'use strict'

//ARRAYS o ARREGLOS o MATRICES...
//Conjuntos de datos que pueden tener una variable.

var nombre = 'Joel'; //Variable simple
var nombres = ['Joel', 'Josue', 'Jonathan', 'Kaomi Boada', true, 22]; //Array USAR []

var lenguajes = Array('Dart','JS', 'GO', 'Python'); //OTRA forma de hacer un ARRAY.

//Los array se comienzan a enumerar desde el 0, NO DEL 1.

console.log(nombres);//Llamar TODOS LOS VALORES del array
console.log(lenguajes[0]);//Llamar SOLO UN VALOR del array
console.log(nombres[5]);//Llamar SOLO UN VALOR del array


console.log(nombres.length);//Contar elementos del ARRAY

//Ejercicio 1. Indicar la posicion del array y que enseñe que hay alli. Con su validacion.
var elemento = parseInt(prompt('que posicion quiere del ARRAY',0));
if(elemento >= nombres.length){
    alert(`Soy hay ${nombres.length - 1} elementos. =(`)
}else{
    alert(`El elemento es ${nombres[elemento]}!!`);
}

//Ejercicio 2. Listar todos los arrays en la pagina, Ej: TODOS LOS LENGUAJES DE PROGRAMACION.

document.write(`<h2>Lenguajes del 2020</h2>`)
for (let i = 0; i < lenguajes.length; i++) {
    document.write(`<p>${i+1}. ${lenguajes[i]}</p>`)
}

//otra forma mas sencilla de recorrer el ARRAY es con ForEach, Ej:
document.write(`<h2>Usuarios</h2>`)
nombres.forEach((elemento2, i)=>{
    document.write(`<p>${i+1}. ${elemento2}</p>`)
});

//otra forma mas sencilla de recorrer el ARRAY es con FOR IN asi:

document.write(`<h2>Usuarios2</h2>`)
for(let lenguaje in lenguajes){
    document.write(`<p>${Number(lenguaje)+1}. ${lenguajes[lenguaje]}</p>`) //Se uso Number porq lenguaje sale como String y la necesitamos en nro para sumar.
}






