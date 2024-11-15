const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const JWT_SECRET = "sushant@1234";
const { UserModel, TodoModel } = require('./db');
app.use(express.json());
const mongoose = require('mongoose');

mongoose.connect("")

app.post('/signup',async function(req,res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({  // Return a promise therefore await is used
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: "You have signed up."
    })  
})

app.post('/signin',async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    });

    if(user){
        const token = jwt.sign({
            id: user._id.toString()
        },JWT_SECRET);

        res.json({
            token: token
        })
    }
    else{
        res.status(403).json({
            message: "Incorrect credentials."
        })
    }
})

app.post('/todo',auth, async function(req,res){
    const title = req.body.title;
    const done = req.body.done;
    const userId = req.userId;

    await TodoModel.create({
        title: title,
        done: done,
        userId: userId
    })

    res.json({
        message: "Todo created"
    })
})

app.get('/todos',auth, async function(req,res){
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId: userId
    })

    

    if(todos){
        res.json({
            todos
        })
    }
    else{
        res.status(403).json({
            message: "User not found"
        })
    }
})

function auth(req,res,next){
    const token = req.headers.token;

    const decodedData = jwt.verify(token,JWT_SECRET);

    if(decodedData){
        req.userId = decodedData.id;
        next();
    }
    else{
        res.status(403).json({
            message: "Incorrect credentials."
        })
    }
}

app.listen(3000);