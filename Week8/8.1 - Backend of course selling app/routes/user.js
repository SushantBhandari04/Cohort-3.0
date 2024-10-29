    // Better way

const { Router } = require("express");
const { JWT_USER_PASSWORD } = require("../config");
const userRouter = Router();
const z = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userMiddleware } = require("../Middleware/user");
const { purchaseModel } = require("../db");
const { userModel } = require("../db");
const { courseModel } = require("../db");



userRouter.post('/signup',async function(req,res){

    const requiredBody = z.object({
        email: z.string().min(3).max(100),
        password: z.string().min(3).max(30),
        firstName: z.string().min(3).max(30),
        lastName: z.string().min(3).max(30)
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        return res.status(403).json({
            message: "Invalid format",
            error: parsedDataWithSuccess.error
        })
    }

    const { email, password, firstName, lastName } = req.body;

    let errorThrown = false;
    try{
        const hashedPassword = await bcrypt.hash(password,8);
        await userModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName
        })
    }catch(error){
        res.status(403).json({
            message: "User alrady exists."
        })
        errorThrown = true;
    }

    if(!errorThrown){
        res.json({
            message: "You have signed up."
        })
    }
})


userRouter.post('/signin',async function(req,res){
    
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        password: z.string().min(3)
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        return res.status(403).json({
            message: "Invalid format",
            error: parsedDataWithSuccess.error
        })
    }

    const { email, password } = req.body;

    const foundUser = await userModel.findOne({
        email: email
    })

    if(!foundUser){
        return res.status(403).json({
            message: "User does not exist."
        });
    }

    const passwordMatch = await bcrypt.compare(password, foundUser.password);

    if(passwordMatch){
        const token = jwt.sign({
            id: foundUser._id
        },JWT_USER_PASSWORD);

        res.json({
            token: token,
            message: "You have signed in."
        })
    }
    else{
        res.status(403).json({
            message: "Incorrect credentials."
        })
    }
})

userRouter.get('/purchases', userMiddleware, async function(req,res){
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId: userId
    })

    if(!purchases){
        return res.status(403).json({
            message: "No puchases found."
        })
    }

    const purchasesCourseIds = purchases.map((purchase) => purchase.courseId)

    const coursesData = await courseModel.find({
        _id: purchasesCourseIds
    })

    res.json({
        purchases,
        coursesData
    })
})

module.exports = {
    userRouter: userRouter
}





    // Naive way

// function createUserRoutes(app){
//     app.post('/user/signup',function(req,res){
//         res.json({
//             message: "You have signed up."
//         })
//     })
    
//     app.post('/user/signin',function(req,res){
//         res.json({
//             message: "You have signed in."
//         })
//     })
    
//     app.get('/user/purchases',function(req,res){
//         res.json({
//             message: "You have signed up."
//         })
//     })
// }

// module.exports = {
//     createUserRoutes: createUserRoutes
// }