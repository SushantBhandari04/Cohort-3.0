// Create an HTTP server

const express = require('express');
const app = express();

// Take input as localhost:3000/sum?a=1&b=2
app.get('/sum',function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a+b
    })
})

// To take input as localhost:3000/sum/1/2
app.get('/sum/:a/:b',function(req,res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        ans: a+b
    })
})


app.get('/subtract',function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a-b
    })
})
app.get('/multiply',function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a*b
    })
})
app.get('/divide',function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a/b
    })
})

app.listen(3000);