//Problema: Juego de piedra papel o tijera, darle una de las 3 elecciones al usuario y a la maquina y decirles quien ganó.

var userSelect;/* prompt("Enter your choice between rock, papers and scissors"); //para que ingrese la eleccion que desea. */
var weapon1 = "rock";
var weapon2 = "paper";
var weapon3 = "scissors";
var machineSelect;
var mensaje;


//Para darle interacción a los iconos
document.getElementById("rock").addEventListener("click", weapon1);
document.getElementById("paper").addEventListener("click", weapon2);
document.getElementById("scissors").addEventListener("click", weapon3);



//darle un arma aleatoria a la maquina
var machineSelectNumber = Math.round(Math.random()* 3);
if(machineSelectNumber == 1) {
  var machineSelect = "rock";
}else if (machineSelectNumber == 2) {
  var machineSelect = "paper";
}else{
  var machineSelect = "scissors";
}

console.log(machineSelect); 

if(weapon1 != null || weapon1 != undefined && weapon2 != null || weapon2 != undefined){
  if (machineSelect == "rock"){
    mensaje = "You Lose!!!"
  }
}
//Juego
/* if(userSelect != machineSelect) {
  if(userSelect == "rock" && machineSelect == "scissors" || userSelect == "scissors" && machineSelect == "paper" || userSelect == "paper" && machineSelect == "rock"){
    mensaje = "You win!!!";
  }else if(userSelect == "paper" && machineSelect == "scissors" || userSelect == "rock" && machineSelect == "paper" || userSelect == "scissors" && machineSelect == "rock"){
    mensaje = "You Lose!!!";
  }else {
    mensaje = "unidentified value, play again"
  }
}else {
  mensaje = "Tie";
}
console.log(mensaje); */