const models = require('../../database/models')


const createNewKecamatan = async(req, res) => {

    try {
        const { kota_id, list_kecamatan } = req.body

        const getKota = await models.Kota.findOne({where: {kota_id: kota_id}})

        // cek apakah kota_id ada
        if(getKota){
            // cek apakah ada list kecamatan yg ditambahkam
            if(list_kecamatan.length > 0){
    
                await Promise.all(list_kecamatan.map(async (element) => {
                    await models.Kecamatan.create({
                        kota_id : kota_id,
                        kecamatan_id : element.id,
                        nama : element.nama,
                    })
                }))
    
                const liistKecamatanByKotaId = await models.Kecamatan.findAll(
                    {
                        where: { kota_id: kota_id },
                        include: [
                            {
                                model : models.Kota,
                                attributes : ["kota_id","nama"]
                            },
                        ]
                    }
                )
        
                return res.json({"code" : 0, "message" : "success add new kecamatan", "data" : liistKecamatanByKotaId})
            }else{
                return res.json({"code" : 1, "message" : "no kecamatan added", "data" : null})
            }
        }else{
            return res.json({"code" : 1, "message" : "kota_id doesn't exist", "data" : null})
        }
    } catch (error) {
        console.log(error)
        if(error.errors.message) return res.json({"code" : 1, "message" : error.errors.message, "data" : null})
        else if(error.message) return res.json({"code" : 1, "message" : error.message, "data" : null})
        else return res.json({"code" : 1, "message" : error, "data" : null})
    }
}


const getListKecamatan = async (req, res) => {
    try {
        const data = await models.Kecamatan.findAll({
            include: [
                {
                    model : models.Kota,
                    attributes : ["kota_id", "nama"]
                },
            ]
        })

        if(data.length > 0)
            return res.json({code: 0, message: "success get list kecamatan", data: data})
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


const getListKecamatanByKotaId = async (req, res) => {
    try {
        const {kota_id} = req.params

        const data = await models.Kecamatan.findAll(
            {
                where: { kota_id: kota_id },
                include: [
                    {
                        model : models.Kota,
                        attributes : ["kota_id", "nama"]
                    },
                ]
            }
        )

        if(data.length > 0)
            return res.json({code: 0, message: "success get list kecamatan by kota id", data: data})
        else
            return res.json({code: 1, message: 'data not found, data kecamatan of this kota_id is empty', data: null})
    } catch (error) {
        console.log(error);
        if(error.message){
            return res.json({"code" : 1, "message" : error.message, "data" : null})
        }else{
            return res.json({"code" : 1, "message" : error, "data" : null})
        } 
    }
}

const getKecamatanDetail = async (req, res) => {
    console.log(req.params);
    
    try {
        const {id} = req.params
        const data = await models.Kecamatan.findOne({where : {kecamatan_id: id}})
        if(data){
            return res.json({"code" : 0, "message" : "Successfully get kecamatan detail", "data" : data})
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


// Menghapus seluruh isi table kecamatan
const truncateTableKecamatan = async (req, res) => {
    try {
        await models.Kecamatan.destroy({truncate: { cascade : true }, restartIdentity: true})
        
        return res.json({code: 0, message: 'all kecamatan successfully truncate', data: null})
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
    createNewKecamatan,
    getListKecamatan,
    getListKecamatanByKotaId,
    truncateTableKecamatan,
    getKecamatanDetail
}