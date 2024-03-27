const numbers = [0, 23, 48, 175, 2, 34, 11]

function number(x) {
    return x % 2 === 0
}

//filter(nazwafunkcji) wypisuje nam te elementy z tablicy które spełniają warunki funkcji, w tym przypadku konsola wypisze nam wszystkie liczby parzyste
console.log('filter');
console.log(numbers.filter(number));

//na tablicy numbers dla każdego naszego elementu (num) wykonaj kod
console.log('-----');
console.log('forEach');
numbers.forEach(num => console.log(num * 5))

//sprawdzamy czy na tablicy numbers znajduje się typ number 0, jeśli byłby string '0' to pokaże false
console.log('-----');
console.log('include');
console.log(numbers.includes(0));

//sprawdzamy jaki index ma element w naszej tablicy, w tym przypadku przy wartości 175 znajdującej się w tablicy pokaże 3 ponieważ 175 ma index 3, przy 210 pokaże -1 ponieważ takiego elemntu nie ma w tablicy
console.log('-----');
console.log('indexOf');
console.log(numbers.indexOf(175));
console.log(numbers.indexOf(210));