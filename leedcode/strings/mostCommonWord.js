/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {

    let paragraphLower = paragraph.toLowerCase()
    //let splitted = paragraphLower.split(/[!.,\s]+/)
    console.log("paragraphLower",paragraphLower)

    // let splitted = paragraphLower.split(/[^a-zA-Z]+/g)
    let splitted = paragraphLower.match(/[a-zA-Z]+/g);
    console.log("splitted",splitted)

    let store = {}

    //let store = new Set()

    for(let one of splitted) {
        if(store[one]) {
             store[one]++
        } else store[one] = 1 
    }


    for(let single of banned) {
      delete store[single];
    }

    console.log("store",store)

    let max = 0;
    for (let one in store) {
        console.log(one)
        if(max < store[one]) max = store[one]
    }
    console.log("max",max)
    console.log(store)

      for (let one in store) {
        console.log(one)
        if(store[one] == max ) return one
    }

};
console.log("mostCommonWord",mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.",["hit"]))