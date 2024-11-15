// Axios vs fetch

const axios = require('axios');

const express = require('express');
const app = express();

app.use(express.json());

// function main(){
//     fetch("https://sum-server.100xdevs.com/todos")
//         .then(async (response) => {
//             const json = await response.json();
//             console.log(json.todos)
//         })
// }

// async function main(){
//     const response = await fetch("http://localhost:3000/sum?a=1&b=20");
//     const json = await response.json();
//     console.log(json);
// }

// async function main(){
//     const response = await axios.get("http://localhost:3000/sum?a=1&b=20");
//     console.log(response.data);
// }

// app.get('/sum',function(req,res){
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans : a+b
//     })
// })


// POST

async function main(){
    const response = await fetch("http://localhost:3000/sum?a=1&b=20",{
        method : "POST",
        body : {
            username : "sushant",
            password : "12345"
        },
        headers : {
           "Authorization": "Bearer 123"
        }
        
    });
    const json = await response.json();
    console.log(json);
}

async function main(){
    const response = await axios.post("http://localhost:3000/sum?a=1&b=20",{
        username : "sushant",
        password : "12345"
    },
    {
        headers : {
            "Authorization": "Bearer 123"
        }
    });
    console.log(response.data);
}

app.post('/sum',function(req,res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.send({
        ans : a+b
    })
})


app.listen(3000);

main();