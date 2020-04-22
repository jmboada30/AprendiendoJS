'use strict'

// Hacer una calculadora
/*
 *Que pida dos numeros
 *No permita numeros incorrectos
 *Que nos muestre en el body el resultado de sumar,restar,multip o dividir. 
*/

var n1 = parseInt(prompt('Ingrese el Primer Número',1));
var n2 = parseInt(prompt('Ingrese el Segundo Número',1));

while(isNaN(n1)||isNaN(n2)){
    n1 = parseInt(prompt('Ingrese el Primer Número',1));
    n2 = parseInt(prompt('Ingrese el Segundo Número',1));
}

var resultadoCMD = 
"La Suma es: "+(n1+n2)+" \n "+
"La Resta es: "+(n1-n2)+" \n "+
"La Multi es: "+(n1*n2)+" \n "+
"La División es: "+(n1/+n2);

var resultado = 
"<p>La Suma es: "+(n1+n2)+"</p>"+
"<p>La Resta es: "+(n1-n2)+"</p>"+
"<p>La Multi es: "+(n1*n2)+"</p>"+
"<p>La División es: "+(n1/+n2)+"</p>";

console.log(resultadoCMD);
alert(resultadoCMD);

document.write("<h2>Los resultados son:</h2>");
document.write(resultado);
