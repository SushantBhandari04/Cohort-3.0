const express = require('express');
const app = express();

// route handlers
app.get('/',function(req,res){
    res.send('Hello World')
})
app.get('/asd',function(req,res){
    res.send('Hello from the asd endpoint')
})

app.listen(3000) // which port