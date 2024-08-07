const sumofdigit=(num)=>{
  if(num.length===0){
    return null;
  };
  let sum=0;
  let count=0;
  for(let i=0;i<num.length;i++){
    num/10;
    count++
    }
    console.log(count);
}
console.log(sumofdigit(1233454));
console.log(sumofdigit(-12233));
console.log(sumofdigit());