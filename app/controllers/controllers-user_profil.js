const path = require('path')
const fs = require('fs')
require('dotenv').config()

const models = require('../../database/models')
const domain = require('./../helper/getDomain')

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
const titleImg = (paramater) => {
    var resTitle = ''
    paramater.substring(0, 19).split(' ').forEach(element => {
        resTitle += `${element}-`
    });

    console.log("title image : ", resTitle.substring(0, resTitle.length - 1))
    return resTitle.substring(0, resTitle.length - 1)
}

const createProfil = async(req, res) => {
    try {
        const {user_id, phone} = req.body

        // jika dalam request terdapat file
        console.log(req.file)
        if(req.file){
            const domainName = await domain.getFullDomainURL(req)

            const tempPath = await req.file.path                                                                       // ambil file path setelah di upload di folder tmp
            const targetPath = await path.resolve(process.env.IMG_PATH_UPLOAD) + '/' + titleImg(user_id) + ".png"        // ganti setiap file yg di upload menjadi .png
            const urlFile = await domainName + "/" + process.env.IMG_PATH_UPLOAD + titleImg(user_id) + '.png'                      // buat url untuk image tsb
            console.log(urlFile)

            const data = await models.Profil.create({
                user_id: user_id,
                phone: phone,
                user_img : urlFile,
            })
        
                if(data){
                    // pindahkan file dari folder tmp ke target path (public/image) dengan format img png
                    await fs.rename(tempPath, targetPath, err => {
                        if (err){
                            console.log(err);
                        }
                    })
                    
                    const getData = await models.Profil.findOne({
                        where : 
                        {
                            profil_id : data.dataValues.profil_id
                        },
                        include : [ 
                            {
                                model: models.User
                            }
                        ]
                    })

                    return res.status(201).json({code: 0, message: 'success add profil', data: getData})
                }else{
                    return res.json({code: 1, message: 'failled to add profil', data: null})
                }
        }else{
            const data = await models.Profil.create({
                user_id: user_id,
                phone: phone
            })

            if(data){
                const Data = await models.Profil.findOne({
                    where : 
                    {
                        profil_id : data.dataValues.profil_id
                    },
                    include : [ 
                        {
                            model: models.User
                        }
                    ]
                })
                return res.status(201).json({code: 0, message: 'profil added, no file uploaded', Data})
            }else{
                return res.json({code: 1, message: "new profil failed added", data: null})
            }
        }
    } catch (error) {
        console.log(error)
        if(req.file){
            const tempPath = await req.file.path
            fs.unlink(tempPath, err => console.log(err))
        }

        if(error.errors){
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