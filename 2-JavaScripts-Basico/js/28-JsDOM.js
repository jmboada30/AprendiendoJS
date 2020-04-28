'use strict'

//DOM Document Object Model 

//permite modificar cualquier cosa del HTML agregar quitar mover etc.

//CONSEGUIR ELEMENTOS CON UN ID CONCRETO:
//var caja = document.getElementById('micaja').innerHTML; //asi traigo SOLO EL TEXTO DENTRO DE LA LLAVE
//otra forma de elegir un elemento de DOM es
var caja = document.querySelector('#micaja'); //es importante usar la misma notacion de CSS para el Id # y las clases .
console.log(caja);
    caja = document.getElementById('micaja'); //asi traigo todo el Elemento con sus llaves
console.log(caja);
    caja.innerHTML = '¡Soy yo el DIV: Cambie el valor del texto desde JS!'; //Asi puedo cambiar el JS
console.log(caja);

//Tambien puedo cambiar el CSS

    //caja.style.background = "red";
    CambiaColor(prompt('Indiqueme el colo que quiere de Fondo: ', 'red'));
    caja.style.padding = "20px";
    caja.style.color = "white";

    //cambiemos el color de fondo con una funcion
    function CambiaColor(color){
        caja.style.background = color;
    }

    //tambien podemos añadir clases CSS por medio de JS

    caja.className = 'Clase1 Clase2';

    //CONSEGUIR ELEMENTOS POR SUS ETIQUETAS
    //podemos llenar un ARRAY con varios elementos
    var todosLosDivs = document.getElementsByTagName('div'); //con getElementsByTagName selecciono varios elementos que sean etiqueta 'div'

    var seccion = document.querySelector('#miseccion'); //Aqui capturo la section por su ID (que siempre debe ser UNICO)
    var hr = document.createElement('hr'); //aqui creo un elemento linea en HTML
    var valor; //variable para usar dentro del FOR IN
    console.log(todosLosDivs);
    for(valor in todosLosDivs){ //for para recorrer todo el ARRAY
        if (typeof todosLosDivs[valor].textContent == 'string') { //solo selecciono los elementos del Array que son String
            var parrafo = document.createElement('p'); // creo etiqueta parrafo
            var texto = document.createTextNode(todosLosDivs[valor].textContent); // Capturamos el texto que tiene el Div
            parrafo.append(texto); // insertamos el texto al final del parrafo
            seccion.append(parrafo); // insertamos el parrafo a la section con id 'miseccion'
        }
    }
    seccion.append(hr);


    //CONSEGUIR ELEMENTOS POR SU CLASE
    //Para seleccionar Elementos por Clase es igual que arriba pero con la propiedad getElementsByClassName()

    var divRojos = document.getElementsByClassName('rojo');
    var divAmarillos = document.getElementsByClassName('amarillo');
    divAmarillos[0].style.background = 'yellow';
    var div;
    for(div in divRojos){
        if(divRojos[div].className == 'rojo'){ //si la clase es rojo
            divRojos[div].style.background = 'red';
        };
    };
