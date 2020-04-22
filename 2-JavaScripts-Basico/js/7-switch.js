'use strict'

//SWITCH

var edad = 18;
var imprime = "";
switch(edad){
    case 18: imprime="Acabas de cumplir la mayoria de edad";
    break;
    case 25: imprime="Eres un adulto joven";
    break;
    case 40: imprime="Crisis de los 40";
    break;
    case 70: imprime="Eres un anciano";
    break;
    default: imprime="Tienes "+edad+" años.";
    break;
}
console.log(imprime);