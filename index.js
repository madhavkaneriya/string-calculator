const add = (numbers) => {
    if (!numbers) {
        return 0;
    }
    const nums = numbers.split(',');
    return nums.reduce((sum, num) => sum + Number(num), 0);
}

module.exports = add;