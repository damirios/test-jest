const caesarCipher = require('./caesarCipher');

test('zero shift', () => {
    expect(caesarCipher('aBdfCas', 0)).toBe('aBdfCas');
});

test('shift = 1', () => {
    expect(caesarCipher('z', 1)).toBe('a');
});

test('single word with different cases random positive shift', () => {
    expect(caesarCipher('IrInA', 17)).toBe('ZiZeR');
});

test('single word with symbols with zero shift', () => {
    expect(caesarCipher('Damir + Irina = good!', 0)).toBe('Damir + Irina = good!');
});

test('single word with symbols with non-zero shift', () => {
    expect(caesarCipher('Damir + Irina = good!', 2)).toBe('Fcokt + Ktkpc = iqqf!');
});