const reverseString = require('./reverseString');

test('single word', () => {
    expect(reverseString('irina')).toBe('aniri');
});

test('three words', () => {
    expect(reverseString('irina and damir')).toBe('rimad dna aniri');
});

test('empty string', () => {
    expect(reverseString(' ')).toBe(' ');
});