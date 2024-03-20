let x = 5;
const y = 8;

const add = x + y;
console.log(add);

const substract = x - y;
console.log(substract);

const multiply = x * y;
console.log(multiply);

const divide = x / y;
console.log(divide);

// % ++ --

x++; //+1 = 6
x++; //+1 = 7
x++; //+1 = 8

console.log(`Inkrementacja: ${x}`);

x--; //-1 = 7
x--; //-1 = 6

console.log(`Dekrementacja: ${x}`);

// modulo jest to reszta z dzielenia, dzięki temu możemy sprawdzić czy pracujemy z liczbą parzystą czy nieparzystą
const modulo = 11 % 2
console.log(`Reszta z dzielenia: ${modulo}`);