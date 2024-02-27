const maxProfit = (prices) => {
  let left = 0; // Buy
  let right = 1; // sell
  let max_profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left]; 
      console.log("profit = prices[right] - prices[left]; ",prices[right] ,prices[left] )// our current profit
        console.log("profit",profit,"=============",right)
      max_profit = Math.max(max_profit, profit);
      console.log("max_profit",max_profit,"=============",right)
    } else {
        console.log("=============",right)
      left = right;
    }
    right++;
  }
  return max_profit;
};

console.log("maxProfit output",maxProfit([7,1,5,3,6,4]))