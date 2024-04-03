const allCircles = document.querySelectorAll(".circle");
const lime = document.querySelector(".lime");
const blue = document.querySelector(".blue");
const gold = document.querySelector(".gold");
const newCircle = document.createElement('div') //tworzymy div

// allCircles.forEach((circle) =>
// 	circle.addEventListener("click", () => console.log(circle))
// );

newCircle.classList.add('circle','purple')

gold.append(newCircle)

lime.addEventListener('click', () => console.log('test')) // teraz nasłuchujemy na cały lime

//ale jeśli chcemy nasłuchiwać tylko na elementy które mają klasę circle2 to:
lime.addEventListener('click', e => {
    if(e.target.matches('.circle2')){
        console.log('test2');
    }
})
//e.target zwraca nam element w który kliknęliśmy .matches('.circle2') szuka czy kliknięty element posiada klasę circle2. Jeżeli to będzie prawda to wtedy odpali nam console.log('test2')

//możemy też odwołać się do classList czyli wszystkich klas naszego elementu (zwróć uwagę że nie ma . przy klasie)
lime.addEventListener('click', e => {
    if(e.target.classList.contains('circle2')){
        console.log('🌞');
    }
})