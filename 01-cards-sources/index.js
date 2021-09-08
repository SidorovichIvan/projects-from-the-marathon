function slidesPlugin(activeSlide) {
    const slides = document.querySelectorAll('.slide');
    slides[activeSlide].classList.add('active');
    slides.forEach(slide => {
        slide.addEventListener('click', () => {

            document.querySelector('.active').classList.remove('active');
            slide.classList.add('active');
        });
    })
}

slidesPlugin(1);