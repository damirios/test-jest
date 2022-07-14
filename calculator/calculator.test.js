const calculator = require('./calculator');

test('sum of two numbers', () => {
    expect(calculator.sum(4, 2)).toBe(6);
});

test('subtract of positive and negative numbers', () => {
    expect(calculator.subtract(14, -6)).toBe(20);
});

test('subtract of two negative numbers', () => {
    expect(calculator.subtract(-4, -6)).toBe(2);
});

test('multiply two numbers with different sings', () => {
    expect(calculator.multiply(-4, 26)).toBe(-104);
});

test('multiply two negative numbers', () => {
    expect(calculator.multiply(-6, -8)).toBe(48);
});

test('multiply two positive numbers', () => {
    expect(calculator.multiply(16, 8)).toBe(128);
});

test('multiply two numbers, one of them is 0', () => {
    expect(calculator.multiply(-6, 0)).toBe(0);
});

test('divide two numbers', () => {
    expect(calculator.divide(15, 3)).toBe(5);
});

test('divide negative and positive numbers', () => {
    expect(calculator.divide(-28, 7)).toBe(-4);
});