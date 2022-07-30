require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed} = require('./seed.js')

const app = express();

app.use(express.json())
app.use(cors())



app.listen(4040, () => console.log('Ported at 4040'))