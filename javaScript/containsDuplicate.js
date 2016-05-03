/*217. Contains Duplicate
Total Accepted: 68048 Total Submissions: 169642 Difficulty: Easy

Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

*？

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	nums.sort(function(a,b){return a-b;});
	for (var i = 0; i < nums.length - 1; i++) {
		if (nums[i] == nums[i + 1]) {
			return true;
		}
	}
	return false;
};