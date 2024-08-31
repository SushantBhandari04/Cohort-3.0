const fsa = require('fs');  // fs => file system is an external library

// const data = fsa.readFile('a.txt','utf8')  // Synchronous
// console.log(data);
// const data2 = fsa.readFileSync('b.txt','utf8') // Synchronous
// console.log(data2);


// function print(err, data){
//     console.log(data);
// }

// fsa.readFile('a.txt', 'utf8', print);   // Asynchronously
// fsa.readFile('b.txt', 'utf8', print);   // Asynchronously

// console.log("Done!")





// function timeout(){
//     console.log("Click the button!")
// }

// console.log("Hi!");

// setTimeout(timeout,1000);

// console.log("Welcome to loupe!");

// let c = 0;
// for(let i=0;i<10000000;i++){
//     c = c+1;
// }
// console.log("Expensive operation done!")

/*
    Option 1 - incorrect
        Hi
        Welcome to loupe
        Click the button
        Expensive operation done

    Option 2 - correct
        Hi
        Welcome to loupe
        Expensive operation done
        Click the button
*/




// Making settimeout function synchronous

function setTimeoutSync(timeout){
    let startTime = new Date();
    while(1){
        let currentTime = new Date();
        if(currentTime.getTime() - startTime.getTime() > timeout){
            break;
        }
    }
}
setTimeoutSync(1000)
console.log("hi there")