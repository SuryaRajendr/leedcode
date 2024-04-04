// recursion using backtracking
function print(i,n) {
    if(i < 1) return
    console.log(i)
    print(i-1,n)
    console.log(i)
}
print(3,3)

// parametrised recursion

function parasum(i,sum) {
    if(i < 1) {
        console.log("sum,", sum)
        return i
    }
    parasum(i-1, sum+i)
}
console.log("-----------",parasum(4,0))

// functional recursion

function sum(n) {
    if(n === 0) return 0
    return(n + sum(n-1))
}
console.log(sum(4))

// 
function fact(n) {
    if(n === 1) return 1
    return(n * fact(n-1))
}
console.log(fact(4))