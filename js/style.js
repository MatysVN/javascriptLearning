const numbers = [0, 1, 2, 3]

//forEach jest to metoda (pętla) która wykonuje dany kod na danej tablicy, ale niczego nie zwraca dlatego mamy undefined (console.log jest tylko dla tego aby pokazać nam co robi funkcja)
const newNumbers = numbers.forEach(num => console.log(num * 2))
console.log(newNumbers);

console.log('----');

//map działa dokładnie jak forEach, ale zwraca nam nową tablicę (tutaj nie ma console.log w funkcji ponieważ zwróciło by 4x undefined)
const mapNumbers = numbers.map(x => x * 2)
console.log(mapNumbers);