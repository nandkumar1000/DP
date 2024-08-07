const arraysAreEqual=(arr)=>{
  // return arr.every((value,index)=>arr.every((val,ind)=>ind===index?val
  // :value===val));
  // return arr.every((value,index)=>arr.slice(0,index).concat(arr.slice(index+1
  //   )).includes(value));
  if(arr.length===0){
    return false;
  };
  
    

}
console.log(arraysAreEqual([[1,2,3,4],[1,2,3,4]]));
console.log(arraysAreEqual([[1,2,3,4],[1,7,9,4]]));
console.log(arraysAreEqual([[1,2,3,4,6,9],[1,2,3,4]]));
console.log(arraysAreEqual([[],[]]));