const text1 = "powiększ mnie";
const text2 = "ZAPISZ MNIE MAŁYMI LITERAMI";
const text3 = "$#%#^ wytnij te dziwne znaki na początku!";
const text4 = 'sprawdź, czy zawieram słowo "czy"';
const text5 =
	'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"';
const text6 = "pies zamień każde słowo pies, na słowo kot pies";
const text7 = "podziel, ten, string, od, przecinków";

console.log(text1.toUpperCase());
console.log(text2.toLowerCase());
//Zaznacz 6 znak i powiększ go + wytnij znaki 0-6
console.log(text3.charAt(6).toUpperCase() + text3.slice(7));
//lub po prostu
console.log(text3.slice(6));

const ifContains = "czy";
console.log(`Słowo "${ifContains}" ${text4.includes(ifContains) ? "jest" : "nie ma"} w stringu text4`);
//lub po prostu true/false
console.log(text4.includes('czy'));

console.log(text5.charAt(2));

console.log(text6.replace('pies', 'kot'));

console.log(text7.split(','));