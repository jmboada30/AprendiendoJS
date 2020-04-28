'use strict'

// Formulario que nos permita añadir peliculas y otro para borrarlas.

var formulario = document.querySelector('#formpelis');
formulario.addEventListener('submit', function(){
    let titulo = document.querySelector('#addpelis').value;
    if(titulo != '' || titulo.length > 0){
        localStorage.setItem(titulo, titulo);
    }
});

var box_pelis = document.querySelector('.pelis');
for(var i in localStorage){
    if(typeof localStorage[i] == 'string'){
    var li = document.createElement('li');
    li.append(localStorage[i]);
    box_pelis.append(li);
    }
}

// Estoy terminando con los LocalStorage
var formulario2 = document.querySelector('#formpelis2');
formulario2.addEventListener('submit', function(){
    let titulo = document.querySelector('#deletepelis').value;
    if(titulo != '' || titulo.length > 0){
        localStorage.removeItem(titulo);
    }
});