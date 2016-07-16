/*268. Missing Number  QuestionEditorial Solution  My Submissions
Total Accepted: 60180
Total Submissions: 145520
Difficulty: Medium
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

For example,
Given nums = [0, 1, 3] return 2.

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
	//corner case
	if (nums === null || nums.length === 0) {
		return 0;
	}

	var n = nums.length;
	var sum = Math.ceil(n * (n + 1) / 2); // Math.ceil is for special case [0] or [1]

	for (var i = 0; i < n; i++) {
		sum -= nums[i];
	}
    
    return sum;    
};