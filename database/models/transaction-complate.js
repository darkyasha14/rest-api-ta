'use strick'

module.exports = (sequelize, DataTypes) => {
    const transactionCom = sequelize.define('TransactionCom', {
        transactionCom_id : {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        user_id : {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        invoice_no : {
            type: DataTypes.STRING(6),
            allowNull: false,
            unique: {
                args : true,
                msg : "invoice number must unique"

            },
        },
        conf_payment_id : {
            type: DataTypes.BIGINT,
            allowNull: false
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
        tableName : 't_transaction_complate',
        underscored: true
    })

    transactionCom.removeAttribute('id')

    transactionCom.associate = (models) =>{
        transactionCom.belongsTo(models.User, {
            foreignKey: 'user_id',
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT'
        })
        transactionCom.belongsTo(models.Booking, {
            foreignKey: 'invoice_no',
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT'
        })
        transactionCom.belongsTo(models.ConPayment, {
            foreignKey: 'conf_payment_id',
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT'
        })
    }

    return transactionCom
}