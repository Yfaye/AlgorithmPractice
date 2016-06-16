/*
309. Best Time to Buy and Sell Stock with Cooldown My Submissions QuestionEditorial Solution
Total Accepted: 17445 Total Submissions: 46828 Difficulty: Medium
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
Example:

prices = [1, 2, 3, 0, 2]
maxProfit = 3
transactions = [buy, sell, cooldown, buy, sell]
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
 // 基于矩阵链相乘问题的启发，解空间转移可以考虑为：
 // 最后一个cooldown发生的位置，以及这些个位置下产生的最大利润。（最后一个cooldown之前的所有利润 + 这个cooldown之后的买卖所能产生的利润 ）
 // 然后再从前往后把最后一个cooldown的每个位置扫一遍，这样就能知道最终的最大利润是在哪里了。
var maxProfit = function(prices) {
	//corner case
	if (prices === undefined || prices.length < 2) {
		return 0;
	}

	//init
	//这个倒数第一次买卖发生的位置的数组的长度，比prices数组的长度应该多一个，
	//因为如果prices是一个降序数组，则完全不买卖是最好的，即最后一次买卖的位置应该在prices[0]之前.
	var profitOnLastCooldown = [];
	profitOnLastCooldown[0] = 0;
	profitOnLastCooldown[1] = 0;
	profitOnLastCooldown[2] = prices[1] - prices[0];

	for (var i = 3; i < prices.length + 1; i++) {
		profitOnLastCut[i] = 
	}
    
};

