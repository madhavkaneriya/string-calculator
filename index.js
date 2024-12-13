const add = (numbers) => {
    if (!numbers) {
        return 0;
    }
    let delimiter = /,|\n/; // default delimiter
    if (numbers.startsWith('//')) {
        // identify custom delimiter
        const strings = numbers.split('\n');
        delimiter = strings[0].slice(-1);
        numbers = strings[1];
    }
    let nums = numbers.split(delimiter).map(Number).filter((num) => num < 1000);
    const negatives = nums.filter((num) => num < 0);
    if (negatives.length) {
        throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }
    return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = add;