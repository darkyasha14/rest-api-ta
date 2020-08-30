const models = require('../../database/models')

const createNewKelurahan = async(req, res) => {
    console.log(req.body);
    
    try {
        const {kelurahan_id,kecamatan_id, nama} = req.body
        const data = await models.Kelurahan.create({
            kelurahan_id : kelurahan_id,
            kecamatan_id : kecamatan_id,
            nama : nama,
        })
        if(data){
            return res.status(201).json({"code" : 0, "message" : "success add new kecamatan", "data" : data})
        }else{
            return res.json({"code" : 1, "message" : "failded add new address", "data" : null})
        }
    } catch (error) {
        if(error.message){
            return res.status(400).json({"code" : 1, "message" : error.errors.message, "data" : null})
        }else{
            return res.json({"code" : 1, "message" : error, "data" : null})
        } 
    }
}

module.exports = {
    createNewKelurahan
}