console.log("Zadanie #1 - template string");
const x = 50;
const y = 30;
console.log(`${x} jest większe niż ${y}`);

console.log("-------");
console.log("Zadanie #2 - if & else");
const color = "blue";
const newColor = "green";
if (color == newColor) {
	console.log("Kolory się zgadzają");
} else {
	console.log("Kolory się nie zgadzają");
}

console.log("-------");
console.log("Zadanie #3 - if & else if & else");
const a = 100;
const b = 50;
if (a > b) {
	console.log(`a jest większe od b`);
} else if (a === b) {
	console.log(`a jest takie samo jak b`);
} else {
	console.log(`a jest mniejsze niż b`);
}

console.log("-------");
console.log("Zadanie #4 - switch");
const promo = "30%";
switch (promo) {
	case "10%":
		console.log("Dziś mamy 10% zniżki!");
		break;
	case "20%":
		console.log("Dziś mamy 20% zniżki!");
		break;
	case "30%":
		console.log("Dziś mamy 30% zniżki!");
		break;
	default:
		console.log("Śledź newsletter, aby mieć powiadomienia o zniżkach");
		break;
}

console.log("-------");
console.log("Zadanie #5 - Operator warunkowy");

const m = 10;
const check =
	m % 2 === 0 ? `Liczba ${m} jest parzysta` : `liczba ${m} nie jest parzysta`;
console.log(check);



console.log("-------");
console.log("Zadanie #6 - O");
const o = 31;
let text;

if (o >= 100) {
	text = `Zmienna "o" jest większa od 100`;
} else if (o < 100 && o > 30) {
	text = `Zmienna "o" jest średniakiem`;
} else {
	text = `Zmienna "o" jest mała`;
}
console.log(text.toUpperCase());