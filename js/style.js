const btn = document.querySelector("button");

const test = (e) => {
	console.log(e);
	console.log(e.target); // Bardzo często używane, możemy odnieść się do elementu który klikamy
    console.log(e.target.classList); //wypisze nam klasy które ma nadane kliknięty element
    console.log(e.target.offsetTop); // pokazuje gdzie znajduje się element na osi Y
};

btn.addEventListener("click", test);
