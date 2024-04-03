const div = document.querySelector('div')

div.style.fontSize = '48px'
div.style.backgroundColor = 'red'
div.style.padding = '20px 40px'
div.style.borderRadius = '20px'

// Jednak nie powinniśmy stylować za pomocą JS ponieważ od tego mamy CSS. Zamiast tego możemy pobrać klasę z naszego pliku css

div.classList.add('divstyle')