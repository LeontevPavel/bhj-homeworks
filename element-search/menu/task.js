
// Всплывающее меню

const menuTitle = Array.from(document.getElementsByClassName('menu__link'));     // Получение массива элементов по классу menu__link из HTML

menuTitle.forEach((item) => {                                                    // Обработчик события клика по элементам с классом menu__link            
   item.onclick = () => {
      if (item.nextElementSibling) {                                               // Проверка наличия соседнего элемента 
         if (item.nextElementSibling.classList.contains('menu_active')) {          // Проверка наличия у соседнего элемета класса 'menu_active'       
            item.nextElementSibling.classList.remove('menu_active');               // Если меню активно, то удалить класс  'menu_active'
         }
         else { item.nextElementSibling.classList.add('menu_active') };             // Если меню неактивно, то добавить класс 'menu_active' 
         return false;
      }
   }
})



