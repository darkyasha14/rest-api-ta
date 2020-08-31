const models = require('../../database/models')

const getaddressDetail = async (req, res) => {
    console.log(req.params);
    
    try {
        const {user_id, address_id} = req.body
        const data = await models.Address.findOne({where : {user_id: user_id, address_id : address_id}})
        if(data){
            return res.json({"code" : 0, "message" : "Successfully get address", "data" : data})
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

const getaddressByUserId = async (req, res) => {
    console.log(req.params);
    
    try {
        const {user_id} = req.body
        const data = await models.Address.findAll({where : {user_id: user_id}})
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

const updateAddress = async (req, res) => {
    try {
        console.log(req.body);

        const {kota_id, kecamatan_id, kelurahan_id, detail_address} = req.body
        const {user_id, address_id} = req.body

        const data = await models.Address.findOne({where : {user_id: user_id, address_id : address_id}})

        if(data){
            const update = await models.Address.update({
                kota_id : kota_id,
                kecamatan_id : kecamatan_id,
                kelurahan_id : kelurahan_id,
                detail_address : detail_address,
                update_at: new Date()

            },{where : {user_id: user_id, address_id : address_id}})
            if(update){
                const updateData = await models.Address.findOne({where : {user_id: user_id, address_id : address_id}})

                return res.json({"code" : 0 ,"message" : "update address succuessfully", "data" : updateData})
            }else{
                return res.json({"code" : 1, "messsage": "update failed", "data": null})
            }
        }else{
            return res.json({"code" : 1, "message" : "data with the specified id not found", "data": null})
        }
        
    } catch (error) {
        console.log(error);
        if(error.errors){
            res.json({"code": 1, "message": error.errors[0].message, "data" : null})
        }else{
            res.json({"code" : 1, "message" : error, "data": null})
        }
    }    
}

const deleteAddress = async (req, res) => {
    try {
        console.log(req.params);
    
        const {user_id,address_id} = req.body

        const data = await models.Address.findOne({where : {user_id: user_id, address_id : address_id}})

        if(data){
            const deleteData= await models.Address.destroy({where : {user_id: user_id, address_id : address_id}})
            if(deleteData){
                return res.status(201).json({"code" : 0 ,"message" : "delete address succuessfully", "data" : deleteData})
            }else{
                return res.json({"code" : 1, "messsage": "delete failed", "data": null})
            }
        }else{
            return res.json({"code" : 1, "message" : "data with the specified id not found", "data": null})
        }       
    }catch(error){
        if(error.message){
            return res.json({"code" : 1, "message" : error.message, "data" : null});
        }else{
            return res.json({"code": 1, "message": error, "data": null})
        }
    }

}


module.exports= {
    getaddressByUserId,
    getaddressDetail,
    createUserAddress,
    updateAddress,
    deleteAddress
}