/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

   let seen = {},  arr = []

   for(let i = 0; i < strs.length; i++) {

       const index = strs[i].split('').sort().join('');

       if(seen[index]) {
           seen[index].push(strs[i])
       }
       else {
           seen[index] = [strs[i]]
       }
   }
    console.log("seen",seen)

    for(let i in seen) {
        arr.push(seen[i])
    }
  console.log(arr)
   return arr
  

};


const ouput = groupAnagrams (["eat","tea","tan","ate","nat","bat"])

console.log("ouput",ouput)