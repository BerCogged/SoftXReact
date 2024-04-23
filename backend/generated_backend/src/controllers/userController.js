const User = require('../models/userModule');

const loginUser = async(req,res)=>{
    res.json({mssg:"login user"});
}

const registerUser = async(req,res)=>{
    res.json({mssg:"Register user"});
}

module.exports={
    loginUser,registerUser
}