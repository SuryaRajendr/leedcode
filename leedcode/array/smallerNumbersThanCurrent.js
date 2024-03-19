/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let output = [];
    nums.map((element,index) => { 
        let count = 0;
        nums.map((element2, index2) => {
            if(index !== index2 && element > element2)  count++
        })
        output.push(count)
    })
    return output
};

console.log("smallerNumbersThanCurrent output",smallerNumbersThanCurrent([8,1,2,2,3]))