/*
47. Permutations II  
Total Accepted: 69330 Total Submissions: 247809 Difficulty: Medium

Given a collection of numbers that might contain duplicates, return all possible unique permutations.

For example,
[1,1,2] have the following unique permutations:
[1,1,2], [1,2,1], and [2,1,1]. 
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var results = [];
    var path = [];
    var visited = [];
    var dfsHelper = function(results, path, nums){
      //base case
      if (path.length === nums.length){
        results.push(path.slice(0));
        console.log('base case entered: added path is ' + path.slice(0));
        return;
      }
      
      //recursive case
      for (var i = 0; i < nums.length; i++){
        console.log('recursive case entered: i = ' + i + ' vistied array = ' + visited + 'current path = ' + path);
        if (visited[i] == 1 || (i != 0 && nums[i] == nums[i - 1]) && visited[i-1] === 0) {
          continue;
         /*?????? 这个判断是影响最终结果的！！！！！
            上面的判断其实并不影响最终结果，目的是为了让dfs能更快
            上面这一连串判断条件，重点在于要能理解!visited.contains(i-1)
            要理解这个，首先要明白i作为数组内序号，i是唯一的
            给出一个排好序的数组，[1,2,2]
            第一层递归            第二层递归            第三层递归
            [1]                    [1,2]                [1,2,2]
            序号:[0]                 [0,1]            [0,1,2]
            这种都是OK的，但当第二层递归i扫到的是第二个"2"，情况就不一样了
            [1]                    [1,2]                [1,2,2]            
            序号:[0]                [0,2]                [0,2,1]
            所以这边判断的时候!visited.contains(0)就变成了true，不会再继续递归下去，跳出循环
            步主要就是为了去除连续重复存在的，很神奇反正 = =||
        */
        }
        visited[i] = 1;
        path.push(nums[i]);
        dfsHelper(results, path, nums);
        console.log('remove the last decesion node on path: ' + path.slice(-1)+' And now i is: ' + i);
        path.pop(path.length - 1);
        visited[i] = 0;
      }     
    }
    
    nums.sort();
    dfsHelper(results, path, nums);
    console.table(results);
    return results;
};

permuteUnique([1,2,2]);

/*
1,1,2,1,2,1,2,1,1
*/
/*
1,2,2,2,1,2,2,2,1
*/
/*
1,2,2,2,1,2,2,2,1
*/
/*
1,2,2,2,1,2,2,2,1
*/
/*
1,2,2,2,1,2,2,2,1
*/
/*

*/
/*
1,2,2,2,1,2,2,2,1
*/