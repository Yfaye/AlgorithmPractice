/*55. Jump Game  QuestionEditorial Solution  My Submissions
Total Accepted: 84898
Total Submissions: 296102
Difficulty: Medium
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

For example:
A = [2,3,1,1,4], return true.

A = [3,2,1,0,4], return false.
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
	// corner case
	if (nums === null || nums.length === 0) {
		return false;
	}

	//init
    var can = [];
    can[0] = 0;

    //DP
    for (var i = 0; i < nums.length; i++) {
    	for (var j = 0; j < i; j++) {
    		if (can[j] && nums[j] + j >= i ) {
    			can[i] = true;
    			break;
    		}
    	}
    }

    return can[nums.length - 1];
};