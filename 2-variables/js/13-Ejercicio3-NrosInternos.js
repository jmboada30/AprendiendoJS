'use strict'
/**
 * Hacer un programa que nuestre todos los numeros entre 2 numeros introducidos por el Usuario.
 */

var nro1 = parseInt(prompt('Ingrese el numero 1',0));
var nro2 = parseInt(prompt('Ingrese el numero 2',0));
var nros = '';

//con esto valido que el usuario ingrese solo numeros y que no sean iguales.
while(isNaN(nro1) || isNaN(nro2) || nro1==nro2){
    alert("Debe ingresar solo nros y que no sean iguales.")
    nro1 = parseInt(prompt('Ingrese el numero 1',0));
    nro2 = parseInt(prompt('Ingrese el numero 2',0));
}

// debugger;
if(nro1 > nro2){
    
    document.write("<h2>Del "+nro2+" al "+nro1+" estan los numeros</h2>")
    for(var i = nro2+1; i < nro1; i++){
    nros += ' '+String(i);
    
    }
}else if(nro2 > nro1){
    
    document.write("<h2>Del "+nro1+" al "+nro2+" estan los numeros</h2>")
    for(var i = nro1+1; i < nro2; i++){
    nros += ' '+String(i);
    }
}

alert('Los nros intermedios son: '+nros);
//con document.white nos permite introducir HTML a la pagina
document.write(nros+" <br/>")


