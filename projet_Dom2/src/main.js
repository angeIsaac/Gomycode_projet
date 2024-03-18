const colors = document.getElementById('color');
const btn = document.getElementById('changeColor');

btn.addEventListener('click', setBackgroundColor);

function setBackgroundColor() {
    colors.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}