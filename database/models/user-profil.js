'use strick'

module.exports = (sequelize, DataTypes) => {
    const Profil = sequelize.define('Profil', {
        profil_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        phone : {
            type : DataTypes.INTEGER(13),
            allowNull: false,
            validate : {
                isNumeric: {
                    args : true,
                    msg : "only allow numberic for phone number"
                }
            } 
        },
        user_img: {
            type: DataTypes.STRING(255),
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
    },{
        tableName: 't_profil',
        underscored: true
    })

    Profil.removeAttribute('id')

    Profil.associate = (models) =>{
        Profil.belongsTo(models.User, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
    }
    return Profil

}