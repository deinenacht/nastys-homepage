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

    // DSGVO-konforme Google Maps-Einbindung
    const mapBtn = document.getElementById('load-map');
    if (mapBtn) {
        mapBtn.addEventListener('click', function() {
            const mapEmbed = document.getElementById('map-embed');
            mapEmbed.innerHTML = '<iframe src="https://www.google.com/maps?q=Weißenstädter+Str.+2,+95158+Kirchenlamitz&output=embed" width="100%" height="140" style="border:0; border-radius:1rem;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Karte: Nasty\'s Diele"></iframe>';
        });
    }
});
