window.onload = () => {
  document.querySelector(".rock").addEventListener("click", rock);
  document.querySelector(".paper").addEventListener("click", paper);
  document.querySelector(".scissors").addEventListener("click", scissors);
  document.querySelector(".modal-button").addEventListener("click", e => clearModal(e));
  document.querySelector(".restart").addEventListener("click", restartGame);
  //para agregarle un evento al body, en este caso el clearModal
  document.body.addEventListener("click", e => clearModal(e));
  //para agregarle un evento de una tecla clave, en este caso, el esc.
  document.body.addEventListener("keyup", e => listenForEsc(e));
  userScore_span = document.getElementById("user-score");
  machineScore_span = document.getElementById("machine-score");
  userScore = 0;
  machineScore = 0;
};

const selectionMachine = () => {
  const machineSelectNumber = Math.round(Math.random() * 3);
  if (machineSelectNumber == 1) {
    machineSelect = "rock";
  } else if (machineSelectNumber == 2) {
    machineSelect = "paper";
  } else {
    machineSelect = "scissors";
  }
};
const rock = () => {
  userSelect = "rock";
  selectionMachine();
  let selections = userSelect + machineSelect;
  juego(selections);
};
const paper = () => {
  userSelect = "paper";
  selectionMachine();
  let selections = userSelect + machineSelect;
  juego(selections);
};
const scissors = () => {
  userSelect = "scissors";
  selectionMachine();
  let selections = userSelect + machineSelect;
  juego(selections);
};

//Juego
const juego = selections => {
  switch (selections) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win();
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose();
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      tie();
    default:
      break;
  }
};

//win
const win = () => {
  document.getElementById("modal-header").innerHTML = `You win =)!!!\n Cpu: ${machineSelect} \nYou: ${userSelect}`;
  openModal();
  userScore++;
  //añadir en html el nuevo score
  userScore_span.innerHTML = `${userScore}`;
};

//lose
const lose = () => {
  document.getElementById("modal-header").innerHTML = `You lose =(\nCpu: ${machineSelect}\nYou: ${userSelect}`;
  openModal();
  machineScore++;
  machineScore_span.innerHTML = `${machineScore}`;
};

//tie
const tie = () => {
  document.getElementById("modal-header").innerHTML = `Tie :|\nCpu: ${machineSelect}\nYou: ${userSelect}`;
  openModal();
};

//modal
/**Escucha por la clave esc para cerrar el modal */
function listenForEsc(e) {
  if (e.keyCode === 27) {
    clearModal(e);
  }
}
function openModal() {
  document.querySelector(".modal-container").style.display = "flex";
  document.getElementById("modal-header").focus();
}

function clearModal(e) {
  // si el click occurio dentro del alguno de los botones no se cierra el modal, o el modal como tal, no se cierra. si ocurre en cualquier otro lado, si se cierra
  if (
    e.target.className.includes("rock") ||
    e.target.className.includes("paper") ||
    e.target.className.includes("scissors") ||
    e.target.className === "modal"
  ) {
    return;
  } else {
    document.querySelector(".modal-container").style.display = "none";
  }
}

function restartGame() {
  userScore = 0;
  machineScore = 0;
  userScore_span.innerHTML = userScore;
  machineScore_span.innerHTML = machineScore;
}
