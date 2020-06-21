const models = require('../../database/models')

const getSubCategorylist = async(req, res) => {
    try {
        const data = await models.Sub_category.findAll({
            include : [ 
                {
                    model: models.Jasa
                },
                {
                    model: models.Category
                }
            ]
        })

        if(data.length > 0){
            return res.json({code: 0, message: 'successs get sub_category list', data: data})
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

const getSubCategoryById = async (req, res) => {
    try {
        const {id} = req.params
        const data = await models.Sub_category.findOne({
            where : 
            {
                sub_category_id : id
            },
            include : [ 
                {
                    model: models.Jasa
                },
                {
                    model: models.Category
                }
            ]
        })
        if(data){
            return res.json({code : 0, message : "Successfully get sub_category by id", data : data})
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

const createSubCategory = async(req, res) => {
    try {
        const {category_id, sub_category_name, sub_category_desc} = req.body
        const data = await models.Sub_category.create({
            category_id: category_id,
            sub_category_name: sub_category_name,
            sub_category_desc: sub_category_desc
        })
        if(data){
            return res.status(201).json({code: 0, message: 'success add new sub_category', data: data})
        }else{
            return res.json({code: 1, message: 'failled added new sub_category', data: null})
        }
    } catch (error) {
        if(error.message){
            return res.status(400).json({code: 1, message: error.message, data: null})
        }else{
            return res.status(400).json({code: 1, message: error, data: null})
        }
    }
}

const updateSubCategory = async(req, res) => {
    try {
        const {id} = req.params
        const {sub_category_name, sub_category_desc} = req.body

        const data = await models.Sub_category.findOne({where : {sub_category_id : id}})
        if(data){
            const update = await models.Sub_category.update({
                sub_category_name: sub_category_name,
                sub_category_desc: sub_category_desc,
                update_at: new Date()
            },{where : {sub_category_id: id}})
            if(update){
                const updateData = await models.Sub_category.findOne({where : {sub_category_id: id}})

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
    getSubCategorylist,
    getSubCategoryById,
    createSubCategory,
    updateSubCategory
}