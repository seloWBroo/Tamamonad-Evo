let hunger = 50;
let happiness = 50;

const hungerEl = document.getElementById("hunger");
const happinessEl = document.getElementById("happiness");
const statusEl = document.getElementById("status");

document.getElementById("feedBtn").addEventListener("click", () => {
    hunger = Math.max(0, hunger - 10);
    statusEl.textContent = "Yummy! 😋";
    updateStats();
});

document.getElementById("playBtn").addEventListener("click", () => {
    happiness = Math.min(100, happiness + 10);
    statusEl.textContent = "Playing! 🤩";
    updateStats();
});

function updateStats() {
    hungerEl.textContent = hunger;
    happinessEl.textContent = happiness;
    setTimeout(() => {
        statusEl.textContent = "Happy 🎉";
    }, 2000);
}
