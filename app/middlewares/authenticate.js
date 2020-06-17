const jwt = require('jsonwebtoken')
const models = require('../../database/models')
require('dotenv').config()

const login = async (req, res) => {
    try {
        const {username, password} = req.body
        const data = await models.User.findOne({ where: {username: username} })

        if(data){

            const dataByPass = await models.User.findOne({where: {username: username, password: password}})
            
            if(dataByPass){
                const token = jwt.sign({ 
                    user_id: data.user_id,  
                    username: data.username,
                    email: data.email
                }, process.env.JWT_KEY, { expiresIn: '1d' });
    
                    // simpan dan update token ke table user
                await models.User.update({
                        token_text: token,
                        updated_at: new Date()
                    }, { where: { user_id: data.user_id }
                });

                return res.status(200).json({ "code": 0, "message": "success authenticate", "data": {token: token} });
            }else{
                return res.json({ "code": 1, "message": "wrong password", "data": null });
            }
        }else{
            return res.json({ "code": 1, "message": "username not registered", "data": null });
        }
    } catch (error) {
        return res.status(200).send({ "code" :1, "message": error.message, "data": null})
    }
}

module.exports = {login}
