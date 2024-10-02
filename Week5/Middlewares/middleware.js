const express = require('express');
const app = express();


                // Middleware introduction

let count = 0;

function countRequests(req,res,next){
    count++;
    req.name = "Sushant";
    console.log(`Total requests = ${count}`);
    next();
}

function realSumHandler(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    console.log(req.name);

    res.json({
        ans: a+b
    })
}

app.get('/sum',countRequests,realSumHandler);

app.listen(3000);



                // Calling the next middleware function in the stack.

// All the route handlers after this will get this middleware when we use app.use() 
// app.use(function(req, res, next) {
//     console.log("request received");
//     next();
// })

// app.get("/sum", function(req, res) {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a + b
//     })
// });



                // Modifying the request

// app.use(function(req, res, next) {
//     console.log(req.name);
//     req.name = "harkirat"
//     next();
// })

// app.get("/sum", function(req, res) {
//     console.log(req.name);
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a + b
//     })
// });



                // Ending the request/response cycle

// app.use(function(req, res, next) {
//     res.json({
//         message: "You are not allowed"
//     })
// })

// app.get("/sum", function(req, res) {
//     console.log(req.name);
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a + b
//     })
// });


                // # Route specific middlewares
                // **Route-specific middleware** in Express.js refers to middleware functions that are applied 
                // only to specific routes or route groups, rather than being used globally across the entire application

// Middleware function
// function logRequest(req,res,next){
//     console.log(`Request made to ${req.url}`);
//     next();
// }

// app.get('/special',logRequest,function(req,res){
//     res.send('This route uses route-specific middleware');
// });

// app.get('/sum',function(req,res){
//     console.log(req.name);
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a+b
//     })
// })

// app.listen(3000);


//**************************************************************************************************************************************** */


// Assignments

                // 1. Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console

// Middleware function to print HTTP method, URL, and timestamp to the console for each incoming request
// function requestLogger(req, res, next) {
//     // Get the current time and date 
//     const currentTime = new Date();

    /*
    console.log(req.protocol);
    console.log(req.host);
    console.log(req.url);
    console.log(req.originalUrl);
    */
   // Log the HTTP method, Complete URL, and timestamp to the console
//     console.log(req.method);
//     console.log(`${req.protocol}://${req.get('host')}${req.url}`);
    
//     console.log(currentTime.toLocaleTimeString());

//     // Pass control to the next middleware function
//     next();
// }

// // Use the middleware in the app
// app.use(requestLogger);

// // Create a route that responds to GET requests
// app.get('*', (req, res) => {
//     res.send("Hi there!");
// });

// // Create a route that responds to POST requests
// app.post('*', (req, res) => {
//     res.send("Hello!");
// });

// // Create a route that responds to PUT requests
// app.put('*', (req, res) => {
//     res.send("Welcome!");
// });

// // Create a route that responds to DELETE requests
// app.delete('*', (req, res) => {
//     res.send("Goodbye!");
// });

// // Start the server on port 3000
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });


                    // 2. Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it

// let count = 0;
// function countRequests(req,res,next){
//     count++;
//     next();
// }

// app.use(countRequests);

// app.get('/', function(req,res){
//     console.log('Get request');
// })
// app.put('*', function(req,res){
//     console.log('Put request');
// })
// app.post('*', function(req,res){
//     console.log('Post request');
// })
// app.delete('*', function(req,res){
//     console.log('Delete request');
// })

// app.get('/getCount',function(req,res){
//     console.log(count);
//     res.json({
//         message: `Total requests : ${count}`
//     })
// })

// app.listen(3000);