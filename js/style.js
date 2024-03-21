const password = '213ads21aa!'

if(password.length > 10 && password.includes('!')) {
	console.log(`Twoje hasło ma ${password.length} znaków. To jest rewelacyjne hasło!`);
} else if(password.length > 5 && password.length <= 10) {
	console.log(`Twoje hasło ma ${password.length} znaków. To jest średnie hasło.. Dodaj "!"`);
} else {
	console.log(`Twoje hasło ma tylko ${password.length} znaków. Musi być dłuższe...`);
}