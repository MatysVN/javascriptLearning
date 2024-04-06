const sizeUpBtn = document.querySelector(".sizeUp");
const sizeDownBtn = document.querySelector(".sizeDown");
const colorBtn = document.querySelector(".color");
const text = document.querySelector("p");
let fontSize = 36;

const sizeDown = () => {
	if (fontSize <= 20) return;
	 //jeżeli font size dojdzie do 20px to return kończy wykonywanie funkcji

	fontSize -= 2;
	text.style.fontSize = fontSize + "px";
};
const sizeUp = () => {
	fontSize += 2;
	text.style.fontSize = fontSize + "px";
};

const changeColor = () => {
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);

	text.style.color = `rgb(${r},${g},${b})`;
};

sizeDownBtn.addEventListener("click", sizeDown);
sizeUpBtn.addEventListener("click", sizeUp);
colorBtn.addEventListener("click", changeColor);
