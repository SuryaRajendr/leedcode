var decode = function(encoded, first) {
    let vals = [];
    vals.push(first);
    for(var i=0;i<encoded.length;i++){
        first = encoded[i]^first;
        vals.push(first);
    }
    return vals;
};

console.log('decode',decode([1,2,3],1))