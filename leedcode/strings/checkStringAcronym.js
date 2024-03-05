/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let i = 0; j = 0
    if(words.length !== s.length) return false
    for(let word of words) {
        if(word.charAt(i) == s.charAt(j)) {
            j++; 
        } 
        else return false
    }
    return true
};

console.log("isAcronym",isAcronym(["an","array","of","strings"],"anarrayofstrings"))