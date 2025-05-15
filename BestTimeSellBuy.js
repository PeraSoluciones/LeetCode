/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = [];
    for (let i = 0; i < prices.length; i++) {
        let calc = [];
        for (let j = i + 1; j < prices.length; j++) {
            calc.push(prices[j] - prices[i]);
        }
        let sorted = calc.toSorted((a, b) => b - a);
        profit.push(sorted[0]);
    }
    const max = profit.toSorted((a, b) => b - a);
    return max[0] > 0 ? max[0] : 0;
};
