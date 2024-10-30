const { Router } = require("express");
const adminRouter = Router();
const { adminModel, courseModel } = require("../db");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../Middleware/admin")

adminRouter.post("/signup",async function(req,res){

    const requiredBody = z.object({
        email: z.string().min(3).max(30).email(),
        password: z.string().min(3).max(10),
        firstName: z.string().min(3).max(30),
        lastName: z.string().min(3).max(30)
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        return res.status(403).json({
            message: "Invalid format."
        })
    }

    const { email, password, firstName, lastName } = req.body;

    try{
        const hashedPassword = await bcrypt.hash(password,5);
        await adminModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName
        })
    }
    catch(error){
        res.status(403).json({
            message: "User already exists."
        })
    }

    
        res.json({
            message: "You have signed up."
        })
    
})

adminRouter.post("/signin", async function(req,res){
    const requiredBody = z.object({
        email: z.string().min(3).max(30).email(),
        password: z.string().min(3).max(10)
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        return res.status(403).json({
            message: "Invalid format."
        })
    }

    const { email, password } = req.body;

    const foundUser = await adminModel.findOne({
        email
    })

    if(!foundUser){
        return res.status(403).json({
            message: "Admin does not exist."
        })
    }

    const passwordMatch = await bcrypt.compare(password,foundUser.password);

    if(passwordMatch){
        const token = jwt.sign({
            id: foundUser._id
        },JWT_ADMIN_PASSWORD);
    
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

adminRouter.post("/course", adminMiddleware, async function(req,res){
    const requiredBody = z.object({
        title: z.string().min(3),
        description: z.string().min(10),
        price: z.number().positive(),
        imageUrl: z.string().url()
    })

    const parseDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parseDataWithSuccess.success){
        return res.status(403).json({
            message: "Invalid format.",
            error: parseDataWithSuccess.error
        })
    }

    const{ title, description, price, imageUrl } = req.body;

    const adminId = req.adminId;

    const course = await courseModel.create({
        title,
        description,
        price,
        imageUrl,
        creatorId: adminId
    })

    res.json({
        message: "Course created!",
        courseId: course._id
    });
})

adminRouter.put("/course", adminMiddleware, async function(req,res){
    const adminId = req.adminId;

    const requiredBody = z.object({
        courseId: z.string().min(5),
        title: z.string().min(3).optional(),
        description: z.string().min(10).optional(),
        price: z.number().positive().optional(),
        imageUrl: z.string().url().optional()
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        return res.status(403).json({
            message: "Invalid format.",
            error: parsedDataWithSuccess.error
        })
    }

    const { courseId, title, description, price, imageUrl } = req.body;

    const course = await courseModel.findOne({
        _id: courseId,
        creatorId: adminId
    })

    if(!course){
        return res.status(403).json({
            message: "Course not found."
        })
    }

    await courseModel.updateOne(
        {
            _id: courseId,
            creatorId: adminId
        },
        {
            title: title || course.title,
            description: description || course.description,
            price: price || course.price,
            imageUrl: imageUrl || course.imageUrl
        }
    )

    res.json({
        message: "Course updated!"
    })
})

adminRouter.delete("/course", adminMiddleware, async function(req,res){
    const adminId = req.adminId;

    const requiredBody = z.object({
        courseId: z.string().min(3)
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        return res.status(403).json({
            message: "Invalid format.",
            error: parsedDataWithSuccess.error
        })
    }

    const courseId = req.body.courseId;

    const course = await courseModel.findOne({
        _id: courseId,
        creatorId: adminId
    })

    if(!course){
        return res.status(403).json({
            message: "Course not found."
        })
    }

    await courseModel.deleteOne({
        _id: courseId,
        creatorId: adminId
    })

    res.json({
        message: "Course deleted!"
    })
})

adminRouter.get("/course/bulk", adminMiddleware, async function(req,res){
    const adminId = req.adminId;

    const courses = await courseModel.find({
        creatorId: adminId
    })

    res.json({
        courses: courses
    })
})

module.exports = {
    adminRouter: adminRouter
}