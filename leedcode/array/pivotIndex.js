
var pivotIndex = function(nums) { //TC: O(n) SC: O(1)
    //calculate total sum
    let total = 0
    for(let j=0;j<nums.length;j++) total+=nums[j]
    //traverse the array from left to right searching for the pivot
    let leftsum = 0
    for(let i=0;i<nums.length;i++){
        console.log('total-nums[i]-leftsum',total,nums[i],leftsum)
        if(leftsum===(total-nums[i]-leftsum)) return i
        leftsum+=nums[i]
    }
    return -1
};

console.log('pivotIndex output ===>',pivotIndex([1,7,3,6,5,6]))