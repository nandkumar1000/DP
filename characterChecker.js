
const CharacterChecker=(char)=>{
  if(char===undefined||char.length===0){
    return false;
  }
  if(char.length>1){
    return false;
  }
  if(char.charCodeAt(0)>=65&&char.charCodeAt(0)<=90){
    return true;
  }
  return false;
  // another approch
return char===char.toUpperCase();
}
console.log(CharacterChecker("A"));
console.log(CharacterChecker("c"));
console.log(CharacterChecker(""));
console.log(CharacterChecker());