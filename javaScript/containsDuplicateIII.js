/*220. Contains Duplicate III  QuestionEditorial Solution  My Submissions
Total Accepted: 34783
Total Submissions: 180919
Difficulty: Medium
Given an array of integers, find out whether there are two distinct indices i and j in the array such that the difference between nums[i] and nums[j] is at most t and the difference between i and j is at most k.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  	for(var i = 0, l = nums.length; i < l; i++) {  
		for (var j = 1; j <= k & i+j < l; j++) {
			if (Math.abs(nums[i]-nums[i + j]) <= t) {
				return true;
			}
		}
	}
    return false;   
};

// 这题基本就是II改一改，靠不上hashmap了，要用基本的朴素的搜索来做了