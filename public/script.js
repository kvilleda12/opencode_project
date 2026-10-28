const roles = {
  creator: {
    index: "01", label: "THE CREATOR", title: "Turns pressure<br>into possibility.",
    description: "You bend the defense with pace, pull help toward you, and make the right read when the second defender comes.",
    stats: ["Vision", "Top of key", "One play ahead"], mark: "10", color: "#ee4d16"
  },
  shooter: {
    index: "02", label: "THE SHOOTER", title: "Makes space<br>feel dangerous.",
    description: "Your gravity changes the geometry of the floor. One clean look is enough to turn momentum in an instant.",
    stats: ["Balance", "The corners", "Always ready"], mark: "03", color: "#ffc928"
  },
  anchor: {
    index: "03", label: "THE ANCHOR", title: "Protects what<br>matters most.",
    description: "You own the paint, call out every screen, and turn defense into belief. The whole group stands taller behind you.",
    stats: ["Timing", "The paint", "Nothing easy"], mark: "05", color: "#f1eadc"
  },
  spark: {
    index: "04", label: "THE SPARK", title: "Changes the<br>temperature.",
    description: "You bring pace, pressure, and fearless energy. One hustle play can wake up the bench and flip the entire night.",
    stats: ["Energy", "Open floor", "Next play"], mark: "00", color: "#67c9b8"
  }
};

const roleButtons = [...document.querySelectorAll(".role-tabs button")];
const rolePanel = document.querySelector(".role-panel");

roleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    roleButtons.forEach((item) => {
      item.setAttribute("aria-selected", "false");
      item.tabIndex = -1;
    });
    button.tabIndex = 0;
    rolePanel.setAttribute("aria-labelledby", button.id);
    button.setAttribute("aria-selected", "true");
    const role = roles[button.dataset.role];
    rolePanel.style.background = role.color;
    rolePanel.querySelector(".role-index").textContent = role.index;
    rolePanel.querySelector(".role-label").textContent = role.label;
    rolePanel.querySelector("h3").innerHTML = role.title;
    rolePanel.querySelector(".role-description").textContent = role.description;
    rolePanel.querySelector(".role-mark span").textContent = role.mark;
    rolePanel.querySelectorAll(".role-stats strong").forEach((stat, index) => {
      stat.textContent = role.stats[index];
    });
  });
});

roleButtons.forEach((button, index) => {
  button.addEventListener("keydown", (event) => {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % roleButtons.length;
    if (event.key === "ArrowLeft") next = (index - 1 + roleButtons.length) % roleButtons.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = roleButtons.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    roleButtons[next].focus();
    roleButtons[next].click();
  });
});

const stopButton = document.querySelector("#stop-game");
const startButton = document.querySelector("#start-game");
const court = document.querySelector("#game-court");
const shot = court.querySelector(".shot-spot");
const scoreDisplay = document.querySelector("#game-score");
const timeDisplay = document.querySelector("#game-time");
const gameMessage = document.querySelector("#game-message");
const overlay = court.querySelector(".game-overlay");
const bestDisplay = document.querySelector("#best-score");
let score = 0;
let timeLeft = 24;
let timer;
let playing = false;

try { bestDisplay.textContent = localStorage.getItem("baseline-best") || "0"; } catch (_) {}

function moveShot() {
  const x = 15 + Math.random() * 70;
  const y = 24 + Math.random() * 60;
  const points = y < 48 || x < 22 || x > 78 ? 3 : 2;
  shot.style.left = `${x}%`;
  shot.style.top = `${y}%`;
  shot.dataset.points = points;
  shot.setAttribute("aria-label", `Take a ${points}-point shot`);
}

function endGame() {
  playing = false;
  const returnFocus = document.activeElement === shot || document.activeElement === stopButton;
  shot.disabled = true;
  startButton.disabled = false;
  stopButton.disabled = true;
  if (returnFocus) startButton.focus();
  clearInterval(timer);
  court.classList.remove("playing");
  overlay.querySelector("strong").innerHTML = `${score}<br>POINTS`;
  overlay.querySelector("span").textContent = score >= 24 ? "ICE COLD. RUN IT BACK?" : "GOOD RUN. GO AGAIN?";
  startButton.textContent = "Play again";
  gameMessage.textContent = `Final score: ${score} points`;
  const previousBest = Number(bestDisplay.textContent) || 0;
  if (score > previousBest) {
    bestDisplay.textContent = score;
    try { localStorage.setItem("baseline-best", String(score)); } catch (_) {}
  }
}

function startGame() {
  clearInterval(timer);
  score = 0;
  timeLeft = 24;
  playing = true;
  shot.disabled = false;
  startButton.disabled = true;
  stopButton.disabled = false;
  scoreDisplay.textContent = "00";
  timeDisplay.textContent = "24";
  gameMessage.textContent = "SHOOT!";
  startButton.textContent = "Clock running…";
  court.classList.add("playing");
  moveShot();
  shot.focus({ preventScroll: true });
  timer = setInterval(() => {
    timeLeft -= 1;
    timeDisplay.textContent = String(timeLeft).padStart(2, "0");
    if (timeLeft <= 5) gameMessage.textContent = "HURRY!";
    if (timeLeft <= 0) endGame();
  }, 1000);
}

startButton.addEventListener("click", startGame);
stopButton.addEventListener("click", endGame);
shot.addEventListener("click", () => {
  if (!playing) return;
  const points = Number(shot.dataset.points);
  const made = Math.random() < (points === 3 ? 0.68 : 0.84);
  if (made) {
    score += points;
    scoreDisplay.textContent = String(score).padStart(2, "0");
    gameMessage.textContent = points === 3 ? "SPLASH!" : "BUCKET!";
  } else {
    gameMessage.textContent = "OFF IRON";
  }
  moveShot();
});
