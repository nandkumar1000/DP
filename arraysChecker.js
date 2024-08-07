const arraysAreEqual=(arr1,arr2)=>{
  // return arr.every((value,index)=>arr.every((val,ind)=>ind===index?val
  // :value===val));
  // return arr.every((value,index)=>arr.slice(0,index).concat(arr.slice(index+1
  //   )).includes(value));
  if(arr1.length===arr2.length){
    return false;
  };

    

}
console.log(arraysAreEqual([1,2,3,4],[1,2,3,4]));
console.log(arraysAreEqual([1,2,3,4],[1,2,3,4]));
console.log(arraysAreEqual([1,2,3,4],[1,2,3,4]));
console.log(arraysAreEqual([],[]));