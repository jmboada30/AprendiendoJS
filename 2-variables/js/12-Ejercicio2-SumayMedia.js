'use strict'

/*
Ulizando un bucle, mostrar la suma y la media de los numeros introducidos, hasta introducir un nro negativo y ahi mostar el resultado.
*/

var contador = 0;
var suma = 0;

do{
    var numero = parseInt(prompt("Introduce un numero", 0));
    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma += numero;
        contador++;
        console.log('Nro:'+numero, 'Suma:'+suma, 'Contador:'+contador);
    }
}while(numero >= 0)
alert('La suma es: '+suma+' Y la media es '+ (suma/contador));