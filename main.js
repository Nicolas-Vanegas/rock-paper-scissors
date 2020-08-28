window.onload = () => {
  document.querySelector(".rock").addEventListener("click", rock);
  document.querySelector(".paper").addEventListener("click", paper);
  document.querySelector(".scissors").addEventListener("click", scissors);
  document.body.addEventListener("click", e => clearModal(e));
  document.body.addEventListener("keyup", e => listenForEsc(e));
};

const rock = () => {
  const machineSelectNumber = Math.round(Math.random() * 3);
  if (machineSelectNumber == 1) {
    machineSelect = "rock";
  } else if (machineSelectNumber == 2) {
    machineSelect = "paper";
  } else {
    machineSelect = "scissors";
  }
  console.log(machineSelect);

  switch (machineSelect) {
    case "rock":
      document.getElementById("modal-header").innerHTML = "! Tie!!!";
      this.addEventListener("click", e => openModal(e));
      break;
    case "scissors":
      document.getElementById("modal-header").innerHTML = "! You Win!!!!";
      this.addEventListener("click", e => openModal(e));
      break;
    case "paper":
      document.getElementById("modal-header").innerHTML = "! You lose!!!";
      this.addEventListener("click", e => openModal(e));
      return console.log(`you lose!!`);
    default:
      break;
  }
};

const paper = () => {
  const machineSelectNumber = Math.round(Math.random() * 3);
  if (machineSelectNumber == 1) {
    machineSelect = "rock";
  } else if (machineSelectNumber == 2) {
    machineSelect = "paper";
  } else {
    machineSelect = "scissors";
  }
  console.log(machineSelect);

  switch (machineSelect) {
    case "rock":
      document.getElementById("modal-header").innerHTML = "! Tie!!!";
      this.addEventListener("click", e => openModal(e));
      break;
    case "scissors":
      document.getElementById("modal-header").innerHTML = "! You Win!!!!";
      this.addEventListener("click", e => openModal(e));
      break;
    case "paper":
      document.getElementById("modal-header").innerHTML = "! You lose!!!";
      this.addEventListener("click", e => openModal(e));
      return console.log(`you lose!!`);
    default:
      break;
  }
};

const scissors = () => {
  const machineSelectNumber = Math.round(Math.random() * 3);
  if (machineSelectNumber == 1) {
    machineSelect = "rock";
  } else if (machineSelectNumber == 2) {
    machineSelect = "paper";
  } else {
    machineSelect = "scissors";
  }
  console.log(machineSelect);

  switch (machineSelect) {
    case "rock":
      document.getElementById("modal-header").innerHTML = "! Tie!!!";
      this.addEventListener("click", e => openModal(e));
      break;
    case "scissors":
      document.getElementById("modal-header").innerHTML = "! You Win!!!!";
      this.addEventListener("click", e => openModal(e));
      break;
    case "paper":
      document.getElementById("modal-header").innerHTML = "! You lose!!!";
      this.addEventListener("click", e => openModal(e));
      return console.log(`you lose!!`);
    default:
      break;
  }
};

//Juego

//modal
/**Escucha por la clave esc para cerrar el modal */
function listenForEsc(e) {
  if (e.keyCode === 27) {
    clearModal(e);
  }
}
function openModal(e) {
  document.querySelector(".modal-container").style.display = "flex";
  document.getElementById("modal-header").focus();
}

function clearModal(e) {
  // si el click occurio dentro del las imagenes del carousel o dentro del modal, no se cierra el modal
  if (e.target.className === "modal") {
    return;
  } else {
    document.querySelector(".modal-container").style.display = "none";
  }
}
/*
function restartGame(){
  userScore = 0;
  cpuScore = 0;
  userScore_span.innerHTML = userScore;
  machineScore_span.innerHTML = cpuScore;
}
restart.addEventListener('click',restartGame);
window.addEventListener('click', clearModal); */
