/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let target = 0
    let result = []
    if(nums.length < 3) return result
    nums.sort((a,b) => a-b)

    for( let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) break;
       if( i>0 && nums[i]===nums[i-1]) continue;

        let start = i+1; end = nums.length-1
        while(start < end) {
            let sum = nums[i] + nums[start] + nums[end]
                 if(sum === target) {
                     result.push([nums[i],nums[start],nums[end]])
                     start ++
                     end --
                while((start < end) && nums[start] === nums[start - 1]) start ++
                 while((start < end) && nums[end] === nums[end +1]) end --
                 } 
                 else if(sum < target)   start ++
                 else if(sum > target)   end --

        }



    }
    console.log("result",result)
    return result
};

console.log("output of threeSum", threeSum)