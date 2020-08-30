'use strick'

module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', {
        address_id : {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        user_id : {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        kota_id : {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        kecamatan_id : {
            type: DataTypes.STRING(24),
            allowNull: false,
        },
        kelurahan_id : {
            type: DataTypes.STRING(24),
            allowNull: false,
        },
        detail_address : {
            type: DataTypes.STRING(255),
            allowNull : false,
        }
       
    },
    {
        tableName: 't_address',
        undersrored: true
    })

    Address.removeAttribute('id')

    Address.associate = (models) => {
        Address.belongsTo(models.User, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
        Address.belongsTo(models.Kota, {
            foreignKey: 'kota_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
        Address.belongsTo(models.Kecamatan, {
            foreignKey: 'kecamatan_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
        Address.belongsTo(models.Kelurahan, {
            foreignKey: 'kelurahan_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
    }

    return Address
}