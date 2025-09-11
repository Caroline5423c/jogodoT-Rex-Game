// script.js
document.addEventListener("keydown", function(event) {
  if (event.key === " ") {
    let dino = document.getElementById("dino");
    dino.style.bottom = "100px";
    setTimeout(() => {
      dino.style.bottom = "0px";
    }, 500);
  }
});
const jumpSound = new Audio("sounds/jump.mp3");
const gameOverSound = new Audio("sounds/gameover.mp3");
document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    if (!trex.classList.contains("jump")) {
      trex.classList.add("jump");
      jumpSound.play(); // toca o som de pulo
      setTimeout(() => {
        trex.classList.remove("jump");
      }, 500);
    }
  }
});
setInterval(() => {
  const trexTop = parseInt(window.getComputedStyle(trex).getPropertyValue("bottom"));
  const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("right"));

  if (obstacleLeft > 50 && obstacleLeft < 90 && trexTop < 40) {
    gameOverSound.play(); // toca o som de fim de jogo
    alert("Game Over!");
    obstacle.style.animation = "none";
    obstacle.style.display = "none";
  }
}, 10);
const trex = document.getElementById("trex");
const obstacle = document.getElementById("obstacle");
const scoreDisplay = document.getElementById("score");

let score = 0;
let isGameOver = false;

// Sons
const jumpSound = new Audio("sounds/jump.mp3");
const gameOverSound = new Audio("sounds/gameover.mp3");

document.addEventListener("keydown", function(event) {
  if (event.code === "Space" && !isGameOver) {
    if (!trex.classList.contains("jump")) {
      trex.classList.add("jump");
      jumpSound.play();
      setTimeout(() => {
        trex.classList.remove("jump");
      }, 500);
    }
  }
});

setInterval(() => {
  if (isGameOver) return;

  const trexTop = parseInt(window.getComputedStyle(trex).getPropertyValue("bottom"));
  const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("right"));

  if (obstacleLeft > 50 && obstacleLeft < 90 && trexTop < 40) {
    gameOverSound.play();
    alert("Game Over!");
    obstacle.style.animation = "none";
    obstacle.style.display = "none";
    isGameOver = true;
  } else {
    score++;
    scoreDisplay.textContent = "Score: " + score;
  }
}, 100);
