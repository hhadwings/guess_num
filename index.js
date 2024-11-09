function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const minNum = 0;
const maxNum = 30;

let randomNumber = getRandomInt(minNum, maxNum);

const inputElement = document.querySelector('input');
const submitBtn = document.querySelector('.ok');

submitBtn.addEventListener('click', (e) => {
	const guess = Number(inputElement.value);

	if (Number.isNaN(guess)) {
		alert('Введіть число!');
		return;
	}

	if (guess < minNum || guess > maxNum) {
		alert(`Число повинно бути від ${minNum} до ${maxNum}`);
	} else if (guess === randomNumber) {
		alert('Ви вгадали');
	} else {
		alert('Ви не вгадали (лошара)');
	}

	randomNumber = getRandomInt(minNum, maxNum);
	inputElement.value = '';
});
