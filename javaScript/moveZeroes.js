/*283. Move Zeroes
Total Accepted: 52808 Total Submissions: 122350 Difficulty: Easy

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:

    You must do this in-place without making a copy of the array.
    Minimize the total number of operations.

//The code below did not keep the initial sequence
var moveZeroes = function(nums) {
    var left = 0;
    var right = nums.length;

    while (left < right) {
    	if (nums[left] === 0 && nums[right] != 0) {
    		var tmp = nums[left];
    		nums[left] = nums[right];
    		nums[right] = tmp;
    		left++;
    		right--;
    	} else if (nums[left] != 0) {
    		left++;
    	} else if (nums[right == 0){
    		right--;
    	}
    }
};

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var pos = 0;
    for (var i = 0, l = nums.length; i < l; i++) {
        if (nums[i] !== 0) {
            nums[pos++] = nums[i];
        }
    }
    for (var j = pos, lth = nums.length; j < lth; j++) {
        nums[j] = 0;
    }
};
