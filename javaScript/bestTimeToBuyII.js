/*122. Best Time to Buy and Sell Stock II
Total Accepted: 92585 Total Submissions: 214857 Difficulty: Medium

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	//corner case
	if (prices === null || prices.length < 2) {
		return 0;
	}

	//init
	var preBuyMaxProfit = 0;
    var preSellMaxProfit = 0;
    var buy = -prices[0];
    var sell = 0;

    for (var i = 0; i < prices.length; i++) {
    	preBuyMaxProfit = buy;
    	buy = Math.max(preBuyMaxProfit, preSellMaxProfit - prices[i]);
    	sell = Math.max(preSellMaxProfit, preBuyMaxProfit + prices[i]);
    	preSellMaxProfit = sell;
        console.log("preBuy is " + preBuyMaxProfit);
        console.log("preSell is " + preSellMaxProfit);
        console.log("buy is " + buy);
        console.log("sell is " + sell);
    }

    return sell > buy ? sell : buy;
};

maxProfit([1,2,3,0,2]);

/*
5
*/
/*
5
*/
/*
3
*/
/*
3
*/
/*
4
*/