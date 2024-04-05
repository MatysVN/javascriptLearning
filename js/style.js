const allLi = document.querySelectorAll('li')
let loopNumber = 1



for(const liItem of allLi) {
    liItem.textContent = loopNumber
    liItem.dataset.id = loopNumber
    loopNumber++
}

const middleLi = document.querySelector('[data-id="3"]')
console.log(middleLi);

console.log(middleLi.closest('.wrapper'));
