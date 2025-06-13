document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');
    
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.classList.add('visible');
    }
    
    acceptButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.remove('visible');
    });

    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    
    function rotateSlides() {
        slides.forEach(slide => slide.classList.remove('active'));
        
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }


    setTimeout(rotateSlides, 6500);
    setInterval(rotateSlides, 6500);
});
