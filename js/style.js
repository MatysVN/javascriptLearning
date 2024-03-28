//deklaracja funkcji - podlega hoistingowi, czyli wynosi funkcję na samą górę dlatego jeżeli najpiew wywołalibyśmy funkcję a następnie ją zapisali to będzie działać

function test() {
	console.log('hello');
}

test()

//aby przeciwdziałać hoistingowi możemy korzystać z wyrażeń funkcyjnych, ale najlepsze do tego są funkcje strzałkowe które niebawem poznam

const helloWorld = function () {
	console.log(`Hello World`);
}
helloWorld()

//funkcja z argumentami
function add(parametr) {
	console.log(`Podany argument to: ` + parametr);
}
add('Mateusz')

function substract(num1, num2) {
	console.log(num1 - num2);
}
substract(12, 4)

function user(a, b) {
	console.log(`Cześć, mam na imię ${a} i mam ${b} lat`);
}
user('Mateusz', 30)