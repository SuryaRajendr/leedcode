/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    // let stack = []
    //     for(let i = 0; i < s.length; i++ ) {
    //       console.log(s[i])
    //     }
    // for(let i = 0; i < s.length; i++ ) {
    //       console.log("stack",stack,s[i])
    //     if(s[i] == "(") { 
    //         stack.push("(")
    //          }
    //     else if(s[i] == ")") {
    //          stack.pop("(") 
    //            console.log("stack",stack,"isFinite(s[i])",isFinite(s[i]))
    //          }
      
    //     else if(isFinite(s[i])) {
    //           console.log("stack",stack,"isFinite(s[i])",isFinite(s[i]))
    //         return stack.length
    //          }
    // }


    let count = 0;
    let maxNum = 0;
    for(let c of s) {
        if(c === '(') {
            count++;
            if(maxNum < count)
                maxNum = count
        } else if( c === ')') {
            count--;
        }
    }
    return maxNum
};
let s = "(1+(2*3)+((8)/4))+1"
console.log("maxDepth",maxDepth(s))