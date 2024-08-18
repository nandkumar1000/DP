

const isPowerOfTwo = (num) => {
  if (num < 1||num === undefined) {
    return false;
  }
 
// bitwise operation for checking 
  return (num & (num - 1)) === 0;
};

console.log(isPowerOfTwo(8));  
console.log(isPowerOfTwo(-8)); 
console.log(isPowerOfTwo(7));  
console.log(isPowerOfTwo(-7)); 
console.log(isPowerOfTwo(0));  
console.log(isPowerOfTwo());  

//another method: without using bitwise operation using for loop


function isPower(num) {
  if (num < 1 || num === undefined) {
    return false;
    }
    for (let i = 0; i < num; i++) {
      if (num === 2 ** i) {
        return true;
        }
        }
        return false;
        }
        console.log(isPower(23));  
        console.log(isPower(16));