const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
const route = require('./app/routes/route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false }))

app.get('/', (req,res) => {
    res.json({name : "darkyasha", title : "author"})
})

app.use('/api/', route)

app.listen(process.env.PORT, () => {
    console.log('server is running')
})
