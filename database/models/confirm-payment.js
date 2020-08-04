'use strick'

module.exports = (sequelize, DataTypes) => {
    const conPayment = sequelize.define('ConPayment', {
        conf_payment_id : {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
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
            type: DataTypes.STRING(6),
            allowNull: false,
            unique: {
                args : true,
                msg : "Confirm payment already submited, Please wait for a while until your payment is confirmed"

            },
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

    conPayment.associate = (models) =>{
        conPayment.belongsTo(models.Booking, {
            foreignKey: 'invoice_no',
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT'
        })
        conPayment.hasOne(models.TransactionCom, {
            foreignKey: 'conf_payment_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
    }


    return conPayment
}