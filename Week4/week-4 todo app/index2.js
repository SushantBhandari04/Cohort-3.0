const express = require('express');
const app = express();

let todos = [];

app.post('/',function(req,res){
    todos.push(req.json.title)
})

app.get('/',function(req,res){
    res.json({
        todos
    })
})

