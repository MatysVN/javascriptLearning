const num1 = 23;
const num2 = "45";

//łącząc typ number z typem string otrzymujemy typ string
console.log(num1 + num2);

const num3 = "abcd";

//mnożąc lub dzieląc typ string otrzymujemy typ number ( w tym przypadku dostaniemy odpowiedź NaN - Not a Number) *ale jest to tylko jako ciekawostka, używamy parseInt
console.log(num3 * 1);

const num4 = 1354.8356;
//za pomocą metody .toFixed zaokrąglamy liczbę
console.log(num4.toFixed());
//jeżeli w nawias wpiszemy liczbę to do tylu miejsc po przecinku zaokrąli nam liczbę
console.log(num4.toFixed(2));

const num5 = "123 mateusz";
//za pomocą .parseInt możemy pobrać typ string jako number, ale musi być tam wpisana liczba
console.log(parseInt(num5));
