const form = document.getElementById('form');
const input = document.getElementById('file');
const progress = document.getElementById('progress');
let formData = new FormData();


form.addEventListener('submit', (event) => {
    event.preventDefault();
    formData.append('uploadFile', input.files[0]);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

       
        xhr.upload.onprogress = (event) => {              
            let currentVolume = event.loaded;
            let totalVolume = event.total;
            let ratio = (currentVolume / totalVolume).toFixed(2);
            progress.value = ratio;  
        };

    xhr.send(formData);   

});

