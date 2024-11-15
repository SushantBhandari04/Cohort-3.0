// Assignment #2 - You need to create an express HTTP server in Node.js which will handle the logic of a file server.
// Use built in Node.js fs module

// The expected API endpoints are defined below,

// GET /files - Returns a list of files present in ./files/ directory

// Response: 200 OK with an array of file names in JSON format.

// Example: GET http://localhost:3000/files

// GET /file/:filename - Returns content of given file by name Description: Use the filename from the request path parameter to read the file from ./files/ directory

// Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return File not found as text if file is not found

// Example: GET http://localhost:3000/file/example.txt

// For any other route not defined in the server return 404



const express = require('express')
const app = express();
const fs = require('fs')
const path = require('path')

const directoryPath = path.join(__dirname,"./files/");

app.get("/files", function(req,res){
    fs.readdir(directoryPath, function(err,files){
        if(err){
            return res.status(404).json({
                error : "Failed to retrieve the file"
            })
        }
        else{
            res.json(files)
        }
    })
})

app.get("/files/:filename", function(req,res){
    const name = req.params.filename;
    const filePath = path.join(directoryPath,name);

    fs.readFile(filePath,'utf-8',function(err,data){
       if(err){
        return res.status(404).json({
            msg : "File not found"
        })
       }
       else{
        res.send(data)
       }
    })
})

app.listen(3000);