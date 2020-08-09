//Problema: Juego de piedra papel o tijera, darle una de las 3 elecciones al usuario y a la maquina y decirles quien ganó.
let userScore = 0;
let machineScore = 0;
var userSelect;/* prompt("Enter your choice between rock, papers and scissors"); //para que ingrese la eleccion que desea. */
/* const weapon1 = document.getElementById("rock").addEventListener("click");
const weapon2 = document.getElementById("paper").addEventListener("click");
const weapon3 = document.getElementById("scissors").addEventListener("click"); */
var machineSelect;
const userScore_span = document.getElementById("user-score");
const machineScore_span = document.getElementById("machine-score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const restart = document.getElementById("restart");
const mensaje = document.getElementById("mensaje");
const modal = document.querySelector(".modal");

//Cuando le de click a algun boton, le asigna un valor a userSelect
function all(){
  rock.addEventListener('click',function() {
    userSelect = "rock";
    play(userSelect,machineSelect);//Con esto me sale como debe pero se va muy rápido
  })
  paper.addEventListener('click',function() {
    userSelect = "paper";
    play(userSelect,machineSelect);
  })

  scissors.addEventListener('click',function() {
    userSelect = "scissors";
    play(userSelect,machineSelect);
  })
}

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


//Juego
function play(userSelect,machineSelect){
  if(userSelect != machineSelect) {
    if(userSelect == "rock" && machineSelect == "scissors" || userSelect == "scissors" && machineSelect == "paper" || userSelect == "paper" && machineSelect == "rock"){
      userScore++;
      userScore_span.innerHTML = userScore;
      machineScore_span.innerHTML = machineScore;
      mensaje.innerHTML = `<h1>You win!!!</h1><br><p>the machine chose ${machineSelect}`;
      modal.style.display = 'block';
    }else if(userSelect == "paper" && machineSelect == "scissors" || userSelect == "rock" && machineSelect == "paper" || userSelect == "scissors" && machineSelect == "rock"){
      machineScore++;
      userScore_span.innerHTML = userScore;
      machineScore_span.innerHTML = machineScore;
      mensaje.innerHTML = `<h1>You Lose!!!</h1><br><p>the machine chose ${machineSelect}`;
      modal.style.display = 'block';
    }
  }else {
    userScore_span.innerHTML = userScore;
    machineScore_span.innerHTML = machineScore;
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

all();