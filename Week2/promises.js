const fs = require('fs');

// const data = fs.readFileSync('a.txt','utf-8');
// console.log(data);

// function cb(err,data){
//     const rewrite = data.trim();
// }
// fs.readFile('a.txt','utf-8', cb)



function fileRead(filepath, cb){
    fs.readFile(filepath,'utf-8',function(err,data){
        data = data.trim();

        fs.writeFile(filepath,data,function(){
            cb();
        })
    })
}

function onDone(){
    console.log("File has been cleaned")
}

fileRead('a.txt',onDone)