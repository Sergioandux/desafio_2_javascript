var CantidadDeJuegos = prompt("ingrese la cantidad de juegos que le gustaria realizar");
for (var i = 0; i<CantidadDeJuegos;i++) {
    /*var jugador1 = prompt("ingresa 'piedra', 'papel' o 'tijera'");*/
    var jugador2 = (parseInt(Math.random()*10))%3
    if (jugador2 == 0) {
        jugador2 = "piedra"
    } else { 
        if (jugador2 == 1) {
            jugador2 = "papel"
        } else {
            jugador2 = "tijeras"
        }}
    /*alert("jugaste: "+jugador1);*/
    alert("jugador incognito jugó: "+jugador2)
document.write(i)};