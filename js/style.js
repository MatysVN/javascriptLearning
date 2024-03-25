console.log("Zadanie #1");
const cities = ["Kraków", "Warszawa", "Gdańsk", "Wrocław"];

for (let i = 0; i < cities.length; i++) {
	console.log(`To miasto nazywa się: ${cities[i].toUpperCase()}`);
}
console.log("--------");
console.log("Zadanie #2");

let x = 0;
while (x < 10) {
	x += 2;
	console.log(x);
}

console.log("--------");
console.log("Zadanie #3");

let a = 20;
do {
	a -= 3;
} while (a > 0)
console.log(a);

console.log("--------");
console.log("Zadanie #4");

const numbers = [5, 8, 10, 23, 48, 60]
for(const number of numbers) {
	console.log(number /5);
}

console.log('----');

for (const number of numbers) {
	if (number % 2 === 0) {
		console.log(`%cLiczba ${number} jest parzysta`, "background-color:gold; color:black;padding:3px");
	} else {
		console.log(`%cLiczba ${number} jest nieparzysta`, 'background-color: tomato; color:black; padding:3px');
	}
}