const func = <T>(arg:T)=>{
    return arg;
}

// console.log(func<string>("Sushant"));
// console.log(func<number[]>([1,2,3]));


const fistElement = <T>(arr:T[])=>{
    return arr[0];
}

console.log(fistElement<number|string>([1,2,'4']));
console.log(fistElement<string>(['a','b']).toUpperCase());