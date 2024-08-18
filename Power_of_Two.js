

const isPowerOfTwo = (num) => {
  if (num < 1||num === undefined) {
    return false;
  }
  // Bitwise Operation: The function uses the bitwise AND operation (num & (num - 1)) === 0 to check if num is a power of two. This works because powers of two in binary representation have only one bit set to 1 (e.g., 8 is 1000 in binary). Subtracting 1 from a power of two flips all bits after the least significant 1 to 1, making the AND operation result in 0.


  return (num & (num - 1)) === 0;
};

console.log(isPowerOfTwo(8));  
console.log(isPowerOfTwo(-8)); 
console.log(isPowerOfTwo(7));  
console.log(isPowerOfTwo(-7)); 
console.log(isPowerOfTwo(0));  
console.log(isPowerOfTwo());  