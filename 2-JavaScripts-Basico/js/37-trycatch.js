'use strict'

// Con JS tambien podemos usar el tipico TRY CATCH

try { // aqui ponemos el codigo que puede tener el error para capturarlo
    var year = '2020';
    alert(yea);
    
} catch (error) { // SI ocurre un error sera capturado en la variable error y podemos hacer lo que sigue
    console.log(error); // ejemplo mostrarlo en consola para verlo
    alert('Hubo un error que fue capturado en TRY CATCH'); // enviar una alerta al usuario
    // etc etc
}