
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.responseType = 'json';
xhr.send();
xhr.onload = () => {
    if (xhr.status === 200) {
        let xhrObj = xhr.response;
        let valute = xhrObj.response.Valute;
        let valuteArr = [];

        for (key in valute) {
            let CharCode = valute[key].CharCode;
            let Value = valute[key].Value;
            valuteArr.push({ CharCode: CharCode, Value: Value });
        };

        const parentDiv = document.getElementById('items');
        valuteArr.forEach((elem) => {
            parentDiv.insertAdjacentHTML('afterbegin',
                `<div class="item">
            <div class="item__code"> ${elem.CharCode} </div>
            <div class="item__value"> ${elem.Value} </div>
            <div class="item__currency"> руб. </div>
            </div>
            `
            );
        });
        document.getElementById('loader').classList.remove('loader_active');
    };
};
