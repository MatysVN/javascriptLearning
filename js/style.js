alert('helloWorld') // wyskoczy alert w którym możemy kliknąć ok, można użyć np jeśli hasło które wpisuje user jest za krótkie

if(confirm('Czy na pewno chcesz zamnkąć stronę?')){
    console.log('ok'); 
} else {
    console.log('nie to nie');
} //podobne do alert, ale mamy pole wyboru OK albo Cancel do których możemy napisać konkretne funkcje. Możemy użyć jeśli użytkownik pisze post na stronie i chce zamknąć przeglądarkę przed dodaniem posta

const name = prompt('Cześć jak masz na imię?', 'Tutaj wpisz swoje imię')
console.log(name);