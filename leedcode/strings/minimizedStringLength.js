/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    let set = new Set(s)
    console.log("set =>",set)
     console.log("[...set].join('') =>",[...set].join(''))
    return [...set].join('').length
};

console.log("minimizedStringLength",minimizedStringLength("aaabbbcc"))