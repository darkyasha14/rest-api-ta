const models = require('../../database/models')

const getCategorylist = async(req, res) => {
    try {
        const data = await models.Category.findAll({
            include : [ 
                {
                    model: models.Sub_category,
                    include : [{
                        model: models.Jasa
                    }]
                }
            ]
        })

        if(data.length > 0){
            return res.json({code: 0, message: 'successs get list category', data: data})
        }else{
            return res.json({code: 1, message: 'data not found', data: null})
        }
    } catch (error) {
        console.log(error);
        
        if(error.message){
            return res.json({code: 1, message: error.message, data: null})
        }else{
            return res.json({code: 1, message: error, data: null})
        }
        
    }
}

const getCategoryById = async (req, res) => {
    try {
        const {id} = req.params
        const data = await models.Category.findOne({
            where : 
            {
                category_id : id
            },
            include : [
                {
                    model : models.Sub_category
                }
            ]
        })
        if(data){
            return res.json({code : 0, message : "Successfully get category by id", data : data})
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

const createCategory = async(req, res) => {
    try {
        const {category_name, category_desc} = req.body
        const data = await models.Category.create({
            category_name: category_name,
            category_desc: category_desc
        })
        if(data){
            return res.status(201).json({code: 0, message: 'success add new category', data: data})
        }else{
            return res.json({code: 1, message: 'failled added new category', data: null})
        }
    } catch (error) {
        if(error.message){
            return res.status(400).json({code: 1, message: error.errors[0].message, data: null})
        }else{
            return res.status(400).json({code: 1, message: error, data: null})
        }
    }
}

const updateCategory = async(req, res) => {
    try {
        const {id} = req.params
        const {category_name, category_desc} = req.body

        const data = await models.Category.findOne({where : {category_id : id}})
        if(data){
            const update = await models.Category.update({
                category_name: category_name,
                category_desc: category_desc,
                update_at: new Date()
            },{where : {category_id: id}})
            if(update){
                const updateData = await models.Category.findOne({where : {category_id: id}})

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
    getCategorylist,
    getCategoryById,
    createCategory,
    updateCategory
}