const addBtn = document.querySelector(".add");
const removeBtn = document.querySelector(".remove");
const toggleBtn = document.querySelector(".toggle");
const text = document.querySelector("p");

// const addClass = () => {
// 	text.classList.add("test");
// };
// const removeClass = () => {
// 	text.classList.remove("test");
// };
const toggleClass = () => {
	text.classList.toggle("test");
};

const fontIncrease = () => {
    let currentFontSize = parseInt(window.getComputedStyle(text).fontSize);
    let newFontSize = currentFontSize + 2
    text.style.fontSize = newFontSize + "px"
}
const fontDecrease = () => {
    let currentFontSize = parseInt(window.getComputedStyle(text).fontSize);
    let newFontSize = currentFontSize - 2
    text.style.fontSize = newFontSize + "px"
}


addBtn.addEventListener("click", fontIncrease);
removeBtn.addEventListener("click", fontDecrease);
toggleBtn.addEventListener("click", toggleClass);
