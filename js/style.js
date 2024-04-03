const lime = document.querySelector('.lime')
const blue = document.querySelector('.blue')
const gold = document.querySelector('.gold')

const infoBlue = () => {
    console.log('%cTen kod nie miał się teraz wykonać 😥', 'color:royalblue; text-transform:uppercase');
}
const infoGold = (e) => {
    e.stopPropagation()
    console.log('%cWykonuję jakiś kod', 'color:gold; text-transform:uppercase');
}

blue.addEventListener('click', infoBlue)
gold.addEventListener('click', infoGold)

//Teraz po kliknięciu w żółty okrąg nasz kod w niebieskim okręgu się nie wykona 