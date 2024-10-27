const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const JWT_SECRET = "sushant@1234";
const { UserModel, TodoModel } = require('./db');
app.use(express.json());
const mongoose = require('mongoose');

const { z } = require('zod');

mongoose.connect("mongodb+srv://sushbh2004:sushant1234@cluster0.byi6a.mongodb.net/todo-app-week-7-2")

// Hashing password 
const bcrypt = require('bcrypt');

app.post('/signup',async function(req,res){
    // req.body
    // {
    //     email: String,
    //     password: String,
    //     name: String
    // }

    // zod

    //Assignment: check that the password has one uppercase character, one lowercase character, one special character etc..
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        password: z.string().min(3).max(100),
        name: z.string().min(3).max(100)
    })

    // const parsedData = requiredBody.parse(req.body);
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        res.json({
            message: "Incorrect format",
            error: parsedDataWithSuccess.error
        })
        return
    }

    // input validation
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    
    // without zod
    // if(typeof email !== String || email.length<5 || !email.includes("@")){
    //     res.json({
    //         message: "Email incorrect."
    //     })
    //     return;
    // }
    
    // Exception Handling
    let errorThrown = false;
    try{
        const hashedPassword = await bcrypt.hash(password,5);
        await UserModel.create({  // Return a promise therefore await is used
            email: email,
            password: hashedPassword,
            name: name
        })
        throw new Error("User already exists");
    } catch(e){
        res.json({
            message: "User already exists."
        })
        errorThrown = true;
    }
    
    if(!errorThrown){
        res.json({
            message: "You have signed up."
        })
    }    
})

app.post('/signin',async function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email
    });

    if(!user){
        res.status(403).json({
            message: "User does not exist in out db."
        })
        return;
    }

    const passwordMatch = await bcrypt.compare(password,user.password);

    if(passwordMatch){
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