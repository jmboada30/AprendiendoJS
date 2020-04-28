'use strict'

//JSON JavaScript Object Notation


    var pelicula = { //Esto es un objeto JSON
        titulo: 'Batman vs Superman',
        year: 2016,
        pais: 'EEUU'
    }

    var peliculas =[
        {titulo: 'La vida es bella', year:1997, pais:'alemania'},
        pelicula
    ]
    console.log(peliculas);


    var box_pelis = document.querySelector('.peliculas');
    var index;
    for(index in peliculas){
        var p = document.createElement('p');
        p.append(peliculas[index].titulo + ' - ' + peliculas[index].year);
        box_pelis.append(p);
    }

