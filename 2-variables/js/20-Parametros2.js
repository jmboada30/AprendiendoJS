'use strict'

//parametros REST y SPREAD

/**
 * Rest quiere decir los parametros demas que pasamos a las funciones si no esta definido el parametro que recibira el valor podemos recibir todo usando ...
 */

 function listaFrutas(fruta1, fruta2, ...resto){
     console.log("Fruta1: "+fruta1);
     console.log("Fruta2: "+fruta2);
     console.log(resto);
 }

 listaFrutas('melon','lechoza','patilla','pera','naranja');

 //Con spread podemos pasar una array a una funcion dividiendo cada valor como un valor de la funcion

 var frutas = ['perejil','pimenton'];
 listaFrutas(...frutas,'melon','lechoza','patilla','pera','naranja')