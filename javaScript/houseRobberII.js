/*213. House Robber II

    Total Accepted: 32120
    Total Submissions: 102252
    Difficulty: Medium

Note: This is an extension of House Robber.

After robbing those houses on that street, the thief has found himself a new place for his thievery so that he will not get too much attention. This time, all houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, the security system for these houses remain the same as for those in the previous street.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 // 本题的解： 一个值，能抢到的最大数额。
 // 状态方程： max()；
 // 限制条件： 不能抢隔壁，首尾算隔壁
 // 朴素想法，虽然本题输入的是一个向量，但解肯定在两个不同向量中产生，nums(0，length-2) 和 nums(1, length-1) , 也就是说，抢了头，就不抢尾，抢了尾就不抢头。当然也可以头尾都不抢，但是头尾都不抢的解，也在这两个区间中。
 // 然后分别对这两个向量用之前house robber的DP。
 // 简单house robber的DP问题考虑：
 // 从头走到尾的最大收益，取决于在每个位置时，抢的状态获得的收益，和不抢的状态获得的收益的比较。
 // 状态转移方程： f(k) = max (f(k-2) + nums[k], f(k-1));
 
var rob = function(nums) {
	//corner case
	if (nums === null || nums.length === 0) {
		return 0;
	}
	if (nums.length < 2) {
		return nums[0];
	}
	if (nums.length === 2) {
		return nums[0] >= nums[1] ? nums[0] : nums[1];
	}

	// so right now, we have at least 3 houses to rob

	//plan A: rob head, no tail
	//init
	var headRob = [];
	headRob[0] = nums[0];
	headRob[1] = Math.max(headRob[0], nums[1]);

	for (var i = 2; i < nums.length - 1; i++) {
		headRob[i] = Math.max(headRob[i-2] + nums[i] , headRob[i-1]);
	}

	var robMax = headRob[0];
	for (var j = 0; j < headRob.length; j++) {
		robMax = headRob[j] >= robMax? headRob[j] : robMax;
	}

	//plan B: rob tail, no head
	//init
	var tailRob = [];
	tailRob[1] = nums[1];
	tailRob[2] = Math.max(tailRob[1], nums[2]);

	for (var k = 3; k < nums.length; k++) {
		tailRob[k] = Math.max(tailRob[k-2] + nums[k] , tailRob[k-1]);
	}

	for (var n = 0; n < tailRob.length; n++) {
		robMax = tailRob[n] >= robMax? tailRob[n] : robMax;
	}

	return robMax;
     
};

rob([1,3,6,8,10,2,6,8]);

// 这道题，居然一次就AC了！！！！！