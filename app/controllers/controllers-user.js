// const models = require ('../../database/models')
const models = require('../../database/models')

const getAllUser = async( req,res) => {
    try {
        const data = await models.User.findAll()

        if(data.length > 0 ){
            return res.json({"code" : 0, "message" : "success", "data" : data})
        }else{
            return res.json({"code" : 1, "message" : "data not found", "data" : null})
        }
    } catch  (error){
        if(error.message){
            return res.json({"code" : 1, "message" : error.message, "data" : null});
        }else{
            return res.json({"code": 1, "message": error, "data": null})
        }
    }
}

const getUserById = async ( req,res) => {
    try {
        console.log(req.params);
        
        const {id} = req.params
        const data = await models.User.findOne({where : {user_id : id}})

        if(data){
            return res.json({"code" : 0, "message" : "success", "data" : data})
        }else{
            return res.json({"code" : 1, "message" : "data not found", "data" : null})
        }
    } catch  (error){
        if(error.message){
            return res.json({"code" : 1, "message" : error.message, "data" : null});
        }else{
            return res.json({"code": 1, "message": error, "data": null})
        }
    }
}

const createNewUser = async ( req, res) => {
    console.log(req.body);
    try {
        const {name, username, password, email} = req.body

        const data = await models.User.create({
            name: name,
            username : username,
            password : password,
            email : email
        })
        if(data){
            return res.status(201).json({"code" : 0, "message" : "success add new user", "data": data})
        }else{
            return res.json({"code": 1, "message" : "add new user failed", "data": null})
        }        
    } catch (error) {
        console.log(error);
        if(error.errors){
            res.status(400).json({"code": 1, "message": error.errors[0].message, "data" : null})
        }else{
            res.status(400).json({"code" : 1, "message" : error, "data": null})
        }
    }
}

const updateUser = async (req, res) => {
    try {
        console.log(req.params);
        console.log(req.body);

        const {name, username, password, email} = req.body
        const {id} = req.params

        const data = await models.User.findOne({where : {user_id : id}})

        if(data){
            const update = await models.User.update({
                name: name,
                username: username,
                password : password,
                email: email,
                update_at: new Date()

            },{where : {user_id : id}})
            if(update){
                const updateData = await models.User.findOne({where : {user_id : id}})

                return res.status(201).json({"code" : 0 ,"message" : "update data succuessfully", "data" : updateData})
            }else{
                return res.json({"code" : 1, "messsage": "update failed", "data": null})
            }
        }else{
            return res.json({"code" : 1, "message" : "data with the specified id not found", "data": null})
        }
        
    } catch (error) {
        console.log(error);
        if(error.errors){
            res.status(400).json({"code": 1, "message": error.errors[0].message, "data" : null})
        }else{
            res.status(400).json({"code" : 1, "message" : error, "data": null})
        }
    }    
}

const delelteUser = async (req, res) => {
    try {
        console.log(req.params);
    
        const {id} = req.params

        const data = await models.User.findOne({where : {user_id : id}})

        if(data){
            const deleteData= await models.User.destroy({where : {user_id : id}})
            if(deleteData){
                return res.status(201).json({"code" : 0 ,"message" : "delete data succuessfully", "data" : deleteData})
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


module.exports = {
    getAllUser,
    getUserById,
    createNewUser,
    updateUser,
    delelteUser
}