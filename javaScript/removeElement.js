/*27. Remove Element
Total Accepted: 99880 Total Submissions: 303800 Difficulty: Easy

Given an array and a value, remove all instances of that value in place and return the new length.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
	var pos = 0;
	for (var i = 0, l = nums.length; i < l; i++) {
		if (nums[i] !== val) {
			nums[pos++] = nums[i];
		}
	}
	return pos;
};