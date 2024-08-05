const palindrome = (str) => {
  if (str.length === 0) {
    return false;
  }

  str = str.trim().toLowerCase();
  let reverse = "";

  for (let char = str.length - 1; char >= 0; char--) {
    reverse += str[char];
  }

  return str === reverse;
}

console.log(palindrome("Hellow Everyone ")); 
console.log(palindrome("Hi I am nand kumar sahu")); 
console.log(palindrome("racecar")); 
console.log(palindrome("")); 
