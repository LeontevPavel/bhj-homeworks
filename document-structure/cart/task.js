const controlsDec = Array.from(document.querySelectorAll('.product__quantity-control_dec'));
const controlsInc = Array.from(document.querySelectorAll('.product__quantity-control_inc'));
const addProduct = Array.from(document.querySelectorAll('.product__add'));
const cartProductId = [];           // массив для хранения ИД продуктов в корзине


// Обработчик кнопок -
controlsDec.forEach((item) => {
    item.onclick = () => {
        let quantityValue = (+item.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent);
        quantityValue--;
        if (quantityValue < 1) return;
        item.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent = quantityValue;
    }
})
// Обработчик кнопок +
controlsInc.forEach((item) => {
    item.onclick = () => {
        let quantityValue = (+item.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent);
        quantityValue++;
        item.closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent = quantityValue;
    }
})

// Обработчик кнопок Добавить в корзину
addProduct.forEach((item) => {
    item.onclick = () => {
        let cartProduct = item.closest('.product');         //Добавляемый товар
        let idProduct = +cartProduct.dataset.id;            // ИД добавляемого товара
        let imgProduct = cartProduct.querySelector('img').getAttribute('src');      //Картинка добавляемого товара
        let countProduct = +cartProduct.querySelector('.product__quantity-value').textContent;   //Количество добавляемого товара
        let cart = document.querySelector('.cart__products');       //Корзина с товарами
        let productsInCart = Array.from(cart.querySelectorAll('.cart__product'));       //Товар в корзине

        if (!cartProductId.includes(idProduct)) {
            cart.insertAdjacentHTML('afterBegin',                               //Вставка в начало корзины HTML нового товара
                `<div class="cart__product" data-id='${idProduct}'>             
                <img class="cart__product-image" src='${imgProduct}'>
                <div class="cart__product-count">${countProduct}</div>
            </div>`
            )
            cartProductId.push(idProduct);                                      //Добавление в массив ИД добавленного в корзину товара 

        }
        else {                                                                  // Если добавляемый товар есть в корзине
            let currentProduct = productsInCart.find((itm) => itm.dataset.id == idProduct);         //Поиск в корзине добавляемого товара
            let newCountProduct = +currentProduct.querySelector('.cart__product-count').textContent + countProduct;  // Общее количество добавляемого товара 
            currentProduct.querySelector('.cart__product-count').textContent = +newCountProduct;                      //Запись нового количества товара в корзине

        }
    }
})