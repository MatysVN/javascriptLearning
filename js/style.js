//getElementById - jest to bardzo popularne szczególnie w starym kodzie
console.log("===getElementById===");
const test = document.getElementById("item");

console.log(test);

//getElementByTagName - stworzyło nam obiekt tablicopodobny na którym możemy pracować np z funkcjami
console.log("");
console.log("===getElementByTagName===");
const test2 = document.getElementsByTagName("li");

console.log(test2);

//getElementByClassName - stworzyło nam obiekt tablicopodobny na którym możemy pracować np z funkcjami
console.log("");
console.log("===getElementByClassName===");
const test3 = document.getElementsByClassName("test");
console.log(test3);

//querySelector - przeszukuje cały dokument w poszukiwaniu pierwszego elementu króry pasuje, możemy również szukać po id czy klasie musimy tylko dodać # lub . przed szukaną nazwą
console.log("");
console.log("===querySelector===");
const test4 = document.querySelector("li");
console.log(test4);

//nie musimy za każdym razem przeszukiwać całego dokumentu
const ulList = document.querySelector("ul");
const liItem = ulList.querySelectorAll("li"); //lub np ('ul p') -znajdź p które jest w ul
console.log(liItem);

//querySelector - przeszukuje cały dokument w poszukiwaniu wszystkich pasujących elementów i towrzy obiekt tablicopodobny - wszystko co mamy w css możemy użyć w querySelectorze (np. atrybuty, kombinatory, nthchild, before)
console.log("");
console.log("===querySelectorAll===");
const test5 = document.querySelectorAll("li");
console.log(test5);

//żywe kolekcje, czyli qSA vs getElementsByTagName / ClassName

//dodaliśmy li dynamicznie, czyli mamy go w naszym DOM ale nie ma w pliku HTML
const newLi = document.createElement("Li");
ulList.appendChild(newLi).textContent = "👀";

console.log("");

console.log("==querySelector==");
console.log(
	`W naszej Ul jest ${liItem.length} elementów li, ale ta metoda nie wspiera żywych kolekcji`
);

console.log("==getElementsByTagName==");
console.log(
	`Teraz w naszej Ul jest ${test2.length} elementów li, ponieważ ta metoda wspiera żywe kolekcje`
);

console.log("");console.log("");
console.log(
	"Podsumowując - jeżeli dodajemy jakies elementy na naszą strone dynamicznie, musimy użyć getElementsBy... ponieważ querySelector nam ich wcale nie pobierze"
);
