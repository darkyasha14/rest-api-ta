'use strict';

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
        user_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
            validate: {
                isAlpha: {
                    args: true,
                    msg : "name only allow letter"
                 }
             }
        },
        username: {
            type: DataTypes.STRING(20),
            allowNull: false,
			unique: {
                args : true,
                msg : "username already exist"

            },
			validate: {
				// isAlphanumeric: true,
				// isLowercase: true,
				notNull: true,
				notEmpty: true,
				max: 20,
                min: 5,
                notContains: {
                    args : ' ',
                    msg : "username cannot contains ' '"
                }
			}
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
            is: /^[0-9a-f]{64}$/i,
            validate: {
                notNull: true,
                notEmpty: true,
                len: {
                    args :[8,99],
                    msg :"password must 8 charracter"
                },
                is: {
                    args: /^((?!true|false|TRUE|FALSE).){1,255}$/i,
                    msg: "password must be string"
                }
                    
            },
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: {
                args : true,
                msg : "username already exist"
            },
            validate: {
                isEmail: {
                    args : true,
                    msg : "email not valid"
                },
                notNull : {
                    args : true,
                    msg : " email is required"
                }
            }
        },
        token_text: {
            type: DataTypes.TEXT,
            allowNull: true 
        },
        is_login: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
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
        tableName: 't_user',
		underscored: true
    });

    User.removeAttribute('id');

    User.associate = (models) => {
        User.hasOne(models.Profil, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
        User.hasMany(models.Booking, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
    }
	

	return User;
};