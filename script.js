const img = [
    'kolyaska_1578841640.jpg',
    'dom_1578845415.png',
    '3368304046.jpg',
    '3348499795.jpg'
];

let count = img.length;
const cover = document.querySelector('.cover');//найти в верстке див класса кавер

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function init() {
    shuffle(img);
    for (let i = 0; i < img.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');//добавили стиль CSS
        card.style.background = `url("./images/${img[i]}")`;//картинка для карточки
        card.style.backgroundSize = 'cover';
        card.style.transform = `rotate(${randomInteger(-15, 15)}deg) translate(${randomInteger(-40, 40)}px, ${randomInteger(-40, 40)}px)`;
        cover.append(card);//карточку в див
    }
}
init();

cover.addEventListener('click', event => {
    if (event.target.classList.contains('card')) {
        event.target.style.transform = 'rotate(-7999deg)';
        event.target.classList.add('go');
        count--;
    }
    if (count == 0) {
        cover.innerHTML = "";//удалить карточки
        init();
        count = img.length;
    }
});