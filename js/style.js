const numbers = [1, 2, 3, 4, 5];

console.log('pętla for');
//tak wygląda zwykła pętla for
for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i] * 2);
}

console.log('-------');
console.log('pętla for of');

//tak wygląda pętla for of
for (const apple of numbers) {
	console.log(apple * 2);
}