function checkSpam(str) {
  if (
    ~str.toLowerCase().indexOf('xxx') ||
    ~str.toLowerCase().indexOf('1xbet')
  ) {
    return true;
  } else {
    return false;
  }
}


