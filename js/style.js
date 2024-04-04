const test = () => {
    console.log('🍔');
}

test() //funkcja pojawi się od razu

setTimeout(test, 2000) //funkcja pojawi się dopiero po 2 sekundach

setInterval(test, 6000) //funkcja wykonuje się co 6 sekund