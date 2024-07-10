const container = document.querySelector('#container')

for (let i = 0; i < 16; i++){
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
    let input = prompt('How many squares')
})
