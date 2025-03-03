function createRose() {
  if (window.innerWidth < 480 && Math.random() > 0.5) return; // Меньше роз на телефоне

  const rose = document.createElement("div");
  rose.innerHTML = "🌹";
  rose.classList.add("rose");
  document.body.appendChild(rose);

  const startPos = Math.random() * window.innerWidth;
  const duration = Math.random() * 3 + 2;

  rose.style.left = `${startPos}px`;
  rose.style.animationDuration = `${duration}s`;

  setTimeout(() => {
    rose.remove();
  }, duration * 1000);
}

setInterval(createRose, 500);
