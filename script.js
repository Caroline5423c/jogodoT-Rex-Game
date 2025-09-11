let score = 0;
const scoreDisplay = document.getElementById("score");

// Atualiza a pontuação a cada 100ms
const scoreInterval = setInterval(() => {
  score++;
  scoreDisplay.textContent = "Pontuação: " + score;
}, 100);

// Quando o jogador perde, parar a pontuação
function gameOver() {
  alert("Game Over! Pontuação final: " + score);
  clearInterval(scoreInterval);
  clearInterval(obstacleInterval);
  document.querySelectorAll(".cactus").forEach(c => c.remove());
}
