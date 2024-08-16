

// USE Reduce method  and converting into array 
// const sum=(num)=>{
// let arr=Array.from(String(num),Number)
// console.log(arr);
// return arr.reduce((accum,curElem)=>accum=accum+curElem,0)
// };
// console.log(sum(12323));


// sum of digit 


const sumofdigit = (num) => {
  if (num === undefined || num === null) {
      return null;
  }
  num = Math.abs(num); 
  let sum = 0;
  while (num > 0) {
      sum += num % 10; 
      num = Math.floor(num / 10); 
  }
  return sum;
}

console.log(sumofdigit(1233454)); 
console.log(sumofdigit(-12233));  
console.log(sumofdigit());       
