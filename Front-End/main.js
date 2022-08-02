const { createDiffieHellman } = require("crypto")
const { appendFile } = require("fs")

const addDinoBtn = document.getElementById('add-dino')
const newTriCard = document.getElementById('triassic-container')
const newJurCard = document.getElementById('jurassic-container')
const newCreCard = document.getElementById('cretaceous-container')
const form = document.getElementById('dinosaur-form')
const dinoImg = document.getElementById('dino-img')
const dinoName = document.getElementById('dino-name')
const eras = document.getElementById('periods')
const dinoType = document.getElementById('type-of-dino')

function submitDinoBtn() {
    const DinoCard = document.createElement('div');
    DinoCard.classList.add('dino-card')
    
}