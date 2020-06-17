'use strict';

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
        user_id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
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
	// User.removeAttribute('createdAt');
	// User.removeAttribute('updatedAt');

	// User.associate = function(models) {
	//       User.hasMany(models.UserSetting, {
	// 		foreignKey: 'user_id',
	// 		onDelete: 'CASCADE',
	//       });

	// 	User.belongsTo(models.UserGroup, {
	// 		foreignKey: 'user_group_id',
	// 		onDelete: 'CASCADE',
	//       });

	//       User.belongsTo(models.Employees, {
	// 		foreignKey: 'employee_id',
	// 		onDelete: 'CASCADE',
	// 	});
	// };

	return User;
};