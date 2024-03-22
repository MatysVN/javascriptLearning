const day = "środa";

//IF

if (day === "poniedziałek") {
	console.log("Dziś jest poniedziałek");
} else if (day === "wtorek") {
	console.log("Dziś jest wtorek");
} else if (day === "środa") {
	console.log("Dziś jest środa");
} else if (day === "czwartek") {
	console.log("Dziś jest czwartek");
} else if (day === "piątek") {
	console.log("Dziś jest piątek");
} else {
	console.log("Jest Weekend");
}

//SWITCH

switch (day) {
	case "poniedziałek":
		console.log("Dziś jest poniedziałek");
		break;
	case "wtorek":
		console.log("Dziś jest wtorek");
		break;
	case "środa":
		console.log("Dziś jest środa");
		break;
	case "czwartek":
		console.log("Dziś jest czwartek");
		break;
	case "piątek":
		console.log("Dziś jest piątek");
		break;
	default:
		console.log("WEEKEND");
}
