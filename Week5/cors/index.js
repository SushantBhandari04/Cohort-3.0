const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({
    hosts : []
}));

app.use(express.json());

//hosting frontend and backend on same domain, then it will not face cors
// app.get('/',function(req,res){
//     res.sendFile(__dirname + "/public/index.html");
// })

app.post('/sum',function(req,res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a+b
    })
})

app.listen(3000);