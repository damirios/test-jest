function reverseString(string) {
  const array = Array.from(string).reverse().join('');
  return array;
}

module.exports = reverseString;