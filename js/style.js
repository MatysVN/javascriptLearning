let todoInput // miejsce, gdzie użytkownik wpisuje treść zadania
let errorInfo // info o braku zadań / konieczności wpisania tekstu
let addBtn // przycisk ADD - dodaje nowy element do listy
let ulList // lista zadań, tagi UL
let newTodo // tworzy nowe LI, nowe zadanie

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

       newTodo = document.createElement('li');

       newTodo.textContent = todoInput.value;

        ulList.append(newTodo)

        todoInput.value = ''
    
        errorInfo.textContent = ''
    
    } else
    errorInfo.textContent = "Musisz wpisać jakąś treść..."
}

document.addEventListener('DOMContentLoaded', main)