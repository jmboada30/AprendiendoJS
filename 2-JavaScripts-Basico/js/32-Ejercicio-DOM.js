'use strict'

window.addEventListener('load',function(){

    var formulario = document.querySelector('#form');
    var box_dashed = document.querySelector('.dashed');
    box_dashed.style.display = 'none';

    formulario.addEventListener('submit',function(){ //evento sumit captura los datos colocados en el Formulario
        

        let nombre = document.querySelector('#name').value;
        let apellido = document.querySelector('#lastname').value;
        let edad = document.querySelector('#age').value;

        if(nombre.trim() == null || nombre.trim().length == 0){ //aqui valido si ingreso un datos correctos
            alert('error_nombre');
            document.querySelector('#error_nombre').style.display = 'inline';
            document.querySelector('#error_nombre').innerHTML = 'Nombre no válido.';
            return false;
        }else{
            document.querySelector('#error_nombre').style.display = 'none';
        }

        if(apellido.trim() == null || apellido.trim().length == 0){
            alert('error_apellido');
            document.querySelector('#error_apellido').style.display = 'inline';
            document.querySelector('#error_apellido').innerHTML = 'Apellido no válido.';
            return false;
        }else{
            document.querySelector('#error_apellido').style.display = 'none';
        }

        if(edad == null || edad <= 0 || isNaN(edad)){
            alert('error_edad');
            document.querySelector('#error_edad').style.display = 'inline';
            document.querySelector('#error_edad').innerHTML = 'Edad no válida.';
            return false;
        }else{
            document.querySelector('#error_edad').style.display = 'none';
        }


            box_dashed.style.display = 'block';

            var p_nombre = document.querySelector('#p_nombre span'); //selecionamos el span del id p_nombre
            var p_apellido = document.querySelector('#p_apellido span');
            var p_edad = document.querySelector('#p_edad span');

            p_nombre.innerHTML = nombre;
            p_apellido.innerHTML = apellido;
            p_edad.innerHTML = edad;
            console.log(`Evento Submit capturado`);
    });

});