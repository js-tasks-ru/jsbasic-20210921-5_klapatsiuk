function getMinMax(str) {
  splitNumArr = str
  .split(' ')
  .map(i => Number(i))
  .filter(i => !Number.isNaN(i));
  
  return {
    min: Math.min(...splitNumArr),
    max: Math.max(...splitNumArr)
  };
}
