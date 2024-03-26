const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

function multiply(x) {
	return x * 2;
}

//map stosuje na każdym (elemencie) indeksie funkcję multiply, czyli każdy element pomnożyliśmy *2
const newNumbers = numbers.map(multiply);
console.log('------');
console.log("Map - zwraca nową tablicę");
console.log(newNumbers);

//concat jest niedestrukcyjną metodą (w przaseciwieństwie do push) ponieważ nie zmienia nam oryginalnej tablicy. Tworzymy nową tablicę newAbc przechowującą tablicę numbers oraz możemy dodać inne elementy (100,200).
const abc = ["a", "b", "c"];
const newAbc = numbers.concat(abc, 100, 200)

console.log('------');
console.log('concat');
console.log(newAbc);
console.log(abc);


//spread / rest podobnie jak concat łączy tablicę w jedną, ale z tą różnicą że ma szersze zastosowania niż tylko łączenie tablic, ponieważ może być używany do rozpakowywania argumentów funkcji, kopiowania tablic i obiektów, oraz do wielu innych zadań.
console.log('------');
console.log('spread / rest operator');

const drinks = ['pepsi', 'kawa', 'sok']
const meals = ['schabowy', 'spaghetti', 'zupa']
const menu = [...drinks, ...meals]
console.log(menu);