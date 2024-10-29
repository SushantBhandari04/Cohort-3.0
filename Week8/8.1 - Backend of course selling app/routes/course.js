      // Better way

const { Router } = require("express");
const courseRouter = Router();

courseRouter.post('/purchase',function(req,res){
    res.json({
        message: "You have signed up."
    })
})
            
courseRouter.get('/preview',function(req,res){
    res.json({
        message: "You have signed up."
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


