let todoInput // miejsce, gdzie użytkownik wpisuje treść zadania
let errorInfo // info o braku zadań / konieczności wpisania tekstu
let addBtn // przycisk ADD - dodaje nowy element do listy
let ulList // lista zadań, tagi UL
// let newTodo // tworzy nowe LI, nowe zadanie //usunąłem z tąd newTodo żeby nie było funkcją globalną i tworzę niżej w funkcji jako lokalna


const main = () => {
//uruchamiamy nasze funkcje
prepareDOMElements()
prepareDOMEvents()
}

const prepareDOMElements = () => {
//pobieramy wszystkie elementy
todoInput = document.querySelector('.todo-input')
errorInfo = document.querySelector('.error-info')
addBtn = document.querySelector('.btn-add')
ulList = document.querySelector('.todolist ul')
}

const prepareDOMEvents = () => {
    //nadajemy nasłuchiwanie
    addBtn.addEventListener('click', addNewTodo)
    ulList.addEventListener('click', clickCheck)
}

//DOMContentLoaded - strona internetowa została wczytana (DOM, CSS, grafiki itd.)

/* 
Funkcja dodająca element do listy:
1. tworzy nowy element (li)
2. dodaje nowy element do ul listy
3. funkcja odpalana na click w przycisku ADD
4. przechwytuje treść z inputa i umieszcza go w nowo utworzonym LI
5. nie doda do listy pustego inputa
*/
const addNewTodo = () => {
    if (todoInput.value !== '') {

       const newTodo = document.createElement('li');
     newTodo.textContent = todoInput.value;
     createToolsArea(newTodo) //newTodo przekazujemy jako argument w funkcji createToolsArea

        ulList.append(newTodo)

        todoInput.value = ''
         errorInfo.textContent = ''
    } else
    errorInfo.textContent = "Musisz wpisać jakąś treść..."
}
/*
Funkcja tworząca narzędzia:
1. Musi stworzyć div z klasą tools, następnie dodać mu klasę tools
2. stworzyć 3 przyciski, umieścić w nich odpowiednią treść i klasy */

const createToolsArea = (test) => {

const toolPanel = document.createElement('div')
toolPanel.classList.add('tools')
test.append(toolPanel)

const completeBtn = document.createElement('button')
completeBtn.classList.add('complete')
completeBtn.innerHTML = '<i class="fas fa-check"></i>'

const editBtn = document.createElement('button')
editBtn.classList.add('edit')
editBtn.textContent = 'EDIT'

const deleteBtn = document.createElement('button')
deleteBtn.classList.add('delete')
deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

toolPanel.append(completeBtn, editBtn, deleteBtn)

}

document.addEventListener('DOMContentLoaded', main) // włącza nasze funkcje dopiero po caładowaniu całej strony

//Tworzymy funkcję która sprawdza jaki przycisk zostakl kliknięty

const clickCheck = (e) => {
    // jeżeli nasz kliknięty element ma klasę .complete pokaże TRUE w każdym innym przypadku false
    if(e.target.matches('.complete')) {
        e.target.closest('li').classList.toggle('completed') //closest targetuje najbliżej położone li czyli dziadka elementu
        e.target.classList.toggle('completed')

    } else if (e.target.matches('.edit')) {
        console.log(`Edit`);

    } else if (e.target.matches('.delete')) 
        console.log(`Delete`);
    
}

