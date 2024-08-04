const checkTriangle = ({ a, b, c }) => {
  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c && a === c) {
      return "equilateral_triangle";
    } else if (a === b || b === c || c === a) {
      return "isosceles_triangle";
    } else if (a !== b && b !== c && c !== a) {
      return "scalene_triangle";
    }
  } else {
    return "Invalid input";
  }
};

console.log(checkTriangle({ a: 3, b: 4, c: 5 }));
console.log(checkTriangle({ a: 3, b: 3, c: 5 }));
console.log(checkTriangle({ a: 3, b: 3, c: 3 }));
