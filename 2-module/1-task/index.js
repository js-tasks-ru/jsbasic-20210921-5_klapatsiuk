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

// function sumSalary(salaries) {
//   let sumOfSalaries = 0;

//   for (let key in salaries) {
//     let isSalary = typeof salaries[key] === 'number';

//     if (isSalary) {
//       sumOfSalaries += salaries[key];
//     }
//   }

//   return sumOfSalaries;
// }