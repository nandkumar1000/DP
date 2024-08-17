// counting of vowels and consonants in string.


const vowelsCount = (str) => {
  if (str.length === 0) {
    return null;
  }
  str = str.toLowerCase(); 
  const vowel = ['a', 'e', 'i', 'o', 'u']; 
  let count = 0;
  let consonants=0;
  console.log("Total Character:",str.length);
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) { 
      count++;
    }
    else{
      consonants++
    }
  }
  
  console.log("Total Vowels:" ,count);
  console.log("Total Consonants:" ,consonants);
}

console.log(vowelsCount("Hi I am Nand Kumar Sahu")); 