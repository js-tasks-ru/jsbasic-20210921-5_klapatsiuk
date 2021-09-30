function sumSalary(salaries) {
  let sum = 0; 
  for (let key in salaries) {
    if (salaries[key] === Number(salaries[key]) &&
        ![NaN, Infinity, -Infinity].includes(salaries[key])) {
      sum += salaries[key];
    }
  }
  return sum;
}

// let salariesNumbers = Object.values(salaries).map(function(num) {
//   if (num === Number(num) && ![NaN, Infinity, -Infinity].includes(num)) {
//     num;
//   }
// }
// )
// let sum = salariesNumbers.reduce(function(a, b) { return a + b; }, 0);
// }