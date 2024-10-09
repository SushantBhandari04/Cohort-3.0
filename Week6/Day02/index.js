const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

const JWT_SECRET = "sushant1234";

app.use(express.json());

let users = [];

app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/index.html");
})

app.post('/signup',function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username : username,
        password : password
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
            username : username
        },JWT_SECRET);

        // If we want to send jwt in header
        res.header("token",token);
        
        res.json({
            token : token,
            message : "You have signed in."
        })
    }
    else{
        res.status(403).send({
            message : "User not found"
        })
    }
})

// Auth middleware
function auth(req,res,next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token,JWT_SECRET);

    if(decodedData.username){
        req.username = decodedData.username;
        next();
    }
    else{
        res.status(403).json({
            message : "User is not logged in."
        })
    }
}

app.get('/me',auth,function(req,res){
    // const token = req.headers.token;
    // const decodedData = jwt.verify(token,JWT_SECRET);

    // if(decodedData.username){
        let foundUser = null;
        for(let i=0;i<users.length;i++){
            if(users[i].username === req.username ){
                foundUser = users[i];
            }
        }
        res.json({
            username : foundUser.username,
            password : foundUser.password
        })
    // }
    // else{
    //     res.status(403).send({
    //         message : "Incorrect username or password"
    //     })
    // }
    
})

app.listen(3000);