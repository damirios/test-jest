const capitalize = require('./capitalize');

test('single word', () => {
    expect(capitalize('irina')).toBe('Irina');
});

test('two words', () => {
    expect(capitalize('irina damir')).toBe('Irina damir');
});

test('empty string', () => {
    expect(capitalize(' ')).toBe(' ');
});

test('string starts with number', () => {
    expect(capitalize('1irina')).toBe('1irina');
});