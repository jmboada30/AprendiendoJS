'use strict'

// Fetch (ajax) y peticiones a servicios / apis rest

var div_usuarios = document.querySelector('#usuarios');
var div_profesor = document.querySelector('#profesor');
var div_janet = document.querySelector('#janet');

getUsuarios() 
    .then(data => data.json()) // cuando recibe una respuesta se convierte a json
    .then(users =>  {
        listadoUsuarios(users.data);
        return getInfo();
    })
    .then(data => {
        div_profesor.innerHTML = data;
        return getJanet();
    })
    .then(data => data.json())
    .then(user =>{
        mostrarJanet(user.data);
        console.log(user.data);
    })
    .catch(error =>{ // para capturar errores en las peticiones
        console.log(error + ' Con esto .catch capturo errores');
        alert('Hubo un error en las peticiones');
    });


function getUsuarios(){ // Funcion para pedir VARIOS usuarios a api en la nube
    return fetch('https://reqres.in/api/users') 
}

function getInfo(){ // Funcion para CREAR una promesa
    var profesor = {
        nombre: 'Joel',
        apellidos: 'Boada',
        url: 'https://kalietsoft.com'
    };

    return new Promise((resolve, reject) => {
        var profesor_string = "";

        setTimeout(function(){
            profesor_string = JSON.stringify(profesor);
            if(typeof profesor_string != 'string' || profesor_string == '') return reject('error 1');
            return resolve(profesor_string);
        }, 1000); // para poner tiempo de 1 seg

    });
}

function getJanet(){ // Funcion para pedir UN usuario a api en la nube
    return fetch('https://reqres.in/api/users/2') 
}

function listadoUsuarios(usuarios){
    usuarios.map((user, i) => {  // es otra forma de hacer FOR EACH, recorre los datos que trajimos
        let nombre = document.createElement('h3');
        nombre.innerHTML = i + '. ' + user.first_name + ' ' + user.last_name;
        div_usuarios.appendChild(nombre); // para que se muestren los usuarios en el div

        document.querySelector('.loading').style.display = 'none'; // Es para ocultar el loading
    }); 
}

function mostrarJanet(user){ // funcion para traer un solo usuario
    let nombre = document.createElement('h4');
    let avatar = document.createElement('img');
    nombre.innerHTML = `Nombre: ${user.first_name} // Apellido: ${user.last_name} // Email: ${user.email}`;
    avatar.src = user.avatar;
    avatar.width = '100';

    div_janet.appendChild(avatar); // para pasar la foto de perfil del usuario
    div_janet.appendChild(nombre); // para que se muestren los usuarios en el div
    

    document.querySelector('#janet .loading').style.display = 'none'; // Es para ocultar el loading
}; 