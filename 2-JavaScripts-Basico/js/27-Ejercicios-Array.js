'use strict'

/**
 * Programa que:
 * Pida 6 numeros por pantalla y los meta en un array
 * Mostrar todos sus elementos en el cuerpo de la pagina y la consola.
 * Ordenarlo y mostrarlo.
 * Invertir su orden y Mostarlo.
 * Mostrar cuantos elementos tiene el array
 * Busqueda de un valor introducido por el usuario, si esta y que nos diga su posicion,
 */

 //Hay codigo repetido por lo cual puedo hacer una funcion
 function MostarArray(arrayAqui, textCustom = ""){
    document.write(`<h2>Contenido del Array ${textCustom}</h2>`);
    console.log(`Contenido del Array ${textCustom}`);
    for(let i in arrayAqui){
        document.write(`<p>La posición ${i} tiene un ${arrayAqui[i]}</p>`);
        console.log(`Posición ${i}. ${arrayAqui[i]}`);
    }
 }
 // 1
 var nros = [];
 for(let i = 1; i <=6; i++){
    let valor = parseInt(prompt(`Indique un Nro. para la posición ${i}`,0));
    if(isNaN(valor)){
       valor = parseInt(prompt(`Que sea un Nro. correcto para la posición: ${i}`,0));
       if(isNaN(valor)){i = i-1;}
    }else{
       nros.push(valor);
    }
 }


 // 2
 MostarArray(nros);


 // 3
 nros.sort(function(a,b){return a-b});
 MostarArray(nros,"ORDENADOS");

 // 4
 nros.reverse();
 MostarArray(nros,"EN REVERSA");

 // 5
 document.write(`<h2>El ARRAY tiene ${nros.length} Elementos</h2>`);
 console.log(`El ARRAY tiene ${nros.length} Elementos`);

 //6
 var buscar = parseInt(prompt('Cual desea buscar',0));
 var posicion = nros.findIndex(posi => posi ==buscar);

 if(posicion > -1){
    document.write(`<hr> <h2>Ud. Busco: el ${buscar}. Resultado: ENCONTRADO.  Su posición es ${posicion}.</h2> <hr> `);
 }else{
    document.write(`<hr> <h2>El valor que busco es el ${buscar}. NO ENCONTRADO.</h2> <hr> `);
 }