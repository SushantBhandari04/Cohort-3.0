// map, filter and arrow function


// Arrow function

// function sum(a,b){
//     return a+b;
// }

// const sum = (a,b) => {
//     return a+b;
// }

// console.log(sum(1,2));



// Map

const input = [1,2,3,4,5];
function transform(i){
    return i*2;
}
// const newInput = input.map(transform);
// console.log(newInput);


// function customMap(arr,transform){
//     let newArr = [];
//     for(let i=0;i<arr.length;i++){
//         newArr.push(transform(arr[i]));
//     }
//     return newArr;
// }
// console.log(customMap(input,function(i){
//     return i+200;
// }));



// Filter

const ans = input.filter(function(n){
    return n%2 != 0;
});
console.log(ans);