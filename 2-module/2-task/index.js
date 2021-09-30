function isEmpty(obj) {
  let result = 0;

  for (let key in obj) {
    if (key in obj) result += 1;
  }

  return (result > 0) ? false : true;
}