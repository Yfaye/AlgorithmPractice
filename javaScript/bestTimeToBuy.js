/*121. Best Time to Buy and Sell Stock
Total Accepted: 107620 Total Submissions: 295713 Difficulty: Easy

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
*/
// The code below has a problem, we can only buy than sell, so the index of min must be smaller than the index of max, then this will work
/*
var maxProfit = function(prices) {
    if (prices === undefined || prices.length === 0) {
        return 0;
    }
    var min = Number.MAX_VALUE ;
    var max = 0;
    
    for (var i = 0; i < prices.length; i++) {
        if ( min > prices[i]) {
            min = prices[i];
        }
        if (max < prices[i]) {
            max = prices[i];
        }
    }
    
    return max - min;
    
};
maxProfit([2,1]);
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices === undefined || prices.length === 0) {
        return 0;
    }
    var min = prices[0];
    var maxProfit = 0;
    var profit = [0];
    for (var i = 1; i <= prices.length; i++) {
        if ( min > prices[i]) {
            min = prices[i];
        }
        profit[i] = Math.max((prices[i] - min),profit[i-1]) ;
    }
    
    for (var j = 0; j < profit.length; j++) {
        if (maxProfit < profit[j]) {
            maxProfit = profit[j];
        }
    }
    return maxProfit;
    
};

// 解空间转移： 需要同时保存到目前为止的最低价格，以及到目前为止的最大利润。
//如果prices[i]-最低价格比已有的最大利润还大，就把到这一点的最大利润更新为prices[i] - 最低价格
//最后还要从前往后扫一遍，找到有最大利润的那个点；