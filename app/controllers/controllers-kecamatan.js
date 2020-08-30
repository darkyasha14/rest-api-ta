const models = require('../../database/models')

const createNewKecamatan = async(req, res) => {
    console.log(req.body);
    
    try {
        const {kecamatan_id, kota_id, nama} = req.body
        const data = await models.Kecamatan.create({
            kecamatan_id : kecamatan_id,
            kota_id : kota_id,
            nama : nama,
        })
        if(data){
            return res.json({"code" : 0, "message" : "success add new kecamatan", "data" : data})
        }else{
            return res.json({"code" : 1, "message" : "failded add new address", "data" : null})
        }
    } catch (error) {
        if(error.message){
            return res.json({"code" : 1, "message" : error.errors.message, "data" : null})
        }else{
            return res.json({"code" : 1, "message" : error, "data" : null})
        } 
    }
}

module.exports = {
    createNewKecamatan
}