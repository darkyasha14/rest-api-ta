const models = require('../../database/models')

const getJasalist = async(req, res) => {
    try {
        const data = await models.Jasa.findAll({
            include : [ 
                {
                    model: models.Sub_category,
                    include : [{
                        model: models.Category
                    }]
                }
            ]
        })

        if(data.length > 0){
            return res.json({code: 0, message: 'successs get jasaa list', data: data})
        }else{
            return res.json({code: 1, message: 'data not found', data: null})
        }
    } catch (error) {
        if(error.message){
            return res.json({code: 1, message: error.message, data: null})
        }else{
            return res.json({code: 1, message: error, data: null})
        }
        
    }
}

const getJasaById = async (req, res) => {
    try {
        const {id} = req.params
        const data = await models.Jasa.findOne({
            where : 
            {
                jasa_id : id
            },
            include : [ 
                {
                    model: models.Sub_category,
                    include : [{
                        model: models.Category
                    }]
                }
            ]
        })
        if(data){
            return res.json({code : 0, message : "Successfully get jasa by id", data : data})
        }else{
            return res.json({code : 1, message : "data with specified id not found", data : null})
        }

    } catch (error) {
        if(error.message){
            return res.json({code : 1, "message" : error.message, data : null})
        }else{
            return res.json({code : 1, "message": error, data : null})
        }
    }
}

const createJasa = async(req, res) => {
    try {
        const {sub_category_id, jasa_name, jasa_desc, jasa_price} = req.body
        const data = await models.Jasa.create({
            sub_category_id: sub_category_id,
            jasa_name: jasa_name,
            jasa_desc: jasa_desc,
            jasa_price: jasa_price
        })
        if(data){
            return res.status(201).json({code: 0, message: 'success add new jasa', data: data})
        }else{
            return res.json({code: 1, message: 'failled added new jasa', data: null})
        }
    } catch (error) {
        if(error.message){
            return res.status(400).json({code: 1, message: error.message, data: null})
        }else{
            return res.status(400).json({code: 1, message: error, data: null})
        }
    }
}

const updateJasa = async(req, res) => {
    try {
        const {id} = req.params
        const {jasa_name, jasa_desc, jasa_price} = req.body

        const data = await models.Jasa.findOne({where : {jasa_id : id}})
        if(data){
            const update = await models.Jasa.update({
                jasa_name: jasa_name,
                jasa_desc: jasa_desc,
                jasa_price: jasa_price,
                update_at: new Date()
            },{where : {jasa_id: id}})
            if(update){
                const updateData = await models.Jasa.findOne({where : {jasa_id: id}})

                return res.status(201).json({code: 0, message: 'success update data', data: updateData})
            }else{
                return res.json({code: 1, message: 'failled to update data', data: null})
            }
        }else{
            return res.json({"code" : 1, "message" : "data with the specified id not found", "data": null})
        }
    } catch (error) {
        if(error.message){
            return res.status(400).json({code: 1, message: error.errors[0].message, data: null})
        }else{
            return res.status(400).json({code: 1, message: error, data: null})
        }
    }
}

module.exports = {
    getJasalist,
    getJasaById,
    createJasa,
    updateJasa
}