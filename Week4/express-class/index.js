const express = require('express');

const app = express();

function sum(n){
    let sum = 0;
    for(let i=0;i<=n;i++){
        sum += i;
    }
    return sum;
}

// req, res => request, response 
app.get("/",function(req,res){
    const n = req.query.n;
    const ans = sum(n);
    res.send("Hi your sum is " + ans);
})
app.listen(3000); // listening to the port