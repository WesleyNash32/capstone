const express = require('express')
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors())

app.get('/api/dinosaurs')

app.listen(4040, () => console.log('Ported at 4040'))