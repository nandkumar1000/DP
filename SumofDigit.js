
const sum=(num)=>{
let arr=Array.from(String(num),Number)
console.log(arr);
return arr.reduce((accum,curElem)=>accum=accum+curElem,0)
};
console.log(sum(123231));