'use strick'

module.exports = (sequelize, DataTypes) => {
    const Kota = sequelize.define('Kota', {
        kota_id : {
            type: DataTypes.STRING(24),
            primaryKey: true,
        },
        nama : {
            type: DataTypes.STRING(20),
            allowNull : false,
           
        }
    },
    {
        tableName: 't_kota',
        undersrored: true
    })

    Kota.removeAttribute('id')

    Kota.associate = (models) => {
        Kota.hasMany(models.Address, {
            foreignKey: 'kota_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
        Kota.hasMany(models.Kecamatan, {
            foreignKey: 'kota_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
    }

    return Kota
}