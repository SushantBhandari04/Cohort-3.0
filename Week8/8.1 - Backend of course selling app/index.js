const express = require('express');
const mongoose = require("mongoose");
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter } = require('./routes/admin');
const app = express();
app.use(express.json());

require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI;
const port = process.env.PORT;

// Naive way
// createUserRoutes(app);
// createCourseRoutes(app);

app.use("/api/v1/user",userRouter);
app.use("/api/v1/course",courseRouter);
app.use("/api/v1/admin",adminRouter);


// async function main(){
    // use dotenv
    // await mongoose.connect("");
    // app.listen(3000);
    // console.log("Listening on port 3000");
// }


// Using dotenv 

async function main(){
    try{
        await mongoose.connect(MONGODB_URI);
        console.log("Database connected.")
    
        app.listen(port);
        console.log("Listening on port 3000");
        
    }catch(e){
        console.log("Database couldn't connect.")
    }    
}

main();
