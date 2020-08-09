//Problema: Juego de piedra papel o tijera, darle una de las 3 elecciones al usuario y a la maquina y decirles quien ganó.

var userSelect;/* prompt("Enter your choice between rock, papers and scissors"); //para que ingrese la eleccion que desea. */
/* var weapon1 = document.getElementById("rock").addEventListener("click");
var weapon2 = document.getElementById("paper").addEventListener("click");
var weapon3 = document.getElementById("scissors").addEventListener("click"); */
var userScore = 0;
var machineSelect;
var machineScore = 0;
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var userScore_span = document.getElementById("user-score");
var machineScore_span = document.getElementById("machine-score");
var restart = document.getElementById("restart");
var mensaje = document.getElementById("mensaje");
var modal = document.querySelector(".modal");

//Cuando le de click a algun boton, le asigna un valor a userSelect

/* var clicked = false
document.getElementById('rock').addEventListener("click", function() {
   clicked = true;
}​);
if(clicked == true){
  userSelect = "rock";
}
var clicked = false
document.getElementById('paper').addEventListener("click", function() {
   clicked = true;
}​);
if(clicked == true){
  userSelect = "paper";
}
var clicked = false
document.getElementById('scissors').addEventListener("click", function() {
   clicked = true;
}​);
if(clicked == true){
  userSelect = "scissors";
} */
/* function selectRock() {
  userSelect = "rock";
  play(userSelect,machineSelect);
}
function selectPaper() {
  userSelect = "paper";
  play(userSelect,machineSelect);
}
function selectScissors() {
  userSelect = "scissors";
  play(userSelect,machineSelect);
}
rock.addEventListener("click",selectRock);
paper.addEventListener("click",selectPaper);
scissors.addEventListener("click",selectScissors); */

rock.addEventListener('click',function() {
  userSelect = "rock";
  play(userSelect,machineSelect);
})
paper.addEventListener('click',function() {
  userSelect = "paper";
  play(userSelect,machineSelect);
})
scissors.addEventListener('click',function() {
  userSelect = "scissors";
  play(userSelect,machineSelect);
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
function play(userSelect,machineSelect){
  if(userSelect != machineSelect) {
    if(userSelect == "rock" && machineSelect == "scissors" || userSelect == "scissors" && machineSelect == "paper" || userSelect == "paper" && machineSelect == "rock"){
      userScore++;
      userScore_span.innerHTML = userScore;  
      mensaje.innerHTML = `<h1>You win!!!</h1><br><p>the machine chose ${machineSelect}`;
      modal.style.display = 'block';
    }else if(userSelect == "paper" && machineSelect == "scissors" || userSelect == "rock" && machineSelect == "paper" || userSelect == "scissors" && machineSelect == "rock"){
      machineScore++;
      machineScore_span.innerHTML = machineScore;
      mensaje.innerHTML = `<h1>You Lose!!!</h1><br><p>the machine chose ${machineSelect}`;
      modal.style.display = 'block';
    }
  }else {
    mensaje.innerHTML = `<h1>tie!!!</h1><br><p>the machine chose ${machineSelect}`;
    modal.style.display = 'block';
  }
}
//modal
function clearModal(e){
  if(e.target == modal) {
    modal.style.display = "none"
  }
}
function restartGame(){
  userScore = 0;
  cpuScore = 0;
  userScore_span.innerHTML = userScore;
  machineScore_span.innerHTML = cpuScore;
}
restart.addEventListener('click',restartGame);
window.addEventListener('click', clearModal);
play(userScore,machineScore);