const btn = document.querySelector("button");

console.log(btn.outerHTML); //wypisuje w konsoli <button>Przycisk 🍔 </button>
console.log(btn.innerHTML); //wypisuje w konsoli Przycisk 🍔

// btn.outerHTML = 'Zamień btn na ten tekst' // usunie nam przycisk i zamieni go na tekst

// btn.innerHTML = "Zamień tekst w przycisku" // Zamieni nam tekst w przycisku
// document.body.innerHTML = "" //Wyłączy całą zawartość w body

btn.innerHTML = "<li>to jest element listy </li>"; // doda nam li do html
btn.textContent = "<li>to jest element listy </li>"; // doda nam cały tekst a nie <li>
btn.innerText = "<li>to jest element listy </li>"; // doda nam cały tekst a nie <li>

const innerT = document.querySelector('.inner-text') //Zwraca tekst widoczny dla użytkownika, ignorując elementy, które są ukryte przez styl CSS (np. display: none). Usuwa również wszystkie znaczniki HTML i zwraca tylko czysty tekst.

const textC = document.querySelector('.text-content') // Zwraca cały tekst znajdujący się wewnątrz elementu, łącznie z tekstem ukrytym oraz znacznikami HTML. Nie dba o to, czy tekst jest widoczny czy też nie, zwraca wszystkie znaki tekstu wewnątrz elementu, włączając w to także białe znaki i elementy HTML.

console.log(innerT.innerText);
console.log(textC.textContent);

const input = document.querySelector('input')
const underInput = document.querySelector('.under-input')
const underInput2 = document.querySelector('.under-input2')

input.addEventListener('keydown', e => {
    if(e.key === 'Enter') {
        underInput.textContent = input.value
    }
})
input.addEventListener('keydown', e => {
    if(e.key === 'Enter') {
        underInput2.innerHTML = input.value
    }
})