const space = document.getElementById("space");
const totalStars = 200;

for (let i = 0; i < totalStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  // Random Position
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";

  // Size random
  const size = Math.random() * 2 + 1;
  star.style.width = size + "px";
  star.style.height = size + "px";

  // Delay animation
  star.style.animationDelay = Math.random() * 2 + "s";

  space.appendChild(star);
}
