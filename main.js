//Problema: Juego de piedra papel o tijera, darle una de las 3 elecciones al usuario y a la maquina y decirles quien ganó.

var userSelect;
var machineSelect;

var machineSelectNumber = Math.round(Math.random()* 3);
if(machineSelectNumber == 1) {
  var machineSelect = "Rock";
}else if (machineSelectNumber == 2) {
  var machineSelect = "Paper";
}else{
  var machineSelect = "Scissors";
}

const resultado = function(userSelect, machineSelect){ 
  if(userSelect != machineSelect) {
    if(userSelect == "rock" && machineSelect == "scissors" || userSelect == "scissors" && machineSelect == "paper" || userSelect == "paper" && machineSelect == "rock"){
      console.log("You win!!!");
    }else if(userSelect == "paper" && machineSelect == "scissors" || userSelect == "rock" && machineSelect == "paper" || userSelect == "scissors" && machineSelect == "rock"){
      console.log("You Lose!!!")
    }
  }else {
    console.log("Tie");
  }
}
resultado("paper","paper");