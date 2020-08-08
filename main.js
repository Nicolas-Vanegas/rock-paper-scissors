//Problema: Juego de piedra papel o tijera, darle una de las 3 elecciones al usuario y a la maquina y decirles quien ganó.

var userSelect;/* prompt("Enter your choice between rock, papers and scissors"); //para que ingrese la eleccion que desea. */
/* var weapon1 = document.getElementById("rock").addEventListener("click");
var weapon2 = document.getElementById("paper").addEventListener("click");
var weapon3 = document.getElementById("scissors").addEventListener("click"); */
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var machineSelect;
var mensaje = document.getElementById("mensaje");
var modal = document.querySelector(".modal");

//Cuando le de click a algun boton, le asigna un valor a userSelect
rock.addEventListener('click',function() {
  userSelect = "rock";
  play(userSelect, machineSelect);
})
paper.addEventListener('click',function() {
  userSelect = "paper";
  play(userSelect, machineSelect);
})
scissors.addEventListener('click',function() {
  userSelect = "scissors";
  play(userSelect, machineSelect);
})
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
console.log(userSelect); 


//Juego
function play(userSelect, machineSelect){
  if(userSelect != machineSelect) {
    if(userSelect == "rock" && machineSelect == "scissors" || userSelect == "scissors" && machineSelect == "paper" || userSelect == "paper" && machineSelect == "rock"){
    mensaje.innerHTML = `<h1>You win!!!</h1><br><p>the machine chose ${machineSelect}`;
    modal.style.display = 'block';
    }else if(userSelect == "paper" && machineSelect == "scissors" || userSelect == "rock" && machineSelect == "paper" || userSelect == "scissors" && machineSelect == "rock"){
    mensaje.innerHTML = `<h1>You Lose!!!</h1><br><p>the machine chose ${machineSelect}`;
    modal.style.display = 'block';
    }
  }else {
    mensaje.innerHTML = `<h1>tie!!!</h1><br><p>the machine chose ${machineSelect}`;
    modal.style.display = 'block';
  }
}
function clearModal(e){
  if(e.target == modal) {
    modal.style.display = "none"
  }
}
window.addEventListener('click', clearModal);
play();