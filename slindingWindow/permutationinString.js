/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

    var sort = (s) => {
        return s.split('').sort().join('')
    }

    s1 = sort(s1)
    for(let i=0; i<=s2.length-s1.length; i++){
        if(s1 == sort(s2.substring(i, i+s1.length))){
            return true
        }
    }
    return false
};

console.log("permutation result =>checkInclusion",checkInclusion(s1 = "ab", s2 = "eidbaooo"))