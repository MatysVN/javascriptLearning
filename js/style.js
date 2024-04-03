const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const square = document.querySelector('.gold')
const text1 = document.querySelector('.text1')
const text2 = document.querySelector('.text2')

const helloWorld = () => {
    console.log('Hello World!')
}
const redSquare = () => {
    square.style.backgroundColor = 'red'
}
const blueSquare = () => {
    square.style.backgroundColor = 'royalblue'
}
const swapText = () => {
    text1.classList.toggle('show')
    text2.classList.toggle('hidden')
}

btn1.addEventListener('dblclick', helloWorld)
square.addEventListener('mouseenter', redSquare)
square.addEventListener('mouseleave', blueSquare)
btn2.addEventListener('click', swapText)