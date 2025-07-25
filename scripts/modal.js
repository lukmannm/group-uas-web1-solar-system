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
  if (isPlaying) {
    audio.pause();
    toggleBtn.textContent = "🔇";
  } else {
    audio.play();
    toggleBtn.textContent = "🎵";
  }
  isPlaying = !isPlaying;
});


// Navbar
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active class from all items
    navItems.forEach(nav => nav.classList.remove('active'));

    item.classList.add('active');

    // Get target section
    const sectionId = item.getAttribute('data-section');
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Form
const exploreBtn = document.getElementById("explorer-btn");
const nameInput = document.getElementById('explorer-name');
const form = document.getElementById('explorer-form');
const inputGroup = document.getElementsByClassName('input-group')
// Enable/disable button based on input
nameInput.addEventListener('input', function () {
  const name = this.value.trim();
  startBtn.disabled = name.length === 0;

  // Update button text with name
  if (name.length > 0) {
    startBtn.innerHTML = `Let's Explore, ${name}! <i class="fas fa-rocket rocket-icon"></i>`;
  } else {
    startBtn.innerHTML = `Let's Explore <i class="fas fa-rocket rocket-icon"></i>`;
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = nameInput.value.trim();

  if (name) {
    localStorage.setItem('explorerName', name);

    document.querySelector('.start-in').style.animation = 'slideOut 0.5s ease-in forwards';
    exploreBtn.innerHTML = `Hi, ${name}`

    setTimeout(() => {
      modal.style.display = 'none';
      console.log(`Welcome ${name}! Starting solar system exploration...`);
    }, 500);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const storedName = localStorage.getItem('explorerName');

  if (storedName) {
    // Sembunyikan input group
    const inputGroup = document.getElementById('input-group');
    if (inputGroup) inputGroup.style.display = 'none';

    // Update button text
    startBtn.innerHTML = `Let's Explore, ${storedName}! <i class="fas fa-rocket rocket-icon"></i>`;
    exploreBtn.innerHTML = `Hi, ${storedName}`;

    // Optional: disable input if tidak dihilangkan
    nameInput.value = storedName;
    nameInput.disabled = true;

    // Aktifkan tombol
    startBtn.disabled = false;
  }
});


// Initialize
disableScroll();