/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise(function(resolve){
        setTimeout(resolve,t);
    }).then(function(){
        console.log("wait1 resolved");
    })
}

function wait2(t) {
    return new Promise(function(resolve){
        setTimeout(resolve,t);
    }).then(function(){
        console.log("wait1 resolved");
    })
}

function wait3(t) {
    return new Promise(function(resolve){
        setTimeout(resolve,t);
    }).then(function(){
        console.log("wait1 resolved");
    })
}

function calculateTime(t1, t2, t3) {

    const curr = Date.now();

    const promise1 = wait1(t1*1000);
    const promise2 = wait2(t2*1000);
    const promise3 = wait3(t3*1000);

    return Promise.all([promise1,promise2,promise3]).then(function(){
        return Date.now() - curr ;
    })
}

module.exports = calculateTime;
