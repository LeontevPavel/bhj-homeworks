const linkHint = Array.from(document.querySelectorAll('.has-tooltip'));
console.log(linkHint);

linkHint.forEach((item) => {
    item.onclick = function () {  
        if (item.nextElementSibling === null || !item.nextElementSibling.classList.contains('tooltip')) {
            let textHint = item.getAttribute('title');
            let div = document.createElement('div')
            div.className = 'tooltip';
            div.innerHTML = textHint;
            item.after(div);
            console.log('Проверка');
        }

        let newDiv = item.nextElementSibling;
        if (newDiv.classList.contains('tooltip_active')){
            newDiv.classList.remove('tooltip_active');
            return false;
        };

        let divHint = Array.from(document.querySelectorAll('.tooltip'))
        divHint.forEach((item) => item.classList.remove('tooltip_active'));
        let top = item.getBoundingClientRect().bottom;
        let left = item.getBoundingClientRect().left;
                       
        newDiv.classList.add('tooltip_active');
        document.querySelector('.tooltip_active').style.left = left+'px';
        document.querySelector('.tooltip_active').style.top = top+'px';
        console.log(newDiv);
               
        return false;
    }
})

