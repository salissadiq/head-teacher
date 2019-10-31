const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const register = require('./route')
const app = express()

mongoose.connect('mongodb://localhost/head-teacher')
    .then(() => console.log('Coonected To mongodb'))
    .catch(err => console.log('Could not connect to Mongodb...', err))
app.use(cors())
app.use(express.json())
app.use('/register', register)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})