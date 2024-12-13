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

test('should throw an exception with the list of negative numbers if found', () => {
    expect(() => add('1,-2,3,-4,-5,-6')).toThrow('negative numbers not allowed: -2,-4,-5,-6');
});

test('should ignore extra spaces between numbers', () => {
    expect(add(' 1 , 2 ')).toBe(3);
});

test('should ignore number bigger than 1000', () => {
    expect(add('1001, 1, 1002, 999, 2000')).toBe(1000);
});

test('should allow delimiter of any length', () => {
    expect(add('//[***]\n1***2***3')).toBe(6);
});