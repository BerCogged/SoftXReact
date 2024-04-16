require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/router');

const app = express();

app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next();
})

app.use('/games/history',router);

mongoose.connect("mongodb+srv://ADMIN:gokunaruto7@cluster0.66f2jbx.mongodb.net/History?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        app.listen(4000, ()=>{
            console.log('listening on port 4000');
        })
    })
    .catch((err)=>{
        console.log(err);
    })