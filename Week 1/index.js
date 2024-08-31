function sum(a,b){
    return a+b;
}

let ans = sum(1,2);
let string = sum("sushant","bhandari");

// console.log(ans);
// console.log(string);

function canVote(age){
    if(age>18){
        return true;
    }
    else{
        return false;
    }
}
// console.log(canVote(20))


function evenOdd(num){
    if(num%2===0){
        console.log("Even")
    }
    else{
        console.log("Odd");
        
    }
}

// evenOdd(16)


function sumUptoN(n){
    if(n<=1){
        return n;
    }
    return n+sumUptoN(n-1);
}

console.log(sumUptoN(10));