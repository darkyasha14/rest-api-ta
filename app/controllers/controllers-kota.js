const models = require('../../database/models')


const createNewKota = async (req, res) => {
    console.log(req.body);
    
    try {
        const {kota_id, nama} = req.body
        
        const data = await models.Kota.create({
            kota_id : kota_id,
            nama : nama,
        })
        if(data){
            return res.json({"code" : 0, "message" : "success add new kota", "data" : data})
        }else{
            return res.json({"code" : 1, "message" : "failded add new address", "data" : null})
        }
    } catch (error) {
        console.log(error);
        if(error.message){
            return res.json({"code" : 1, "message" : error.message, "data" : null})
        }else{
            return res.json({"code" : 1, "message" : error, "data" : null})
        } 
    }
}

module.exports = {
    createNewKota
}