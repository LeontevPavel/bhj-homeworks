//interests Чекбоксы

const checkboxParent1 = document.querySelector('div.interests').firstElementChild.firstElementChild.querySelector('.interest__check');
const checkboxParent2 = document.querySelector('div.interests').firstElementChild.lastElementChild.querySelector('.interest__check');
const checkboxChild = document.querySelector('ul.interests').querySelectorAll('.interest__check')


checkboxParent1.onchange = () => {
    const checkboxChild = checkboxParent1.closest('li.interest').querySelector('ul.interests').querySelectorAll('.interest__check');
    Array.from(checkboxChild).forEach((item) => {
    if (checkboxParent1.checked) {item.checked = true;}           
    else {item.checked = false};    
})
}

checkboxParent2.onchange = () => {
    const checkboxChild = checkboxParent2.closest('li.interest').querySelector('ul.interests').querySelectorAll('.interest__check');
    Array.from(checkboxChild).forEach((item) => {
    if (checkboxParent2.checked) {item.checked = true;}           
    else {item.checked = false};    
})
}