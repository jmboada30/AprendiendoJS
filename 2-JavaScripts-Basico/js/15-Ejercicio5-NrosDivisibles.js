'use strict'

/*
* Mostrar en pantalla todos los numeros divisores de un otro indicado.
*/

var numero1 = parseInt(prompt("Ingrese un Numero",1));
var imprimir = '';

for(var i=1;i<=numero1;i++){
    if(numero1%i==0){
        imprimir+=' '+i;
    }
}
alert('Los numeros divisores son: '+imprimir);