const models = require('../../database/models')
const invoice = require('./../helper/get-invoice');
const mail = require('../helper/send-email')
const dateConvert = require('../helper/date-convert')
const { Op } = require('sequelize')

const createNewBooking = async ( req, res) => {
    console.log(req.body);
    try {
        const {user_id, jasa_id} = req.body
        const expDate = dateConvert.expiredBooking(1)

        const data = await models.Booking.create({
            invoice_no: invoice.getInvoice(),
            user_id : user_id,
            jasa_id : jasa_id,
            payment_status : "UNPAID",
            booking_expired_date : expDate
        })

        if(data){
            console.log("Data =>", data.dataValues)

            const data_result = await models.Booking.findOne({
                where : {invoice_no : data.dataValues.invoice_no},
                include : [ 
                    {
                        model: models.Jasa,
                        include : [{
                            model: models.Sub_category,
                            include : [{
                                model: models.Category
                            }]
                        }]
                    }
                ]
            })

            return res.status(201).json({"code" : 0, "message" : "booking successfully", "booking_expired_date" : expDate, "data": data_result})
        }else{
            
            return res.json({"code": 1, "message" : "booking failled", "data": null})
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

const getBookingListByUserId = async(req, res) => {
    try {
        const {user_id} = req.params

        const data = await models.Booking.findAll({where :{user_id: user_id},
                include : [{
                    model: models.Jasa,
                    include : [{
                        model: models.Sub_category
                    }]
                },
                {
                    model: models.User,
                    include : [{
                        model: models.Profil
                    }]
                }]
            })

        if(data){
            return res.json({code: 0, message: 'successs get booking list by user ID', data: data})
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

const getBookingByInvoice = async(req, res) => {
    try {
        const {invoice_no} = req.params

        const data = await models.Booking.findOne({where :{invoice_no : invoice_no},
                include : [{
                    model: models.Jasa,
                    include : [{
                        model: models.Sub_category,
                        include : [{
                            model: models.Category
                        }]
                    }]
                },
                {
                    model: models.User
                }]
            })

        if(data){
            return res.json({code: 0, message: 'successs get booking by invoice_no', data: data})
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

const getAllBookingList = async(req, res) => {
    try {
        const data = await models.Booking.findAll({
                include : [{
                    model: models.Jasa,
                    include : [{
                        model: models.Sub_category
                    }]
                },
                {
                    model: models.User
                }]
            })

        if(data){
            return res.json({code: 0, message: 'successs get all booking list', data: data})
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


const updatePaymentStatus = async (req, res) => {
    try {
        const { invoice_no } = req.body

        const getInvoice = await models.Booking.findOne({where: {invoice_no: invoice_no}})
        
        if(getInvoice){

            // status payment sudah PAID
            if(getInvoice.dataValues.payment_status === "PAID"){

                return res.json({code: 0, message: "Payment status already PAID", data: getInvoice})
            }else{

                // cek apakah payment sudah di konfirmasi
                const getConfirmPayment = await models.ConPayment.findOne({where: {invoice_no: invoice_no}})

                if(getConfirmPayment){

                    // Update payment status menjadi PAID
                    const data = await models.Booking.update({
                        payment_status: "PAID",
                        update_at: new Date()
                    }, { where: {invoice_no: invoice_no} })
                    
                    // Jika sukses update payment status
                    if (data){
    
                        //Insert data ke table transaction complete
                        await models.TransactionCom.create({
                            user_id : getInvoice.dataValues.user_id,
                            conf_payment_id: getConfirmPayment.dataValues.conf_payment_id,
                            invoice_no : invoice_no,
                        })
        
                        // Get lagi data setelah di update
                        const updateData  = await models.Booking.findOne(
                                {
                                    where: {invoice_no : invoice_no},
                                    include: [
                                        {
                                            model : models.User,
                                            attributes : ["name","email"]
                                        },
                                        {
                                            model : models.ConPayment
                                        }

                                    ]
                                }
                            )

                        console.log(updateData.dataValues)
                        const params = {
                            name: updateData.dataValues.User.dataValues.name,
                            email: updateData.dataValues.User.dataValues.email,
                            payment_name: updateData.dataValues.ConPayment.dataValues.name,
                            payment_email: updateData.dataValues.ConPayment.dataValues.email,
                            payment_date: updateData.dataValues.ConPayment.dataValues.payment_date,
                            total_price: updateData.dataValues.ConPayment.dataValues.total_price,
                            payment_method: updateData.dataValues.ConPayment.dataValues.payment_method,
                            invoice_no: updateData.dataValues.ConPayment.dataValues.invoice_no,

                        }
            
                        await mail.sendMailTransactionComplate(params)

                        return res.json({code: 0, message: "success update payment status", data: updateData})
                       
                    }else{
                        return res.json({code: 1, message: "fail update payment status", data: null})
                    }
                }else{                                                                              // jika paymeny belum di konfirmasi
                    return res.json({code: 1, message: "Payment not confirm yet", data: null})
                }
            }
        }else{
            return res.json({code: 1, message: "invoice not found", data: null})
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

const updateBookingExpiredStatus = async () => {
    try {

        const data = await models.Booking.findAll({
            where : {
                created_at : {
                    [Op.gte] : new Date().getTime() - (2 * 60 * 60 * 1000)
                }
            }
        })

        data.forEach(element => {
            const { invoice_no, booking_expired_date } = element.dataValues

            const nowTimestamp = new Date().getTime()
            const expBookingTimestamp = new Date(booking_expired_date).getTime()

            // Ambil data booking 2 jam sebelumnya
            if(nowTimestamp > expBookingTimestamp){
                models.Booking.update({
                    booking_expired: true,
                    updated_at : new Date()
                }, {where: {invoice_no: invoice_no} })
            }
            
            console.log(element.dataValues)
        });
    } catch (error) {
        console.log(error)
    }
}

const getBookingListById = async(req, res) => {
    try {
        const {user_id} = req.params

        const data = await models.Booking.findAll({where :{user_id: user_id, payment_status: "UNPAID", booking_expired: false},
                include : [{
                    model: models.Jasa,
                    include : [{
                        model: models.Sub_category
                    }]
                },
                {
                    model: models.User,
                    include : [{
                        model: models.Profil
                    }]
                }]
            })

        if(data){
            return res.json({code: 0, message: 'successs get booking list by user ID', data: data})
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
    createNewBooking,
    getBookingListByUserId,
    getBookingByInvoice,
    getAllBookingList,
    updatePaymentStatus,
    updateBookingExpiredStatus,
    getBookingListById
}