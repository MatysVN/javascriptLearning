const num = 10
const numbers = []

for (let i=0; i < num; i++) {
	numbers.push(i);
}

console.log(numbers);

const divide = (x) => {
	x % 3 === 0 && x !== 0 ? console.log(`Liczba ${x} jest podzielna przez 3`) : console.log(`Liczba ${x} nie jest podzielna przez 3`)
}

const score = numbers.forEach(divide)