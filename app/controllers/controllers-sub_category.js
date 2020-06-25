const path = require('path')
const fs = require('fs')

const models = require('../../database/models')

const getSubCategorylist = async(req, res) => {
    try {
        const data = await models.Sub_category.findAll({
            include : [ 
                {
                    model: models.Jasa
                },
                {
                    model: models.Category
                }
            ]
        })

        if(data.length > 0){
            return res.json({code: 0, message: 'successs get sub_category list', data: data})
        }else{
            return res.json({code: 1, message: 'data not found', data: null})
        }
    } catch (error) {
        if(error.message){
            return res.json({code: 1, message: error.message, data: null})
        }else{
            return res.json({code: 1, message: error, data: null})
        }
        
    }
}

const getSubCategoryById = async (req, res) => {
    try {
        const {id} = req.params
        const data = await models.Sub_category.findOne({
            where : 
            {
                sub_category_id : id
            },
            include : [ 
                {
                    model: models.Jasa
                },
                {
                    model: models.Category
                }
            ]
        })
        if(data){
            return res.json({code : 0, message : "Successfully get sub_category by id", data : data})
        }else{
            return res.json({code : 1, message : "data with specified id not found", data : null})
        }

    } catch (error) {
        if(error.message){
            return res.json({code : 1, "message" : error.message, data : null})
        }else{
            return res.json({code : 1, "message": error, data : null})
        }
    }
}

// function untuk membuat title image dalam format nama-file.png
const titleImg = (paramater) => {
    var resTitle = ''
    paramater.substring(0, 19).split(' ').forEach(element => {
        resTitle += `${element}-`
    });

    console.log("title image : ", resTitle.substring(0, resTitle.length - 1))
    return resTitle.substring(0, resTitle.length - 1)
}

const createSubCategory = async(req, res) => {
    try {
        const {category_id, sub_category_name, sub_category_desc} = req.body

        // jika dalam request terdapat file
        console.log(req.file)
        if(req.file){
            const tempPath = await req.file.path                                // ambil file path setelah di upload di folder tmp
            const targetPath = await path.join(__dirname, './../../public/image/' + titleImg(sub_category_name) + ".png")        // ganti setiap file yg di upload menjadi .png
            console.log(targetPath)

            const data = await models.Sub_category.create({
                category_id: category_id,
                sub_category_name: sub_category_name,
                sub_category_desc: sub_category_desc,
                img_url : targetPath,
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
            const data = await models.Sub_category.create({
                category_id: category_id,
                sub_category_name: sub_category_name,
                sub_category_desc: sub_category_desc,
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

const updateSubCategory = async(req, res) => {
    try {
        const {id} = req.params
        const {sub_category_name, sub_category_desc} = req.body

        const data = await models.Sub_category.findOne({where : {sub_category_id : id}})
        if(data){
            if(req.file){
                const tempPath = await req.file.path
                const targetPath = await path.join(__dirname, './../../public/image/' + titleImg(sub_category_name) + ".png")
  
                const update = await models.Sub_category.update({
                    sub_category_name: sub_category_name,
                    sub_category_desc: sub_category_desc,
                    img_url: targetPath,
                    update_at: new Date()
                },{where : {sub_category_id: id}})
    
                // jika data success di update
                if(update){
                    
                    // delete image yg lama, dengan mengambil path yg lama pada column thumbnail_url
                    await fs.unlink(data.dataValues.img_url, err => {
                        if(err){
                            console.log(err)
                        }
                    })

                    // update dg image yg baru
                    await fs.rename(tempPath, targetPath, err => {
                        if (err){
                            console.log(err);
                            return res.send(500)
                        }
                    })

                    const updateData = await models.Sub_category.findOne({where: {sub_category_id: id},
                        include : [ 
                            {
                                model: models.Jasa,
                            },
                            {
                                model: models.Category, attributes : ['category_name', 'category_desc']
                            }
                        ]
                    })

                    return res.status(201).json({code: 0, message: 'post successfully updated', data: updateData})
                }else{
                    return res.json({code: 1, message: "post failed updated", data: null})
                }
            }else{
                const update = await models.Sub_category.update({
                    sub_category_name: sub_category_name,
                    sub_category_desc: sub_category_desc,
                    update_at: new Date()
                },{where : {sub_category_id: id}})
    
                if(update){
                    const updateData = await models.Sub_category.findOne({where : {sub_category_id: id}})

                    return res.status(201).json({code: 0, message: 'successfully updated, no files updated', data: updateData})
                }else{
                    return res.json({code: 1, message: "post failed updated", data: null})
                }
            }
        }else{
            return res.json({code: 1, message: "post's with the specified ID does not exists", data: null})
        }
    } catch (error) {
        console.log(error)
        if(error.errors){
            if(req.file){
                const tempPath = await req.file.path
                fs.unlink(tempPath, err => console.log(err))
            }

            return res.json({code: 1, message: error.errors[0].message, data: null})
        }
        else return res.json({code: 1, message: error, data: null})
    }
}

module.exports = {
    getSubCategorylist,
    getSubCategoryById,
    createSubCategory,
    updateSubCategory
}