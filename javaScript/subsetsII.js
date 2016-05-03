/*
  Given a collection of integers that might contain duplicates, nums, return all possible subsets.

  Note:

      Elements in a subset must be in non-descending order.
      The solution set must not contain duplicate subsets.

  For example,
  If nums = [1,2,2], a solution is:

  [
    [2],
    [1],
    [1,2,2],
    [2,2],
    [1,2],
    []
  ]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  
  var results = [];
  var path = [];
  
  //corner cases
  if (nums === null || nums === undefined) {
    return results;
  }
  
  //dfs function
  var dfsHelper = function(results, path, nums, pos) {
    results.push(path.slice(0));
    //base case
    if (pos >= nums.length) {return;}
    
    //recursive case
    for (var i = pos; i < nums.length; i++) {
      //pruning
      if (i != pos && nums[i] === nums[i-1]) { continue; }
      
      path.push(nums[i]);
      dfsHelper(results,path, nums, i+1);
      path.pop(path.length - 1);
    } 
  }
  
  nums.sort(function(a,b){return a-b; });
  dfsHelper(results,path,nums,0);
  console.table(results);
  return results;
};

subsetsWithDup([2,1,5,2,6,8,2]);
/*
,1,1,2,1,2,2,1,2,2,2,1,2,2,2,5,1,2,2,2,5,6,1,2,2,2,5,6,8,1,2,2,2,5,8,1,2,2,2,6,1,2,2,2,6,8,1,2,2,2,8,1,2,2,5,1,2,2,5,6,1,2,2,5,6,8,1,2,2,5,8,1,2,2,6,1,2,2,6,8,1,2,2,8,1,2,5,1,2,5,6,1,2,5,6,8,1,2,5,8,1,2,6,1,2,6,8,1,2,8,1,5,1,5,6,1,5,6,8,1,5,8,1,6,1,6,8,1,8,2,2,2,2,2,2,2,2,2,5,2,2,2,5,6,2,2,2,5,6,8,2,2,2,5,8,2,2,2,6,2,2,2,6,8,2,2,2,8,2,2,5,2,2,5,6,2,2,5,6,8,2,2,5,8,2,2,6,2,2,6,8,2,2,8,2,5,2,5,6,2,5,6,8,2,5,8,2,6,2,6,8,2,8,5,5,6,5,6,8,5,8,6,6,8,8
*/