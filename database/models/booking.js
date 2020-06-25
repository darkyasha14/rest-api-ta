module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {
        booking_id : {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        user_id : {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        jasa_id : {
            type: DataTypes.BIGINT,
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
    }

    return Booking
}