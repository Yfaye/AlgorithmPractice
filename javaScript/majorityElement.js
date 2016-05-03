/*
169. Majority Element

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Divide and Conquer/ Array / Bit Manipulation

*/
var majorityElement = function(nums) {
    var middle = parseInt(nums.length/2);

    nums.sort(function(a,b){return a-b});
    
    return nums[middle];
};
