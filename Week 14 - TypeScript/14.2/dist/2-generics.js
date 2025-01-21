"use strict";
const func = (arg) => {
    return arg;
};
// console.log(func<string>("Sushant"));
// console.log(func<number[]>([1,2,3]));
const fistElement = (arr) => {
    return arr[0];
};
console.log(fistElement([1, 2, '4']));
console.log(fistElement(['a', 'b']).toUpperCase());
