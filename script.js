document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const planetItems = document.querySelectorAll('.planet-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const currentPlanetNameDisplay = document.getElementById('current-planet-name');

    // Array untuk menyimpan data planet (sesuai urutan di HTML)
    // Nama di sini akan digunakan untuk menampilkan di bawah gambar
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

    let currentIndex = 0; // Index planet yang sedang ditampilkan

    // Fungsi untuk memperbarui tampilan carousel dan nama planet
    const updateCarousel = () => {
        // Hitung offset berdasarkan lebar viewport dan index saat ini
        const offset = -currentIndex * window.innerWidth;
        carouselTrack.style.transform = `translateX(${offset}px)`;

        // Perbarui nama planet yang ditampilkan di bawah
        if (planetsData[currentIndex]) {
            currentPlanetNameDisplay.textContent = planetsData[currentIndex].name;
        } else {
            // Fallback jika data tidak ditemukan (seharusnya tidak terjadi jika array match HTML)
            currentPlanetNameDisplay.textContent = planetItems[currentIndex].querySelector('img').alt.toUpperCase();
        }
    };

    // Event Listener untuk Tombol Sebelumnya
    prevButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Hentikan penyebaran event klik agar tidak memicu link gambar
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            // Jika sudah di awal, kembali ke planet terakhir (looping)
            currentIndex = planetItems.length - 1;
        }
        updateCarousel();
    });

    // Event Listener untuk Tombol Selanjutnya
    nextButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Hentikan penyebaran event klik agar tidak memicu link gambar
        if (currentIndex < planetItems.length - 1) {
            currentIndex++;
        } else {
            // Jika sudah di akhir, kembali ke planet pertama (looping)
            currentIndex = 0;
        }
        updateCarousel();
    });

    // Inisialisasi tampilan awal saat halaman dimuat
    updateCarousel();

    // Event Listener untuk responsivitas saat ukuran jendela berubah
    window.addEventListener('resize', updateCarousel);
});