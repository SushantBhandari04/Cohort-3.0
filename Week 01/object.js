function greet(user){
    console.log("Hello" , user.name , "Your age is", user.age);
}

user1 = {
    name: "Sushant",
    age:20
}

// greet(user1);


user2 = {
    user1,
    gender: "male"
}

function genderGreet(user){
    let add = "Mrs";
    if(user.gender === "male"){
        add = "Mr";
    }
    console.log("Hi",add,user.name,", your age is", user.age)
}

// genderGreet(user2);


const arr = [
    {
        name: "Sushant",
        age:20,
        gender:"male"
    },
    {
        name: "Aman",
        age:30,
        gender:"male"
    },
    {
        name: "Anu",
        age:50,
        gender:"female"
    }
]

function fun(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i].age>18 && arr[i].gender==="male"){
            console.log(arr[i]) 
        }
    }
}
// fun(arr);


function array(arr){
    let a = [];

    for(let i=0;i<arr.length;i++){
        if(arr[i].age>18 && arr[i].gender==="male"){
            a.push(arr[i]); 
        }
    }

    return a;
}

// console.log(array(arr));

let ans1 = arr.filter(user => {
    user.age>18 && user.gender==="male"
})

console.log(ans1)