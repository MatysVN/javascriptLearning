const image = document.querySelector("img");

image.setAttribute(
	"src",
	"https://cdn.pixabay.com/photo/2024/01/17/12/06/car-8514314_1280.png"
);

image.style.width = "400px";

image.setAttribute("alt", "Samochód jadący pustynią");

const name = prompt(`Cześć jak Ci na imię?`, "Tutaj wpisz swoje imię");

setTimeout(name, 3000);

console.log(`Cześć ${name}`);
