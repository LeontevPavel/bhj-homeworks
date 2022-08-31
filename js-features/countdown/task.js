
 
 const timeText = document.getElementById ('timer'); // Получение элемента-таймера из HTML
 let startTime = +timeText.textContent;              // Чтение начального значения таймера из HTML
 

let timerId = setInterval (function counter () {     // Запуск таймера
startTime --;                                        // Декремент переменной таймера
timeText.textContent = startTime;                    // Запись значения таймера в HTML 
if (startTime === 0) {                               // Проверка окончания отсчёта 
    alert("Вы победили в конкурсе!")                 // Вывод результата в всплывающем окне при окончании отсчёта
    clearInterval(timerId);                          // Сброс ID счётчика    
}
}, 1000 );                                           // Интервал срабатывантя таймера (1сек. = 1000 мс)
