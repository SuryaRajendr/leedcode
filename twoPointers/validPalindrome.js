/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    if(s == "") {
        return true;
    }
    let removedSpace = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    console.log("removedSpace",removedSpace)

    reversed = removedSpace.split('').reverse().join('')
    console.log("reversed",reversed)

    if(removedSpace === reversed) {
        return true
    } else {
        return false
    }

};

console.log(isPalindrome("A man, a plan, a canal: Panama"))