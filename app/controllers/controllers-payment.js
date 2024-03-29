const models = require('../../database/models')
const mail = require('../helper/send-email')

const createPayment = async ( req, res) => {
    console.log(req.body);
    try {
        const {invoice_no, user_id} = req.body
        
        const dataPayment = await models.Payment.create({
            user_id: user_id,
            invoice_no : invoice_no
        })

        if(dataPayment){
            const data = await models.Payment.findOne(
                {
                    where: {user_id : dataPayment.dataValues.user_id},
                    include: [
                        {
                            model : models.User,
                            attributes : ["name","email"]
                        },
                        {
                            model : models.Booking,
                            include : [{
                                model: models.Jasa,
                                include : [{
                                    model: models.Sub_category
                                }]
                            }]
                        }
                    ]
                }
            )
            console.log(data.dataValues.Booking)
            const params = {
                name: data.dataValues.User.dataValues.name,
                email: data.dataValues.User.dataValues.email,
                jasa: data.dataValues.Booking.dataValues.Jasa.dataValues.jasa_name,
                price: data.dataValues.Booking.dataValues.Jasa.dataValues.jasa_price,
                item: data.dataValues.Booking.dataValues.Jasa.dataValues.Sub_category.dataValues.sub_category_name

            }

            await mail.sendMailPayment(params)

            return res.status(201).json({"code" : 0, "message" : "success, please check your email to complate your payment", "data": data})
        }else{
            return res.json({"code": 1, "message" : "payment failed", "data": null})
        }        
    } catch (error) {
        console.log(error);
        if(error.errors){
            res.json({"code": 1, "message": error.errors[0].message, "data" : null})
        }else{
            res.json({"code" : 1, "message" : error, "data": null})
        }
    }
}

module.exports = {
    createPayment
}