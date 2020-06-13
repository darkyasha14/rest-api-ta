const getAllUser = async( req,res) => {
    console.log(req.params);
    res.json({"message" : "success"})
}

const getUserById = async ( req,res) => {
    console.log(req.params);
    res.json({"message" : "success"})
}

const createNewUser = async ( req, res) => {
    console.log(req.body);
    res.status(201).json({"code" : 0, "message" : "success add new user", "data" : null})
}

module.exports = {
    getAllUser,
    getUserById,
    createNewUser
}