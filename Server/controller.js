const dinosaurs = require("./db.json")

module.exports = {
    sendDinos: (req, res) =>{
        res.status(200).send(dinosaurs)
    },

    createDino: (req, res) => {
        const {name, dinoImg, dinoPeriod, dinoType} = req.body
        let newDino = {
            name,
            dinoImg,
            dinoPeriod,
            dinoType
        }
    
        dinosaurs.push(newDino)
        res.status(200).send(dinosaurs)
    }

}