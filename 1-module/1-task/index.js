function factorial(n) {
  let factorial = 1;
  if (n < 0) {
    return 'Факториал неопределён';
  } else if (n == 0) {
    return factorial;
  } else {
    for (n; n > 1; n--) {
      factorial *= n;
    };
    return factorial;
  };
}
