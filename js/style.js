const name = "Mateusz";
const hobby = "motorcycles";
const age = 29;

console.log(
	"Hello, my name is " +
		name +
		"." +
		" I have " +
		age +
		" years old, and my hobby is " +
		hobby +
		"."
);
//KONKATENACJA czyli łączenie ze sobą stringów
//jest to stary zapis z którego raczej się nie korzysta lepiej użyć template strings

console.log(
	`Hello, my name is ${name}. I have ${age} years old, and my hobby is ${hobby}.`
);

const petName = "Mała Mi";

console.log(`Cześć, jestem ${name}, a to jest ${petName} - mój kot.`);

const petAge = 2;
console.log(petName + " ma już " + petAge + " lata!");
console.log(`${petName} ma już ${petAge} lata!`);
