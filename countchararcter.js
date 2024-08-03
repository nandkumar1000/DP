
// counting the cahracter in the string,number in js
const countchar = (str, num) => {
  let count = 0;
  let countdigit = 0;
  if (str.length === 0 || num.toString().length === 0) {
    return false;
  }
  let word = str.split('').sort();
  let digit = num.toString().split('').sort();
  for (let i = 0; i < word.length; i++) {
    count++;
  }
  console.log(count);
  for (let j = 0; j < digit.length; j++) {
    countdigit++;
  }
  console.log(countdigit);
}
console.log(countchar("hi this is my name is nand", 2343242322423));

// count the character no of time occured in string  that accept both upper case and lowercase;
 
const counter = (str, char) => {
  str = str.toLowerCase();
  char = char.toLowerCase();
  
  let word = str.split("").reduce((accum, curchar) => {
    if (curchar === char) {
      accum++;
    }
    return accum;
  }, 0);
  
  return word;
}

console.log(counter("Hello this is Nand kumar sahu", "A")); 