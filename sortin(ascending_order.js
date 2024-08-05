
// Arranging the element in descending order;
const descendingchecker = (arr) => {
  let temp;
  if (arr.length === 0) {
    return false;
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
      }
    }
    return arr;
  }
};

console.log(descendingchecker([12, 34, 54, 56, 1, 4, 5, 6, 78]));

// Arranging the element in ascending order;
const ascendingchecker = (arr) => {
  let temp;
  if (arr.length === 0) {
    return false;
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
};

console.log(ascendingchecker([12, 34, 54, 56, 1, 4, 5, 6, 78]));

// using sort technique 
const sortascending = (arr) => {
  return arr.sort((a, b) => b - a);
}
console.log(sortascending(arr[234, 34, 45, 56, 67]));