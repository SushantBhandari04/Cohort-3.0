const express = require('express');
const JWT_SECRET = "randomiamsushant";
const jwt = require('jsonwebtoken')
const app = express();
app.use(express.json());

const users = [];

// function generateToken(){
//     const options = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
//                     'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
//                     '0','1','2','3','4','5','6','7','8','9']

//     let token = "";

//     for(let i=0;i<32;i++){
//         token = token + options[Math.floor(Math.random()*options.length)];
//     }
//     return token;
// }

// app.post('/signup',function(req,res){
//     const username = req.body.username;
//     const password = req.body.password;

//     users.push({
//         username : username,
//         password : password
//     });

//     console.log(users);

//     res.json({
//         message : "You have signed up"
//     })
// })

// app.post('/signin',function(req,res){
//     const username = req.body.username;
//     const password = req.body.password;

//     let foundUser = null;

//     for(let i=0;i<users.length;i++){
//         const user = users[i];
//         if(user.username == username && user.password == password){
//             foundUser = user;
//         }
//     }

//     // const foundUser = users.find((u) => {
//     //     if(u.username == username && u.password == password){
//     //         return true;
//     //     }
//     //     else{
//     //         return false;
//     //     }
//     // })


//     if(foundUser){
//         const token = generateToken();
//         foundUser.token = token;

//         res.json({
//             token : token,
//             message : "You have signed in."
//         })
//     }
//     else{
//         res.status(403).send({
//             message : "Invalid username or password."
//         })
//     }

//     console.log(users);

// })

// // Authenticated endpoint
// app.get('/me',function(req,res){
//     const token = req.headers.token;

//     let foundUser = null;
//     for(let i=0;i<users.length;i++){
//         if(users[i].token == token){
//             foundUser = users[i];
//         }
//     }

//     if(foundUser){
//         res.json({
//             username : foundUser.username,
//             password : foundUser.password
//         })
//     }
//     else{
//         res.json({
//             message: "Token invalid"
//         })
//     }
// })

// app.listen(3000);




// Using jwt

app.post('/signup',function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username : username,
        password : password
    });

    console.log(users);

    res.json({
        message : "You have signed up"
    })
})

app.post('/signin',function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for(let i=0;i<users.length;i++){
        const user = users[i];
        if(user.username == username && user.password == password){
            foundUser = user;
        }
    }

    // const foundUser = users.find((u) => {
    //     if(u.username == username && u.password == password){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // })


    if(foundUser){
        // converting username to jwt
        const token = jwt.sign({
            username : username
        },JWT_SECRET);

        res.json({
            token : token,
            message : "You have signed in."
        })
    }
    else{
        res.status(403).send({
            message : "Invalid username or password."
        })
    }

    console.log(users);

})

// Authenticated endpoint
app.get('/me',function(req,res){
    const token = req.headers.token; // jwt
    // converting jwt to username
    const decodedInformation = jwt.verify(token, JWT_SECRET);
    const username = decodedInformation.username;
    let foundUser = null;

    for(let i=0;i<users.length;i++){
        if(users[i].username == username){
            foundUser = users[i];
        }
    }

    if(foundUser){
        res.json({
            username : foundUser.username,
            password : foundUser.password
        })
    }
    else{
        res.json({
            message: "Token invalid"
        })
    }
})

app.listen(3000);
