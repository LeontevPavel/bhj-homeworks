const textarea = document.querySelector('#editor');

if (localStorage.contentStorage) {
    console.log (localStorage.contentStorage);
    textarea.value = localStorage.contentStorage;
};
console.log(textarea);

textarea.oninput = function () {
    const content = textarea.value;
    console.log(content);
    console.log('click');
    localStorage.contentStorage = content;

   // return false;
}

document.querySelector('#clearing').onclick = function() {
    textarea.value = "";
    delete localStorage.contentStorage;
    return false;
};