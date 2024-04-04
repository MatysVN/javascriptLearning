const link = document.querySelector("a");
const img = document.querySelector("img");
const p = document.querySelector("p");

link.setAttribute('href', '#')
link.setAttribute('target', '_blank')
//pierwsza wartość to nazwa atrybutu który nas interesuje, druga wartość to ta w środku atrybutu

console.log(img.getAttribute('src'));
console.log(img.getAttribute('alt'));
//w naszym img targetujemy atrybut który nas interesuje np src, alt. gatAttribute pobiera wartość, która jest przypisana do danego atrybutu

console.log(p.hasAttribute('style')); // sprawdza czy nasz element posiada jakiś atrybut i zwraca TRUE / FALSE

p.removeAttribute('style');
//usuwa wskazany atrybut z DOM