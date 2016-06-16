/*1. Two Sum My Submissions QuestionEditorial Solution
Total Accepted: 244634 Total Submissions: 1011790 Difficulty: Easy
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
UPDATE (2016/2/13):
The return format had been changed to zero-based indices. Please read the above updated description carefully.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 //解法1是一个O(n2)时间复杂度的算法，朴素直接
var twoSumOn2 = function(nums, target) {
    if (nums === undefined || nums.length === 0) {
        return undefined;
    }
    var result = [];
	for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
                return result;
            }
        }
	}
    return result;
};
twoSumOn2([0,4,3,0],0);

//于是考虑，我可不可以用类似动归的考虑，边遍历数组，边存给这个数组存它与target的差值？这样当后面遇到这个值的时候，就可以直接返回这个差值所对应的另一半的index了。
//这也是一种解空间转换
var twoSumOn = function(nums,target) {
    if (nums === undefined || nums.length === 0) {
        return undefined;
    }
    var hash = [];
    for (var i = 0; i < nums.length; i++) {
    	if (hash[target - nums[i]] !== undefined) {
    		return [hash[target - nums[i]], i];
    	} else {
    		hash[target - nums[i]] = i;
    	}
    }
}
twoSumOn([0,4,3,0],0);
