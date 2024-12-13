const add = require('./index.js');

test('should return zero for an empty string', () => {
    expect(add('')).toBe(0);
});

test('should return same number in case of single number', () => {
    expect(add('1')).toBe(1);
});

test('should return the sum two comma seperated numbers', () => {
    expect(add('1,2')).toBe(3);
});

test('should return the sum multiple comma seperated numbers', () => {
    expect(add('1,2,3,4,5,6,7,8,9')).toBe(45);
});

test('should be able to handle newline as delimiter', () => {
    expect(add('1,2\n3')).toBe(6);
});

test('should be able to handle custom delimiter(;)', () => {
    expect(add('//;\n1;2')).toBe(3);
});

test('should be able to handle custom delimiter(-)', () => {
    expect(add('//-\n1-2-3-4-5')).toBe(15);
});