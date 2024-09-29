const express = require('express')
const app = express();

// function isOldEnough(age){
//     if(age>=14){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// app.get('/ride1',function(req,res){
//     if(isOldEnough(req.query.age)){
//         res.json({
//             msg : 'You have successfully ridden the ride 1'
//         })
//     }
//     else{
//         res.status(411).json({
//             msg : 'Sorry you are below age'
//         })
//     }
// })

// app.listen(3000);



// *****************************************************************************************************

// Using middleware

function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;
    if(age>=14){
        next();
    }
    else{
        res.json({
            msg : "Sorry you are below age"
        })
    }
}

// app.get('/ride1',isOldEnoughMiddleware,function(req,res){
//     res.json({
//         msg : "You have successfully ridden the ride 1 "
//     })
// })

app.use(isOldEnoughMiddleware); // method 2 for all which are below it

app.get('/ride1',function(req,res){
    res.json({
        msg : "You have successfully ridden the ride 1 "
    })
})

app.get('/ride2',function(req,res){
    res.json({
        msg : "You have successfully ridden the ride 2 "
    })
})

app.listen(3000);