//Problema: Juego de piedra papel o tijera, darle una de las 3 elecciones al usuario y a la maquina y decirles quien ganó.
let userScore = 0;
let machineScore = 0;/* prompt("Enter your choice between rock, papers and scissors"); //para que ingrese la eleccion que desea. */
/* const weapon1 = document.getElementById("rock").addEventListener("click");
const weapon2 = document.getElementById("paper").addEventListener("click");
const weapon3 = document.getElementById("scissors").addEventListener("click"); */
var userScore_span = document.getElementById("user-score");
var machineScore_span = document.getElementById("machine-score");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var restart = document.getElementById("restart");
var mensaje = document.getElementById("mensaje");
var modal = document.getElementById("modal");

//Cuando le de click a algun boton, le asigna un valor a userSelect
const all = () => {
  rock.addEventListener('click',function() {
    
    var userSelect = "rock";
    play(userSelect);//Con esto me sale como debe pero se va muy rápido
  })
  paper.addEventListener('click',function() {
    var userSelect = "paper";
    play(userSelect);
  })

  scissors.addEventListener('click',function() {
    var userSelect = "scissors";
    play(userSelect);
  })
}

//darle un arma aleatoria a la maquina
const getRambomChoice = () => {
  let response =  "rock";

  const choiceId = Math.round(Math.random()* 3);
  if (choiceId == 2) {
    response = "paper";
  }else if(choiceId === 3) {
    response = "scissors";
  }
  
  return response;
}

//Juego
const play = (userSelect) => {
 // debugger;

  let machineSelect = getRambomChoice();

  if(userSelect != machineSelect) {
    if(userSelect == "rock" && machineSelect == "scissors" || userSelect == "scissors" && machineSelect == "paper" || userSelect == "paper" && machineSelect == "rock"){
      userScore++;
      // userScore_span.innerHTML = userScore;
      // machineScore_span.innerHTML = machineScore;
      mensaje.innerHTML = `<h1>You win!!!</h1><br><p>the machine chose ${machineSelect}`;
      modal.style.display = 'block';
    }else if(userSelect == "paper" && machineSelect == "scissors" || userSelect == "rock" && machineSelect == "paper" || userSelect == "scissors" && machineSelect == "rock"){
      machineScore++;
      // userScore_span.innerHTML = userScore;
      // machineScore_span.innerHTML = machineScore;
      mensaje.innerHTML = `<h1>You Lose!!!</h1><br><p>the machine chose ${machineSelect}`;
      modal.style.display = 'block';
    }
  }else {
    // userScore_span.innerHTML = userScore;
    // machineScore_span.innerHTML = machineScore;
    mensaje.innerHTML = `<h1>tie!!!</h1><br><p>the machine chose ${machineSelect}`;
    modal.style.display = 'block';
  }

  alert(`Sin miedo al exito papi!!!! -- ${userScore}` )
}
//modal
function clearModal(e){
  console.log("clearModal", e)

  if(e.target == modal) {
    modal.style.display = "none"
  }
}

function restartGame(){
  userScore = 0;
  cpuScore = 0;
  // userScore_span.innerHTML = userScore;
  // machineScore_span.innerHTML = cpuScore;
}

restart.addEventListener('click',restartGame);
//window.addEventListener('click', clearModal);

all();