'use strict'

//BOM Browser Object Model

// Nos permite interactual con el Navegador, saber todo lo que hace y que no hace. y Jugar con eso.

//para ver el alto y ancho de la ventana
console.log(window.innerHeight); //alto actual de la ventana
console.log(window.innerWidth); //ancho actual de la ventana

console.log(screen.height); //alto TOTAL de la ventana
console.log(screen.width); //ancho TOTAL de la ventana

console.log(window.location.href) // capturo la URL actual abierta

//funcion que redirigir a otro sitio NO ABRE UNA PESTAÑA NUEVA
function IrA(url){
    window.location.href = url;
}

//funcion que ABRE UNA PESTAÑA NUEVA CON UNA PAGINA INDICADA.
function Abrir(url){
    window.open(url,'','width=400,height=400');
}