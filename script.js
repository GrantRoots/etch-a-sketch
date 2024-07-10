const container = document.querySelector('#container')

for (let i = 0; i < 16; i++) {
    for (let n = 0; n < 16; n++) {
        const square = document.createElement('div')
        square.classList.add('square')
        container.appendChild(square)
    }
}

const square = document.querySelectorAll('.square').forEach(square => square.addEventListener('mouseenter', () => {
    square.style['background-color'] = 'red'
}))

const button = document.querySelector('button')
button.addEventListener('click', () => {
    let input = prompt('How many squares per side?')
    while (input > 100 || input < 1) {
        input = prompt('How many squares per side? (100 or less)')
    }
    while (container.firstChild) {
        container.firstChild.remove()
    }

    for (let i = 0; i < input; i++) {
        for (let n = 0; n < input; n++) {
            const square = document.createElement('div')
            square.classList.add('square')
            container.appendChild(square)
        }
    }
    
    let newSquares = document.getElementsByClassName('square')
    for (let x = 0; x < newSquares.length; x++) {
        newSquares[x].style['flex-basis'] = (100/input) + '%'
    }

    const square = document.querySelectorAll('.square').forEach(square => square.addEventListener('mouseenter', () => {
        square.style['background-color'] = 'red'
    }))
})