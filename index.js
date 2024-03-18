// index.js

// Task 1: Write a function expression called divide
const divide = function(a, b) {
    return a / b;
  };
  
  // Task 2: Test if divide divides 2000 by 100
  const resultDivide = divide(2000, 100);
  
  // Task 3: Write an arrow function called square
  const square = (num) => num * num;
  
  // Task 4: Describe situations where arrow functions are used
  const describeArrowFunctions = () => {
    return `Arrow functions are often used in JavaScript's iterator methods for concise syntax. 
      They are particularly useful when you need to pass a short callback function to methods like map(), filter(), and reduce().`;
  };
  
  // Task 5: Write an arrow function called add
  const add = (a, b) => a + b;
  
  // Exporting the functions for testing
  module.exports = {
    divide,
    square,
    add,
    describeArrowFunctions
  };
  