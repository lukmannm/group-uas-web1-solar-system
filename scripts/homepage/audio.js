const audio = document.getElementById("bg-audio");
const toggleBtn = document.getElementById("toggle-btn");
const startBtn = document.getElementById("start-btn");
const modal = document.getElementById("greeting-modal");
const modalContent = document.querySelector(".modal-content");


let isPlaying = false;
// Play audio and close modal after click
startBtn?.addEventListener("click", () => {
  modalContent.classList.add("fly-up");

  // Play audio
  audio.play().then(() => {
    isPlaying = true;
    toggleBtn.textContent = "🎵";
  }).catch(err => console.log("Autoplay blocked:", err));

  // Hide modal
  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflow = '';
    document.body.style.height = '';
  }, 1200);
});

const disableScroll = () => {
  document.body.style.overflow = 'hidden';
  document.body.style.height = '100%';
}

// Manual play/pause audio
toggleBtn?.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    toggleBtn.textContent = "🔇";
  } else {
    audio.pause();
    toggleBtn.textContent = "🎵";
  }
  isPlaying = !isPlaying;
});

// Initialize
disableScroll();