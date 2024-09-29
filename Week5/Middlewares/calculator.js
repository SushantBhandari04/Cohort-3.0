/*
Assignment #1 - Try converting the calculator assignment to use POST endpoints. 
Check if it works with/without the express.json middleware

1. http://localhost:3000/sum
2. http://localhost:3000/subtract
3. http://localhost:3000/multiply
4. http://localhost:3000/divide

request body:
{
    "a": 10,
    "b": 5
}
*/


const express = require('express');
const app = express();

// use the express.json middleware to parse the request body
app.use(express.json());

// * This is a middleware function that validates the input values
function validateInput(req,res,next){
    const a = req.body.a;
    const b = req.body.b;

    if(!a || !b){
        res.status(400).send({
            error: "Please give values of a and b"
        })
    }
    else if(isNaN(a) || isNaN(b)){
        res.status(400).send({
            error: "Please give valid number values of a and b"
        })
    }
    else{
        next();
    }
}

// use the validateInput middleware for all routes
app.use(validateInput);

app.post('/sum',function(req,res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.send({
        ans: a+b
    })
})
app.post('/subtract',function(req,res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.send({
        ans: a-b
    })
})
app.post('/multiply',function(req,res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.send({
        ans: a*b
    })
})
app.post('/divide',function(req,res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.send({
        ans: a/b
    })
})

app.listen(3000);