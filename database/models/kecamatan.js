'use strick'

module.exports = (sequelize, DataTypes) => {
    const Kecamatan = sequelize.define('Kecamatan', {
        kecamatan_id : {
            type: DataTypes.STRING(24),
            primaryKey: true,
        },
        kota_id : {
            type: DataTypes.STRING(24),
            allowNull: false,
        },
        nama : {
            type: DataTypes.STRING(50),
            allowNull : false,
           
        }
    },
    {
        tableName: 't_kecamatan',
        undersrored: true
    })

    Kecamatan.removeAttribute('id')

    Kecamatan.associate = (models) => {
        Kecamatan.hasMany(models.Address, {
            foreignKey: 'kecamatan_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
        Kecamatan.belongsTo(models.Kota, {
            foreignKey: 'kota_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
        Kecamatan.hasMany(models.Kelurahan, {
            foreignKey: 'kecamatan_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
    }

    return Kecamatan
}