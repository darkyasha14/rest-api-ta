const models = require('../../database/models')
const { delelteUser } = require('./controllers-user')
const { response } = require('express')

const getAllRomm = async(req, res) => {
    try {
        const data = await models.Hotel.findAll()
        if(data.length > 0 ){
            return res.json({"code" : 0, "message": "success get all data", "data": data})
        }else{
            return res.json({"code" : 1, "message" : "data not found", "data": null})
        }
    } catch (error) {
        if(error.message){
            return res.json({"code" : 1, "message" : error.message, "data" : null})
        }else{
            return res.json({"code" : 1, "message": error, "data" : null })
        }
        
    } 
}

const getRoomById = async (req, res) => {
    console.log(req.params);
    
    try {
        const {id} = req.params
        const data = await models.Hotel.findOne({where : {kamar_id : id}})
        if(data){
            return res.json({"code" : 0, "message" : "Successfully get room by id", "data" : data})
        }else{
            return res.json({"code" : 1, "message" : "data with specified id not found", "data" : null})
        }

    } catch (error) {
        if(error.message){
            return res.json({"code" : 1, "message" : error.message, "data" : null})
        }else{
            return res.json({"code" : 1, "message": error, "data" : null })
        }
    }
}

const createNewRoom = async(req, res) => {
    console.log(req.body);
    
    try {
        const {kamar_type, kamar_price, kamar_status, kamar_img} = req.body
        const data = await models.Hotel.create({
            kamar_type : kamar_type,
            kamar_price : kamar_price,
            kamar_status : kamar_status,
            kamar_img : kamar_img
        })
        if(data){
            return res.status(201).json({"code" : 0, "message" : "success add new room", "data" : data})
        }else{
            return res.json({"code" : 1, "message" : "failded add new room", "data" : null})
        }
    } catch (error) {
        if(error.message){
            return res.status(400).json({"code" : 1, "message" : error.errors[0].message, "data" : null})
        }else{
            return res.json({"code" : 1, "message" : error, "data" : null})
        } 
    }
}

const updateRoom = async (req, res) => {
    console.log(req.body);
    console.log(req.params);
    try {
        const {kamar_type, kamar_price, kamar_status, kamar_img} = req.body
        const {id} = req.params

        const data = await models.Hotel.findOne({where : {kamar_id : id}})
        if(data){
            const update = await models.Hotel.update({
                kamar_type : kamar_type,
                kamar_price : kamar_price,
                kamar_status : kamar_status,
                update_at : new Date()
            },{where : {kamar_id : id}})
            if(update){
                const updateData = await models.Hotel.findAll({where : {kamar_id : id}})
                return res.status(201).json({"code" : 0, "message" : "update successfully", "data" : updateData})
            }else{
                return res.json({"code" : 1, "message" : "update failed", "data" : null})
            }
        }else{
            return res.json({"code" : 1, "message" : "data with the specified id not found", "data": null})
        }
    } catch (error) {
        if(error.message){
            return res.status(400).json({"code" : 1, "message" : error.errors[0].message, "data" : null})
        }else{
            return res.json({"code" : 1, "message" : error, "data" : null})
        }    
    }
}

const deleteRoom = async (req,res) => {
    try {
        console.log(req.params);
        const {id} = req.params

        const data = await models.Hotel.findOne({where : {kamar_id : id}})
        if(data){
            const deleteRoom = await models.Hotel.destroy({where : {kamar_id : id}})
            if(deleteRoom){
                return res.json({"code" : 0, "message" : "delete data successfully", "data" : null})
            }else{
                return res.json({"code" : 1, "message" : "failed to delete data", "data" : null})
            }
        }else{
            return res.json({"code" : 1, "message" : "data with the specified id not found", "data": null})
        }
    } catch (error) {
        if(error.message){
            return res.json({"code" : 1, "message" : error.message, "data" : null})
        }else{
            return res.json({"code" : 1, "message": error, "data" : null })
        }
    }

}

module.exports = {
    getAllRomm,
    getRoomById,
    createNewRoom,
    updateRoom,
    deleteRoom
}