

const vowelsCount = (str) => {
  if (str.length === 0) {
    return null;
  }
  str = str.toLowerCase(); 
  const vowel = ['a', 'e', 'i', 'o', 'u']; 
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) { 
      count++;
    }
  }
  
  return count; 
}

console.log(vowelsCount("Hi I am Nand Kumar Sahu")); 