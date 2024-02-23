/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    let count = 0;
    let min = Math.min(...nums)
    console.log("min",min)

    for (let i = 0; i < nums.length; i++) {
        if(nums.includes(min++)) {
            count ++;
        }
        else {
            break;
        }
    }
    return count;

};

console.log("Final output",longestConsecutive([100,4,200,1,3,2]))