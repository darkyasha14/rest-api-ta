'use strick'

module.exports = (sequelize, DataTypes) => {
    const Jasa = sequelize.define('Jasa', {
        jasa_id : {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        sub_category_id : {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        jasa_name : {
            type: DataTypes.STRING(20),
            allowNull : false,
        },
        jasa_desc : {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        jasa_price : {
            type : DataTypes.INTEGER,
            allowNull: false,
            validate : {
                isNumeric: {
                    args : true,
                    msg : "only allow numberic for price"
                }
            } 
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
        tableName: 't_jasa',
        undersrored: true
    })

    Jasa.removeAttribute('id')

    Jasa.associate = (models) => {
        Jasa.belongsTo(models.Sub_category, {
            foreignKey: 'sub_category_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
        Jasa.hasMany(models.Booking, {
            foreignKey: 'jasa_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
    }

    return Jasa
}