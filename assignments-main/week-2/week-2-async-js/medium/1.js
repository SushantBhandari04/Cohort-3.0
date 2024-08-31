const fs = require('fs');

// let data1 = '';
fs.readFile('1.txt','utf-8',function(err,data){
    if(err){
        console.log("Error");
        return ;
    }
    console.log(data);

    const trimData = data.trim().replace(/\s+/g,' ');
    fs.writeFile('1.txt',trimData,function(){})
    // data1 += data;

    console.log(trimData)
})
// console.log(data1);