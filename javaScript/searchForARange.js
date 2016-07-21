/*34. Search for a Range  QuestionEditorial Solution  My Submissions
Total Accepted: 91285
Total Submissions: 307200
Difficulty: Medium
Given a sorted array of integers, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    //corner case
    if (nums === null || nums.length === 0) {
        return [-1,-1];
    }
    var range = [];
    // find first occurance index    
    var start = 0;
    var end = nums.length - 1;

    while(start + 1 < end) {
        var mid = Math.floor(start + (end - start) / 2);
        if (nums[mid] < target) {
            start = mid;
        } else {
            end = mid;
        }
    }
    
    if (nums[start] === target) {
        range.push(start);
    } else if (nums[end] === target) {
        range.push(end);
    } else {
        return [-1,-1];
    }
    
    //find last occurance index
    start = 0;
    end = nums.length - 1;
    
    while(start + 1 < end) {
        mid = Math.floor(start + (end - start) / 2);
        if (nums[mid] > target) {
            end = mid;
        } else {
            start = mid;
        }
    }
    if (nums[end] === target) {
        range.push(end);
    } else {
        range.push(start);
    }
    
    return range;    
};