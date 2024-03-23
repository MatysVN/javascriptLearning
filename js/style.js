for (let i = 0; i < 6; i++) {
	console.log(i);
}

console.log("---------");

const animals = ['pies', 'kot', 'mysz', 'królik', 'lis', 'dzik']

//zamiast pisać tak możemy użyć pętli
// console.log(animals[0]);
// console.log(animals[1]);
// console.log(animals[2]);
// console.log(animals[3]);
// console.log(animals[4]);
// console.log(animals[5]);

//jednak ten sposób nie jest dobry ponieważ jeżeli zmieni się długośc naszej tablicy to elementy nie zostaną wylogowane
// for (let i = 0; i < 6; i++) {
// 	console.log(animals[i]);
// }

//zamiast tego możemy naspisać że pętla ma się wykonywać tyle razy ile jest elementów w tablicy
for (let i = 0; i < animals.length; i++) {
	console.log(animals[i]);
}

console.log('---------');

const colors = ['red', 'green', 'blue', 'white', 'violet', 'orange', 'grey', 'yellow']
for (let i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}