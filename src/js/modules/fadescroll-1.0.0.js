require('../../sass/modules/_fadescroll-1.0.0.scss');

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

$.fn.fadescroll = function() {
    $(this).each(function() {
        let style = null;
        let post = $(this).offset().top;
        let fadet = $(window).scrollTop();
        let effect = $(this).attr('fade-direction') || 'bottom';
        let time = $(this).attr('fade-time') || 1;

        if(effects[effect] !== undefined) {
            style = effects[effect];
        } else {
            style = effects['bottom'];
        }

        if (post < fadet + 600) {
            $(this).css(style).css({
                'animation-duration': time + 's'
            });
        }

        if(fadet > ($('body').outerHeight() - $(window).outerHeight())) {
            $(this).css(style).css({
                'animation-duration': time + 's'
            });
        }

        $(this).addClass('fade-effect-actived');
    });
};

$(window).scroll(function() {
    $('.fade-effect').fadescroll();
});

const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length > 0) {
            $(mutation.addedNodes).find('.fade-effect').fadescroll();
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

$(document).ready(function() {
    $('.fade-effect').fadescroll();
});
