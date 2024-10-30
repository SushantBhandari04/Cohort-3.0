      // Better way

const { Router } = require("express");
const courseRouter = Router();
const { z } = require("zod");
const { purchaseModel, courseModel } = require("../db");
const { userMiddleware } = require("../Middleware/user");

courseRouter.post('/purchase', userMiddleware, async function(req,res){
    const userId = req.userId;
    const courseId = req.body.courseId;

    if(!courseId){
        return res.status(403).json({
            message: "Please provide a courseId"
        })
    }
    const existingPurchase = await purchaseModel.findOne({
        userId,
        courseId
    })

    if(existingPurchase){
        return res.status(403).json({
            message: "Course already purchased!"
        })
    }

    await purchaseModel.create({
        userId,
        courseId
    })

    res.json({
        message: "Course purchased!"
    })

})
            
courseRouter.get('/preview', async function(req,res){
    const courses = await courseModel.find({});

    res.json({
        courses
    })

})

module.exports = {
    courseRouter: courseRouter
}



      // Naive way

// function createCourseRoutes(app){
//     app.post('/course/purchase',function(req,res){
//         res.json({
//             message: "You have signed up."
//         })
//     })
    
//     app.get('/course/preview',function(req,res){
//         res.json({
//             message: "You have signed up."
//         })
//     })
// }

// module.exports = {
//     createCourseRoutes: createCourseRoutes
// }


