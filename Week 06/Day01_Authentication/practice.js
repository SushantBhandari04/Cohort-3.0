const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Sushant1234"

// Write endpoints for user authentication

let users = [];

app.get("/", function (req, res) {
    // Send the index.html file to the client using the res.sendFile() function
    res.sendFile(__dirname + "index.html");
});

app.post("/signup", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!username || !password){
        res.status(400).send("Please enter both username and password.");
    }

    users.push({username, password});

    res.status(200).send("Signed up successfully.");

})

app.post("/signin", function(req,res){

    const username = req.body.username;
    const password = req.body.password;

    const user = users.find((user)=> user.username === username && user.password === password);

    if(!user){
        res.status(400).send("No such user exists.");
    }

    const token = jwt.sign({
        "username": user.username,
        "password": user.password
    }, JWT_SECRET)
    
    res.json({
        token,
        message: "Signed in successfully."
    })
})

function authorization(req, res, next){
    const token = req.headers.token;
    console.log(token);

    if(token){
        jwt.verify(token, JWT_SECRET, (err, decoded)=>{
            if(err){
                res.status(400).send("Unauthorized.");
            }
            else{
                req.user = decoded;
                next();
            }
        })
    }
    else{
        res.status(400).send("Unauthorized");
    }
}

app.get("/todos/all", authorization, function(req,res){
    const realUser = req.user;

    const foundUser = users.find((user)=>user.username==realUser.username && user.password==realUser.password);

    if(foundUser){
        res.json({
            "todos": foundUser.todos ? foundUser.todos : []
        })
    }
    else{
        res.status(400).send("User not found");
    }
})

app.post("/todos/add", authorization, function(req,res){
    const realUser = req.user;
    console.log(req.body.todo);

    const foundUser = users.find((user)=>user.username===realUser.username && user.password===realUser.password);
    console.log(foundUser);
    if(foundUser){
        if(!foundUser.todos){
            foundUser.todos = [];
        }      
        console.log(foundUser);

        foundUser.todos.push({
            "title": req.body.todo
        })
        console.log(foundUser);
        res.send("Todo added successfully.")
    }
    else{
        res.status(400).send("User not found");
    }
})

app.listen(3000);