
// PLAY MUSIC BUTTON (index.html)
function playMusic() {
  const music = document.getElementById("bgMusic");
  music.volume = 0.3;
  music.play();
}

// YES BUTTON — go to new page
function yes() {
  localStorage.setItem("playMusic", "true");
  window.location.href = "yes.html";
}

// NO BUTTON — bounce away
document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("no");

  if (!noBtn) return;

  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });
});

