function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = getRandomInt(1, 30);

const inputElement = document.querySelector('input')
const submitBtn = document.querySelector('.ok')

submitBtn.addEventListener('click', (e) => {
    const guess = Number(inputElement.value);

    if (Number.isNaN(guess)) {
        alert("Введіть число!")
        return;
    }

    if (guess === randomNumber) {
        alert("Ви вгадали")
    } else {
        alert("Ви не вгадали (лошара)")
    }
    
    randomNumber = getRandomInt(0, 30);
    inputElement.value = "";
})