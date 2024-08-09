document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    let index = 0;

    function updateCarousel() {
        const offset = -index * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : items.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        index = (index < items.length - 1) ? index + 1 : 0;
        updateCarousel();
    });

    // Optional: Automatic slide change
    setInterval(() => {
        index = (index < items.length - 1) ? index + 1 : 0;
        updateCarousel();
    }, 3000);
});
