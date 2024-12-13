const add = require('./index.js');

test('should return zero for an empty string', () => {
    expect(add('')).toBe(0);
});