
// Обработчики события в поле input для отмены отправки сообщений и для добавления новых элементов списка
document.querySelector('#tasks__form').addEventListener('submit', cancel);
document.querySelector('#tasks__form').addEventListener('keyup', sendingTask);

function cancel(event) {
    event.preventDefault();
};
// Функция для добавления нового элемента списка дел (вызывается из обработчика по нажатию Enter)
function sendingTask(event) {
    const input = document.getElementById('task__input');
    if (input.value.length && event.key === 'Enter') {
        let messageTask = input.value;
        let tasksList = document.getElementById('tasks__list');
        tasksList.insertAdjacentHTML('beforeend',
            ` <div class="task">
                <div class="task__title">`+ messageTask + `</div>
                <a href="#" class="task__remove">&times</a>
            </div>    
            `
        )
        input.value = '';
        // Обновление массива списка дел и добавлени обработчика на крестик для удаления
        let removeTask = Array.from(document.getElementsByClassName('task__remove'));
        removeTask.forEach((item) => {
            item.addEventListener('click', close);
        })
        

    }
    event.preventDefault();
}
// Функция для удаления элементов (вызывается в обработчике крестика)
function close() {
    this.closest('.task').remove();
} 