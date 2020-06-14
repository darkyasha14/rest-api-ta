const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
const route = require('./app/routes/route')
const models = require('./database/models/index')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false }))

app.get('/', (req,res) => {
    res.json({name : "darkyasha", title : "author"})
})

app.use('/api/', route)

models.sequelize.sync({alter : true }).then(() => {
    console.log("success connect to db");
    app.listen(process.env.PORT, () => {
        console.log('server is running')
    })

}).catch((err) => {
    console.log(err);
    
})

