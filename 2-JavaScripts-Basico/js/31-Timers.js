'use strict'

window.addEventListener('load', function(){ //con esa funcion si puedo poner el <scripts> en el HEAD del HTML

    function intervalo(){
    //TIMER
        var tiempo = setInterval(function(){  // Poner setTimeout para que solo se ejecute UNA VEZ.
            //hagamos q cada 5segundos cambie el tamaño del H1
            
            var titulo = document.querySelector('h1');
            if(titulo.style.fontSize == '50px'){
                titulo.style.fontSize = '30px';
            }else{
                titulo.style.fontSize = '50px';
            }
            console.log('Set interval ejecutado');

        }, 1000); // segundos = 5Seg        

        return tiempo;
    }
    
    var tiempo = intervalo();

    //pongamos un boton de pare el timer
    var parar = document.querySelector('#stop');
    parar.addEventListener('click',function(){
        alert('Detuvo el TIMER');
        clearInterval(tiempo);
    });

    var start = document.querySelector('#start');
    start.addEventListener('click',function(){
        alert('Inicio el TIMER');
        tiempo = intervalo();
    });



});