'use strict'

// Fetch (ajax) y peticiones a servicios / apis rest

var div_usuarios = document.querySelector('#usuarios');
var div_janet = document.querySelector('#janet');

getUsuarios() 
    .then(data => data.json()) // cuando recibe una respuesta se convierte a json
    .then(users =>  {
        listadoUsuarios(users.data);
        return getJanet();
    })
    .then(data => data.json())
    .then(user =>{
        mostrarJanet(user.data);
        console.log(user.data);
    });


function getUsuarios(){ // Funcion para pedir usuarios a api en la nube
    return fetch('https://reqres.in/api/users') 
}

function getJanet(){ // Funcion para pedir usuarios a api en la nube
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
    nombre.innerHTML = `Nombre: ${user.first_name} // Apellido: ${user.last_name} // Email: ${user.email}`;
    div_janet.appendChild(nombre); // para que se muestren los usuarios en el div
    
    document.querySelector('#janet .loading').style.display = 'none'; // Es para ocultar el loading
}; 