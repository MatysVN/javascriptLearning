let x = 10

if (x > 20) {
	console.log(`${x} > 20`);
} else {
	console.log(`${x} < 20`);
}

//zamiast tego można napisać 
const newX = x > 20 ? `${x} > jest większe niż 20` : `${x} < jest mniejsze niż 20`;
console.log(newX);

//-----------

const isLoggedIn = true; 

function loggedIn() {
	console.log('Użytkownik jest zalogowany!');
}
function loggedOut() {
	console.log('Użytkownik nie jest zalogowany...');
}

isLoggedIn ? loggedIn() : loggedOut();