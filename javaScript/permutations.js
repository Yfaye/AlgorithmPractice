/*
46. Permutations  
Total Accepted: 97521 Total Submissions: 273252 Difficulty: Medium

Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], and [3,2,1]. 
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var results = [];
  var path = [];
  
  //corner case
  if (nums === null || nums === undefined) {
    return results;
  }
  
  //dfs function
  var dfs = function(results, path, nums){
    //preserve current path
    if (path.length === nums.length) {
       results.push(path.slice(0));
       return;     
    }
    
    for (var i = 0; i < nums.length; i++) {
      if (path.indexOf(nums[i]) !== -1) {
        continue;
      }
      path.push(nums[i]);
      console.log(path);
      dfs(results,path,nums);
      path.pop(path.length - 1);
    }
  }
  
  dfs(results, path, nums);
  console.table(results);
  return results;
};

permute([1,2,3]);
/*
1,2,3,1,3,2,2,1,3,2,3,1,3,1,2,3,2,1
*/