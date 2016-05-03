/*219. Contains Duplicate II
Total Accepted: 44835 Total Submissions: 154839 Difficulty: Easy

Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the difference between i and j is at most k.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

//Time Limitation Exceeded
var containsNearbyDuplicate = function(nums, k) {
	for(var i = 0, l = nums.length; i <= l - k ; i++) {
		for (var j = 1; j < k; j++) {
			if (nums[i] == nums[i + j]) {
				return true;
			}
		}
	}
    return false;
};

