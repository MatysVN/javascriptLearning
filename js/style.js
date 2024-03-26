const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//unshift raczej rzadko uzywamy dlatego że targetując konkretne elementy zmieniają im się indeksy i możemy popsuć kod
console.log("unshift");
numbers.unshift(100, 200);
console.log(numbers);

//shift usuwa element z indeksem 0 przez co element z indeksem 1 ma 0, jeżeli chcemy usunąc więcej elementów musimy napisać kila shift
console.log("shift");
numbers.shift();
console.log(numbers);

//push dodaje element na końcu naszej tablicy, metoda często używana
const colors = ["red", "green", "blue"];

console.log("push");
colors.push("gold", 10);
console.log(colors);

//pop usuwa ostatni element tablicy, działa podobnie do shifta
console.log("pop");
colors.pop();
console.log(colors);