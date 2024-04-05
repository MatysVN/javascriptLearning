//każde ID którego użyjemy w HTML automatycznie będzie zmienną w naszym javascript
console.log(test);

//w konsoli możemy wylogowywać różne rzeczy nie tylko logi
console.log('Cześć');
console.log(window.console)

console.warn('To jest ostrzeżenie...')
console.error('To jest błąd!')

console.table(['Element 1', 123, 'Element 3'])

const persons = [
    {
        name: 'Matylda',
        age: 0,
        favFood: 'Mleko'
    },
    {
        name: 'Mateusz',
        age: 30,
        favFood: undefined
    },
    {
        name: 'Marlena',
        age: 31,
        favFood: 'Płatki owsiane'
    },
]

console.table(persons)