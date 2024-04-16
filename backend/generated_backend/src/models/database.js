const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema({
    title:{
        type: String,
        required: true
    },
    result:{
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports= mongoose.model('game',historySchema);