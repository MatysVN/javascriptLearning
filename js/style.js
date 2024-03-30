console.log(`=== KONWENTER °C na °F ===`);

let celcius
let temp

const fahrenheit = x => {
	celcius = x
	temp = celcius * 1.8 + 32;
	console.log(`${x}°C = ${temp}°F`);
}

fahrenheit(20)