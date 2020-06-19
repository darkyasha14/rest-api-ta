'use strick'

module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        category_id : {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        category_name : {
            type: DataTypes.STRING(20),
            allowNull : false,
            unique: {
                args : true,
                msg : "name of category already exist"

            },
        },
        category_desc : {
            type: DataTypes.STRING(50),
            allowNull: false,
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
        tableName: 't_category',
        underscrored: true
    })

    Category.removeAttribute('id')

    Category.associate = (models) => {
        Category.hasMany(models.Sub_category,{
            foreignKey: 'category_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
    }

    return Category

}