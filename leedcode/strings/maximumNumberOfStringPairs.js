/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {

    let sortedwords =  words.map((word) => word.split('').sort().join(''))
    console.log("sortedwords",sortedwords)
    count = 0;

    for(let i = 0; i <  sortedwords.length; i++){
        for(let j = i+1; j <  sortedwords.length; j++) {
            if(sortedwords[i] == sortedwords[j]) count ++;
        }
    }


    // let left = 0; right = sortedwords.length-1; count = 0;
    // while(right > 0) {
    //     if(sortedwords[left] == sortedwords[right]){
    //         count ++
    //         left ++
    //     } 

    //     right--
    // }
    return count
};

console.log("maximumNumberOfStringPairs",maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"]))