var CantidadDeJuegos = prompt("ingrese la cantidad de juegos que le gustaria realizar");
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
        }}
    var resultado
    if (jugador1 == "piedra") {
        if (jugador2 == "piedra") {
            resultado = "empate"
        } else {
            if (jugador2 == "papel") {
                resultado = "victoria jugador incognito"
            } else {
                resultado = "has ganado!!"
            }
        }
        }
    if (jugador1 == "tijera") {
        if (jugador2 == "tijera") {
            resultado = "empate"
        } else {
            if (jugador2 == "piedra") {
                resultado = "victoria jugador incognito"
            } else {
                resultado = "has ganado!!"
            }
        }
        }
    if (jugador1 == "papel") {
            if (jugador2 == "papel") {
                resultado = "empate"
            } else {
                if (jugador2 == "tijera") {
                    resultado = "victoria jugador incognito"
                } else {
                    resultado = "has ganado!!"
                }
            }
            };
    alert("jugaste: "+jugador1+", jugador incognito jugó: "+jugador2+", "+resultado);
document.write(i)};