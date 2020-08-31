const models = require('../../database/models')


const createNewKota = async (req, res) => {
    
    try {
        const { list_kota } = req.body

        list_kota.forEach(element => {
            console.log(element)
            models.Kota.create({
                kota_id : element.id,
                nama : element.nama,
            })
        });

        return res.json({"code" : 0, "message" : "success add new kota", "data" : list_kota})
    } catch (error) {
        console.log(error);
        if(error.message){
            return res.json({"code" : 1, "message" : error.message, "data" : null})
        }else{
            return res.json({"code" : 1, "message" : error, "data" : null})
        } 
    }
}

const getKotaDetail = async (req, res) => {
    console.log(req.params);
    
    try {
        const {id} = req.params
        const data = await models.Kota.findOne({where : {kota_id: id}})
        if(data){
            return res.json({"code" : 0, "message" : "Successfully get kota detail", "data" : data})
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

const getAllKota = async (req, res) => {
    try {
        const data = await models.Kota.findAll()

        if(data.length > 0)
            return res.json({code: 0, message: "success get all kota", data: data})
        else
            return res.json({code: 1, message: 'no data found, table is empty', data: null})
    } catch (error) {
        console.log(error);
        if(error.message){
            return res.json({"code" : 1, "message" : error.message, "data" : null})
        }else{
            return res.json({"code" : 1, "message" : error, "data" : null})
        } 
    }
}


// Menghapus seluruh isi table kota
const truncateTableKota = async (req, res) => {
    try {
        await models.Kota.destroy({truncate: { cascade : true }, restartIdentity: true})
        
        return res.json({code: 0, message: 'all data kota successfully truncate', data: null})
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
    createNewKota,
    getAllKota,
    truncateTableKota,
    getKotaDetail
}