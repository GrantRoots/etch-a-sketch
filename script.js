let container = document.querySelector('#container')

for (let i = 0; i < 16; i++){
    for (let n = 0; n < 16; n++) {
        let square = document.createElement('div')
        square.classList.add('square')
        container.appendChild(square)
    }
}