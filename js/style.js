const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

let fahrenheit
let celcius

// °F = (°C × 1.8) + 32
// °C = (°F − 32) /1.8

const change = () => {
	one.textContent = "°F"
	two.textContent = "°C"
}

changeBtn.addEventListener('click', change)