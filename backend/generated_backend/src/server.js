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

mongoose.connect(process.env.DB_URL)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
            console.log('listening on port',process.env.PORT);
        })
    })
    .catch((err)=>{
        console.log(err);
    })