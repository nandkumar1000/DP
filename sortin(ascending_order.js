
// Arranging the element in descending order;
const checker = (arr) => {
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

console.log(checker([12, 34, 54, 56, 1, 4, 5, 6, 78]));

