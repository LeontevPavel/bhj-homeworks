
const elementCounter = document.getElementById('clicker__counter');   // Получени элемента-счётчика из HTML

let count = +elementCounter.textContent;                        // Чтение значения счётчика из HTML

const elementCookie = document.getElementById ('cookie');       // Получени элемента-картинки из HTML

elementCookie.onclick = function () {                       // Получение события клика по картинке из HTML
    count++;                                                // Увеличение значения счётчика на 1 при клике
    elementCounter.textContent = count;                     // Запись значения счётчика в HTML элемент
    if (odd (count)) elementCookie.width = 250;            // Если значение счётчика нечётное, записываем значение ширины картинка 250 в HTML
     else elementCookie.width = 200;                        // Если значение счётчика чётное или равно 0, записываем значение ширины картинки 200 в HTML
}

function odd (count) {                                      // Функция определяет чётность/нечётность значения счётчика                     
    if (count %2  === 0 || count === 0) return false;
    return true;
}



