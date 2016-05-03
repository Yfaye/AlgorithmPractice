/*
 Given a set of distinct integers, nums, return all possible subsets.

Note:

    Elements in a subset must be in non-descending order.
    The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,3], a solution is:

[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]

Subscribe to see which companies asked this question

 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var results= [];
    var path = [];
    
    //corner cases
    if (nums === null || nums === undefined) {
        return results;
    }
    
    //dfs function
    var dfsHelper = function(results, path, nums, pos) {
        //preserve current path
        results.push(path.slice(0));
        //base case
        if (pos >= nums.length) {return;}
        //recursive case
        for (var i = pos; i < nums.length; i++) {
            path.push(nums[i]);
            dfsHelper(results, path, nums, i+1);
            path.pop(path.length-1);
        }
    };
    
    nums.sort(function(a,b){return a-b});
    dfsHelper(results, path, nums,0);
    return results;
};
subsets([1,4,2]);
