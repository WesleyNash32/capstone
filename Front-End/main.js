const { default: axios } = require("axios")
const { application } = require("express")

const form = document.getElementById('dinosaur-form')
const mesozoic = document.getElementById('mesozoic')
const list = document.getElementById('DinosaurList')

const baseURL = `http://localhost:4040/Front-End/home.html`

const dinoCallBack = ({ data: dinosaurs }) => displayDinosaurs(dinosaurs)
const errCallBack = err => console.log(err.response.data)

const getDinosaur = () => axios.get(baseURL).then(dinoCallBack).catch(errCallBack)
const createDino = body => axios.post(baseURL, body).then(dinoCallBack).catch(errCallBack)

function submitDinoForm(dinosaur) {
    dinosaur.preventDefault()
    let name = document.getElementById('dino-name')
    let dinoImg = document.getElementById('dino-img')
    let dinoPeriod = document.getElementById('periods')
    let dinotype = document.getElementById('type-of-dino')

    let dinoCardBody = {
        name: name.value,
        dinoImg: dinoImg.value,
        dinoPeriod: dinoPeriod.value,
        dinotype: dinotype.value
    }

    createDino(dinoCardBody)

    name.value = ''
    dinoImg.value = ''
    dinoPeriod.value = dropdown.value
    dinotype.value = dropdown.value
}

function createDinoCard(dino){
    const dinoCard = document.createElement('div')
    dinoCard.classList.add('dino-card')
    dinoCard.innerHTML = `<h4 class="dinoName">${dino.name}</h4>
    <img class="dino-image" src="${dino.dinoImg}" alt="dinosaur"/>
    <select class="era">${dino.dinoPeriod}</select>
    <select class="type">${dino.dinotype}</select>`

    list.appendChild(dinoCard)
}

function displayDinosaurs(arr){
    list.innerHTML = ``
    for(let i = 0; i < arr.length; i++){
        createDinoCard(arr[i])
    }
}

form.addEventListener('submit', submitDinoForm)

getDinosaur()