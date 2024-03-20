// == porównuje zawartość (wynik TRUE)
console.log(10 == '10');

// === porównuje zawartość oraz typ danych (wynik FALSE)
console.log(10 === '10');

// negacja - sprawdza czy zawartość 10 typu number jest różna od '10' string (wynik FALSE - zawartość w obu przypadkach wynosi 10)
console.log(10 != '10');

// negacja - sprawdza czy zawartość I TYP DANYCH 10 typu number jest różna od '10' string (wynik TRUE - zawartość w obu przypadkach wynosi 10, ale typ danych jest różny)
console.log(10 !== '10');

//negację możemy także stosować do innych funkcji
console.log(!true); // da nam wynik false
console.log(!false); // da nam wynik true

console.log(10 > 5); // sprawdzamy czy 10 jest większe od 5
console.log(10 < 5); // sprawdzamy czy 10 jest mniejsze od 5
console.log(10 >= 5); // sprawdzamy czy 10 jest większe lub równe 5
console.log(10 <= 5); // sprawdzamy czy 10 jest mniejsze lub równe 5