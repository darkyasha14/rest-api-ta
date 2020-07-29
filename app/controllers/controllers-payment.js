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
                        }
                    ]
                }
            )
            console.log(data.dataValues.User.dataValues)
            const params = {
                name: data.dataValues.User.dataValues.name,
                email: data.dataValues.User.dataValues.email,
            }

            await mail.sendMailPayment(params)

            return res.status(201).json({"code" : 0, "message" : "success, please check your email to complate your payment", "data": data})
        }else{
            return res.json({"code": 1, "message" : "payment failed", "data": null})
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

module.exports = {
    createPayment
}