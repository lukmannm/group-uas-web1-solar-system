const planetContainers = document.querySelectorAll(".planet-container");
const planetSection = document.querySelector(".planets-section");
const detailSection = document.getElementById("planet-detail");
const detailImage = document.getElementById('detail-image');
const detailTitle = document.getElementById("detail-title");
const detailContent = document.getElementById("detail-content");
const detailContent2 = document.getElementById("detail-content-2");
const backButton = document.getElementById("back-button");

const planetData = {
    mercury: {
        image: "/images/Merkurius.png",
        title: "Mercury",
        youtubeUrl: "https://www.youtube.com/embed/0KBjnNuhRHs?si=nwMOfp6Q089a7mVb",
        referenceUrl: "https://science.nasa.gov/earth/facts/",
        content: "Mercury is the smallest planet in our solar system and nearest to the Sun. It's only slightly larger than Earth's Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter.",
        content2: "Mercury's surface temperatures are both extremely hot and cold. Because the planet is so close to the Sun, day temperatures can reach highs of 800°F (430°C). Without an atmosphere to retain that heat at night, temperatures can dip as low as -290°F (-180°C). Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere. But Mercury is the fastest planet, zipping around the Sun every 88 Earth days."
    },
    venus: {
        image: "/images/venus.webp",
        title: "Venus",
        youtubeUrl: "https://www.youtube.com/embed/BvXa1n9fjow?si=U_seQid_67gO0lEm",
        referenceUrl: "https://science.nasa.gov/venus/venus-facts/",
        content: "Venus is the second planet from the Sun, and Earth's closest planetary neighbor. Venus is the third brightest object in the sky after the Sun and Moon. Venus spins slowly in the opposite direction from most planets.",
        content2: "Venus is similar in structure and size to Earth, and is sometimes called Earth's evil twin. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. Below the dense, persistent clouds, the surface has volcanoes and deformed mountains."
    },
    earth: {
        image: "/images/bumi.png",
        title: "Earth",
        youtubeUrl: "https://www.youtube.com/embed/HCDVN7DCzYE?si=qhHR9iIbQBwggX2U",
        referenceUrl: "https://science.nasa.gov/earth/facts/",
        content: "While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.",
        content2: `Earth is the only planet in the solar system whose English name does not come from Greek or Roman mythology. The name was taken from Old English and Germanic. It simply means "the ground." There are, of course, many names for our planet in the thousands of languages spoken by the people of the third planet from the Sun.`
    },
    mars: {
        image: "/images/bumi.png",
        title: "Earth",
        youtubeUrl: "https://www.youtube.com/embed/HCDVN7DCzYE?si=qhHR9iIbQBwggX2U",
        referenceUrl: "https://science.nasa.gov/earth/facts/",
        content: "While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.",
        content2: `Earth is the only planet in the solar system whose English name does not come from Greek or Roman mythology. The name was taken from Old English and Germanic. It simply means "the ground." There are, of course, many names for our planet in the thousands of languages spoken by the people of the third planet from the Sun.`
    },

        jupiter: {
        image: "/images/Jupiter.png",
        title: "Jupiter",
        youtubeUrl: "https://www.youtube.com/embed/PtkqwslbLY8?si=F96fsejo655FSIBD",
        referenceUrl: "https://science.nasa.gov/jupiter/jupiter-facts/",
        content: "Jupiter is a world of extremes. It's the largest planet in our solar system – if it were a hollow shell, 1,000 Earths could fit inside. It's also the oldest planet, forming from the dust and gases left over from the Sun's formation 4.6 billion years ago. But it has the shortest day in the solar system, taking about 9.9 hours to spin around once on its axis.",
        content2: "Jupiter's signature stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. The dark orange stripes are called belts, while the lighter bands are called zones, and they flow east and west in opposite directions. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years."
    },
    saturnus: {
        image: "/images/saturnus.webp",
        title: "Saturnus",
        youtubeUrl: "https://www.youtube.com/embed/epZdZaEQhS0?si=Z-KrylAikA61x4bd",
        referenceUrl: "https://science.nasa.gov/saturn/facts/",
        content: "Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium. Saturn is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. Saturn also has dozens of moons.",
        content2: "From the jets of water that spray from Saturn's moon Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries.s"
    },
    uranus: {
        image: "/images/uranus.png",
        title: "Uranus",
        youtubeUrl: "https://www.youtube.com/embed/m4NXbFOiOGk?si=vGiBTB6Aw28G-cme",
        referenceUrl: "https://science.nasa.gov/uranus/facts/",
        content: "Uranus is a very cold and windy world. The ice giant is surrounded by 13 faint rings and 28 small moons. Uranus rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin sideways, orbiting the Sun like a rolling ball.",
        content2: `Uranus was the first planet found with the aid of a telescope. It was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode.`
    },
    neptune: {
        image: "/images/neptune.png",
        title: "Neptune",
        youtubeUrl: "https://www.youtube.com/embed/NStn7zZKXfE?si=tWNXIuk1wacBBPVg",
        referenceUrl: "https://science.nasa.gov/neptune/",
        content: "Dark, cold, and whipped by supersonic winds, ice giant Neptune is more than 30 times as far from the Sun as Earth. Neptune is the only planet in our solar system not visible to the naked eye. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.",
        content2: "Neptune is so far from the Sun that high noon on the big blue planet would seem like dim twilight to us. The warm light we see here on our home planet is roughly 900 times as bright as sunlight on Neptune."
    }
};

const showDetail = (data) => {
    detailTitle.textContent = data.title;
    detailContent.textContent = data.content;
    detailContent2.textContent = data.content2;

    const paragraph = document.createElement('p');
    paragraph.textContent = data.content2;

    const detailReference = document.getElementById('detail-reference');
    if (data.referenceUrl) {
        detailReference.href = data.referenceUrl;
        detailReference.style.display = 'block';
    } else {
        detailReference.style.display = 'none';
    }

    // Update iframe video
    const detailVideo = document.getElementById('detail-video');
    detailVideo.innerHTML = '';

    if (data.youtubeUrl) {
        const iframe = document.createElement('iframe');
        iframe.width = '560';
        iframe.height = '560';
        iframe.src = data.youtubeUrl;
        iframe.title = 'YouTube video player';
        iframe.allow =
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;

        detailVideo.appendChild(iframe);
    }

    // Fade out list
    planetSection.classList.add("fade-out");
    setTimeout(() => {
        planetSection.style.display = "none";


        detailSection.style.backgroundImage = `url('${data.image}')`;
        detailSection.style.display = "block";
        requestAnimationFrame(() => {
            detailSection.classList.remove("fade-out");
            detailSection.classList.add("fade-in");
        });
    }, 500);
};

planetContainers.forEach(container => {
    const heading = container.querySelector("h3");
    heading.addEventListener("click", () => {
        const name = container.getAttribute("data-name");
        const data = planetData[name];
        if (data) showDetail(data);
    });
});

backButton.addEventListener("click", () => {
    detailSection.classList.remove("fade-in");
    detailSection.classList.add("fade-out");

    setTimeout(() => {
        detailSection.style.display = "none";
        planetSection.style.display = "block";
        requestAnimationFrame(() => {
            planetSection.classList.remove("fade-out");
            planetSection.classList.add("fade-in");
        });
    }, 500);
});