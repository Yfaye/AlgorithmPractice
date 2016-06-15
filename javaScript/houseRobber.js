/*
198. House Robber
Total Accepted: 73942 Total Submissions: 211455 Difficulty: Easy
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Credits:
Special thanks to @ifanchu for adding this problem and creating all test cases. Also thanks to @ts for adding additional test cases.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
// The code below would give wrong answer due to wrong initialization at line 21;
 /*
var rob = function(nums) {
	var cache = [];
	var max = 0;
	cache[0] = nums[0];
	cache[1] = nums[1];
	for (var i = 2; i < nums.length; i++) {
		cache[i] = Math.max((nums[i] + cache[i-2]),cache[i-1]);
	}
	for (var j = 0; j < cache.length; j++) {
		if (cache[j] >= max) {
			max = cache[j];
		}
	}
	return max;        
};

rob([2,1,1,2]); //3
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var cache = [];
	var max = 0;
	cache[0] = nums[0];
	cache[1] = Math.max(nums[1],cache[0]);
	for (var i = 2; i < nums.length; i++) {
		cache[i] = Math.max((nums[i] + cache[i-2]),cache[i-1]);
	}
	for (var j = 0; j < cache.length; j++) {
		if (cache[j] >= max) {
			max = cache[j];
		}
	}
	return max;     
};
rob([2,1,1,2]); //4