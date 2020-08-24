const path = require('path')
const fs = require('fs')
require('dotenv').config()

const models = require('../../database/models')
const domain = require('./../helper/getDomain')

const titleImg = (paramater) => {
    var resTitle = ''
    paramater.substring(0, 19).split(' ').forEach(element => {
        resTitle += `${element}-`
    });

    console.log("title image : ", resTitle.substring(0, resTitle.length - 1))
    return resTitle.substring(0, resTitle.length - 1)
}

const confirmPayment = async(req, res) => {
    try {
        const {name, email, payment_date, total_price, payment_method, invoice_no, description} = req.body

        const getInvoice = await models.Booking.findOne({where: {invoice_no: invoice_no}})
        if(getInvoice){
            // Cek apakah booking telah expired, false belum, true sudah expired
            if(getInvoice.dataValues.booking_expired === false){
                // jika dalam request terdapat file
                if(req.file){
                    console.log(req.file)
                    const domainName = await domain.getFullDomainURL(req)
        
                    const tempPath = await req.file.path                                                                       // ambil file path setelah di upload di folder tmp
                    const targetPath = await path.resolve(process.env.IMG_PATH_UPLOAD) + '/' + titleImg(invoice_no) + ".png"        // ganti setiap file yg di upload menjadi .png
                    const urlFile = await domainName + "/" + process.env.IMG_PATH_UPLOAD + titleImg(invoice_no) + '.png'                      // buat url untuk image tsb
                    console.log(urlFile)
                    
                    const data = await models.ConPayment.create({
                        name: name,
                        email: email,
                        payment_date: payment_date,
                        total_price: total_price,
                        payment_method: payment_method,
                        invoice_no: invoice_no,
                        description: description,
                        img_pay : urlFile,
                    })
                
                        if(data){
                            // pindahkan file dari folder tmp ke target path (public/image) dengan format img png
                            await fs.rename(tempPath, targetPath, err => {
                                if (err){
                                    console.log(err);
                                }
                            })
        
                            return res.status(201).json({code: 0, message: 'successfully, please wait to confirm by admin', data: data})
                        }else{
                            return res.json({code: 1, message: 'failled', data: null})
                        }
                }else{
                    return res.json({code: 1, message: 'you must upload an image to confirm payment', data: null})  
                }
            }else{
                return res.json({code: 1, message: 'the booking for this invoice already expired', data: null})
            }
        }else{
            return res.json({code: 1, message: 'invoice_no not found, you must booking first', data: null})
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

const getConfirmPaymentList = async(req, res) => {
    try {
        const data = await models.ConPayment.findAll({
                include : [{
                    model: models.Booking,
                    include : [{
                        model: models.Jasa
                    }]
                }]
            })

        if(data){
            return res.json({code: 0, message: 'successs get confirm payment list', data: data})
        }else{
            return res.json({code: 1, message: 'data not found', data: null})
        }
    } catch (error) {
        console.log(error)
        if(error.errors){
            res.json({"code": 1, "message": error.errors[0].message, "data" : null})
        }else{
            res.json({"code" : 1, "message" : error, "data": null})
        }
    }
}

const getConfirmPaymentByUserId = async(req, res) => {
    try {
        const {id} = req.params

        const data = await models.ConPayment.findAll({where :{user_id : id},
                include : [{
                    model: models.Booking,
                    include : [{
                        model: models.Jasa,
                    }]
                }]
            })

        if(data){
            return res.json({code: 0, message: 'successs get confirm payment by user', data: data})
        }else{
            return res.json({code: 1, message: 'data not found', data: null})
        }
    } catch (error) {
        console.log(error)
        if(error.errors){
            res.json({"code": 1, "message": error.errors[0].message, "data" : null})
        }else{
            res.json({"code" : 1, "message" : error, "data": null})
        }
    }
}

const getConfirmPaymentDetail = async(req, res) => {
    try {
        const {invoice_no} = req.params

        const data = await models.ConPayment.findOne({where :{invoice_no : invoice_no},
                include : [{
                    model: models.Booking,
                    include : [{
                        model: models.Jasa,
                        include : [{
                            model: models.Sub_category,
                            include : [{
                                model: models.Category
                            }]
                        }]
                    }]
                }]
            })

        if(data){
            console.log(data.dataValues);
            return res.json({code: 0, message: 'successs get confirm payment by invoice_no', data: data})
        }else{
            return res.json({code: 1, message: 'data not found', data: null})
        }
    } catch (error) {
        console.log(error)
        if(error.errors){
            res.json({"code": 1, "message": error.errors[0].message, "data" : null})
        }else{
            res.json({"code" : 1, "message" : error, "data": null})
        }
    }
}


module.exports = { 
    confirmPayment,
    getConfirmPaymentList,
    getConfirmPaymentDetail,
    getConfirmPaymentByUserId
}