/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    let seen = new Set()

    while (n !== 1) {
        n = n.toString()
             .split('')
             .reduce((acc,num) =>
                 acc + Math.pow(Number(num),2)
             ,0)
        console.log(n)
        if(seen.has(n)) return false
        seen.add(n)
    }
    return true
};

console.log('isHappy -->',isHappy)

