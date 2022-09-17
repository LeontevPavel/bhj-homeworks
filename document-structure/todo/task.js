
// Обработчики события в поле input для добавления новых элементов списка, срабатывает по событию submit
document.querySelector('#tasks__form').addEventListener('submit', sendingTask);

// Функция для добавления нового элемента списка дел (вызывается из обработчика по событию submit при нажатии Enter или Button)
function sendingTask(event) {
    event.preventDefault();
    const input = document.getElementById('task__input');
    if (input.value.trim().length) {
        let messageTask = input.value;
        let tasksList = document.getElementById('tasks__list');
        tasksList.insertAdjacentHTML('beforeend',
            ` <div class="task">
                <div class="task__title">`+ messageTask + `</div>
                <a href="#" class="task__remove">&times</a>
            </div>    
            `
        );
        input.value = '';

        //  Добавлени обработчика на крестик для удаления добавленного элемента
        let removeTask = tasksList.lastElementChild;
        removeTask.addEventListener('click', close);
        };     

    };    

// Функция для удаления элементов (вызывается в обработчике крестика)
function close() {
    this.closest('.task').remove();
}; 