const createStars = () => {
    const space = document.getElementById('space');
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        // Random Position
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 200 + '%';

        // Different star sizes
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
        // durations
        star.style.animationDuration = Math.random() * 2 + 2 + 's';

        space.appendChild(star);
    }
}

// Scroll to planets section
const scrollToPlanets = () => {
    document.getElementById('planets').scrollIntoView({
        behavior: 'smooth'
    });
}

// Planet carousel
let currentPlanet = 0;
// TODO: Increse total planet after add more image
const totalPlanets = 2;
const planetTrack = document.getElementById('planetTrack');

const updateCarousel = () => {
    const translateX = -currentPlanet * 100;
    planetTrack.style.transform = `translateX(${translateX}%)`;
}

const nextPlanet = () => {
    currentPlanet = (currentPlanet + 1) % totalPlanets;
    updateCarousel();
}

const previousPlanet = () => {
    currentPlanet = (currentPlanet - 1 + totalPlanets) % totalPlanets;
    updateCarousel();
}

// Touch/swipe for mobile
let startX = null;
let currentX = null;
let isDragging = false;

planetTrack.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

planetTrack.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
});

planetTrack.addEventListener('touchend', () => {
    if (!isDragging) return;

    const diffX = startX - currentX;
    const threshold = 50;

    if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
            nextPlanet();
        } else {
            previousPlanet();
        }
    }

    isDragging = false;
    startX = null;
    currentX = null;
});

// Mouse drag for desktop
planetTrack.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    isDragging = true;
    planetTrack.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    currentX = e.clientX;
});

document.addEventListener('mouseup', () => {
    if (!isDragging) return;

    const diffX = startX - currentX;
    const threshold = 50;

    if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
            nextPlanet();
        } else {
            previousPlanet();
        }
    }

    isDragging = false;
    startX = null;
    currentX = null;
    planetTrack.style.cursor = 'grab';
});

// Initialize
createStars();
updateCarousel();
