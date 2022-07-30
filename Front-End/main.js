const triassicbtn = document.getElementById('triassic-container')
const jurassicbtn = document.getElementById('jurassic-container')
const cretaceousbtn = document.getElementById('cretaceous-container')
const form = document.querySelector('form')

const triassicURL = ''
const jurassicURL = ''
const cretaceousURL = ''



function addDinosaur(dino) {
    const createDinoCard = document.createElement('div')
    createDinoCard.classList.add('triassic-card')

    

    triassicbtn.appendChild(createDinoCard)
}