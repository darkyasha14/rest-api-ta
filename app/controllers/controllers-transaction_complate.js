const models = require('../../database/models')


const transactionComplateList = async(req, res) => {
    try {
        const {id} = req.params

        const data = await models.TransactionCom.findAll({where :{user_id: id},
                include : [{
                    model: models.Booking,
                    include : [{
                        model: models.Jasa,
                        include : [{
                            model: models.Sub_category
                        }]
                    }]
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
            res.status(400).json({"code": 1, "message": error.errors[0].message, "data" : null})
        }else{
            res.status(400).json({"code" : 1, "message" : error, "data": null})
        }
    }
}
const transactionComplateAllList = async(req, res) => {
    try {

        const data = await models.TransactionCom.findAll({
            include : [{
                model: models.Booking,
                include : [{
                    model: models.Jasa,
                    include : [{
                        model: models.Sub_category
                    }]
                }]
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
            res.status(400).json({"code": 1, "message": error.errors[0].message, "data" : null})
        }else{
            res.status(400).json({"code" : 1, "message" : error, "data": null})
        }
    }
}

module.exports= {
    transactionComplateList,
    transactionComplateAllList
}