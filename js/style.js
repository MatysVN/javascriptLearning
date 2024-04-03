const ulList = document.createElement("ul");
const number = 10 //stworzone po to aby zmieniac ile razy pętla ma się wykonać
const allLi = ulList.getElementsByTagName('li') //W zadaniu rozwiązaniem było dać ulList.querySelector('ul:last-child'), ale to nie działa w tym miejscu, trzeba by przesunąć ten kod pod pętlę for gdzie dopiero tam tworzymy wszystkie nasze li

document.body.append(ulList);

for (let i = 1; i <= number; i++) {
    let liItem = document.createElement('li')
	liItem.textContent = i;
	ulList.append(liItem);
}

allLi[9].textContent = 'Jestem ostatnim elementem.'
allLi[9].style.backgroundColor = 'royalblue'
allLi[9].style.padding = '20px 40px'
allLi[9].style.fontSize = '20px'

/* Zadanie
1. Stwórz w JS ul listę i dodaj ją na stronę.
2. Lista ma zawieraać w sobie 10 tagów li, w każdym li ma być wypisana cyfra 1,2,3...
3. Pobierz ostatni element listy, ale nie dodawaj do niego żadnej klasy / ID!
4. Zmień zawartość ostatniego elementu na tekst "Jestem ostatnim elementem."
5. Za pomocą JS, ustal style dla ostatniego elementu
*/