const duplicate=(arr)=>{
  if(arr.length===0){
    return null;
  }
  arr=arr.sort();
  console.log(arr);
  arr=arr.splice(0,arr.length)
  console.log(arr);

}
console.log(duplicate([1,2,3,1,2,4,6]));
console.log(duplicate([]));