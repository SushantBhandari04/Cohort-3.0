const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

app.post("/sum", function(req,res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    const sum = a+b;
    console.log(sum);

    res.json({
        sum
    })
})

app.listen(3000);