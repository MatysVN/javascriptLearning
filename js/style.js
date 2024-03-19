const text = "123";

//za pomocą typeof sprawdzamy jaki mamy typ danych
console.log(typeof text);

//żeby zacytować coś musimy użyć różnych nawiasów do określenia treści
const quote = 'Mateusz powiedział - "Kocham kebaby"';
console.log(quote);

//Metody w JS
//.lenght sprawdza ilość znaków w stringu
console.log(quote.length);

//.toUpperCase zmienia znaki na wielkie litery
console.log(quote.toUpperCase());

//.toLowerCase zmienia znaki na małe litery, możemy też zdefiniować nową funcję za pomocą już istniejącej
const newMsg = quote.toUpperCase();
console.log(newMsg.toLowerCase());

//za pomocą .Locale.... możemy ustawić wartość dla konkretnej lokalizacji gdzie inaczej zapisujemy np datę
const date = new Date();
console.log(date);
console.log(date.toLocaleDateString("pl"));
console.log(date.toLocaleDateString("en"));

//Metody możemy łączyć z sobą
const username = "maciej";
const newUserName = username.charAt(0).toUpperCase()+username.slice(1)
console.log(newUserName);
