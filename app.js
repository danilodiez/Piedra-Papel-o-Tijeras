var puntosUsuario = 0
var puntosMaquina = 0
//var puntosUsuario_span = document.getElementById(puntosJug)
//var puntosMaquina_span = document.getElementById(puntosMaq)
const elecciones = ["tijeras","piedra","papel"]
var eleccionMaquina = ""
var eleccionJ = ""




function opcionMaq(){
const eleccion = Math.random();
if (eleccion<=0.3){
    eleccionMaquina=elecciones[0]
} else if (eleccion>0.3 && eleccion<=0.6){
    eleccionMaquina=elecciones[1]
}else {
    eleccionMaquina = elecciones[2]
}

return eleccionMaquina

}

function mensajes(resul){
    document.getElementById("mensajes").innerHTML = resul;
    if (resul=="GANASTE"){
        document.body.style.backgroundColor = "#00FA9A";
        puntosUsuario = puntosUsuario+1;
        document.getElementById("puntosJug").innerHTML = puntosUsuario;
        

        
    }else if(resul=="PERDISTE"){
        document.body.style.backgroundColor = "#FF6347";
        puntosMaquina = puntosMaquina+1;
        document.getElementById("puntosMaq").innerHTML = puntosMaquina;

    }


    setTimeout(function(){
        document.body.style.transition = "all 0.4s"
        document.body.style.backgroundColor = "#008E9B";
},500)

}

function juego(opcionJ){
    var resultado = ""
    const opMaq = opcionMaq()

    if(opcionJ==opMaq){
        resultado = "EMPATE"

    }else if(opcionJ=="tijeras" && opMaq =="piedra"){
        resultado = "PERDISTE"
    }else if(opcionJ=="tijeras" && opMaq =="papel"){
        resultado = "GANASTE"
    }else if(opcionJ=="piedra" && opMaq =="papel"){
        resultado = "PERDISTE"
    }else if(opcionJ=="piedra" && opMaq =="tijeras"){
        resultado = "GANASTE"}
    else if(opcionJ=="papel" && opMaq =="tijeras"){
        resultado ="PERDISTE"
    }else if(opcionJ=="papel" && opMaq =="piedra"){
        resultado ="GANASTE"}
    mensajes(resultado)
    

    }

