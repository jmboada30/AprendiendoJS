'use strict'

//Eventos

//Eventos del Mouse
var boton = document.querySelector('#btn'); 

function cambiarColor(){ //funcion cambia color del fondo en el boton.
    console.log("Me has dado click");

    var bg = boton.style.background;
    if(bg == 'green'){
        boton.style.background = 'red';
    }else{
        boton.style.background = 'green';
    }

    boton.style.padding ='10px';
    boton.style.color ='white';
}



boton.addEventListener('click', function(){ //AL HACER CLICK
    cambiarColor();
});

boton.addEventListener('mouseover', function(){ //AL PASAR EL MOUSE POR ARRIBA DEL BOTON
    boton.style.background = 'yellow';
});

boton.addEventListener('mouseout', function(){ //AL SALIR DEL BOTON
    boton.style.background = '#ccc';
});

// EVENTOS DEL TECLADO

//FOCUS
var input =document.querySelector('#campo_nombre'); //AL HACER FOCUS A UN CAMPO
input.addEventListener('focus', function(){
    console.log('[focus] estas dentro del input');
});

//BLUR
input.addEventListener('blur', function(){ //CUANDO UN ELEMENTO PIERDE EL FOCUS
    console.log('[blur] estas FUERA del input');
});

//KEYDOWN
input.addEventListener('keydown', function(){ //CUANDO SE ESTA PRESIONANDO UNA TECLA
    console.log('[keydown] Estas pulsando la tecla: ',String.fromCharCode(event.keyCode));
});

//KEYPRESS
input.addEventListener('keypress', function(){ //CUANDO SE PRESIONO UNA TECLA
    console.log('[keypress] Pulso la tecla: ',String.fromCharCode(event.keyCode));
});

//KEYUP
input.addEventListener('keyup', function(){ //CUANDO SE SOLTO UNA TECLA
    console.log('[keyup] Solto la tecla: ',String.fromCharCode(event.keyCode));
});