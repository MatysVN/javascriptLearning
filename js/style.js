const div = document.querySelector('div')
const p = document.createElement('p')
const headingTwo = document.createElement('h2')

p.textContent = 'Paragraf dodany w JS'
headingTwo.textContent = 'h2 dodane w JS'

//to jest appenChild - musimy dodawać każdy element osobno, nie jesteśmy w stanie dodać stringu za pomocąa appendChild
div.appendChild(p)
div.appendChild(headingTwo)

//append jest zapisem nowszym możemy dodać kilka elementów na raz
div.append(p, headingTwo, 'Cześć')