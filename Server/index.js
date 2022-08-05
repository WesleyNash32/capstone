const express = require('express')
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors())

const {sendDinos, createDino} = require('./controller')

app.get('/api/dinosaurs', sendDinos)
app.post('/api/dinosaurs', createDino)

app.listen(4040, () => console.log('Ported at 4040'))