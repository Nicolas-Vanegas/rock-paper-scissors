//Problema: Juego de piedra papel o tijera, darle una de las 3 elecciones al usuario y a la maquina y decirles quien ganó.

var userSelect = prompt("Enter your choice between rock, papers and scissors");
var machineSelect;
var mensaje;

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

if(userSelect != machineSelect) {
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
console.log(mensaje);