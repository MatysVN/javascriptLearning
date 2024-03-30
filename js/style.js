const numbers = [0.5, 4, "abc"];
const names = ['Balbina', 'Marysia', 'Matylda', 'Mateusz']

numbers.forEach(number => console.log(number * number))

//konsola wyloguje nam undefined ponieważ pętla forEach niczego nam nie zwraca
const bigNames = names.forEach(name => name.toUpperCase())
console.log(bigNames);

//zamiast tego musimy użyć map który zwraca nam nową tablicę
const realBigNames = names.map(name => name.toUpperCase())
console.log(realBigNames);

console.log('');
console.log('===Callback===');
//zamiast tego możemy w map dodać callbacka

//funkcja służąca  za callback
const showBigNames = (name) => {
	console.log(name.toUpperCase());
}
const callbackBigNames = names.map(showBigNames)

console.log('===Zapis skrócony===');

//możemy to również zapisać bez callbacka w 1 linijce
names.forEach(parametr => console.log(parametr.toUpperCase()))