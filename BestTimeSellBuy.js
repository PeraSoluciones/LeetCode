/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let price = prices[0];
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < price) {
            price = prices[i];
        } else if (prices[i] - price > profit) {
            profit = prices[i] - price;
        }
    }
    return profit;
};

let result = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(result);

result = maxProfit([7, 6, 4, 3, 1]);
console.log(result);
