const board = document.querySelector('#board')
const SQUARES_NUMBER = 10000

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))
    board.append(square)
}

function setColor (el) {
    const color = randomColor()
    el.style.backgroundColor = color
    el.style.boxShadow =`0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(el) {
    el.style.backgroundColor = "#1d1d1d"
    el.style.boxShadow ='0 0 2px #000'
}


function randomColor () {
    let min = 150
    let max = 256
    let a = Math.floor(Math.random() * (max-min) + min )
    let b = Math.floor(Math.random() * max)
    let c = Math.floor(Math.random() * max)
    return `rgba(${a},${b},${c})`
}
