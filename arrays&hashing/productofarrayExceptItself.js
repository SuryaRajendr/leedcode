var productExceptSelf = function (nums) {
  const res = [];
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    res.push(product);
    console.log("each step result i",res)
    product *= nums[i];
    console.log("product i",product)
  }

  console.log("result",res)

  product = 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] *= product;// 
     console.log("each step result j",res)
    product *= nums[j];
      console.log("product  j",product)
  }
  console.log("final resu", res)

  return res;
};


console.log(productExceptSelf([1,2,3,4]))