const{ UserModel, TodoModel } = require('./db');
const{ auth,JWT_SECRET } = require('./auth');


const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
app.use(express.json());
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://sushbh2004:sushant1234@cluster0.byi6a.mongodb.net/new-todo")


app.post('/signup',async function(req,res){
    const email = req.body.email
    const name = req.body.name;
    const password = req.body.password;

    await UserModel.create({
        name: name,
        email: email,
        password: password
    })

    res.json({
        message: "You have signed up."
    })
})

app.post('/signin',async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
        password: password
    })

    if(response){
        const token = jwt.sign({
            id: response._id.toString()
        },JWT_SECRET)

        res.json({
            token: token
        })
    }
    else{
        res.status(403).send({
            message: "Invalid credentials."
        })
    }
})

app.post('/todo',auth,async function(req,res){
    const title = req.body.title;
    const done = req.body.done;
    const userId = req.userId;

    await TodoModel.create({
        userId: userId,
        title: title,
        done: done
    })

    res.json({
        message: "Todo created"
    })
})

app.get('/todos',auth,async function(req,res){
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
            message: "User Not found"
        })
    }
})

app.listen(3000);