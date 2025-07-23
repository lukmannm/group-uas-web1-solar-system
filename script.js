document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const planetItems = document.querySelectorAll('.planet-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const currentPlanetNameDisplay = document.getElementById('current-planet-name');

    let currentIndex = 0; // Index planet yang sedang ditampilkan

    // Fungsi untuk memperbarui tampilan carousel
    const updateCarousel = () => {
        // Geser track carousel
        const offset = -currentIndex * window.innerWidth; // Geser sejauh lebar viewport
        carouselTrack.style.transform = `translateX(${offset}px)`;

        // Perbarui nama planet yang ditampilkan di bawah
        const currentPlanetName = planetItems[currentIndex].querySelector('h2').textContent;
        currentPlanetNameDisplay.textContent = currentPlanetName;
    };

    // Tombol Sebelumnya
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            // Jika sudah di awal, kembali ke planet terakhir
            currentIndex = planetItems.length - 1;
        }
        updateCarousel();
    });

    // Tombol Selanjutnya
    nextButton.addEventListener('click', () => {
        if (currentIndex < planetItems.length - 1) {
            currentIndex++;
        } else {
            // Jika sudah di akhir, kembali ke planet pertama
            currentIndex = 0;
        }
        updateCarousel();
    });

    // Inisialisasi tampilan awal
    updateCarousel();

    // Tambahan: Agar carousel responsif saat ukuran jendela berubah
    window.addEventListener('resize', updateCarousel);
});