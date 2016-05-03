/*
  39. Combination Sum  
  Total Accepted: 89434 Total Submissions: 289461 Difficulty: Medium

  Given a set of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

  The same repeated number may be chosen from C unlimited number of times.

  Note:

      All numbers (including target) will be positive integers.
      Elements in a combination (a1, a2, … , ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).
      The solution set must not contain duplicate combinations.

  For example, given candidate set 2,3,6,7 and target 7,
  A solution set is:
  [7]
  [2, 2, 3]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  var results = [];
  var path = [];

  var dfsHelper = function(candidates, target, results, path, pos) {
    //Base case
    if (target === 0) {
      results.push(path.slice(0));
      console.log('one path found');
      return;
    }

    var prev = -1;
    console.log('set prev to -1 and enter into for loop');
    for (var i = pos; i < candidates.length; i++) {
      //pruning
      if (candidates[i] > target) {
        console.log('canditates[ ' + i + '] > ' + target + '! end for loop and end child dfs');
        break;
      }
      if (prev != -1 && prev === candidates[i]) {
        console.log('prev has been set and equal to candiate[' + i +']' + '! skip this case');
        continue;
      }
      path.push(candidates[i]);
      console.log('candidate[' + i + ']' + 'has been pushed to path' + ' Entered next dfs');
      dfsHelper(candidates, target - candidates[i], results, path, i);
      path.pop(path.length - 1);
      prev = candidates[i];
      console.log('child dfs ends, remove ' + path[path.length-1] + ' prev is set to: ' + prev);
    }
  }
  candidates.sort(function(a,b){return a-b;});
  dfsHelper(candidates,target,results,path,0);
  console.table(results);
  return results;    
};
combinationSum([2,3,6,7], 7);

/*
2,2,3,7
*/
/*
2,2,3,7
*/
/*
2,2,3,7
*/
/*
2,2,3,7
*/