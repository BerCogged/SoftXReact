const User = require('../models/userModule');
const jwt =require('jsonwebtoken');

const CreateToken = (_id)=>{
    return jwt.sign({_id},'bdasadsadadsaadsassdadsa', {expiresIn: '3d'});
}

const loginUser = async(req,res)=>{
    const {email,username,password}=req.body;

    try {
        const user = await User.login(username,password);
        const token = CreateToken(user._id)
        res.status(200).json({username,token});
    }catch(error){
        res.status(400).json({error:error.message})
    }

}

const registerUser = async(req,res)=>{
    const {email,username,password}= req.body;

    try {
        const user = await User.register(email,username,password);
        const token = CreateToken(user._id)
        res.status(200).json({username,token});
    }catch(error){
        res.status(400).json({error:error.message})
    }

}

module.exports={
    loginUser,registerUser
}