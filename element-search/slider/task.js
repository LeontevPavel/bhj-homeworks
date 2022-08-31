// Слайдер

const rightButton = document.querySelector('.slider__arrow_next');                      // Получение элемента кнопка вправо из HTML
const leftButton = document.querySelector('.slider__arrow_prev')                         // Получение элемента кнопка влево из HTML
const imagesCollection = Array.from(document.querySelectorAll('.slider__item'));        // Получение элементов-картинок из HTML и преобразование в массив
console.log(imagesCollection)

let i = 0;                                                                              //Объявление счётчика

rightButton.onclick = () => {                                                           //Событие клика по кнопке вправо из HTML    
    if (i+1 === imagesCollection.length){                                               // Проверка превышения длины массива картинок
        i = -1;
        imagesCollection[imagesCollection.length - 1].classList.remove("slider__item_active");
    } 
    i++;
 removeRight()
};

leftButton.onclick = () => {
    if (i === 0){
        i = imagesCollection.length;
        imagesCollection[0].classList.remove("slider__item_active");
    } 
    i--;
    removeLeft()
};



function removeRight() {    
    imagesCollection[i].classList.add("slider__item_active")
    imagesCollection[i-1].classList.remove("slider__item_active") 
    
}

function removeLeft() {
   
    imagesCollection[i].classList.add("slider__item_active")
    imagesCollection[i+1].classList.remove("slider__item_active")
   
    
}