function fibonacci(n) {
  // type your code here
  if (n === 0 || n === 1) {
    return n
  }
  else {
    return (fibonacci(n - 1) + fibonacci(n - 2))
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
/**
 * given an integer n
 * if n = 0 or n = 1 : value = n
 * else value of that number of the fibonacci sequence equals the previous two numbers added
 * call recursively to determine values of previous numbers
 */
// And a written explanation of your solution
/**
 * the first two numbers of the sequence are 0 and 1
 * after that they are derived by adding the previous two values
 * turning an iterative version into recursive involves 
 * switching around how the values are derived
 * going from the end back to the beginning
 * rather than building it up as you go in iteration
 * the formula gets much easier to understand
 * the drawback being that the bigger the integer
 * the more likely the recursion will break memory
 */
