let score;

const add = (x, y) => {
	score = x + y;
	console.log(`Wynik dodawania to ${score}`);

	// if (score % 2 === 0) {
	// 	even();
	// } else {
	// 	odd();
	// }

	//zamiast tak długiego if możemy zapisać funkcje warunkową:
	score % 2 === 0 ? even() : odd();
};

const even = () => {
	console.log(`Liczba ${score} jest parzysta.`);
};
const odd = () => {
	console.log(`Liczba ${score} jest nieparzysta.`);
};

add(10,20)

console.log('');
console.log('===Zadanie skrócone===');
//Całe zadanie możemy zapisać dużo krócej

let score2

const add2 = (a,b) => {
	score2 = a + b;
	console.log(`Wynik dodawania to ${score2}`);

	score2 % 2 === 0 ? fun1(score2) : fun2(score2)
}
const fun1 = (el) => console.log(`Liczba ${el} jest parzysta`);
const fun2 = (el) => console.log(`Liczba ${el} jest nieparzysta`);

add2(6,3)