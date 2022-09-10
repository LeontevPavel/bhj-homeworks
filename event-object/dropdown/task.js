// Выпадающие списки   dropdown     

const dropdownButton = Array.from(document.querySelectorAll('.dropdown'));
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));


dropdownButton.forEach((item) => item.addEventListener('click', openMenu));
dropdownItem.forEach((item) => item.addEventListener('click', changeTextButton));



function openMenu() {
    if (this.querySelector('.dropdown__list').classList.contains('dropdown__list_active')) {
        this.querySelector('.dropdown__list').classList.remove('dropdown__list_active')
    }
    else {
        this.querySelector('.dropdown__list').classList.add('dropdown__list_active')
    };
   
}

function changeTextButton(event) {
    let newText = this.querySelector('.dropdown__link').textContent;
    this.closest('.dropdown').querySelector('.dropdown__value').textContent = newText;
    event.preventDefault();
}