// Убей крота

getHole = (ind) => document.getElementById(`hole${ind}`);       // Получение элемента лунки по индексу из HTML (для использования в цикле)
const elementKill = document.getElementById('dead');            // Получение элемента счётчика попаданий
const elementMiss = document.getElementById('lost');            // Получение элемента счётчика промахов

let countKill = 0;
let countMiss = 0;

for (let ind = 1; ind <= 9; ind++) {                                            // Запуск цикла для получения всех элементов hole из HTML по ID 
    let elementHole = getHole(ind);
    elementHole.onclick = () => {                                               // Назначение обработчика событий по клику для каждого полученного элемента 
        if (elementHole.classList.contains('hole_has-mole')) countKill++;
        else countMiss++;


        if (countKill === 10) {                                                 // Вывод сообщения при выигрыше, сброс счётчиков
            countKill = 0;
            countMiss = 0;
            alert('Победа!');
        }


        if (countMiss === 5) {                                                  // Вывод сообщения при выигрыше, сброс счётчиков
            alert('Проиграл!')
            countKill = 0;
            countMiss = 0;
        }
        elementKill.textContent = countKill;                                    // Запись значения счётчика в HTML элемент
        elementMiss.textContent = countMiss;                                    // Запись значения счётчика в HTML элемент
    }

}

