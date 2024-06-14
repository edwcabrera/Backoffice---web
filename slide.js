let currentSlide = 1; // Start from the first original slide

function moveSlide(direction) {
    const slidesContainer = document.querySelector('.slides-container');
    const totalImages = slidesContainer.children.length;
    const imagesPerView = 2; // Show 2 images at a time
    const totalSlides = totalImages - imagesPerView; // Total possible slides positions
    
    slidesContainer.style.transition = 'transform 0.5s ease';
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const offset = -currentSlide * 16.67 * 2; // Each image takes up 16.67%, so 2 images = 33.34%
    slidesContainer.style.transform = `translateX(${offset}%)`;
    
    // Handle the infinite loop effect
    setTimeout(() => {
        if (currentSlide === 0) {
            slidesContainer.style.transition = 'none';
            currentSlide = totalSlides - imagesPerView;
            const offset = -currentSlide * 16.67 * 2;
            slidesContainer.style.transform = `translateX(${offset}%)`;
        } else if (currentSlide === totalSlides - 1) {
            slidesContainer.style.transition = 'none';
            currentSlide = imagesPerView - 1;
            const offset = -currentSlide * 16.67 * 2;
            slidesContainer.style.transform = `translateX(${offset}%)`;
        }
    }, 500); // Time must match the transition duration
}

document.addEventListener('DOMContentLoaded', () => {
    moveSlide(0);
});
