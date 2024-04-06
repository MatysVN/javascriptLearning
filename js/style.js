const pass = document.querySelector("#password");
const p = document.querySelector(".passinfo");
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*{}()]/;
const minValue = 10;

//tworzymy zmienną która wyświetla czy nasze hasło spełnia warunki
const showMsg = () => {
	if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		//jeśli warunki zostaną spełnione to w paragrafie wypisz tekst
		p.textContent = "Masz bardzo dobre hasło!";
		p.style.color = "lime";
	} else if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers)
		) {
			p.textContent = "Masz dobre hasło!"
			p.style.color = 'gold'
		} else {
			p.textContent = "Masz za słabe hasło!"
			p.style.color = 'tomato'
			
		}
};



const checkPassword = () => {
	if(pass.value.length !== 0) {
		showMsg()
	} else {
		p.textContent = 'Nie podałeś hasła...'
		p.style.color = ''
	}
}

pass.addEventListener('keyup', checkPassword)