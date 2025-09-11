const dino = document.getElementById("dino");
const obstaclesContainer = document.getElementById("obstacles");

document.addEventListener("keydown", function(event) {
  if (event.code === "Space") jump();
});

function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");
    setTimeout(() => dino.classList.remove("jump"), 500);
  }
}

// Função para criar obstáculos
function createObstacle() {
  const cactus = document.createElement("div");
  cactus.classList.add("cactus");
  cactus.style.right = "-20px";
  obstaclesContainer.appendChild(cactus);

  // Verifica colisão
  const collisionCheck = setInterval(() => {
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
    const cactusLeft = cactus.getBoundingClientRect().left;

    if (cactusLeft < 90 && cactusLeft > 50 && dinoTop < 40) {
      alert("Game Over!");
      clearInterval(collisionCheck);
      clearInterval(obstacleInterval);
      document.querySelectorAll(".cactus").forEach(c => c.remove());
    }

    if (cactusLeft < -20) {
      cactus.remove();
      clearInterval(collisionCheck);
    }
  }, 10);
}

// Cria obstáculos em intervalos aleatórios
const obstacleInterval = setInterval(() => {
  if (Math.random() < 0.6) createObstacle();
}, 1500);
