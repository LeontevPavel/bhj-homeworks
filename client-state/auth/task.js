// auth Авторизация

//localStorage.removeItem('id');

let idInStorage = localStorage.getItem('id');
if (idInStorage) {
    document.getElementById('user_id').innerText = idInStorage;
    document.getElementById('welcome').classList.add('welcome_active');
    document.getElementById('signin').classList.remove('signin_active');
} else {
    const button = document.getElementById('signin__btn');
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const login = document.querySelector('[name = login]');
        const password = document.querySelector('[name = password]');
        loginValue = login.value;
        passwordValue = password.value;
        let formData = new FormData(document.querySelector('#signin__form'));
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        xhr.responseType = 'json';
        xhr.send(formData);
        xhr.onload = function () {
            let responseObj;
            if (xhr.status === 200) {
                responseObj = xhr.response;
                console.log(responseObj.success);
            } else alert('Ошибка соединения!');
            if (responseObj.success) {
                localStorage.setItem('id', responseObj.user_id);
                document.getElementById('user_id').innerText = responseObj.user_id;
                document.getElementById('welcome').classList.add('welcome_active');
                document.getElementById('signin').classList.remove('signin_active');
                console.log('Отлично!');
            } else { alert('Неверный логин/пароль') };
        };
    });
};
