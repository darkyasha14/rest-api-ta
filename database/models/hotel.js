'use strick'

module.exports = (sequelize, DataTypes) => {
    const Hotel = sequelize.define('Hotel', {
        kamar_id : {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        kamar_type : {
            type : DataTypes.STRING(10),
            allowNull: false,
        },
        kamar_price : {
            type : DataTypes.INTEGER,
            allowNull: false,
            validate : {
                isNumeric: {
                    args : true,
                    msg : "only allow numberic for price"
                }
            } 
        },
        kamar_status : {
            type : DataTypes.STRING(10),
            allowNull : false,
        },
        kamar_img : {
            type : DataTypes.STRING(1),
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
        tableName : 't_hotel',
        underscored : true
    })

    Hotel.removeAttribute('id');

    return Hotel;
};