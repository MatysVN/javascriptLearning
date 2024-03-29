console.log('=== SPREAD ===');

const arr = [1,2,3,4]
console.log(arr);
console.log(...arr);

console.log('');
console.log('=== REST ===');

const numbers = (x, y, ...z) => {
	console.log(x, y, z);
	console.log('');
	//skoro element z jest tablicą to możemy pracować z nim dokładnie tak samo jak z tablicami
	console.log('-- każdy element z tablicy "z" * 2 --');
	console.log(z.map(el => el * 2));
console.log('');
	//możemy również wyświetlać nie wszystkie elementy np tylko x, y
	console.log('-- x + y --');
	console.log(x + y);
}
numbers(11,12,13,14,15, 'string', true)