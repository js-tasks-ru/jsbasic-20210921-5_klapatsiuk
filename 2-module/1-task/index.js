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
