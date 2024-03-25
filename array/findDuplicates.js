function findDuplicates(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) {
            result.push(index + 1);
        } else {
            nums[index] *= -1;
        }
    }
    return result;
}

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log("findDuplicates",findDuplicates(nums)); // Output: [2, 3]
