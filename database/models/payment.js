'use strick'

module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define('Payment', {
        payment_id : {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        user_id : {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        invoice_no : {
            type: DataTypes.STRING(6),
            allowNull: false,
            unique: {
                args : true,
                msg : "invoice number must unique"

            },
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
        tableName : 't_payment',
        underscored: true
    })

    Payment.removeAttribute('id')

    Payment.associate = (models) =>{
        Payment.belongsTo(models.User, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
        Payment.belongsTo(models.Booking, {
            foreignKey: 'invoice_no',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
    }

    return Payment
}