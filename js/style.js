const image = document.querySelector('.item1')
const button = document.querySelector('.arrow')
const arrow = button.querySelector('.fas')

const showImage = () => {
    image.classList.toggle('show')
    arrow.classList.toggle('rotate')

    //zamiast toggle na arrow można napisać if
    /* if(image.classList.contains('show)) {
        arrow.style.transform = 'rotate(180deg)'
    } else {
        arrow.style.transform = 'rotate(0)'
    } */
}

button.addEventListener('click', showImage)