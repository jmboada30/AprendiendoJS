'use strict'

/*
Programa que pida dos numeros y nos diga cual es mayor o menor o igual.
PLUS: Si los datos no son numeros o menores a cero que vuelva a pedir los datos.
*/


var imprimir = "";
var nro1 = parseInt(prompt("Ingrese nro1",0));
var nro2 = parseInt(prompt("Ingrese nro2",0));
console.log('nro1='+nro1, 'nro2='+nro2)
while(nro1<=0 || nro2<=0 ||isNaN(nro1) || isNaN(nro2)){
    nro1 = parseInt(prompt("Ingrese nro1",""));
    nro2 = parseInt(prompt("Ingrese nro2",""));
}
if(nro1==nro2){
    imprimir="Los numeros son iguales.";
}else if(nro1 > nro2){
    imprimir="El numero1 es el Mayor.";
}else if(nro2 > nro1){
    imprimir="El numero2 es el Mayor.";
}else{
    imprimir="Introduce nros correctos."
}
console.log(imprimir);
alert(imprimir);