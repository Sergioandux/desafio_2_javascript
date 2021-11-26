var CantidadDeJuegos = prompt("ingrese la cantidad de juegos que le gustaria realizar");
var empate = 0;
var victoria = 0;
var derrota = 0;
for (var i = 0; i<CantidadDeJuegos;i++) {
    var jugador1 = prompt("ingresa 'piedra', 'papel' o 'tijera'");
    var jugador2 = (parseInt(Math.random()*10))%3;
    if (jugador2 == 0) {
        jugador2 = "piedra"
    } else { 
        if (jugador2 == 1) {
            jugador2 = "papel"
        } else {
            jugador2 = "tijera"
        }};
    var resultado;
    if (jugador1 == "piedra") {
        if (jugador2 == "piedra") {
            resultado = "empate"
        } else {
            if (jugador2 == "papel") {
                resultado = "victoria jugador incognito"
            } else {
                resultado = "has ganado!!"
            }
        }};
    if (jugador1 == "tijera") {
        if (jugador2 == "tijera") {
            resultado = "empate"
        } else {
            if (jugador2 == "piedra") {
                resultado = "victoria jugador incognito"
            } else {
                resultado = "has ganado!!"
            }}};
    if (jugador1 == "papel") {
            if (jugador2 == "papel") {
                resultado = "empate"
            } else {
                if (jugador2 == "tijera") {
                    resultado = "victoria jugador incognito"
                } else {
                    resultado = "has ganado!!"
                }}};
    alert("jugaste: "+jugador1+", jugador incognito jugó: "+jugador2+", "+resultado);
    document.write((i+1)+" - "+resultado+"<br>")
    if (resultado == "empate") {
        empate = empate + 1
    } else {
        if (resultado == "has ganado!!") {
            victoria = victoria + 1
        } else {
            derrota = derrota + 1
        }
    }
};
document.write("cantidad de empates: "+empate+"<br>"+"cantidad de victorias: "+victoria+"<br>"+"cantidad de derrotas: "+derrota);
var resumenFinal
if (victoria > derrota) {
    resumenFinal = "HAS GANADO LA PARTIDAD, FELICITACIONES :)"
} else { if (derrota > victoria) {
    resumenFinal = "HAS PERDIDO LA PARTIDA :("
} else {
    resumenFinal = "ES UN EMPATE WEY, TODOS FELICES"
}
};
document.write("<br>"+"``````````````"+resumenFinal+"´´´´´´´´´´´´´´´´´");