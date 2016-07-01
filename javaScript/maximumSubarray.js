/*53. Maximum Subarray
Total Accepted: 119112 Total Submissions: 321318 Difficulty: Medium

Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
the contiguous subarray [4,−1,2,1] has the largest sum = 6.

More practice:
If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 //问题的解： 一个值
 //目标函数： nums[i] + nums[i+1] + ... + nums[j - 1] + nums[j] = Max
 //约束条件： 0<= i <= j <= nums.length - 1
 //递推方程：f(x + 1) = f(x) + nums[x+1] > f(x) ? f(x) + nums[x+1] : nums[i];
 //			 递推方程里的f(x) 表示以x为结尾的连续子序列的最大和。
 //			 也就是说，如果加上下一个值，和比下一个值自己要大，那最大值就是加上之后的值.
 //			 如果加上下个值，和反而变小了，那索性不要加，连续子序列就在这里断了，下个值自己成为以它为结尾的连续子序列的最大值。
var maxSubArray = function(nums) {
    //corner case
    if (nums === null || nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    
    //init
    var maxSumAt = [];
    maxSumAt[0] = nums[0];
    for (var i = 1; i < nums.length; i++) {
        maxSumAt[i] = maxSumAt[i-1] + nums[i] > nums[i] ? maxSumAt[i-1] + nums[i] : nums[i];
    }
    
    var maxSum = maxSumAt[0];
    for (var j = 1; j < maxSumAt.length; j++) {
        maxSum = maxSum <= maxSumAt[j] ? maxSumAt[j] : maxSum; 
    }
    
    return maxSum;
};
maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);
