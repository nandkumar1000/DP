const findMin = (arr) => {
  if (arr === undefined || arr.length === 0) {
    return null;
  }

  let minimum = arr[0]; 

  for (let i = 1; i < arr.length; i++) { 
    if (arr[i] < minimum) {
      minimum = arr[i];
    }
  }

  return minimum;
}

console.log(findMin([1, 3, 5, 6, 78, 8, 8])); 
console.log(findMin([1])); 
console.log(findMin([])); 
console.log(findMin()); 
