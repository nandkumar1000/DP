

const CamelCase = (str) => {
  if (!str || str.length === 0) {
    return false;
  }

  let camelCaseStr = str
    .trim()
    .split(" ")
    .map((curElem, index) => {
      if (index === 0) {
        return curElem.toLowerCase();
      } else {
        return curElem.charAt(0).toUpperCase() + curElem.slice(1).toLowerCase();
      }
    })
    .join("");
  return camelCaseStr.charAt(0).toUpperCase() + camelCaseStr.slice(1);
};

console.log(CamelCase("HI i aM nAND KUMAR sahu"));
