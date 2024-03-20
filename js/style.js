
// OPERATOR && - i 
//jeżeli (będę miał pieniądze && będę miał pustą lodówkę) { to pójdę na zakupy} else { zostanę w domu }
if (true && true) {
	console.log("%c👌", "font-size: 30px;");
} else {
	console.log("%c👎", "font-size: 30px;");
}
if (true && false) {
	console.log("%c👌", "font-size: 30px;");
} else {
	console.log("%c👎", "font-size: 30px;");}

// OPERATOR || - lub
//jeżeli (będę miał pieniądze || ktoś mi je pożyczy) { to pójdę na zakupy} else { zostanę w domu }
if (true || true) {
	console.log("%c👄", "font-size: 30px;");
} else {
	console.log("%c🖕", "font-size: 30px;");
}
if (false || true) {
	console.log("%c👄", "font-size: 30px;");
} else {
	console.log("%c🖕", "font-size: 30px;");
}
if (false || false) {
	console.log("%c👄", "font-size: 30px;");
} else {
	console.log("%c🖕", "font-size: 30px;");
}

//OPERATOR ! zaprzeczenie // w tym przykładzie da wynik FALSE
if (!(true && true)) {
	console.log("%c👌", "font-size: 30px;");
} else {
	console.log("%c👎", "font-size: 30px;");
}