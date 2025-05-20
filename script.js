function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
}

document.getElementById('closeModal').onclick = function() {
    document.getElementById('imageModal').style.display = 'none';
};

let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
const carousel = document.getElementById('carousel');
const indicatorsContainer = document.getElementById('carouselIndicators');

function createIndicators() {
    for (let i = 0; i < totalItems; i++) {
        const indicator = document.createElement('span');
        indicator.classList.add('indicator');
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
        });
        indicatorsContainer.appendChild(indicator);
    }
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

document.getElementById('prevBtn').onclick = function() {
    currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
    updateCarousel();
};

document.getElementById('nextBtn').onclick = function() {
    currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
    updateCarousel();
};

carouselItems.forEach(item => {
    const img = item.querySelector('.project-image');
    let isZoomed = false;
    img.addEventListener('click', () => {
        if (!isZoomed) {
            img.style.transform = 'scale(1.5)';
            img.style.zIndex = '10';
            isZoomed = true;
        } else {
            img.style.transform = 'scale(1)';
            img.style.zIndex = '1';
            isZoomed = false;
        }
    });
});

let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

carousel.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
        currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    } else if (touchEndX - touchStartX > 50) {
        currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
        updateCarousel();
    }
});

createIndicators();