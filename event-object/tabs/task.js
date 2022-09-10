// Tabs
const menuTab = Array.from(document.querySelectorAll('.tab'));
const contentTab = Array.from(document.querySelectorAll('.tab__content'));

menuTab.forEach((item) => item.addEventListener('click', openContent));

function openContent() {
    
    menuTab.forEach((item) => item.classList.remove('tab_active'));
    this.classList.add('tab_active');

    contentTab.forEach((item) => item.classList.remove('tab__content_active'));
    contentTab[menuTab.indexOf(this)].classList.add('tab__content_active');
}

