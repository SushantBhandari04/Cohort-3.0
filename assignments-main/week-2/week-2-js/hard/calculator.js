/*
  Implement a class `Calculator` having below methods:
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

// TESTS: https://github.com/100xdevs-cohort-2/assignments/blob/master/01-js/tests/calculator.test.js

class Calculator {
  
  constructor () {
    this.result = 0;
  }

  add (number) {
    this.result = this.result + number;
  }

  subtract (number) {
    this.result = this.result - number;
  }

  multiply (number) {
    this.result = this.result * number;
  }

  divide (number) {
    if (number == 0) {
      throw new Error();
    } else {
      this.result = this.result / number;
    }
  }

  clear () {
    this.result = 0;
  }

  getResult () {
    return this.result;
  }

  calculate (expression) {
    let updatedExpression = "";
    for (let i = 0; i < expression.length; i++) {
      if (expression[i].match(/[a-z]/i)) {
        throw new Error();
      }
      if (expression[i] != " ") {
        updatedExpression = updatedExpression + expression[i];
      }
    }
    if (updatedExpression.includes("/0")) {
      throw new Error();
    }
    this.result = eval(expression);
  }
}

module.exports = Calculator;