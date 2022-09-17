
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json';
xhr.send();

xhr.onload = () => {
    if (xhr.status === 200) {
        let xhrObj = xhr.response;
        let title = xhrObj.data.title;
        let answers = xhrObj.data.answers;
        let titleDiv = document.getElementById('poll__title');
        titleDiv.textContent = title;
        let answerParent = document.getElementById('poll__answers');
        for (let answer of answers) {
            answerParent.insertAdjacentHTML('afterbegin',
                ` <button class="poll__answer"> ` + answer + `
      </button>
        `
            );
        };

        let answersButton = Array.from(document.querySelectorAll('.poll__answer'));
        answersButton.forEach((item) => {
            item.onclick = () => {
                alert('Спасибо, ваш голос засчитан!')
                return false;
            };
        });
    };
};




