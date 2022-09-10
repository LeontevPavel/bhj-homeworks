const chatWindow = document.querySelector('.chat-widget');

chatWindow.onclick = function () {
    chatWindow.classList.add('chat-widget_active');
}

let minutes = new Date().getMinutes();
let hours = new Date().getHours();

document.addEventListener('keyup', sendingMessage);

function sendingMessage(event) {
    const input = document.getElementById('chat-widget__input');
    if (input.value.length && event.key === 'Enter') {
        console.log('click2')
        let messageClient = input.value;
        let message = document.querySelector('.chat-widget__messages');
        console.log(messageClient);
        message.innerHTML +=
        `
        <div class="message message_client">
            <div class="message__time">` + hours + ':' + minutes + `</div>
            <div class="message__text">` + messageClient + `</div>
         </div>        
        `
        input.value = '';

        let index = Math.floor(Math.random() * arrMessages.length);
        message.innerHTML +=
        `
        <div class="message">         
                <div class="message__time">` + hours + ':' + minutes + `</div>
                <div class="message__text">` + arrMessages[index] + `</div> 
        </div>
        `
    }
    console.log('click3')
}

const arrMessages = ['Добрый день!', 'Повторите ваш вопрос.',
    'Я вас не понимаю.', 'Нажмите F5.', 'До свидания!']





