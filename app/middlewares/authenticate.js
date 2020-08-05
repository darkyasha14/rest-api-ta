const jwt = require('jsonwebtoken')
const models = require('../../database/models')
require('dotenv').config()

const login = async (req, res) => {
    try {
        const {username, password, remember} = req.body
        const data = await models.User.findOne({ where: {username: username} })

        if(data){

            const dataByPass = await models.User.findOne({where: {username: username, password: password}})
            
            if(dataByPass){
                const login = await models.User.findOne({
                    where: {username: username, password: password, is_login: true},
                    attributes : ['username', 'password', 'email']
                })

                if(login){
                    const token = jwt.sign({ 
                        user_id: data.user_id,  
                        username: data.username,
                        email: data.email,
                        is_login: true
                    }, process.env.JWT_KEY, { expiresIn: '1d' });
        
                    return res.json({ code: 0, message: 'success authenticate', data: data, token: token });
                }else{
                    return res.json({ code: 1, message: 'your account is not activate, please check your email to verify and activate account', data: null });
                }
            }else{
                return res.json({ code: 1, message: 'wrong password', data: null });
            }
        }else{
            return res.json({ code: 1, message: 'username not registered', data: null });
        }
    } catch (error) {
        return res.send({code:1, message: error.message, data: null})
    }
}

module.exports = {login}
