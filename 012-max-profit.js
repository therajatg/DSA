// Best Time to Buy and Sell Stock

// You are given an integer array prices where prices[i] is the price of a stock on the ith day.
// You may choose a single day to buy the stock and choose a different day in the future to sell it.

// Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

// Example 1:
// Input: prices = [10,1,5,6,7,1]
// Output: 6
// Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

// Example 2:
// Input: prices = [10,8,7,5,2]
// Output: 0
// Explanation: No profitable transactions can be made, thus the max profit is 0.

function maxProfit(prices) {
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
      continue;
    }

    const difference = prices[i] - min;

    if (difference > maxProfit) {
      maxProfit = difference;
    }
  }

  return maxProfit;
}

//time complexity: 0(n)
//space complexity: 0(1)

console.log(maxProfit([10, 1, 5, 6, 7, 1]));
