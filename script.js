const startBtn = document.getElementById("startBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const front = document.getElementById("front");
const question = document.getElementById("question");
const finalPage = document.getElementById("final");

const music = document.getElementById("bgMusic");

startBtn.addEventListener("click", () => {
  front.classList.add("hidden");
  question.classList.remove("hidden");
  music.play();
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  question.classList.add("hidden");
  finalPage.classList.remove("hidden");
});
