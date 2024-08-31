const fs = require('fs');

fs.readFile('1-counter.md','utf-8',function(err,data){
    console.log(data);
})

// Expensive operation
let counter = 0;
for(let i=0;i<100000000000;i++){
    counter++;
}