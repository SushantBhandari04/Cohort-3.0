const jwt = require('jsonwebtoken');
const JWT_SECRET = "Sushant123";

function auth(req,res,next){
    const token = req.headers.authorization;

    const response = jwt.verify(token,JWT_SECRET);

    if(response){
        req.userId = token.userId;
        next();
    }
    else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
}

module.exports = {
    auth,
    JWT_SECRET
}
