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
 /* 
 思路一：卡了一周快一周，其实大方向是对的，但状态没有拆解好
 	基于矩阵链相乘问题的启发，解空间转移可以考虑为：
	最后一个cooldown发生的位置，以及这些个位置下产生的最大利润。（最后一个cooldown之前的所有利润 + 这个cooldown之后的买卖所能产生的利润 ）
	然后再从前往后把最后一个cooldown的每个位置扫一遍，这样就能知道最终的最大利润是在哪里了。

var maxProfit = function(prices) {
	//corner case
	if (prices === undefined || prices.length < 2) {
		return 0;
	}

	//init profit grid
	var singleTradeProfit = [];
	for (var i = 0; i < prices.length - 1; i++) {
		singleTradeProfit[i] = []; //如果没有这句，程序会报错:Exception: TypeError: singleTradeProfit[i] is undefined
		for (var j = i + 1; j < prices.length; j++) {
			//singleTradeProfit[i] = []; //如果没有这句，程序会报错:Exception: TypeError: singleTradeProfit[i] is undefined
			singleTradeProfit[i][j] = prices[j] - prices[i];
			//console.log('singleTradeProfit' + '[' + i + ']' + '[' + j + ']' + 'is: ' + singleTradeProfit[i][j] );
		}
	}
	
	//print array 
	for (var row = 0; row < singleTradeProfit.length; row++) {
		for (var col = 0; col < singleTradeProfit[row].length; col++) {
			//console.log('singleTradeProfit' + '[' + row + ']' + '[' + col + ']' + 'is: ' + singleTradeProfit[row][col] );
		}
	}

	var profitBeforeLastCooldown = []; // recording maxProfit before certain position i in Prices so length should be 1 more than prices.length;
	profitBeforeLastCooldown[0] = 0;
	profitBeforeLastCooldown[1] = 0;

	for (var k = 2; k <= prices.length; k++) {
		var curMaxProfit = 0;
		var index = 0;
		while (index < k) {
			//console.log('enter while loop ' + 'index now is ' + index + ' k now is ' + k);
			var m = 0;
			for (; m < k-2; m++) {
				//console.log('enter for loop '+'m now is ' + m + ' k now is ' + k);
				//console.log(profitBeforeLastCooldown[index] + '  ' + singleTradeProfit[m][k-1]);
				if (profitBeforeLastCooldown[index] + singleTradeProfit[m][k-2] >= curMaxProfit) {
				  curMaxProfit = profitBeforeLastCooldown[index] + singleTradeProfit[m][k-2];
					//console.log('singleTradeProfit['+ m + ']['+ (k-1)+'] is: ' + singleTradeProfit[m][k-1]);
					console.log("profitBeforeLastCooldown[index] is " + profitBeforeLastCooldown[index]);
					console.log("m is " + m + "k is " + k + "singleTradeProfit[m][k-2] is " + singleTradeProfit[m][k-2] );
			  }			
			}
			index++;
		}
		profitBeforeLastCooldown[k] = curMaxProfit;
		console.log('profitBeforeLastCooldown[' + k + '] is ' + profitBeforeLastCooldown[k] );
	}

	var max = 0;
	for (var n = 0; n <profitBeforeLastCooldown.length; n++ ) {
		if (profitBeforeLastCooldown[n] >= max) {
			max = profitBeforeLastCooldown[n];
		}
	}

	return max;
}
*/

/*思路二： 还是网上看来的答案， 每一天其实有三个状态，买，卖，闲。 闲的状态不用考虑，已经自动在买卖需发生在前一天里面考虑了i-1
  而考虑每一天的最大利润时，其实就是这一天 我买 (pre_sell - price[i]) 或者 不买 （pre_sell）还是 卖 （pre_buy + price[i]）或者不卖 （pre_buy）.
  然后从头走到尾，找最大利润
*/

var maxProfit = function(prices) {
	//corner case
	if (prices === undefined || prices.length < 2) {
		return 0;
	}

	//init
	var pre_buy = 0, pre_sell = 0, buy = -prices[0] , sell = 0;

	for (var i = 0; i < prices.length ; i++) {
		pre_buy = buy;
		buy = Math.max(pre_sell - prices[i], pre_buy);
		pre_sell = sell;
		sell = Math.max(pre_buy + prices[i], pre_sell);
		console.log('i is ' + i + ' pre_buy is ' + pre_buy + ' buy is ' + buy + ' pre_sell is ' + pre_sell + ' sell is ' + sell);
	}
  return sell;
};

maxProfit([1, 2, 3, 0, 2]); 
