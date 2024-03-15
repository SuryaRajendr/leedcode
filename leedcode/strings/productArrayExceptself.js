var productExceptSelf = function (nums) {

//=======================================step- 1
//   const res = [];
//   let product = 1;

//   for (let i = 0; i < nums.length; i++) {
//     res.push(product);
//     console.log("each step result i",res)
//     product *= nums[i];
//     console.log("product i",product)
//   }

//   console.log("result",res)

//   product = 1;

//   for (let j = nums.length - 1; j >= 0; j--) {
//     res[j] *= product;// 
//      console.log("each step result j",res)
//     product *= nums[j];
//       console.log("product  j",product)
//   }
//   console.log("final resu", res)

//   return res;

//====================================step-2
// let product = []
// nums.map((num,index) => { 
//     eachProduct = nums.reduce((acc,val) =>   { console.log("acc",acc); if( val!== num) val*acc },1);
//     product.push(eachProduct)
//     console.log("eachProduct",eachProduct)
//  })
// console.log("product",product)
// return product

//===============================step-3

// let product = []
// nums.map((num,index) => { 
//     if(num === 0)  product.push(0)
//     else
//     product.push( nums.reduce((acc,val) =>  { console.log("acc",acc); if( val!== num) return val*acc; else return acc; },1))
//  })
// return product

//==========================step-4
// let product = []
// if(nums. every(item => item === 0)) {
// for (let i = 0; i < nums.length; i++) {
//   product.push(0);
// }
// return product
// }
//============
// nums.map((num,index) => { 
    // let eachProduct = 1;
    // for(let i = 0; i < nums.length; i++) {
    //     if(index !== i) eachProduct = eachProduct * nums[i]
    // }
    // product.push(eachProduct)
//      product.push( nums.reduce((acc,val,ind) =>  {  if( ind !== index) return val*acc; else return acc; },1))
//  })
// return product
//===================

    const n = nums.length;
    const left = new Array(n).fill(1);
    const right = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    const result = [];
    for (let i = 0; i < n; i++) {
        result[i] = left[i] * right[i];
    }

    return result;

};

console.log("productExceptSelf",productExceptSelf([1,2,3,4]))