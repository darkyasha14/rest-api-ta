'use strick'

module.exports = (sequelize, DataTypes) => {
    const Kelurahan = sequelize.define('Kelurahan', {
        kelurahan_id : {
            type: DataTypes.STRING(24),
            primaryKey: true,
        },
        kecamatan_id : {
            type: DataTypes.STRING(24),
            allowNull: false,
        },
        nama : {
            type: DataTypes.STRING(50),
            allowNull : false,
           
        }
    },
    {
        tableName: 't_kelurahan',
        undersrored: true
    })

    Kelurahan.removeAttribute('id')

    Kelurahan.associate = (models) => {
        Kelurahan.belongsTo(models.Kecamatan, {
            foreignKey: 'kecamatan_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
        Kelurahan.hasMany(models.Address, {
            foreignKey: 'kelurahan_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
       
    }

    return Kelurahan
}