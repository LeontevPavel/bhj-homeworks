// Всплывающие окна

document.getElementById('modal_main').classList.add('modal_active');;         // Получение элемента модальное окно по ID и добавлени модальному окну класс modal_active


document.querySelector('.show-success').onclick = () => {                       // Обработчик по клику на элемент с классом show-succes
    document.querySelector('#modal_success').classList.add("modal_active");     // Добавление элементу с Id modal_succes класс modal_active
}


const toClose = document.querySelectorAll('div.modal__close');            // Получение элементов с классом modal_close закрывающие окно
console.log(toClose);

Array.from(toClose).forEach((item) => {                                     // Обработчик по клику на элементы с классом modal_close
    item.onclick = () => {
        console.log('click');
        Array.from(document.getElementsByClassName('modal_active')).forEach((element) => {      // Для всех элементов с классом modal_active удалить класс modal_active
            element.classList.remove("modal_active");
        });

    }
})


