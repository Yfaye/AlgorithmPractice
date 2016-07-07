/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //corner case
    if (nums === null || nums.length === 0) {
        return null;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    var result = nums[0];
    for (var i = 1; i < nums.length; i++) {
        result = result ^ nums[i];
    }
    return result;
};