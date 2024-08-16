

const removeDuplicates = function(nums) {
  if (nums.length === 0) {
    return [];
  }
  nums = nums.sort();
  let duplicate_count = 0;
  let unique_count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      duplicate_count++;
    } else {
      unique_count++;
    }
  }  
  unique_count++; 
  console.log("Duplicate Count: " + duplicate_count);
  console.log("Unique Count: " + unique_count);
   const uniquenums = [...new Set(nums)];
  return uniquenums;
};
console.log(removeDuplicates([1, 3, 1, 3, 54, 56])); 