function add(x, y) {
    return x + y;
  }
  
  function subtract(x, y) {
    return x - y;
  }
  
  function multiply(x, y) {
    return x * y;
  }
  
  function divide(x, y) {
    if (y !== 0) {
      return x / y;
    } else {
      return "Error: Division by zero";
    }
  }
  
  // Example usage:
  const num1 = 10;
  const num2 = 5;
  
  console.log(`Addition: ${num1} + ${num2} = ${add(num1, num2)}`);
  console.log(`Subtraction: ${num1} - ${num2} = ${subtract(num1, num2)}`);
  console.log(`Multiplication: ${num1} * ${num2} = ${multiply(num1, num2)}`);
  console.log(`Division: ${num1} / ${num2} = ${divide(num1, num2)}`);
  