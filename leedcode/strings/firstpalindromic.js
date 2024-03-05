/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {

    for (let word of words) {
        if(word === word.split('').reverse().join('')) return word
    }
      return ""
};

console.log("firstPalindrome",firstPalindrome(["abc","car","ada","racecar","cool"]))