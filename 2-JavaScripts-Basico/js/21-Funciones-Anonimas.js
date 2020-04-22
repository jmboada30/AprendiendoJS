'use strict'

//Una función anonima es una funcion que no tiene nombre!
//Los callback son funciones dentro de otras.
// Se usa en callback de la siguiente forma:

function sumame(nro1, nro2, mostrar, porDos){
    var sumar = nro1 + nro2;
    mostrar(sumar);
    porDos(sumar);
    return sumar;
}

sumame(2,3, dato => {console.log('La suma es: '+dato)}, //Notese que se cambion 'function' por '=>' Funciones de flecha.
           function(dato){console.log('El por dos es: '+(dato*2))});

