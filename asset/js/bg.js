const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(IMG_NUMBER) {
    const image = new Image();
    image.src = `/asset/image/${IMG_NUMBER}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
}

function getRandom() {
    const number = Math.ceil(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();