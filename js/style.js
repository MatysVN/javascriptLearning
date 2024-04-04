//pobierając rodzica mamy dostęp do wszystkich dzieci, wnuków
const grandpa = document.querySelector('.grandparent')
console.log(grandpa.querySelector('.parent'));
console.log(grandpa.querySelectorAll('.child'));

console.log('======');

const middleChild = document.querySelector('.middle-child')
console.log(middleChild);

//aby odwołać się do poprzedniego brata naszego elmentu używamy previousElementSibling
const prevSibling = middleChild.previousElementSibling
console.log(prevSibling);

//aby odwołać się do następnego brata używamy nextElementSibling
const nextSibling = middleChild.nextElementSibling
console.log(nextSibling);

//aby odwołać się do rodzica elementu używamy parentElement
const parentEl = middleChild.parentElement
console.log(parentEl);

//aby wyszukać najbliższy element o podanych przez nas paramentrach żeby dostać się do np dziadka elementu używamy closest
const grandpaEl = middleChild.closest('.grandparent')
console.log(grandpaEl);
