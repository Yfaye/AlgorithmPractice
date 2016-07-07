/*
300. Longest Increasing Subsequence
Given an unsorted array of integers, find the length of longest increasing subsequence.

For example,
Given [10, 9, 2, 5, 3, 7, 101, 18],
The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.

Your algorithm should run in O(n2) complexity.

Follow up: Could you improve it to O(n log n) time complexity? 
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 第一映像： 子序列 和 subarray 不一样，子序列不用连续
// 问题的解： 一个值，子序列的最大长度
// 目标函数： 
// 状态转移函数： f(k+1) = f(k) + 1 // if (nums[k] > tail) // 记得tail也要更新
// 状态和转移函数都考虑错了，这只考虑了从nums[0]起步的情况，如果是从nums[1]起步呢？所以应该是每个位置开头的subsequence都考虑一遍，这样复杂度就是O(n2)。哦，题目说O(n2)是可以的
// 这个逻辑似乎还是有问题……

var lengthOfLIS = function(nums) {
	//corner case
	if (nums === null || nums.length === 0) {
		return 0;
	}

	//init
	var maxStartAt = [] ;

    for (var i = 0; i < nums.length; i++) {
    	var maxLength = 1;
    	var tail = nums[i];
	  	for (var j = i+1; j < nums.length; i++) {
			if (nums[j] > tail) {
				maxLength += 1;
				tail = nums[i];
			} 
		}
		maxStartAt[i] = maxLength;
		console.log('maxStartAt[' + i + '] is '+ maxStartAt[i]);
    }

    var max = maxStartAt[0];
    for (var k = 0; k < maxStartAt.length; k++) {
    	max = maxStartAt[k] >= max? : maxStartAt[k] : max;
    }

    return max;    
};