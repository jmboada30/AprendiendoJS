'use strict'

//operadores relaciones
/*
Mayor que >
Menor que <
Mayor o igual >=
Menor o igual <=
Diferene !=
Igual ==
*/
//condicion IF
 var edad2 = 0;
 var edad1 = 1;
if(edad2 < edad1){
    console.log('edad1 es mayor que edad2');
}else{
    console.log('edad2 es mayor que edad1');
}


//otro ejemplo
var edad = 20;
var nombre = 'Joel Boada'
if(edad>= 18){
    console.log(nombre +' es mayor de edad, tiene '+edad+' años');
    if(edad==33){
        console.log('tiene la edad de Cristo');
    }else if(edad >=70){
        console.log('eres viejito');
    }else{
        console.log('eres menor de 33 años')
    }
}else{
    console.log(nombre +' es menor de edad, tiene '+edad+' años');
}

//OPERADORES LOGICOS
/*
el Y es &&
el O es ||
el NO es !=
*/

var year=2028;
if(year==2028 || year==2018){
    console.log('El año termina en 8');
}else if(year=>2020 && year<=2021){
    console.log('Estas en Coronavirus ToT');
}