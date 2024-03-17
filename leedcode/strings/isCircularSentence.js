/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    let splitted = sentence.split(' ')
    splitted.push(splitted[0])
 
    for(let i = 0; i < splitted.length-1; i++) {
        let cut = splitted[i].slice(-1)
        let next = splitted[i + 1]
        if(!next.startsWith(cut))  return false 
    }
    return true
};

console.log('isCircularSentence',isCircularSentence("leetcode exercises sound delightful"))