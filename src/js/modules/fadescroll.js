require('../../sass/modules/_fadescroll.scss');

const effects = {
    top: {
        'animation-name': 'fade-top-active',
        'visibility': 'visible',
    },
    right: {
        'animation-name': 'fade-right-active',
        'visibility': 'visible',
    },
    left: {
        'animation-name': 'fade-left-active',
        'visibility': 'visible',
    },
    bottom: {
        'animation-name': 'fade-bottom-active',
        'visibility': 'visible',
    },
    none: {
        'animation-name': 'fade',
        'visibility': 'visible',
    }
};

function applyFadeEffect(element) {
    let effect = element.getAttribute('fade-direction');
    let fadeTime = element.getAttribute('fade-time') + 's';

    let style = effects[effect] || effects.none;

    Object.keys(style).forEach((key) => {
        element.style[key] = style[key];
    });
    element.style['animation-duration'] = fadeTime;
    element.classList.add('fade-effect-actived');
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            applyFadeEffect(entry.target);
            observer.unobserve(entry.target);
        }
    });
});

function observeNewElements() {
    document.querySelectorAll('.fade-effect').forEach(element => {
        observer.observe(element);
    });
}

observeNewElements();

const mutationObserver = new MutationObserver(() => {
    observeNewElements();
});

mutationObserver.observe(document.body, { childList: true, subtree: true });

let scrollTop = window.scrollY;
let documentHeight = document.body.scrollHeight;
let windowHeight = window.innerHeight;

if (scrollTop === 0 && documentHeight <= windowHeight) {
    window.scrollTo(0, 1);
} else if (scrollTop + windowHeight >= documentHeight) {
    window.scrollTo(0, scrollTop - 1);
}