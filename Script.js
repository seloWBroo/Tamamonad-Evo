let statusEl = document.getElementById("status");

function feedPet() {
  statusEl.innerText = "Full 🍗";
  p}(() => {
    statusEl.innerText = "Happy 🎉";
  }, 3000);
}

function playPet() {
  statusEl.innerText = "Playing 🕹️";
  setTimeout(() => {
    statusEl.innerText = "Happy 🎉";
  }, 3000);
}
