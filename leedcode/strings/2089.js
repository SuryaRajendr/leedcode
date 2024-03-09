/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
   let sorted =  nums.sort((a,b)=> a-b)
   console.log("sorted",sorted)

   let result = [];
   for(let i = 0; i < nums.length; i ++){
       console.log(nums[i])
       if(nums[i] === target) 
       result.push(i)
   }
   console.log("result",result)
   return result

};

console.log("targetIndices",targetIndices([1,2,3,4,5,6,7,8,9,10],10))