const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
let one = document.querySelector(".one");
let two = document.querySelector(".two");

let fahrenheit;
let celcius;

// °F = (°C × 1.8) + 32
// °C = (°F − 32) /1.8

const swapDeegres = () => {
	if (one.textContent === "°C") {
		one.textContent = "°F";
		two.textContent = "°C";
		result.textContent = ""
	} else {
		one.textContent = "°C";
		two.textContent = "°F";
		result.textContent = ""
	}
};

const deegres = () => {
	if (one.textContent === "°C") {
		const cTF = () => {
			fahrenheit = converter.value * 1.8 + 32;
			result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`;
		};
		cTF();
	
	} else {
		const ftC = () => {
			celcius = (converter.value - 32) / 1.8;
			result.textContent = `${converter.value}°F to ${celcius.toFixed(1)}°C`;
		};
		ftC();

	}
}

const conversion = () => {
	//jeżeli wpisana wartość jest różna od pustego stringu wykonaj funkcje deegres, jeśli nie to wypisz wiadomość
	if(converter.value !== "") {
deegres()
	} else {
		result.textContent = "Musisz podać jakąś wartość!"
	}
}

const reset = () => {
	result.textContent = ""
	converter.value = ""
	one.textContent = "°C"
	two.textContent = "°F"
}

convBtn.addEventListener("click", conversion);
changeBtn.addEventListener("click", swapDeegres);
resetBtn.addEventListener('click', reset)

//.toFixed(1) ustala nam że mamy miec maksymalnie 1 liczbę po przecinku
//converter.value = "" usuwa nam wpisaną liczbę po wciśnięciu przycisku konwertuj