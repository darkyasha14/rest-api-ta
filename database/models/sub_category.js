'use strick'

module.exports = (sequelize, DataTypes) => {
    const Sub_category = sequelize.define('Sub_category', {
        sub_category_id : {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        category_id : {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        sub_category_name : {
            type: DataTypes.STRING(20),
            allowNull : false,
            unique: {
                args : true,
                msg : "name of sub category already exist"

            },
        },
        sub_category_desc : {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        img_url: {
            type: DataTypes.STRING(50),
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
        tableName : 't_sub_category',
        underscored: true
    })

    Sub_category.removeAttribute('id')

    Sub_category.associate = (models) =>{
        Sub_category.belongsTo(models.Category, {
            foreignKey: 'category_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }),
        Sub_category.hasMany(models.Jasa, {
            foreignKey: 'sub_category_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
    }

    return Sub_category
}