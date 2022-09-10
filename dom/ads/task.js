const arrCards = Array.from(document.querySelectorAll('.rotator'));

setInterval(elementSwitch, 1000);

function elementSwitch() {
    arrCards.forEach ((item) => {
        let elementsRotator = Array.from(item.querySelectorAll('.rotator__case'));
        let currentItemRotator = elementsRotator.findIndex((item) => item.classList.contains('rotator__case_active'));
        elementsRotator.forEach((item) => item.classList.remove('rotator__case_active'));
        elementsRotator[(currentItemRotator + 1) % elementsRotator.length].classList.add('rotator__case_active');
    })
}

