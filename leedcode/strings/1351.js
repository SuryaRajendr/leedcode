/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0 

    for(let arr of grid) {
          for(let one of arr) {
            if(one < 0) count ++
        }
    }
    return count
};

console.log("countNegatives",countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2]]))