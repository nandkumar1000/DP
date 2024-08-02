// foundation solution .

// Hashtaggenerator
// const Hashtaggenerator=(str)=>{
//   let words=str.trim();
//   if(words.length===0){
//     return false;
//   }
//   let wordsAarray="#"+words;
//   console.log(wordsAarray);
// }

// console.log(
//   Hashtaggenerator("web dev")
// );

// first way of solution 

const Hashtaggen = (str) => {
  str = str.trim();
  if (str.length === 0) {
    return false;
  }

  let words = str.split(" ");
  let wordsArray = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  let hashtag = "#" + wordsArray;

  return hashtag.length > 140 ? false : hashtag;
}

console.log(
  Hashtaggen("web dev")
);


// second way of solution.

const Hashtaggenerator = (str) => {
  if (str.length > 300 || str.trim().length === 0) {
    return false;
  }

  let words = str.split(" ").map((curElem) => {
    return curElem[0].toUpperCase() + curElem.slice(1);
  }).join("");

  return "#" + words;
};

console.log(
  Hashtaggenerator("Hi I am nand kumar sahu")
);
