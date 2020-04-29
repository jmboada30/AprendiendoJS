'use strict'

// TRABAJAR CON FECHAS EN JS

var fechaActual = new Date();
console.log(fechaActual);

var year = fechaActual.getFullYear();
var mes = fechaActual.getMonth();
var dia = fechaActual.getDate();
var hora = fechaActual.getHours();
var min = fechaActual.getMinutes();
var seg = fechaActual.getSeconds();
var milseg = fechaActual.getMilliseconds();

var textofecha = `
El año es: ${year}
El mes es: ${mes}
El dia es: ${dia}
El hora es: ${hora}
El min es: ${min}
El seg es: ${seg}
El milseg es: ${milseg}
`;

console.log(textofecha);

// BONUS Matematicas con JS buscar en GOOGLE Math y sale toooodo
// Ejemplo:

console.log(Math.ceil(Math.random() * 10000));
// random para un nro aleatorio
// ceil para redondear y quitar los decimales