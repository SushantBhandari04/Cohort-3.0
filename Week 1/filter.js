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

const ans = arr.filter((user) => 
    user.age>18 && user.gender==='male'
);


console.log(ans);