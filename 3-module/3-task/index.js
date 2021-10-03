function camelize(str) {
  return str.split('-')[0] + str.split('-').slice(1)
  .map(word => word[0].toUpperCase() + word.substring(1)).join('');
}
