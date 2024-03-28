//zwykła funkcja
function test(name) {
	console.log(`Mam na imię ${name}`);
}
test('Klaudia');

//funkcja strzałkowa
const test2 = name => {
	console.log(`Mam na imię ${name}`);
}
test2('Lisa')

//jeśli mamy tylko jedną rzecz w funkcji strzałkowej to możemy jeszcze bardziej skrócić funkcję
const test3 = name => console.log(`Mam na imię ${name}`);
test3('Mateusz')

const test4 = (name, age) => console.log(`Mam na imię ${name} i mam ${age} lat.`);
test4('Marlena',30)

console.log('========');

function add(num1, num2) {
	return num1 + num2
}

//możemy też zapisać to w funkcji strzałkowej, wtedy nie musimy pisać return, ani nawiasów klamrowych
const add2 = (num1, num2) => num1 + num2

const add3 = (num1, num2) => {
	console.log(`Cześć`);
	//console.log musi być nad return, ponieważ return kończy działanie funkcji
	return num1 + num2;
}
console.log('========');

const days = ['poniedziałek', 'wtorek', 'środa']
const days2 = days.forEach(function(day) {console.log(day)})
//można prościej zapisać za pomocą funkcji strzałkowej
const days3 = days.forEach(day => console.log(day))