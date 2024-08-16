// counting the Repeated number. 

const duplicate=(arr)=>{
  if(arr.length===0){
    return null;
  }
  arr=arr.sort();
  console.log(arr);
  // arr=arr.splice(0,arr.length)
  // console.log(arr);
  let count=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]===arr[i+1]){
count++
    }
  }
  console.log(count);

}
console.log(duplicate([1,2,3,1,2,4,6]));
console.log(duplicate([]));

// remove All the duplicate element of array and find unique element of the array 