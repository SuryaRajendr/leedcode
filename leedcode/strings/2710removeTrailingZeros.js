/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let splitted = num.split('')
    console.log(splitted)
    for(let i = splitted.length-1; i > 0 ; i --) {
        if(splitted[i] == 0) splitted.pop(i)
        else break
    }
    console.log("splitted",splitted)
    return splitted.join('')
};

console.log("output removeTrailingZeros",removeTrailingZeros("1450"))