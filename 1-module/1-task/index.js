function factorial(n) {
  let factorial = 1;
  if (n < 0) {
    return 'Факториал не определён';
  } else if (n == 0) {
    return factorial;
  } else {
    do {
      factorial *= n;
      n--;
    }
    while (n > 1);
    return factorial;
    // for (n; n > 1; n--) {factorial *= n};
  };
}
