
// find the longest word in  string;
const findlongestword = (str) => {
  if (str.trim().length === 0) {
    return false;
  }
  let word = str.split(" ");
  word = word.sort((a, b) => b.length - a.length);
  return word.at(0);
  // word = word.sort((a, b) => a.length - b.length);
  // return word.at(-1); 
};
console.log(findlongestword('Hi I am nand kumar sahu'));