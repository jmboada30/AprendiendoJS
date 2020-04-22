'use strict'

/*
*Saber si un numero es Par o Impar
*Volver a pedir el numero si este es incorrecto
*Ventana Promt
*/

var numero = parseInt(prompt('Ingrese el Numero',0));

while(isNaN(numero) || numero <0){
    numero = parseInt(prompt('Ingrese el Numero',0));
}

if(numero%2==0){
    alert('El número '+numero+' es PAR');
}else{
    alert('El número '+numero+' es IMPAR');
}