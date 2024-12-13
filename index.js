const add = (numbers) => {
    if (!numbers) {
        return 0;
    }
    let delimiter = /,|\n/; // default delimiter
    if (numbers.startsWith('//')) {
        const strings = numbers.split('\n');
        const customDelimiter = strings[0].slice(2); // Extract delimiter after "//"
        if (customDelimiter.startsWith('[') && customDelimiter.endsWith(']')) {
            delimiter = customDelimiter.slice(1, -1); // Create regex from custom delimiter
        } else {
            delimiter = customDelimiter; // Handle single-character delimiter
        }
        numbers = strings[1]; // The rest of the numbers
    }
    
    let nums = numbers.split(delimiter).map(Number).filter((num) => num < 1000);
    const negatives = nums.filter((num) => num < 0);
    if (negatives.length) {
        throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }
    return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = add;