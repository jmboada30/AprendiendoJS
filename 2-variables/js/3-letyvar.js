'use-strict'
// Var y Let diferencias en esas declaraciones de variables.

var nro = 40;
console.log(nro); //40

if(true){
    nro = 50;
    console.log(nro); //50
}

console.log(nro); //50

// Let

var texto = "hola";
console.log(texto); //hola

if(texto){
    let texto = "chao";
    console.log(texto); //chao
}

console.log(texto); //hola