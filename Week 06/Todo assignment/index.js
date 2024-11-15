const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

const JWT_SECRET = "sushant123";

let users = [];

app.post('/signup',function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You have signed up."
    })
})

app.post('/signin',function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for(let i=0;i<users.length;i++){
        if(users[i].username === username && users[i].password === password){
            foundUser = users[i];
        }
    }

    if(foundUser){
        const token = jwt.sign({
            username: username
        },JWT_SECRET);

        res.header("token",token);

        res.json({
            token: token,
            message: "You have signed in."
        })
    }
    else{
        res.status(403).send({
            message: "User not found."
        })
    }
})

// auth middleware
function auth(req,res,next){
    const token = req.headers.token;
    const decodedData = req.verify(token,JWT_SECRET);

    if(decodedData.username){
        req.username = decodedData.username;
        next();
    }
    else{
        res.status(403).json({
            message: "User is not logged in."
        })
    }
}

app.get('/me',auth,function(req,res){
    const username = req.username;

    let foundUser = null;

    for(let i=0;i<users.length;i++){
        if(users[i].username === username){
           foundUser = users[i];
        }
    }

    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
    else{
        res.status(403).send({
            message: "User not found."
        })
    }
})

app.listen(3000);