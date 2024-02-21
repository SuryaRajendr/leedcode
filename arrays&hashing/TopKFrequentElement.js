/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

    let store = {}
    for (let i = 0; i < nums.length; i++) {
        if(store[nums[i]]) {
            store[nums[i]].push(nums[i])
            console.log("store[nums[i]]================",store[nums[i]])
        } else {
            store[nums[i]] = [nums[i]]
            console.log("store[nums[i]]",store[nums[i]])
        }
    }

    let output = []

    console.log("store", store)
    for (let single in store) {
        console.log("single===>",single)
        if(store[single].length >= k) {
            output.push(single)
        }

    }
    console.log("final output ===>",output)

let abc = "abc"
    let check = {}
    check[abc] = 123
    check.ab = 4567
    console.log(check)
    check[abc] = 123
    check.once = [5,6,7,8,9,0]
    console.log("checkingggggggg",check[abc], check.bcd = "987")
    console.log(check.once.push(1111111111111))
    console.log("-------------------",check)


    return output

};

// {1:[1,1,1],2:[2,2],3:[3]}

console.log(topKFrequent( [1,1,1,2,2,3], 2))
