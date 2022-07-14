function sum(a, b) {
  return +a + +b;
}

function subtract(a, b) {
  return +a - +b;
}

function multiply(a, b) {
  const result = +a * +b;
  if (result == -0) {
    return 0;
  } else {
    return result;
  }
}

function divide(a, b) {
  return a / b;
}

module.exports = {sum, subtract, multiply, divide};