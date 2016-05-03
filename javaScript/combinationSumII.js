/*
40. Combination Sum II  
Total Accepted: 67394 Total Submissions: 244493 Difficulty: Medium

Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

Each number in C may only be used once in the combination.

Note:

    All numbers (including target) will be positive integers.
    Elements in a combination (a1, a2, … , ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).
    The solution set must not contain duplicate combinations.

For example, given candidate set 10,1,2,7,6,1,5 and target 8,
A solution set is:
[1, 7]
[1, 2, 5]
[2, 6]
[1, 1, 6]
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
   var results = [];
   var path = [];
   var dfsHelper = function(candidates, target, results, path, pos) {
   	//base case
   	if (target === 0) {
   		results.push(path.slice(0));
   		return;
   	}

   	//recursive case
   	for (var i = pos; i < candidates.length; i++) {
   		//pruning
   		if (candidates[i] > target) {
   			break;
   		}

         //Avoid repeating
         if (i != pos && candidates[i] === candidates[i - 1]) {
            continue;
         }
   		path.push(candidates[i]);
   		arguments.callee(candidates, target - candidates[i], results, path, i + 1);
   		path.pop(path.length - 1);
   	}
  }

  candidates.sort(function(a,b){return a - b;});
  dfsHelper(candidates, target, results, path, 0);
  console.table(results);
  return results;
};

combinationSum2([10, 1, 2, 7, 6 ,1 ,5],8);


/*
1,1,6,1,2,5,1,7,1,2,5,1,7,2,6
*/
/*
1,1,6,1,2,5,1,7,2,6
*/
/*
1,1,6,1,2,5,1,7,2,6
*/