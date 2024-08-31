const fs = require('fs');

fs.writeFile('4.txt','Hello , hey there?',function(){})

function expensiveOperation() {
    let sum = 0;
    for (let i = 0; i < 10000000000; i++) { // Simulating a very expensive operation
        sum += i;
    }
    console.log('Expensive operation result:', sum);
}
expensiveOperation();
