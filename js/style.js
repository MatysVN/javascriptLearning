const ulList = document.createElement('ul')
const liItem = document.createElement('li')


liItem.textContent = 'Cześć' //dodaliśmy do naszego elementu li tekst "Cześć"

document.body.appendChild(ulList) //Musimy sprecyzować gdzie w dokumencie chcemy umieścić element w tym przypadku w body
ulList.appendChild(liItem) // Dodaj dziecko do naszej ulList którym to dzieckiem niech będzie nasza zmienna liItem w której stworzyliśmy nasze li

//Aby dodać coś precyzyjnie w miejscu które chcemy w kodzie musimy mieć jakiś element w html który posłuży nam za kotwicę do elementu
//To powinno być poukładane ale dla czytelności daję na dole:
const testDiv = document.querySelector('.test')
const paragraph = document.createElement('p')

paragraph.textContent = 'To jest dynamicznie stworzony paragraf'

testDiv.appendChild(paragraph)