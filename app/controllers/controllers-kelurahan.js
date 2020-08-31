const models = require('../../database/models')


const createNewKelurahan = async(req, res) => {

    try {
        const { kecamatan_id, list_kelurahan } = req.body
        
        const getKecamatan = await models.Kecamatan.findOne({where: {kecamatan_id: kecamatan_id}})

        // cek apakah kecamatan_id ada
        if(getKecamatan){
            // cek apakah ada list Kelurahan yg ditambahkam
            if(list_kelurahan.length > 0){
    
                await Promise.all(list_kelurahan.map(async (element) => {
                    await models.Kelurahan.create({
                        kecamatan_id : kecamatan_id,
                        kelurahan_id : element.id,
                        nama : element.nama,
                    })
                }))
    
                const liistKelurahanByKecamatanId = await models.Kelurahan.findAll(
                    {
                        where: { kecamatan_id: kecamatan_id },
                        include: [
                            {
                                model : models.Kecamatan,
                                attributes : ["kecamatan_id", "nama"],
                                include: [
                                    {
                                        model: models.Kota,
                                        attributes: ["kota_id", "nama"]
                                    }
                                ]
                            },
                        ]
                    }
                )
    
                return res.json({"code" : 0, "message" : "success add new kelurahan", "data" : liistKelurahanByKecamatanId})
            }else{
                return res.json({"code" : 1, "message" : "no Kelurahan added", "data" : null})
            }
        }else{
            return res.json({"code" : 1, "message" : "kecamatan_id doesn't exist", "data" : null})
        }
    } catch (error) {
        console.log(error)
        if(error.errors.message) return res.json({"code" : 1, "message" : error.errors.message, "data" : null})
        else if(error.message) return res.json({"code" : 1, "message" : error.message, "data" : null})
        else return res.json({"code" : 1, "message" : error, "data" : null})
    }
}


const getListKelurahan = async (req, res) => {
    try {
        const data = await models.Kelurahan.findAll({
            include: [
                {
                    model : models.Kecamatan,
                    attributes : ["kecamatan_id", "nama"],
                    include: [
                        {
                            model: models.Kota,
                            attributes: ["kota_id", "nama"]
                        }
                    ]
                },
            ]
        })

        if(data.length > 0)
            return res.json({code: 0, message: "success get list Kelurahan", data: data})
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


const getListKelurahanByKecamatanId = async (req, res) => {
    try {
        const {kecamatan_id} = req.params

        const data = await models.Kelurahan.findAll(
            {
                where: { kecamatan_id: kecamatan_id },
                include: [
                    {
                        model : models.Kecamatan,
                        attributes : ["kecamatan_id", "nama"],
                        include: [
                            {
                                model: models.Kota,
                                attributes: ["kota_id", "nama"]
                            }
                        ]
                    },
                ]
            }
        )

        if(data.length > 0)
            return res.json({code: 0, message: "success get list Kelurahan by Kecamatan id", data: data})
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

const getKelurahanDetail = async (req, res) => {
    console.log(req.params);
    
    try {
        const {id} = req.params
        const data = await models.Kelurahan.findOne({where : {kelurahan_id: id}})
        if(data){
            return res.json({"code" : 0, "message" : "Successfully get kelurahan detail", "data" : data})
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


// Menghapus seluruh isi table Kelurahan
const truncateTableKelurahan = async (req, res) => {
    try {
        await models.Kelurahan.destroy({truncate: { cascade : true }, restartIdentity: true})
        
        return res.json({code: 0, message: 'all Kelurahan successfully truncate', data: null})
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
    createNewKelurahan,
    getListKelurahan,
    getListKelurahanByKecamatanId,
    truncateTableKelurahan,
    getKelurahanDetail
}