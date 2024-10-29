const jwt = require("jsonwebtoken");

const { JWT_USER_PASSWORD } = require("../config");


// combined middleware for both admin and user
// function middleware(password){
//     return function(req,res,next){
//         const token = req.headers.authorization;

//         try{
//             const decoded = jwt.verify(token,password);

//             req.userId = decoded.id;
//             next();

//         }catch(error){
//             return res.status(403).json({
//                 message: "User not found."
//             })
//         }
//     }
// }

function userMiddleware(req,res,next){
    const userPassword = req.headers.authorization;

    try{
        const decoded = jwt.verify(userPassword,JWT_USER_PASSWORD);

        req.userId = decoded.id;
        next();

    }catch(error){
        return res.status(403).json({
            message: "User not found."
        })
    }
}

module.exports = {
    userMiddleware
}