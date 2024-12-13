const add = require('./index.js');

test('should return zero for an empty string', () => {
    expect(add('')).toBe(0);
});

test('should return same number in case of single number', () => {
    expect(add('1')).toBe(1);
});