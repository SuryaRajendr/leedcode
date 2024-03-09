/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let count = 0
   for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            console.log("nums[i]+nums[j]",nums[i],nums[j],nums[i]+nums[j])
            if((nums[i]+nums[j]) < target) 
            {
                console.log("inside if")
                count ++
            }
            else continue
        }
   }
   return count

    let result=[];
nums.map((x,index)=>{nums.map((val,index1)=>{if(index1>index&&((x+val)<target)){result.push(1);}})})
return result.length;
}

console.log("countPairs"),countPairs([1,2,3,4,5,6,7,8,9,10],10)