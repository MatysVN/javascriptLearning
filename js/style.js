const hello = (name = "drogi użytkowniku") => {
	console.log(`Cześć ${name}, jak się masz?`);
};
hello();
hello("Matys");

const add = (x = "Podaj liczbę 1 ", y = "Podaj liczbę 2") => console.log(x + y);
add()