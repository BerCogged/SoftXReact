const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique:true
    },
    username:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    }
})

userSchema.statics.register = async function (email,username,password){
    if (!email || !username || !password){
        throw Error ("All fields must be filled");
    }
    if (!validator.isEmail(email)){
        throw Error("Please input valid email");
    }
    if (!validator.isStrongPassword(password)){
        throw Error("Password must include A,3,? >7");
    }
    
    const EmExists = await this.findOne({email})
    const NameExist = await this.findOne({username})
    if (EmExists && NameExist){
        throw Error("Email and username already in use")
    }
    if (EmExists){
        throw Error('Email already in use');
    }
    if (NameExist) {
        throw Error("Username already in use")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt);

    const user = await this.create({email,username,password:hash});
    return user;
}

userSchema.statics.login = async function(username,password){
    if (!username || !password){
        throw Error ("All fields must be filled");
    }
    const NameExist = await this.findOne({username})
    const user = await this.findOne({username});
    if (!NameExist) {
        throw Error("Incorrect username");
    }
    const match = await bcrypt.compare(password,user.password)
    if (!match){
        throw Error("Incorrect password");
    }
    return user;

}


module.exports=mongoose.model("User",userSchema)