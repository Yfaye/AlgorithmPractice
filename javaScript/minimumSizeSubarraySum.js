// 209. Minimum Size Subarray Sum  QuestionEditorial Solution  My Submissions
// Total Accepted: 50242
// Total Submissions: 180763
// Difficulty: Medium
// Given an array of n positive integers and a positive integer s, find the minimal length of a subarray of which the sum ≥ s. If there isn't one, return 0 instead.

// For example, given the array [2,3,1,2,4,3] and s = 7,
// the subarray [4,3] has the minimal length under the problem constraint.

// click to show more practice.

// More practice:
// If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).

// Tags Array Two Pointers Binary Search
// Similar Problems (H) Minimum Window Substring (M) Maximum Size Subarray Sum Equals k

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
	if (nums === null || nums === undefined || nums.length === 0 || s <= 0) {
		return 0;
	}

	var left = 0;
	var right = 0;
	var total = 0;
	var n = nums.length;
	var ans = n + 1

	while (right < n) {
		while (right < n && total < s) {
			total += nums[right++];
		}
		if (total < s) {
			break;
		}
		while (left < right && total >= s) {
			total -= nums[left++];
		}
		ans = Math.min(ans, right - left + 1)
	}

	if (ans === n + 1) {
		return 0;
	} else {
		return ans;
	}
    
};

//以上代码已AC