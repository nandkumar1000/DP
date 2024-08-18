
const sumOfSquare=(arr)=>{
  if(arr.length===0||arr===undefined){
    return false;
  }
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum+=arr[i]**2;
    }
    return sum;

}
console.log(sumOfSquare(([1,2,3,4])));
console.log(sumOfSquare(([])));