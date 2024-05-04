const History= require('../models/database');
const mongoose = require('mongoose');
const getHistory = async (req,res)=>{
    const user_id = req.user._id;
    const games = await History.find({user_id}).sort({createdAt:-1})
    res.status(200).json(games);
}
const postHistory = async(req,res)=>{
    const {title,result} = req.body;
    try{
        const user_id = req.user._id;
        const game = await History.create({title,result,user_id})
        res.status(200).json(game);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}
module.exports={
    getHistory,
    postHistory
}