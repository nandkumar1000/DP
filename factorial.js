const factorial = (x) => {
  if (x < 0) {
    return false;
  }
  if (x < 2) {
    return 1;
  }
  for (let i = 0; i < x; i++) {
    if (i <= x) {
      let result = x * factorial(x - 1);
      //  console.log("factorial is ",result);
      return result;
    }

  }
  // console.log(`factorial of number is ${result}`);
}
console.log(factorial(5));
console.log(factorial(-5));
console.log(factorial(1));