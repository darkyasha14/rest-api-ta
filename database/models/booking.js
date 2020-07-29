module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {
        invoice_no : {
            type: DataTypes.STRING(6),
            primaryKey: true,
            unique: {
                args : true,
                msg : "invoice number must unique"

            },
        },
        user_id : {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        jasa_id : {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        payment_status:{
            type: DataTypes.STRING(6),
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
        tableName : 't_booking',
        underscored: true
    })

    Booking.removeAttribute('id')

    Booking.associate = (models) =>{
        Booking.belongsTo(models.User, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }),
        Booking.belongsTo(models.Jasa, {
            foreignKey: 'jasa_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
        Booking.hasOne(models.ConPayment, {
            foreignKey: 'invoice_no',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
        Booking.hasOne(models.Payment, {
            foreignKey: 'invoice_no',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
        Booking.hasOne(models.TransactionCom, {
            foreignKey: 'invoice_no',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
    }

    return Booking
}