/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    console.log(haystack.indexOf(needle))
    return haystack.indexOf(needle)
};
console.log("strStr",strStr("hello","ll"))