const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");

btn1.addEventListener('click', function() {
    console.log('Kliknięto mnie!');
})

btn2.addEventListener('mouseover', () => console.log('Najechano na mnie'))

//jednak z funkcji w listenerze raczej nie powinniśmy korzystać dlatego, że tego kodu już nie użyjemy nigdzie indziej, częściej używamy callback

const test = () => {
    console.log('Kliknięto mnie dwa razy');
}

btn3.addEventListener('dblclick', test)

//Gdybyśmy pobrali wszystkie przyciski na raz, wtedy otrzymujemy obiekt tablicopodobny na którym addEventListener nie zadziała ponieważ musimy sprecyzować który element chcemy nasłuchiwać
const btns = document.querySelectorAll('button')

const smile = () => {
    console.log('😃');
}

btns.forEach(ourElement => ourElement.addEventListener('click', smile)) //używamy tutaj forEach, a nie map ponieważ nie chcemy nic zwracać a jedynie wykonać coś na naszej tablicy