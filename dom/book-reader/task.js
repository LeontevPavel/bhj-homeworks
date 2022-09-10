// Book reader

const fontSwitchArr = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

function settingFont(event) {
    book.classList.remove('book_fs-small');
    book.classList.remove('book_fs-big');
    fontSwitchArr.forEach((item) => item.classList.remove('font-size_active'));

    if (this.classList.contains('font-size_small')) {
        book.classList.add('book_fs-small');
        this.classList.add('font-size_active')
    }

    else if (this.classList.contains('font-size_big')) {
        book.classList.add('book_fs-big');
        this.classList.add('font-size_active')
    }

    else {
        this.classList.add('font-size_active');
    }

    event.preventDefault();

}

fontSwitchArr.forEach((item) => item.addEventListener('click', settingFont));






