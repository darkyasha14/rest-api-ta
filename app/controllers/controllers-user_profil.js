const path = require('path')
const fs = require('fs')

const models = require('../../database/models')

const getProfilDetail = async(req, res) => {
    try {
        const data = await models.Profil.findAll({
            include : [ 
                {
                    model: models.User
                }
            ]
        })
        if(data){
            return res.status(201).json({code: 0, message: 'success get profil detail', data: data})
        }else{
            return res.json({code: 1, message: 'failled get profil detail', data: null})
        }
    } catch (error) {
        if(error.message){
            return res.status(400).json({code: 1, message: error.message, data: null})
        }else{
            return res.status(400).json({code: 1, message: error, data: null})
        }
    }
}

const titleImg = (paramater) => {
    var resTitle = ''
    paramater.substring(0, 19).split(' ').forEach(element => {
        resTitle += `${element}-`
    });

    console.log("title image : ", resTitle.substring(0, resTitle.length - 1))
    return resTitle.substring(0, resTitle.length - 1)
}

const getProfilbuUserID = async ( req,res) => {
    try {
        console.log(req.params);
        
        const {id} = req.params
        const data = await models.User.findOne({where : {user_id : id},
            include : [ 
                {
                    model: models.Profil
                }
            ]
        })

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

const createProfil = async(req, res) => {
    try {
        const {user_id, phone} = req.body

        // jika dalam request terdapat file
        console.log(req.file)
        if(req.file){
            const tempPath = await req.file.path                                // ambil file path setelah di upload di folder tmp
            const targetPath = await path.join(__dirname, './../../public/image/' + titleImg(phone) + ".png")        // ganti setiap file yg di upload menjadi .png
            console.log(targetPath)

            const data = await models.Sub_category.create({
                user_id: user_id,
                phone: phone,
                user_img : targetPath,
            })
        
                if(data){
                    // pindahkan file dari folder tmp ke target path (public/image) dengan format img png
                    await fs.rename(tempPath, targetPath, err => {
                        if (err){
                            console.log(err);
                            return res.send(500)
                        }
                    })

                    return res.status(201).json({code: 0, message: 'success add new sub_category', data: data})
                }else{
                    return res.json({code: 1, message: 'failled added new sub_category', data: null})
                }
        }else{
            const data = await models.Profil.create({
                user_id: user_id,
                phone: phone
            })

            if(data){
                return res.status(201).json({code: 0, message: 'new post successfully added, no file uploaded', data})
            }else{
                return res.json({code: 1, message: "new post failed added", data: null})
            }
        }
    } catch (error) {
        console.log(error)
        if(error.errors){
            if(req.file){
                const tempPath = await req.file.path
                fs.unlink(tempPath, err => console.log(err))
            }

            return res.json({code: 1, message: error.errors[0].message, data: null})
        }else {
            return res.json({code: 1, message: error, data: null})
        }
    }
}


module.exports = {
    getProfilDetail,
    getProfilbuUserID,
    createProfil
}