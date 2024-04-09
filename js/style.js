const burger = document.querySelector('.burger')
const burgerBtn = document.querySelector('.fa-bars')
const crossBtn = document.querySelector('.fa-times')
const ulList = document.querySelector('nav ul')
const allLi = ulList.querySelectorAll('li')

const showNav = () => {
	ulList.classList.toggle('active'); // przesuwa nam element na osi X o 350px
	burgerBtn.classList.toggle('hide') // nadaje display none na element
	crossBtn.classList.toggle('hide')
}
const closeNav = () => {
	ulList.classList.remove('active')
}

//trzeba nadać forEach na allLi tak żeby funkcja była aktywna na każdym elemencie li. Zamiast nazwy "li" możemy użyć dowolnej
allLi.forEach(li => li.addEventListener('click', closeNav))

burger.addEventListener('click', showNav);
console.log(allLi);

/* 1.Po kliknięciu przycisku burgerBtn dodaje klase .active do ulList oraz nadaje na burgerBtn klasę .hide, a z crossBtn ją usuwa
2.Po kliknięciu w crossBtn usuwa klase .actie z ulList oraz nadaje na crossBtn klasę .hide, a na burgerBtn usuwa tą klase
3.Po kliknięciu w liItem zamyka nawigacje */