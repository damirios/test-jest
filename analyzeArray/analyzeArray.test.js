const analyzeArray = require('./analyzeArray');

test('short array', () => {
    expect(analyzeArray([3, 6, 7, 0])).toEqual({
        max: 7,
        min: 0,
        length: 4,
        average: 4,
    });
});

test('array with negative numbers', () => {
    expect(analyzeArray([10, 15, 36, -7, 0, 36])).toEqual({
        max: 36,
        min: -7,
        length: 6,
        average: 15,
    });
});

test('empty array', () => {
    expect(analyzeArray([])).toEqual({
        max: null,
        min: null,
        length: 0,
        average: null,
    });
});

test('array with single number', () => {
    expect(analyzeArray([10])).toEqual({
        max: 10,
        min: 10,
        length: 1,
        average: 10,
    });
});