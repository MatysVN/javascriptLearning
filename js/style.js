console.log("#1");
const letters = ["c", "d"];

letters.unshift("a", "b");
letters.push("e", "f");

console.log(letters);
console.log(letters.includes("c"));

console.log(" ");
console.log("#2");

const numbers = [1, 2, 3];
const food = ["🍔", "🍟", "🍕"];
const menu = numbers.concat(food);
console.log(menu);

const spreadMenu = [...numbers, ...food];
console.log(spreadMenu);

console.log(" ");
console.log("#3");

const arr = [1, 5, 13, 26, 48];

newArr = arr.map((x) => x * 5);
console.log(newArr);

for (x of newArr) {
	if (x % 2 === 0) {
		console.log(`Liczba Parzysta: ${x}`);
	} else {
		console.log(`Liczba Nieparzysta: ${x}`);
	}
}

console.log(" ");
console.log("#4");

const colors = ["green"];
colors.unshift("red");
colors.push("blue");

for (i = 0; i < colors.length; i++) {
	console.log(`Mój ulubiony kolor to: ${colors[i].toUpperCase()}`);
}
console.log("======");

for (i of colors) {
	console.log(
		`Mój ulubiony kolor to: ${i.charAt(0).toUpperCase() + i.slice(1)}`
	);
}

console.log(" ");
console.log("#5");

const cars = "Audi, Mercedes, BMW, Nissan, Dodge";
const carsArr = cars.split(", ");

console.log(carsArr);
const carsArrLength = carsArr.length > 3 ? `Jest OK` : `Nie jest OK`;
console.log(carsArrLength);

const carCheck = carsArr.indexOf('Audi') === -1 ? carsArr.pop() : carsArr.push('Kawasaki')
console.log(carsArr);