// Timeout promisified

// function setTimeoutPromisified(duration){
//     return new Promise(function(resolve){
//         setTimeout(resolve,duration);
//     })
// }

// function cb(){
//     console.log("Resolved after 2 seconds")
// }

// setTimeoutPromisified(2000).then(cb)

/*********************************************************************************/

// callback hell

// setTimeout(function(){
//     console.log("Hi");
//     setTimeout(function(){
//         console.log("Hi 2");
//         setTimeout(function(){
//             console.log("Hi 3")
//         },5000)
//     },3000)
// },1000)


/*********************************************************************************/



// doesn't really have callback hell

// function step3(){
//     console.log("Hi 3")
// }
// function step2(){
//     console.log("Hi 2")
//     setTimeout(step3,5000)
// }
// function step1(){
//     console.log("Hi 1")
//     setTimeout(step2,3000)
// }
// function call(){
//     setTimeout(step1,1000)
// }
// call();


/*********************************************************************************/



// using promises  => still a callback hell

// function setTimeoutPromisified(duration){
//     return new Promise(function(resolve){
//         setTimeout(resolve,duration);
//     })
// }

// setTimeoutPromisified(1000).then(function(){
//     console.log("Hi 1");
//     setTimeoutPromisified(3000).then(function(){
//         console.log("Hi 2");
//         setTimeoutPromisified(5000).then(function(){
//             console.log("Hi 3");
//         })
//     })
// })


/*********************************************************************************/



// (Promise chaining)  => not a callback hell

// function setTimeoutPromisified(duration){
//     return new Promise(function(resolve){
//         setTimeout(resolve,duration);
//     })
// }

// setTimeoutPromisified(1000)
// .then(function(){
//     console.log("Hi 1");
//     return setTimeoutPromisified(3000)
// })
// .then(function(){
//     console.log("Hi 2");
//     return setTimeoutPromisified(5000);
// })
// .then(function(){
//     console.log("Hi 3");
// })




/*********************************************************************************/




// Async await  =>  just a syntactic sugar

// function setTimeoutPromisified(duration){
//     return new Promise(function(resolve){
//         setTimeout(resolve,duration);
//     })
// }

// async function solve(){
//     await setTimeoutPromisified(1000);
//     console.log('Hi 1');
//     await setTimeoutPromisified(3000);
//     console.log('Hi 2');
//     await setTimeoutPromisified(5000);
//     console.log('Hi 3');
// }

// solve();



/*********************************************************************************/


// Read file using async await

// const fs = require('fs');

// function readFileAsync(){
//     return new Promise(function(resolve){
//         fs.readFile('a.txt','utf-8',function(err,data){
//             resolve(data);
//         })
//     })
// }

// async function read(){
//     let data = await readFileAsync();
//     console.log(data);
// }

// read();




/*********************************************************************************/


// Resolve reject in promises

const fs = require('fs');

function readFileAsync(){
    return new Promise(function(resolve, reject){
        fs.readFile('aa.txt','utf-8',function(err,data){
            if(err){
                console.log("Error found")
            }
            else{
                resolve(data);
            }
        })
    })
}

readFileAsync()
.then(function(data){
    console.log(data);
})
.catch(function(e){
    console.log(e);
})