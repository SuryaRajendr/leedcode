function mergeSort(arr) {
    console.log("input values", arr)
        if (arr.length <= 1) {
            return arr;
        }
    
        const middle = Math.floor(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);
    
        const leftMerge = mergeSort(left)
        console.log("leftMerge",leftMerge)
    
        const rightMerge = mergeSort(right)
        console.log("rightMerge",rightMerge)
    
        const val = merge(leftMerge, rightMerge)
        console.log("---------->",val)
       // return merge(mergeSort(left), mergeSort(right))
        return val;
    }
    
    function merge(left, right) {
        console.log("inside merge 2nd fun left,right",left,right)
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;
    
        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
    
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }
    
    // Example usage
    // const arr = [4, 2, 1, 3];
    const arr = [4, 2, 1, 3,];
    const sortedArr = mergeSort(arr);
    console.log(sortedArr); // Output: [1, 2, 3, 4]




// function mergeSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     const middle = Math.floor(arr.length / 2);
//     const left = arr.slice(0, middle);
//     const right = arr.slice(middle);

//     return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//     let result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;

//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             result.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             result.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }

//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }

// // Example usage
// const arr = [4, 2, 1, 3];
// const sortedArr = mergeSort(arr);
// console.log(sortedArr); // Output: [1, 2, 3, 4]