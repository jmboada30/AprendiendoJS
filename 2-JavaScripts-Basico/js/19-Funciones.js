'use strict'

function porCMD(n1,n2){
    
        return 
        "La Suma es: "+(n1+n2)+" \n "+
        "La Resta es: "+(n1-n2)+" \n "+
        "La Multi es: "+(n1*n2)+" \n "+
        "La División es: "+(n1/+n2)+" \n "+
        "**************************************";
    }

function porPantalla(n1,n2){
    
    return "<p>La Suma es: "+(n1+n2)+"</p>"+
    "<p>La Resta es: "+(n1-n2)+"</p>"+
    "<p>La Multi es: "+(n1*n2)+"</p>"+
    "<p>La División es: "+(n1/+n2)+"</p>"+
    "**************************************";
}
//definir funcion
function soylafuncion(n1, n2, ver=false){ //parametros //los parametros opcionales ya vienen inicializados.
    //instrucciones
    //debugger;
    var resul = ""
    if(ver==true){
        resul = porCMD(n1,n2);
    }else{
        resul = document.write(porPantalla(n1,n2));
    }
    //resultado
    return (resul);
}

//llamar una instruccion
for (let i = 0; i <= 10; i++) {
    console.log(i);
    console.log(soylafuncion(i,8));
}