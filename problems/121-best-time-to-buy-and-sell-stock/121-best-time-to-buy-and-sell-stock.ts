function maxProfit(prices: number[]): number {
  let n = 0;
  while (prices[n] !== undefined) {
    n++;
  }

  let minPrice: number = prices[0];
  let maxProfit: number = 0;

  for (let i = 0; i < n; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      let profit = prices[i] - minPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
