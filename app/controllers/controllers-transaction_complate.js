const models = require('../../database/models')


const transactionComplateListByUserId = async(req, res) => {
    try {
        const {id} = req.params

        const data = await models.TransactionCom.findAll({where :{user_id: id},
                include : [{
                    model: models.Booking,
                    include : [{
                        model: models.Jasa,
                        include : [{
                            model: models.Sub_category,
                            include : [{
                                model: models.Category
                            }]
                        }]
                    }]
                },
                {
                    model: models.ConPayment
                },
                {
                    model: models.User
                }]
            })

        if(data){
            return res.json({code: 0, message: 'successs get data transaction complate by ID', data: data})
        }else{
            return res.json({code: 1, message: 'data not found', data: null})
        }
    } catch (error) {
        console.log(error)
        if(error.errors){
            res.json({"code": 1, "message": error.errors[0].message, "data" : null})
        }else{
            res.json({"code" : 1, "message" : error, "data": null})
        }
    }
}

const transactionComplateListByInvoiceNo = async(req, res) => {
    try {
        const { invoice_no } = req.params

        const data = await models.TransactionCom.findOne({where :{invoice_no: invoice_no},
                include : [{
                    model: models.Booking,
                    include : [{
                        model: models.Jasa,
                        include : [{
                            model: models.Sub_category,
                            include : [{
                                model: models.Category
                            }]
                        }]
                    }]
                },
                {
                    model: models.ConPayment
                },
                {
                    model: models.User
                }]
            })

        if(data){
            return res.json({code: 0, message: 'successs get data transaction complate', data: data})
        }else{
            return res.json({code: 1, message: 'data not found', data: null})
        }
    } catch (error) {
        console.log(error)
        if(error.errors){
            res.json({"code": 1, "message": error.errors[0].message, "data" : null})
        }else{
            res.json({"code" : 1, "message" : error, "data": null})
        }
    }
}

const transactionComplateList = async(req, res) => {
    try {

        const data = await models.TransactionCom.findAll({
            include : [{
                model: models.Booking,
                include : [{
                    model: models.Jasa,
                    include : [{
                        model: models.Sub_category,
                        include : [{
                            model: models.Category
                        }]
                    }]
                }]
            },
            {
                model: models.ConPayment
            },
            {
                model: models.User
            }]
        })

        if(data){
            return res.json({code: 0, message: 'successs get all data transaction complate', data: data})
        }else{
            return res.json({code: 1, message: 'data not found', data: null})
        }
    } catch (error) {
        console.log(error)
        if(error.errors){
            res.json({"code": 1, "message": error.errors[0].message, "data" : null})
        }else{
            res.json({"code" : 1, "message" : error, "data": null})
        }
    }
}


module.exports= {
    transactionComplateList,
    transactionComplateListByUserId,
    transactionComplateListByInvoiceNo
}