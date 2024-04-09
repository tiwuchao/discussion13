const h1 = document. querySelector('h1');
h1.classList.add('heading');

document.addEvenetListener('dblclick',function() {
    const currentTime = new Date();
    alert(currentTime);
});

const checkox = document.querySelector('#toggle');
const emailBox = document.querySelector('#emailBox');

checkbox.addEventListener('click', function() {
    if (checkbox.checked) {
        emailBox.classList.remove('hidden');

    } else {
        emailBox.classList.add('hidden');
    }
});