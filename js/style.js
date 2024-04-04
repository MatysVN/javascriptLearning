//aby pobrać nasz atrybut podobnie jak w CSS musimy użyć nawiasów klamrowych
const divTag = document.querySelector('[data-number="23"]')
console.log(divTag);

console.log('========');

console.log(divTag.dataset); // zwraca nam obiekt w którym możemy zobaczyć  wszystkie atrybuty pobranego elementu
console.log(divTag.dataset.moreInfo); //targetujemy konkretny atrybut pobranego elementu
divTag.setAttribute('data-test', '123') //dodaliśmy nowy atrybut do pobranego elementu
divTag.dataset.color='blue' //dodaliśmy atrybut za pomocą dataset