document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.js-anchor').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                smoothScrollTo(window.pageYOffset, targetElement.offsetTop, 1000);
            }
        });
    });
});

function smoothScrollTo(start, end, duration) {
    const startTime = performance.now();
    
    function scroll(currentTime) {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easing = easeInOutQuad(progress);
        
        window.scrollTo(0, start + (end - start) * easing);
        
        if (timeElapsed < duration) {
            requestAnimationFrame(scroll);
        }
    }
    
    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
    
    requestAnimationFrame(scroll);
}