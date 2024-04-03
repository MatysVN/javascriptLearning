const lime = document.querySelector('.lime')
const blue = document.querySelector('.blue')
const gold = document.querySelector('.gold')

const infoLime = () => {
    console.log('%clime', 'color:lime; text-transform:uppercase');
}
const infoBlue = () => {
    console.log('%cblue', 'color:royalblue; text-transform:uppercase');
}
const infoGold = () => {
    console.log('%cgold', 'color:gold; text-transform:uppercase');
}

//Wykona nam kod Bąbelkowo czyli od dołu do góry (GOLD > BLUE > LIME > DIV > DOCUMENT > WINDOW)
lime.addEventListener('click', infoLime)
blue.addEventListener('click', infoBlue)
gold.addEventListener('click', infoGold)

// możemy do addEventListener dodać po przecinku opcje np {once: true} - co spowoduje, że kliknięcie wykona się tylko raz
// lime.addEventListener('click', infoLime, {once: true})

//Aby włączyć opcje przechwytywania (capturing), czyli wykonać kod w drugą stronę czyli(Window > Document > DIV > Lime > Blue > Gold)
lime.addEventListener('click', infoLime, {capture: true})
blue.addEventListener('click', infoBlue, {capture: true})
gold.addEventListener('click', infoGold, {capture: true})

//Jeżeli kod wykona się najpiew w fazie capture to później w fazie bubbling nie wykona się, chyba że zapiszemy inaczej
lime.addEventListener('click', infoLime, {capture: true})
blue.addEventListener('click', infoBlue)
gold.addEventListener('click', infoGold)