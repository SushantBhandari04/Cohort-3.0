
// Without using setInterval, try to code a counter in Javascript.

// let counter = 0;
// function counterFunc(){
//     counter++;
//     console.log(counter);
//     setTimeout(counterFunc,1000);
// }

// counterFunc();





// Reading the contents of a file
// Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.

// const fs = require('fs');
// fs.readFile('a.txt','utf-8',function(err,data){
//     console.log(data);
// })

// let a = 0;
// for(let i=0;i<10000000000;i++){
//     a = a+1;
    
// }







// Write to a file
// Using the fs library again, try to write to the contents of a file. You can use the fs library to as a black box, the goal is to understand async tasks.

// const fs = require('fs');
// fs.writeFile('a.txt','Sushant',function(){
// })






/*
File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was

hello     world    my    name   is       raman
After the program runs, the output should be

hello world my name is raman
*/

// const fs = require('fs');

// fs.readFile('a.txt','utf-8',function(err,data){
//     data = data.trim(); 
    
//     data = data.replace(/\s+/g, ' ');
//     fs.writeFile('a.txt',data,function(){})
    
// })








/*
Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

HH:MM::SS (Eg. 13:45:23)

HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

// setInterval(function(){
//     const currTime = new Date();
//     console.log(currTime.toLocaleTimeString());
// },1000)










/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/



// function callback(){
//     console.log('Callback')
// }
// function wait(n){
//     return new Promise(resolve => setTimeout(resolve,n)).then(callback)
// }
// wait(2000);










/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function callback(){
    console.log("Callback")
}
function sleep(milliseconds){
    return new Promise(resolve =>{
        const startTime = Date.now();
        while(Date.now() - startTime < milliseconds){

        }
        resolve();
    } )
}
console.log("start")
sleep(4000).then(callback)

