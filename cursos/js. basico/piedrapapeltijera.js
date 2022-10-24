var jugador;
var cpu;

if (jugador == "tijeras" && cpu == "papel") {
    console.log ("ganaste");
}
else if ( jugador == "piedra" && cpu == "tijeras") {
    console.log ("ganaste");
}
else if (jugador == "papel" && cpu == "piedra") {
    console.log ("ganaste");
}
else if (jugador == cpu) {
    console.log ("empate");
}
else {
    console.log ("perdiste");
}

var cpu;
var jugador;

var tijeras = 1;
var piedra = 2;
var papel = 3;

switch (true) {
    case jugador === cpu : 
    console.log ("empate")
    break;
    case jugador == 1 && cpu == 3 || jugador == 2 && cpu == 1 || jugador == 3 && cpu == 2 :
    console.log ("ganaste")  
    break;
    default: 
    console.log ("perdiste")
}
  