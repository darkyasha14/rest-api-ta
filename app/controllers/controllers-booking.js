const models = require('../../database/models')


const createNewBooking = async ( req, res) => {
    console.log(req.body);
    try {
        const {user_id, jasa_id} = req.body

        const data = await models.Booking.create({
            user_id : user_id,
            jasa_id : jasa_id,
        })

        if(data){
            console.log("Data =>", data.dataValues)

            const data_result = await models.Booking.findOne({
                where : {booking_id : data.dataValues.booking_id},
                include : [ 
                    {
                        model: models.Jasa,
                        include : [{
                            model: models.Sub_category,
                            include : [{
                                model: models.Category
                            }]
                        }]
                    }
                ]
            })

            return res.status(201).json({"code" : 0, "message" : "booking successfully", "data": data_result})
        }else{
            
            return res.json({"code": 1, "message" : "booking failled", "data": null})
        }        
    } catch (error) {
        console.log(error);
        if(error.errors){
            res.status(400).json({"code": 1, "message": error.errors[0].message, "data" : null})
        }else{
            res.status(400).json({"code" : 1, "message" : error, "data": null})
        }
    }
}

const getBookingList = async(req, res) => {
    try {
        const {id} = req.params

        const data = await models.User.findOne({where : {user_id: id},
            include : [ 
                {
                    model: models.Booking,
                    include : [{
                        model: models.Jasa,
                        include : [{
                            model: models.Sub_category
                        }]
                    }]
                }
            ]})

        if(data){
            return res.json({code: 0, message: 'successs get booking list', data: data})
        }else{
            return res.json({code: 1, message: 'data not found', data: null})
        }
    } catch (error) {
        if(error.errors){
            res.status(400).json({"code": 1, "message": error.errors[0].message, "data" : null})
        }else{
            res.status(400).json({"code" : 1, "message" : error, "data": null})
        }
    }
}

module.exports = {
    createNewBooking,
    getBookingList
}