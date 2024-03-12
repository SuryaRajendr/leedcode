/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    const array=s+s
    console.log(array)
    if(s.length!==goal.length){
        return false
    }
    if(array.includes(goal)){
        return true
    }else{
        return false
    }
};

console.log("rotateString",rotateString("abcde","cdeab"))