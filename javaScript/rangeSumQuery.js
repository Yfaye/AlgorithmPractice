/*303. Range Sum Query - Immutable My Submissions QuestionEditorial Solution
Total Accepted: 32744 Total Submissions: 131409 Difficulty: Easy
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:
You may assume that the array does not change.
There are many calls to sumRange function.*/

/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    var sumArr = [0];
    var sum = 0;
    for (var m = 1; m <= nums.length; m++) {
        sum += nums[m - 1];
        sumArr[m] = sum;
    }
    this.sumArr = sumArr;
    
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    var sumArr = this.sumArr;
    return sumArr[j+1] - sumArr[i];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */