'use strict'

//LOCAL STORAGE
//Almacenamiento del navegador es temporal

//para saber si el local storage esta disponible ejecutamos en el navegador:
if(typeof(Storage) !== 'undefined'){ //tiene que ser con S mayuscula
    console.log('LocalStorage disponible');
}else{
    console.log('Incompatible con LocalStorage');
}

//GUARDAR DATOS EN LocalStorage con setItem
localStorage.setItem('titulo','Aprendiendo JS');

//recuperar elementos del LocalStorage con getItem
var local = localStorage.getItem('titulo');

//para enviar al html mi localstorage
document.querySelector('.peliculas').innerHTML = local;

//GUARDAR objetos en LocalStorage
var usuario = { //creamos el objeto
    nombre: 'Joel Boada',
    email: 'jmboada30@gmail.com',
    web: 'kalietsoft.com'
};

// Guardamos el objeto con la funcion JSON.stringify()
localStorage.setItem('usuario', JSON.stringify(usuario));

// Para recuperar el objeto usamos JSON.parse()
var userjs = JSON.parse(localStorage.getItem('usuario'));

console.log(userjs);
// ya podemos hacer lo que necesitemos

document.querySelector('.peliculas').append(' ' + userjs.web + ' - ' + userjs.nombre);

// Para limpiar el Localstorage
localStorage.clear();
// o tambien
//localStorage.removeItem('usuario');