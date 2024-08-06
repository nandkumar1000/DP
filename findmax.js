const findmax = (arr) => {
  if (arr.length === 0) {
    return null;
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(findmax([12, 34, 45, 65, 776, 7, 8, 65, 45, 34]));
