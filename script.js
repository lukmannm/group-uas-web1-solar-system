// ==== BAGIAN BINTANG (dari main)
const createStars = () => {
    const space = document.getElementById('space');
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 200 + '%';

        const size = Math.random();
        let starSize, starClass;

        if (size < 0.6) {
            starSize = Math.random() * 1.5 + 0.5;
            starClass = 'small';
        } else if (size < 0.9) {
            starSize = Math.random() * 2 + 1.5;
            starClass = 'medium';
        } else {
            starSize = Math.random() * 2 + 2.5;
            starClass = 'large';
        }

        star.classList.add(starClass);
        star.style.width = starSize + 'px';
        star.style.height = starSize + 'px';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';

        space.appendChild(star);
    }
};

// ==== BAGIAN SCROLL PLANETS (dari main)
const scrollToPlanets = () => {
    document.getElementById('planets').scrollIntoView({
        behavior: 'smooth'
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const planetItems = document.querySelectorAll('.planet-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const currentPlanetNameDisplay = document.getElementById('current-planet-name');

    const planetsData = [
        { name: "BUMI" },
        { name: "MERKURIUS" },
        { name: "VENUS" },
        { name: "MARS" },
        { name: "JUPITER" },
        { name: "SATURNUS" },
        { name: "URANUS" },
        { name: "NEPTUNUS" }
    ];

    let currentIndex = 0;

    const updateCarousel = () => {
        const offset = -currentIndex * window.innerWidth;
        carouselTrack.style.transform = `translateX(${offset}px)`;

        if (planetsData[currentIndex]) {
            currentPlanetNameDisplay.textContent = planetsData[currentIndex].name;
        } else {
            currentPlanetNameDisplay.textContent = planetItems[currentIndex].querySelector('img').alt.toUpperCase();
        }
    };

    prevButton.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = planetItems.length - 1;
        }
        updateCarousel();
    });

    nextButton.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentIndex < planetItems.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
    createStars(); // panggil setelah DOM ready
});
