let todoInput; // miejsce, gdzie użytkownik wpisuje treść zadania
let errorInfo; // info o braku zadań / konieczności wpisania tekstu
let addBtn; // przycisk ADD - dodaje nowy element do listy
let ulList; // lista zadań, tagi UL

// let newTodo // tworzy nowe LI, nowe zadanie //usunąłem z tąd newTodo żeby nie było funkcją globalną i tworzę niżej w funkcji jako lokalna

let popup; // popup
let popupInfo; // tekst w popupie, jak się doda pusty tekst
let todoToEdit; // edytowany Todo
let popupInput; // input w popupie
let popupAddBtn; // przycisk "zatwierdź" w popupie
let popupCloseBtn; // przycisk "anuluj" w popupie

const main = () => {
	//uruchamiamy nasze funkcje
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	//pobieramy wszystkie elementy
	todoInput = document.querySelector(".todo-input");
	errorInfo = document.querySelector(".error-info");
	addBtn = document.querySelector(".btn-add");
	ulList = document.querySelector(".todolist ul");

	popup = document.querySelector(".popup");
	popupInfo = document.querySelector(".popup-info");
	popupInput = document.querySelector(".popup-input");
	popupAddBtn = document.querySelector(".accept");
	popupCloseBtn = document.querySelector(".cancel");
};

const prepareDOMEvents = () => {
	//nadajemy nasłuchiwanie
	addBtn.addEventListener("click", addNewTodo);
	ulList.addEventListener("click", clickCheck);
	popupCloseBtn.addEventListener("click", closePopup);
	popupAddBtn.addEventListener("click", changeTodoText);
	todoInput.addEventListener("keyup", enterKeyCheck);
	popupInput.addEventListener("keyup", enterKeyCheck);
	window.addEventListener("keydown", escapeKeyCheck);
};

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
	if (todoInput.value !== "") {
		const newTodo = document.createElement("li");
		newTodo.textContent = todoInput.value;
		createToolsArea(newTodo); //newTodo przekazujemy jako argument w funkcji createToolsArea

		ulList.append(newTodo);

		todoInput.value = "";
		errorInfo.textContent = "";
	} else errorInfo.textContent = "Musisz wpisać jakąś treść...";
};
/*
Funkcja tworząca narzędzia:
1. Musi stworzyć div z klasą tools, następnie dodać mu klasę tools
2. stworzyć 3 przyciski, umieścić w nich odpowiednią treść i klasy */

const createToolsArea = (test) => {
	const toolPanel = document.createElement("div");
	toolPanel.classList.add("tools");
	test.append(toolPanel);

	const completeBtn = document.createElement("button");
	completeBtn.classList.add("complete");
	completeBtn.innerHTML = '<i class="fas fa-check"></i>';

	const editBtn = document.createElement("button");
	editBtn.classList.add("edit");
	editBtn.textContent = "EDIT";

	const deleteBtn = document.createElement("button");
	deleteBtn.classList.add("delete");
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

	toolPanel.append(completeBtn, editBtn, deleteBtn);
};

document.addEventListener("DOMContentLoaded", main); // włącza nasze funkcje dopiero po caładowaniu całej strony

//Tworzymy funkcję która sprawdza jaki przycisk zostakl kliknięty

const clickCheck = (e) => {
	// jeżeli nasz kliknięty element ma klasę .complete pokaże TRUE w każdym innym przypadku false
	if (e.target.matches(".complete")) {
		e.target.closest("li").classList.toggle("completed"); //closest targetuje najbliżej położone li czyli dziadka elementu
		e.target.classList.toggle("completed");
	} else if (e.target.matches(".edit")) {
		editTodo(e);
	} else if (e.target.matches(".delete")) {
		deleteTodo(e);
	}
};

const editTodo = (e) => {
	todoToEdit = e.target.closest("li"); // po kliknięciu edit na konkretnym todo będziemy targetować tą właśnie zmienną ponieważ jest najbliższym li
	popupInput.value = todoToEdit.firstChild.textContent; // po otwarciu naszego okna "edit" będzie tam już tekst który jest w todo
	popup.style.display = "flex";
};

const closePopup = () => {
	popup.style.display = "none";
	popupInfo.textContent = "";
};

const changeTodoText = () => {
	if (popupInput.value !== "") {
		todoToEdit.firstChild.textContent = popupInput.value;
		closePopup();
		popupInfo.textContent = "";
	} else {
		popupInfo.textContent = "Musisz podać jakąś treść!";
	}
};

const deleteTodo = (e) => {
	// ulList.removeChild(e.target.closest("li")) // ja zrobiłem tak a  w kursie jest
	e.target.closest("li").remove(e);

	//sprawdza czy ul ma w sobie jakieś Li, jeżeli nie ma to wyświetla komunikat
	const allTodos = ulList.querySelectorAll("li");
	if (allTodos.length === 0) {
		errorInfo.textContent = "Brak zadań na liście.";
	}
};

const enterKeyCheck = (e) => {
	if (e.key === "Enter") {
		if (e.target === popupInput) {
			changeTodoText();
		} else {
			addNewTodo();
		}
	}
};

const escapeKeyCheck = (e) => {
	if (e.code === "Escape") {
		closePopup();
	}
};
