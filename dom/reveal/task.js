// Появление объекта при прокрутке reveal

console.log(document.documentElement.scrollTop);
setInterval(() => {
    let element = document.querySelector('.reveal');
    let bottomElement = element.getBoundingClientRect().bottom
    let topElement = element.getBoundingClientRect().top
    let heightWindow = document.documentElement.clientHeight
    if (bottomElement < heightWindow && topElement > 50) {
        element.classList.add('reveal_active');
    }
    else element.classList.remove('reveal_active');

}, 50);
