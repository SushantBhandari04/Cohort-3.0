// let a:number = 1;
// a = "a";
// console.log(a);

// function greet(name:string):void{
//     console.log(`Hello ${name}`);
// }
// greet("Sushant");


// function sum(a:number, b:number):number{
//     return a+b;
// }
// console.log(sum(1,2));


// function isAdult(age:number):boolean{
//     return age>18;
// }
// console.log(isAdult(17));



// function RunAfterOne(fn:()=>void):void{
//     setTimeout(fn,3000);
// }

// RunAfterOne(()=>console.log("Hello"));




// const greet = (name: string) => `Hello, ${name}!`;
// console.log(greet("Sushant"));




// const greet = (name) => `Hello, ${name}!`;
// greet("Sushant");



const user = {
    name: "Sushant",
    age: 1
}

interface User{
    name: string,
    age: number
}

function isValid(user: User):boolean{
    return user.age>18
}

console.log(isValid(user));