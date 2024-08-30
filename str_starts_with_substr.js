
const startswith = (str, substr) => {
  if (str === undefined || str.length === 0 || substr === undefined || substr.length === 0) {
    return false;
  }
  return str.toLowerCase().startsWith(substr.toLowerCase());
}

console.log(startswith("Nand kumar sahu", "nand"));
console.log(startswith("Nand kumar sahu", ));
console.log(startswith("Nand kumar sahu", ""));
console.log(startswith("", "nand"));
console.log(startswith()); 
