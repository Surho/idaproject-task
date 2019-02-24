import $ from "jquery"; 
window.jQuery = window.$ = $;

$(document).ready(function() {
    $('.nav').click((evt) => {
        let elem = evt.target.parentElement;
        if(elem.classList.contains('nav__item') && !elem.classList.contains('nav__item--exit')) {
            $('.nav__item--active').removeClass('nav__item--active');
            $('.main__item--active').removeClass('main__item--active');

            let tab = elem.dataset.tab;
            elem.classList.add('nav__item--active');
            $(tab).addClass('main__item--active');
        };
    });
});
