const getaddressByUserId = async (req, res) => {
    console.log(req.params);
    
    try {
        const {id} = req.params
        const data = await models.Address.findOne({where : {user_id : id}})
        if(data){
            return res.json({"code" : 0, "message" : "Successfully get address by user Id", "data" : data})
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

const createUserAddress = async(req, res) => {
    console.log(req.body);
    
    try {
        const {user_id, kota_id, kecamatan_id, kelurahan_id, detail_address} = req.body
        const data = await models.Address.create({
            user_id : user_id,
            kota_id : kota_id,
            kecamatan_id : kecamatan_id,
            kelurahan_id : kelurahan_id,
            detail_address : detail_address
        })
        if(data){
            return res.status(201).json({"code" : 0, "message" : "success add address", "data" : data})
        }else{
            return res.json({"code" : 1, "message" : "failded add new address", "data" : null})
        }
    } catch (error) {
        if(error.message){
            return res.status(400).json({"code" : 1, "message" : error.errors[0].message, "data" : null})
        }else{
            return res.json({"code" : 1, "message" : error, "data" : null})
        } 
    }
}

module.exports= {
    getaddressByUserId,
    createUserAddress
}