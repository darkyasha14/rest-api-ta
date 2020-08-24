const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const cron = require('node-cron');   // library untuk merunning task secara scheduler

require('dotenv').config()

const app = express()
const route = require('./app/routes/route')
const models = require('./database/models/index')
const controllerBooking = require('./app/controllers/controllers-booking')


// update booking ecpired setiap 30 menit
cron.schedule('*/30 * * * *', () => {
    console.log("Running task every 30 minutes")
    controllerBooking.updateBookingExpiredStatus()
});


app.use(cors())  //allow origin api dak diblock

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false }))

app.get('/info', (req,res) => {
    res.json({name : "darkyasha", title : "author"})
})

app.use('/public', express.static(path.join(__dirname, 'public')))

app.use('/api/', route)


models.sequelize.sync({alter: true }).then(() => {
    console.log("success connect to db");
    app.listen(process.env.PORT, () => {
        console.log('server is running')
    })
}).catch((err) => {
    console.log(err); 
})

