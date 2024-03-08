var lengthOfLastWord = function(s) {

    let words = s.split(" ").reverse()
     for(let word of words) {
       if(word !== "") return word.length
       else continue
     }
};

console.log("lengthOfLastWord",lengthOfLastWord("Hello World"))