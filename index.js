function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = getRandomInt(1, 100);

const inputElement = document.querySelector('input')
const submitBtn = document.querySelector('.ok')
const restartBtn = document.querySelector('.restart')

submitBtn.addEventListener('click', (e) => {
    const guess = Number(inputElement.value);

    if (Number.isNaN(guess)) {
        alert("Введіть число!")
        return;
    }

    if (guess === randomNumber) {
        alert("Ви вгадали")
    } else if (guess > randomNumber) {
        alert("Ви не вгадали. Ваше число надто велике")
    } else if (guess < randomNumber) {
        alert("Ви не вгадали. Ваше число надто мале")
    }
})


restartBtn.addEventListener('click', (e) => {
    randomNumber = getRandomInt();
    inputElement.value = "";
})