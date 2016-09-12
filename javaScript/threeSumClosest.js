// 16. 3Sum Closest  QuestionEditorial Solution  My Submissions
// Total Accepted: 92413
// Total Submissions: 307395
// Difficulty: Medium
// Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

//     For example, given array S = {-1 2 1 -4}, and target = 1.

//     The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// Tags Array Two Pointers
// Similar Problems (M) 3Sum (M) 3Sum Smaller

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

 	if (nums === null || nums === undefined || nums.length < 3) {
		return 0;
	}
	nums.sort(function(a,b){return a-b});
	var ans = [];
	var difference = Number.MAX_VALUE;
	var smallest = 0;

	for (var i = 0; i < nums.length; i++) {
		var curtarget = target - nums[i];
		var left = i+1;
		var right = nums.length - 1;

		while(left < right) {
			var cursum = nums[left] + nums[right];
			if (Math.abs(cursum - curtarget) <= difference) {
			    difference = Math.abs(cursum - curtarget);
				smallest = cursum + nums[i];  //debug时发现这里忘记加上nums[i]
			}
			if (cursum === curtarget) {
				left++;
				right--;
			} else if (cursum < curtarget) {
				left++;
			} else {
				right--;
			}
		}
	}

	return smallest;   
    
};

// 以上代码已AC，思路跟3sum一样，由于不用处理去重问题，反而比3sum简单
