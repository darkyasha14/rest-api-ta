'use strick'

module.exports = (sequelize, DataTypes) => {
    const conPayment = sequelize.define('conPayment', {
        conPayment_id : {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
            validate: {
                isAlpha: {
                    args: true,
                    msg : "name only allow letter"
                 }
             }
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                isEmail: {
                    args : true,
                    msg : "email not valid"
                },
                notNull : {
                    args : true,
                    msg : " email is required"
                }
            }
        },
        payment_date:{
            type: DataTypes.DATE,
            allowNull: false, 
        },
        total_price : {
            type : DataTypes.BIGINT,
            allowNull: false,
            validate : {
                isNumeric: {
                    args : true,
                    msg : "only allow numberic for price"
                }
            } 
        },
        payment_method : {
            type: DataTypes.STRING(255),
            allowNull : false
        },
        invoice_no : {
            type: DataTypes.BIGINT(6),
            allowNull: false
        },
        description : {
            type: DataTypes.STRING(255),
            allowNull : false,
        },
        img_pay: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull: true, 
            defaultValue: DataTypes.DATE.NOW
        },
        updatedAt:{
            type: DataTypes.DATE,
            allowNull: true, 
            defaultValue: DataTypes.DATE.NOW
        }
    },
    {
        tableName : 't_confirm_payment',
        underscored: true
    })

    conPayment.removeAttribute('id')


    return conPayment
}