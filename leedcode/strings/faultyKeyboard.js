/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let splitted = s.split('')
    console.log(splitted)
    let store = ""
    for(let one of splitted) {
        if(one !== "i")  store = store+one 
        else store = store.split('').reverse().join('')
        console.log("store",store)
    }
    console.log("store",store)
    return store
};

console.log("finalString Faulty Keyboard output",finalString("leetcodeisacommunityforcoders"))