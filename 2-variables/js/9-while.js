'use strict'

// CICLO WHILE

var year =2020;

// while significa Mientras en Español, Osea mientras algo sea cierto se hara esto o aquello. Importante poner dentro del while un contador para que en algun momento la condicion no se cumpla. Si no se hace eso sera infinito el ciclo.

while(year <= 2051){ //mientras el año sea menor o igual a 2051 entonces
//ejecuta esto:
    console.log('estamos en el año: '+year);
    year++;
} 

//si quiero ir atras seria:
while(year >= 2020){ //mientras el año sea menor o igual a 2051 entonces
    //ejecuta esto:
        console.log('estamos en el año: '+year);
        year--;
    } 


    // DO WHILE

    //El do nos permite ejecutar un codigo primero, luego evalua si en el while se cumple la condicion se ejecutara nuevamente el do. Hasta que ya no se cumpla el while
    // Ejemplo:

    var miedad = 0;
    var total = 27;
    var imprimir = '';
    do{
        if(miedad==0){
            imprimir ='Ya naci.';
        }else if(miedad==1){
            imprimir='Cumpli 1 añito.';
        }else{
            imprimir='Ya cumpli '+miedad+' años.';
        }
        console.log(imprimir);
        miedad++;

        //con un break podemos parar en seco el ciclo Ejemplo:
        if(miedad==4){
            break;
        }
    }while(miedad<=total)