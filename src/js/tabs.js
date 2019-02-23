import $ from 'jquery';

console.log($('.main__item'));

$('.nav').click((evt) => {
    console.log(evt.target);
    if(evt.target.classList.contains('main__item')) {
        console.log("1");
    }
});
