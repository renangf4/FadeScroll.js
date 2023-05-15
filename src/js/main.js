window.jQuery = window.$ = require('jquery');

$(document).ready(function () {
    $('.js-anchor').click(function (e) {
        e.preventDefault();

        let linkID = $(this).attr('href');

        $('html,body').animate({ scrollTop: $(linkID).offset().top }, 1000);
    });
});