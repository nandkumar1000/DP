const average = (arr) => {
  if (arr.length === 0) {
    return 0; 
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let result = sum / arr.length;
  return result;
}

console.log(average([23, 45, 56, 67, 78]));

// another way;

const calculateAverage=(arr)=>{
  return arr.reduce((a,b)=>a+b,0)/arr.length;

}
console.log(calculateAverage([12,34,45,65,67]));
