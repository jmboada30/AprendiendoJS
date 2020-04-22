'use strict'

/*
*Tabla de multiplicar de un numero introducido por pantalla
 */

var numero = parseInt(prompt('Ingresa un numero',0));
document.write("<h2>La tabla de Multiplicar del "+numero+" es</h2>")
for(var i=1;i<11;i++){
    document.write("<p>"+numero+"x"+i+" = "+(numero*i)+"</p>")
}


//Si quiero las tablas del 1 al 10 solo hago:
for(var c=1;c<=15;c++){
document.write("<h2>La tabla de Multiplicar del "+c+" es</h2>")
    for(var i=1;i<11;i++){
        document.write("<p>"+c+"x"+i+" = "+(c*i)+"</p>")
    }
}
