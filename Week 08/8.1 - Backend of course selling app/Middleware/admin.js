const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");

function adminMiddleware(req,res,next){
    const adminPassword = req.headers.authorization;

    try{
        const decoded = jwt.verify(adminPassword,JWT_ADMIN_PASSWORD);
        req.adminId = decoded.id;
        next();
    }
    catch(error){
        return res.status(403).json({
            message: "Admin not found."
        })
    }
}

module.exports = {
    adminMiddleware
}