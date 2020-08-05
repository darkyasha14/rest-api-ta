const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyToken = async (req, res, next) => {
    try {
        //get token from request header
        const bearer = req.header('Authorization');
        if (!bearer) {
            res.status(200).json({"code": 1, "message": "Token is required", "data": null})
        }
        // delete text Bearer inside token
        const token = bearer.replace('Bearer ', '');
        
        // verify token
        const decoded = await jwt.verify(token, process.env.JWT_KEY);
        // bind decode in req   
        req.decoded = decoded;
        next();
        
    }catch (err) {
        // message if token is expired
        res.status(200).json({"code": 99, "message": `${err.message}`, "data": null })
        
    }
}

module.exports = verifyToken