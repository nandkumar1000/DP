
const CharacterChecker=(char)=>{
  if(char===undefined||char.length===0){
    return false;
  }
  if(char.length>1){
    return false;
  }
return char===char.toUpperCase();
}
console.log(CharacterChecker("A"));
console.log(CharacterChecker("c"));
console.log(CharacterChecker(""));
console.log(CharacterChecker());