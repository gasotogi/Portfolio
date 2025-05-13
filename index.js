let lastScrollPosition = 0;
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    
    const container2 = document.querySelector('header');
    if (container2) {
        container2.style.transform = `translateY(${scrolled * 0.3}px)`;
    }

    const home = document.querySelector('.home');
    if (home) {
        home.style.transform = `translateY(${scrolled * 0.1}px)`; 
    }
}

window.addEventListener('scroll', () => {
    lastScrollPosition = window.pageYOffset;
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateParallax();
            ticking = false;
        });
        ticking = true;
    }
});


updateParallax();